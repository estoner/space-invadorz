import Bullet from 'bullet'
import throttle from 'lodash/function/throttle'

let weapon = {
  shoot(direction = 1) {
    for (let i = 1; i <= 3; i++) {
      let j = i - 2
      let bullet = new Bullet(
        this.game,
        { x: (this.center.x + j * 2), y: (this.center.y - 20) },
        { x: j, y: -5 * direction },
        { x: 2, y: 2 }
      )
      this.game.addBody(bullet)
    }
    this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode)
  }
}
weapon.shoot = throttle(weapon.shoot, 400, {trailing: false} )
export default weapon
