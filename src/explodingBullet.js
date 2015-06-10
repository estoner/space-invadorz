import Bullet from 'bullet'
import withDrawRect from 'withDrawRect'
import withCollisionDestroys from 'withCollisionDestroys'
import extend from 'lodash/object/extend'

export default class ExplodingBullet {
  constructor(game, center, velocity, size = { x: 8, y: 8}, player) {
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
    this.center.y += this.velocity.y

    let screenRect = {
      center: { x: this.game.size.x / 2, y: this.game.size.y / 2 },
      size: this.game.size
    }

    if (!this.game.isColliding(this, screenRect)) {
      this.game.removeBody(this)
    }
  }

  explode() {
    let directions = [
      {x: 0, y: -2},
      {x: 1, y: -1},
      {x: 2, y: 0},
      {x: 1, y: 1},
      {x: -1, y: 1},
      {x: -2, y: 0},
      {x: -1, y: -1}
    ]
    for (let direction of directions) {
      let bullet = new Bullet(
        this.game,
        { x: (this.center.x + direction.x * 4), y: (this.center.y + direction.y * 4) },
        { x: direction.x, y: direction.y },
        { x: 1, y: 1 }
      )
      this.game.addBody(bullet)
    }
    this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode)
  }
}

