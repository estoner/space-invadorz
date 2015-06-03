import Bullet from 'bullet'
let weapon = {
  shoot(direction = 1) {
    let bullet = new Bullet(
      this.game,
      { x: this.center.x, y: this.center.y - 40 },
      { x: 0, y: -1 * direction },
      { x: 36, y: 2 }
    )
    // this is a side effect
    this.game.addBody(bullet)
    // this is also a side effect
    this.game.shootSound(this.game.audioContext, 0.3, this.game.gainNode)
  }
}
export default weapon
