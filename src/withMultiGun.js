import Bullet from 'bullet'
var weapon = {
  shoot: function(direction = 1) {
    for (let i = 1; i < 4; i++) {
      let j = (i * 8) - 16
      let bullet = new Bullet(
        this.game,
        { x: (this.center.x + j), y: (this.center.y - 20) },
        { x: 0, y: -5 * direction },
        2
      )
      this.game.addBody(bullet)
    }
    // this is a side effect
    // this is also a side effect
    this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode)
  }
}
export default weapon
