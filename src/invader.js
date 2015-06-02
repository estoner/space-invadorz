import withDrawImage from 'withDrawImage'
import withCollisionDestroys from 'withCollisionDestroys'
import withShoots from 'withShoots'
import extend from 'lodash/object/extend'

export default class Invader {
  constructor(game, center) {
    this.game = game
    this.center = center
    this.size = { x: 19, y: 33 }
    this.patrolX = 0
    this.patrolY = 20
    this.speedX = 0.3
    this.image = new Image(this.size.x, this.size.y)
    this.image.src = "images/alien4x2.png"
    extend(this, withDrawImage)
    extend(this, withCollisionDestroys)
    extend(this, withShoots)
  }

  update() {
    if (this.patrolX < 0 || this.patrolX > 30) {
      this.speedX = -this.speedX
      if (this.center.y < this.game.size.y - this.game.playerHeight){
        this.center.y += this.patrolY
      } else {
        this.game.victory = false
      }

    }

    if (Math.random() > 0.995 &&
        !this.game.invadersBelow(this)) {
      this.shoot(
        { x: this.center.x, y: this.center.y + this.size.y / 2 + this.patrolY},
        { x: (Math.random() / 2) - 0.2, y: 2 },
        0.1
      )
    }

    this.center.x += this.speedX
    this.patrolX += this.speedX
  }

}


