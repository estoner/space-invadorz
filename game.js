;(function() {
  var Game = function() {
    // TODO state persists through wins
    // TODO score
    // TODO new weapons
    var screen = document.getElementById("screen").getContext('2d');
    this.keyboarder = new Keyboarder();
    this.size = { x: screen.canvas.width, y: screen.canvas.height };
    this.center = { x: screen.canvas.width / 2, y: screen.canvas.height / 2 };
    this.victory;
    this.bodies = createInvaders(this).concat(new Player(this));

    this.audioContext = new AudioContext();

    this.shootRate = 300;

    var self = this;
    var tick = function() {
      self.update();
      self.draw(screen);
      requestAnimationFrame(tick);
    };

    tick();
  };

  Game.prototype = {
    update: function() {
      reportCollisions(this.bodies);

      for (var i = 0; i < this.bodies.length; i++) {
        if (this.bodies[i].update !== undefined) {
          this.bodies[i].update();
        }
      }

      var invaders = this.bodies.filter(function(body){
        return body instanceof Invader;
      })
      var players = this.bodies.filter(function(body){
        return body instanceof Player;
      })

      if (invaders.length == 0) {
        this.victory = true;
      } else if (players.length == 0) {
        this.victory = false;
      }

      // TODO pause key
      if (typeof(this.victory) == "boolean") {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.R)) {
          document.location.reload();
        }
      }

    },

    draw: function(screen) {
      screen.clearRect(0, 0, this.size.x, this.size.y);
      var landscapeArea = this.size.y - 125
      var gradient = screen.createLinearGradient(this.center.x, this.size.y, this.center.x, landscapeArea);
      gradient.addColorStop(0,"blue");
      gradient.addColorStop(1,"black");
      screen.fillStyle = gradient;
      screen.fillRect(0,landscapeArea,this.size.x,this.size.y);
      for (var i = 0; i < this.bodies.length; i++) {
        if (this.bodies[i].draw !== undefined) {
          this.bodies[i].draw(screen);
        }
      }

      if (this.victory != undefined) {
        var center = this.size.x / 2;
        screen.font = "48px Montserrat";
        screen.shadowOffsetX = 1;
        screen.shadowOffsetY = 1;
        //screen.shadowBlur = 10;
        screen.shadowColor = "grey";
        if (this.victory) {
          screen.fillStyle = "green";
          screen.textAlign = "center";
          screen.fillText("YOU WIN", center, 50);
          screen.font = "16px Montserrat";
          screen.fillText("Press R to restart", center, 100);
        } else if (!this.victory) {
          screen.fillStyle = "red";
          screen.textAlign = "center";
          screen.fillText("YOU LOSE", center, 50);
          screen.font = "16px Montserrat";
          screen.fillText("Press R to restart", center, 100);
        }
      }
      screen.shadowOffsetX = 0;
      screen.shadowOffsetY = 0;
      screen.shadowBlur = 0;
    },

    shootSound: function(context, duration) {
      var osc = context.createOscillator();
      osc.connect(context.destination);
      osc.frequency.setValueAtTime(4000, context.currentTime);
      osc.frequency.linearRampToValueAtTime(
        440, 
        context.currentTime + duration
      );
      osc.start(context.currentTime);
      osc.stop(context.currentTime + duration);
    },

    invadersBelow: function(invader) {
      return this.bodies.filter(function(b) {
        return b instanceof Invader &&
          Math.abs(invader.center.x - b.center.x) < b.size.x &&
          b.center.y > invader.center.y;
      }).length > 0;
    },

    addBody: function(body) {
      this.bodies.push(body);
    },

    removeBody: function(body) {
      var bodyIndex = this.bodies.indexOf(body);
      if (bodyIndex !== -1) {
        this.bodies.splice(bodyIndex, 1);
      }
    },

    win: function() {
      console.log("win");
    },

    lose: function() {
      console.log("lose");
    }
  };

  var Invader = function(game, center) {
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
        if (this.center.y < this.game.size.y - 35){
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

  var Player = function(game) {
    this.game = game;
    this.size = { x: 15, y: 15 };
    this.center = { x: this.game.size.x / 2, y: this.game.size.y - 35 };
    this.keyboarder = new Keyboarder();
    this.lastShotFired = 0;
  };

  Player.prototype = {
    update: function() {
      if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
        if (this.center.x > 2){
          this.center.x -= 2;
        }
      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
        if (this.center.x < this.game.size.x){
          this.center.x += 2;
        }
      }

      if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
        if (Date.now() > this.lastShotFired + this.game.shootRate) {
          var bullet = new Bullet(this.game,
                                  { x: this.center.x, y: this.center.y - this.size.y - 10 },
                                  { x: 0, y: -7 });
          this.game.addBody(bullet);

          this.shootSound(this.game.audioContext, 0.2);
          this.lastShotFired = Date.now();
        }
      }
    },

    shootSound: function(context, duration) {
      var osc = context.createOscillator();
      osc.connect(context.destination);
      osc.frequency.setValueAtTime(900, context.currentTime);
      osc.frequency.linearRampToValueAtTime(
        440, 
        context.currentTime + duration
      );
      osc.start(context.currentTime);
      osc.stop(context.currentTime + duration);
    },

    draw: function(screen) {
      drawRect(screen, this, "rebeccapurple");
      // TODO change to a shape
      // TODO allow choosing male or female avatar
      // TODO change to an image
    },

    collision: function() {
      this.game.removeBody(this);
    }
  };

  var Bullet = function(game, center, velocity) {
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

  var Keyboarder = function() {
    var keyState = {};
    window.addEventListener('keydown', function(e) {
      keyState[e.keyCode] = true;
    });

    window.addEventListener('keyup', function(e) {
      keyState[e.keyCode] = false;
    });

    this.isDown = function(keyCode) {
      return keyState[keyCode] === true;
    };

    this.KEYS = { LEFT: 37, RIGHT: 39, SPACE: 32, R: 82 };
  };

  var drawRect = function(screen, body, color) {
    screen.fillStyle = color;
    screen.fillRect(body.center.x - body.size.x / 2,
                    body.center.y - body.size.y / 2,
                    body.size.x,
                    body.size.y);
  };

  var isColliding = function(b1, b2) {
    return !(
      b1 === b2 ||
        b1.center.x + b1.size.x / 2 <= b2.center.x - b2.size.x / 2 ||
        b1.center.y + b1.size.y / 2 <= b2.center.y - b2.size.y / 2 ||
        b1.center.x - b1.size.x / 2 >= b2.center.x + b2.size.x / 2 ||
        b1.center.y - b1.size.y / 2 >= b2.center.y + b2.size.y / 2
    );
  };

  var reportCollisions = function(bodies) {
    var bodyPairs = [];
    for (var i = 0; i < bodies.length; i++) {
      for (var j = i + 1; j < bodies.length; j++) {
        if (isColliding(bodies[i], bodies[j])) {
          bodyPairs.push([bodies[i], bodies[j]]);
        }
      }
    }

    for (var i = 0; i < bodyPairs.length; i++) {
      if (bodyPairs[i][0].collision !== undefined) {
        bodyPairs[i][0].collision(bodyPairs[i][1]);
      }

      if (bodyPairs[i][1].collision !== undefined) {
        bodyPairs[i][1].collision(bodyPairs[i][0]);
      }
    }
  };

  window.addEventListener('load', function() {
    new Game();
  });
})();
