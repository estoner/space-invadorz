import Draw from 'draw';
export default class Star {
  constructor(game, center) {
    this.game = game;
    this.center = center;
    this.size = { x: 2, y: 2 };
  }

  draw(screen) {
    Draw.drawRect(screen, this, "#dddddd");
  }

  static createStars(game, numStars) {
    var stars = [];
    for (var i = 0; i < numStars; i++) {
      var x = Math.random() * game.size.x;
      var y = Math.random() * (game.size.y - game.playerHeight);
      stars.push(new Star(game, { x: x, y: y}));
    }
    return stars;
  }

};

