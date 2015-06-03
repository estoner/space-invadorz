import withDrawRect from 'withDrawRect'
import withCollisionDestroys from 'withCollisionDestroys'
import extend from 'lodash/object/extend'

export default class RemoteControlBullet {
  constructor(game, center, velocity, size = { x: 3, y: 3}, player) {
    this.game = game
    this.center = center
    this.size = size
    this.velocity = velocity
    this.color = "yellow"
    this.player = player
    extend(this, withDrawRect)
    extend(this, withCollisionDestroys)
  }

  update() {
    this.center.x = this.player.center.x
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

