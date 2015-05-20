export var Invader = function(game, center) {
  this.game = game;
  this.center = center;
  this.size = { x: 15, y: 15 };
  this.patrolX = 0;
  this.speedX = 0.3;
};

Invader.prototype = {
  update: function() {
    if (this.patrolX < 0 || this.patrolX > 30) {
      this.speedX = -this.speedX;
      if (this.center.y < this.game.size.y - this.game.playerHeight){
        this.center.y += 8;
      } else {
        this.game.victory = false;
      }

    }

    if (Math.random() > 0.995 &&
        !this.game.invadersBelow(this)) {
      var bullet = new Bullet(this.game,
                              { x: this.center.x, y: this.center.y + this.size.y / 2 },
                              { x: Math.random() - 0.5, y: 2 });
      this.game.addBody(bullet);
      this.shootSound(this.game.audioContext, 0.1);
    }

    this.center.x += this.speedX;
    this.patrolX += this.speedX;
  },

  draw: function(screen) {
    drawRect(screen, this, "green");
  },

  shootSound: function(context, duration) {
    var osc = context.createOscillator();
    osc.connect(context.destination);
    osc.frequency.setValueAtTime(2000, context.currentTime);
    osc.frequency.linearRampToValueAtTime(
      240,
      context.currentTime + duration
    );
    osc.start(context.currentTime);
    osc.stop(context.currentTime + duration);
    // TODO pan audio based on player position
    // var amp = context.createGain();
    // amp.connect(panner)
    // panner.setPosition(Math.sin(pannerCounter++/2)/2, 0,0);
    // panner.connect(ac.destination);
  },

  collision: function() {
    this.game.removeBody(this);
  }
};

var createInvaders = function(game) {
  var numInvaders = Math.round((game.size.x - 70)/10);
  var numCols = Math.round(numInvaders/3);
  var invaders = [];
  for (var i = 0; i < numInvaders; i++) {
    var x = 35 + (i % numCols) * 30;
    var y = 35 + (i % 3) * 30;
    invaders.push(new Invader(game, { x: x, y: y}));
  }
  return invaders;
};

