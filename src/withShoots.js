import Bullet from 'bullet'
var withShoots = {
  shoot: function(position, velocity, soundPitch) {
    let bullet = new Bullet(this.game, position, velocity)
    // this is a side effect
    this.game.addBody(bullet)
    this.game.shootSound(this.game.audioContext, soundPitch, this.game.gainNode)
  }
}
export default withShoots
