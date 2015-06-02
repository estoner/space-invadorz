import withDrawRect from 'withDrawRect'
import withCollisionDestroys from 'withCollisionDestroys'
import extend from 'lodash/object/extend'

export default class Bullet {
  constructor(game, center, velocity, size = 3) {
    this.game = game
    this.center = center
    this.size = { x: size, y: size }
    this.velocity = velocity
    this.color = "yellow"
    extend(this, withDrawRect)
    extend(this, withCollisionDestroys)
  }

  update() {
    this.center.x += this.velocity.x
    this.center.y += this.velocity.y

    let screenRect = {
      center: { x: this.game.size.x / 2, y: this.game.size.y / 2 },
      size: this.game.size
    }

    if (!this.game.isColliding(this, screenRect)) {
      this.game.removeBody(this)
    }
  }
}

