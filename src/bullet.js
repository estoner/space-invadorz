import Draw from 'draw';

export default class Bullet {
  constructor(game, center, velocity) {
    this.game = game;
    this.center = center;
    this.size = { x: 3, y: 3 };
    this.velocity = velocity;
  }

  update() {
    this.center.x += this.velocity.x;
    this.center.y += this.velocity.y;

    var screenRect = {
      center: { x: this.game.size.x / 2, y: this.game.size.y / 2 },
      size: this.game.size
    };

    if (!this.game.isColliding(this, screenRect)) {
      this.game.removeBody(this);
    }
  }

  draw(screen) {
    Draw.drawRect(screen, this, "yellow");
  }

  collision() {
    this.game.removeBody(this);
  }
};

