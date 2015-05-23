import Draw from 'draw'
import Bullet from 'bullet'

export default class Invader {
  constructor(game, center) {
    this.game = game
    this.center = center
    this.size = { x: 19, y: 33 }
    this.patrolX = 0
    this.speedX = 0.3
    this.image = new Image(this.size.x, this.size.y)
    this.image.src = "images/alien4.png"
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
      this.game.shootSound(this.game.audioContext, 0.1, this.game.gainNode)
    }

    this.center.x += this.speedX
    this.patrolX += this.speedX
  }

  draw(screen) {
    //Draw.drawRect(screen, this, "green")
    Draw.drawImage(screen, this.image, this.center, this.size)
  }

  collision() {
    this.game.removeBody(this)
    this.game.incrementScore()
  }

}


