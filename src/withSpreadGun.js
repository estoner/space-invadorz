import Bullet from 'bullet'
var weapon = {
  shoot: function(direction = 1) {
    for (let i = 1; i <= 3; i++) {
      let j = i - 2
      let bullet = new Bullet(
        this.game,
        { x: (this.center.x + j * 2), y: (this.center.y - 20) },
        { x: j, y: -5 * direction },
        2
      )
      this.game.addBody(bullet)
    }
    this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode)
  }
}
export default weapon
