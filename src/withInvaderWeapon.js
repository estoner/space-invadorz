import Bullet from 'bullet'
let weapon = {
  shoot(direction = 1) {
    let bullet = new Bullet(
      this.game,
      { x: this.center.x, y: this.center.y + this.size.y / 2 + this.patrolY},
      { x: (Math.random() / 2) - 0.2, y: 2 * direction }
    )
    // this is a side effect
    this.game.addBody(bullet)
    // this is also a side effect
    this.game.shootSound(this.game.audioContext, 0.1, this.game.gainNode)
  }
}
export default weapon
