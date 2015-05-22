import Keyboarder from 'keyboarder'
import Bullet from 'bullet'

export default class Player {
  constructor(game) {
    this.game = game
    this.size = { x: 21, y: 26 }
    this.center = { x: this.game.size.x / 2, y: this.game.size.y - this.game.playerHeight }
    this.keyboarder = new Keyboarder()
    this.lastShotFired = 0
    this.image = new Image(this.size.x, this.size.y)
    this.image.src = "images/smallfreighterspr.png"
  }

  update() {
    if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
      if (this.center.x > 2){
        this.center.x -= 2
      }
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
      if (this.center.x < this.game.size.x){
        this.center.x += 2
      }
    }

    if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
      if (Date.now() > this.lastShotFired + this.game.shootRate) {
        let bullet = new Bullet(this.game,
                                { x: this.center.x, y: this.center.y - 8 },
                                { x: 0, y: -7 })
        this.game.addBody(bullet)

        this.shootSound(this.game.audioContext, 0.2)
        this.lastShotFired = Date.now()
      }
    }
  }

  shootSound(context, duration) {
    let osc = context.createOscillator()
    osc.connect(context.destination)
    osc.frequency.setValueAtTime(900, context.currentTime)
    osc.frequency.linearRampToValueAtTime(
      440,
      context.currentTime + duration
    )
    osc.start(context.currentTime)
    osc.stop(context.currentTime + duration)
  }

  draw(screen) {
    //drawRect(screen, this, "rebeccapurple")
    screen.drawImage(this.image,
                     this.center.x - (this.size.x / 2),
                     this.center.y,
                     this.size.x,
                     this.size.y)
  }

  collision() {
    this.game.removeBody(this)
  }
}

