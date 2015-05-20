import Draw from 'draw'
import Bullet from 'bullet'

export default class Invader {
  constructor(game, center) {
    this.game = game
    this.center = center
    this.size = { x: 15, y: 15 }
    this.patrolX = 0
    this.speedX = 0.3
  }

  update() {
    if (this.patrolX < 0 || this.patrolX > 30) {
      this.speedX = -this.speedX
      if (this.center.y < this.game.size.y - this.game.playerHeight){
        this.center.y += 8
      } else {
        this.game.victory = false
      }

    }

    if (Math.random() > 0.995 &&
        !this.game.invadersBelow(this)) {
      let bullet = new Bullet(this.game,
                              { x: this.center.x, y: this.center.y + this.size.y / 2 },
                              { x: Math.random() - 0.5, y: 2 })
      this.game.addBody(bullet)
      this.shootSound(this.game.audioContext, 0.1)
    }

    this.center.x += this.speedX
    this.patrolX += this.speedX
  }

  draw(screen) {
    Draw.drawRect(screen, this, "green")
  }

  shootSound(context, duration) {
    let osc = context.createOscillator()
    osc.connect(context.destination)
    osc.frequency.setValueAtTime(2000, context.currentTime)
    osc.frequency.linearRampToValueAtTime(
      240,
      context.currentTime + duration
    )
    osc.start(context.currentTime)
    osc.stop(context.currentTime + duration)
    // TODO pan audio based on player position
    // let amp = context.createGain()
    // amp.connect(panner)
    // panner.setPosition(Math.sin(pannerCounter++/2)/2, 0,0)
    // panner.connect(ac.destination)
  }

  collision() {
    this.game.removeBody(this)
  }

}


