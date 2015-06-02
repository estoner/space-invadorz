var withCollisionDestroys = {

  collision: function() {
    this.game.removeBody(this)
    if (this.constructor.name === "Invader") {
      this.game.incrementScore()
    }
  }

}
export default withCollisionDestroys

