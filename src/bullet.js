
export var Bullet = function(game, center, velocity) {
  this.game = game;
  this.center = center;
  this.size = { x: 3, y: 3 };
  this.velocity = velocity;
};

Bullet.prototype = {
  update: function() {
    this.center.x += this.velocity.x;
    this.center.y += this.velocity.y;

    var screenRect = {
      center: { x: this.game.size.x / 2, y: this.game.size.y / 2 },
      size: this.game.size
    };

    if (!isColliding(this, screenRect)) {
      this.game.removeBody(this);
    }
  },

  draw: function(screen) {
    drawRect(screen, this, "yellow");
  },

  collision: function() {
    this.game.removeBody(this);
  }
};

