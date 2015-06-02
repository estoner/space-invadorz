import withDrawRect from 'withDrawRect'
import extend from 'lodash/object/extend'

export default class Star {
  constructor(game, center) {
    this.game = game
    this.center = center
    this.size = { x: 2, y: 2 }
    this.color = "#dddddd"
    extend(this, withDrawRect)
  }

  static createStars(game, numStars) {
    let stars = []
    for (let i = 0; i < numStars; i++) {
      let x = Math.random() * game.size.x
      let y = Math.random() * (game.size.y - game.playerHeight)
      stars.push(new Star(game, { x: x, y: y}))
    }
    return stars
  }

}

