import Draw from 'draw'
export default class Star {
  constructor(game, center) {
    this.game = game
    this.center = center
    this.size = { x: 2, y: 2 }
  }

  draw(screen) {
    Draw.drawRect(screen, this, "#dddddd")
  }

  static createStars(game, numStars) {
    let stars = []
    // NEEDS SEMICOLONS FOR NOW
    for (let i = 0; i < numStars; i++) {
      let x = Math.random() * game.size.x
      let y = Math.random() * (game.size.y - game.playerHeight)
      stars.push(new Star(game, { x: x, y: y}))
    }
    return stars
  }

}

