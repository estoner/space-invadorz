import Bullet from 'bullet'
import throttle from 'lodash/function/throttle'

let weapon = {
  shoot(direction = 1) {
    let bullet = new Bullet(
      this.game,
      { x: this.center.x, y: this.center.y - 35 },
      { x: 0, y: -20 * direction },
      { x: 1, y: 75 }
    )
    // this is a side effect
    this.game.addBody(bullet)
    // this is also a side effect
    this.game.shootSound(this.game.audioContext, 0.3, this.game.gainNode)
  }
}
weapon.shoot = throttle(weapon.shoot, 150, {trailing: false} )
export default weapon
