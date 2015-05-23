import Keyboarder from 'keyboarder'
import Bullet from 'bullet'
import debounce from 'debounce'

export default class Player {
  constructor(game) {
    this.game = game
    this.size = { x: 21, y: 26 }
    this.center = { x: this.game.size.x / 2, y: this.game.size.y - this.game.playerHeight }
    this.keyboarder = new Keyboarder()
    this.lastShotFired = 0
    this.image = new Image(this.size.x, this.size.y)
    this.image.src = "images/smallfreighterspr.png"
    this.speed = 3
  }

  update() {
    if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
      if (this.center.x > this.speed){
        this.center.x -= this.speed
      }
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
      if (this.center.x < this.game.size.x){
        this.center.x += this.speed
      }
    }

    if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
      if (Date.now() > this.lastShotFired + this.game.shootRate) {
        let bullet = new Bullet(this.game,
                                { x: this.center.x, y: this.center.y - 8 },
                                { x: 0, y: -7 })
        this.game.addBody(bullet)

        this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode)
        this.lastShotFired = Date.now()
      }
    }

    if (this.keyboarder.isDown(this.keyboarder.KEYS.M)) {
      this.game.mute(this.game.gainNode.gain)
    }
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

