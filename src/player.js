import Keyboarder from 'keyboarder'
import Touch from 'touch'
import withCollisionDestroys from 'withCollisionDestroys'
import withDrawImage from 'withDrawImage'
import extend from 'lodash/object/extend'

export default class Player {
  constructor(game) {
    this.game = game
    this.size = { x: 14, y: 34 }
    this.center = { x: this.game.size.x / 2, y: this.game.size.y - this.game.playerHeight }
    this.keyboarder = new Keyboarder()
    this.touch = new Touch()
    this.lastShotFired = 0
    this.image = new Image(this.size.x, this.size.y)
    this.image.src = "images/smallfighter0005x2.png"
    extend(this, withDrawImage)
    extend(this, withCollisionDestroys)
    extend(this, this.game.ordnanceAdvancer.next().value)
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

    if (this.touch.state()) {
      let ts = this.touch.state().touches[0]
      this.center.x = ts.pageX
      this.shoot()
    }

  }

}

