import RemoteControlBullet from 'remoteControlBullet'
let weapon = {
  shoot(direction = 1) {
    let bullet = new RemoteControlBullet(
      this.game,
      { x: this.center.x, y: this.center.y - 20 },
      { x: 0, y: -7 * direction },
      3,
      this
    )
    // this is a side effect
    this.game.addBody(bullet)
    // this is also a side effect
    this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode)
  }
}
export default weapon
