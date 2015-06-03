var withCollisionDestroys = {

  collision: function() {
    if (this.constructor.name === "ExplodingBullet") {
      this.explode()
    }
    this.game.removeBody(this)
    if (this.constructor.name === "Invader") {
      this.game.incrementScore()
    }
  }

}
export default withCollisionDestroys

