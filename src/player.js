import Keyboarder from 'keyboarder'
import Bullet from 'bullet'
import withDrawImage from 'withDrawImage'
import throttle from 'lodash/function/throttle'
import extend from 'lodash/object/extend'

export default class Player {
  constructor(game) {
    this.game = game
    this.size = { x: 14, y: 34 }
    this.center = { x: this.game.size.x / 2, y: this.game.size.y - this.game.playerHeight }
    this.keyboarder = new Keyboarder()
    this.lastShotFired = 0
    this.image = new Image(this.size.x, this.size.y)
    this.image.src = "images/smallfighter0005x2.png"
    this.shoot = throttle(this.shootCore, 200, {trailing: false} )
    extend(this, withDrawImage)
  }

  update() {
    const speed = 3
    if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
      if (this.center.x > speed){
        this.center.x -= speed
      }
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
      if (this.center.x < this.game.size.x){
        this.center.x += speed
      }
    }

    if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
      this.shoot()
    }

  }

  shootCore(){
    let bullet = new Bullet(this.game,
                            { x: this.center.x, y: this.center.y - 20 },
                            { x: 0, y: -7 })
    this.game.addBody(bullet)
    this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode)
  }

  collision() {
    this.game.removeBody(this)
  }
}

