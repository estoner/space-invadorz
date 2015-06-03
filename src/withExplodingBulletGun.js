import ExplodingBullet from 'explodingBullet'
import throttle from 'lodash/function/throttle'

let weapon = {
  shoot(direction = 1) {
    let bullet = new ExplodingBullet(
      this.game,
      { x: this.center.x, y: this.center.y - 40 },
      { x: 0, y: -3 * direction },
      { x: 8, y: 8 },
      this
    )
    // this is a side effect
    this.game.addBody(bullet)
    // this is also a side effect
    this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode)
  }
}
weapon.shoot = throttle(weapon.shoot, 500, {trailing: false} )
export default weapon
