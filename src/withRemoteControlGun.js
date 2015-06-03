import RemoteControlBullet from 'remoteControlBullet'
import throttle from 'lodash/function/throttle'

let weapon = {
  shoot(direction = 1) {
    let bullet = new RemoteControlBullet(
      this.game,
      { x: this.center.x, y: this.center.y - 20 },
      { x: 0, y: -7 * direction },
      { x: 2, y: 2 },
      this
    )
    // this is a side effect
    this.game.addBody(bullet)
    // this is also a side effect
    this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode)
  }
}
weapon.shoot = throttle(weapon.shoot, 200, {trailing: false} )
export default weapon
