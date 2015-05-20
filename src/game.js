import Bullet from "Bullet";
import Keyboarder from "Keyboarder";
import Invader from "Invader";
import Player from "Player";
import Star from "Star";

export default function() {
  var screen = document.getElementById("screen").getContext('2d');
  this.keyboarder = new Keyboarder();
  this.size = { x: screen.canvas.width, y: screen.canvas.height };
  this.center = { x: screen.canvas.width / 2, y: screen.canvas.height / 2 };
  this.playerHeight = 75;
  this.victory;
  this.bodies = createInvaders(this).concat(new Player(this));

  this.numStars = 50;
  this.stars = createStars(this, this.numStars);

  // frickin' Safari
  if ('webkitAudioContext' in window) {
    this.audioContext = new webkitAudioContext();
  } else {
    this.audioContext = new AudioContext();
  }

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

    if (typeof(this.victory) == "boolean") {
      if (this.keyboarder.isDown(this.keyboarder.KEYS.R)) {
        document.location.reload();
      }
    }

  },

  drawAll: function(array, screen) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].draw !== undefined) {
        array[i].draw(screen);
      }
    }
  },

  draw: function(screen) {
    screen.clearRect(0, 0, this.size.x, this.size.y);
    var landscapeArea = this.size.y - this.playerHeight;
    var gradient = screen.createLinearGradient(this.center.x, this.size.y, this.center.x, landscapeArea);
    gradient.addColorStop(0,"#0000AA");
    gradient.addColorStop(1,"black");
    screen.fillStyle = gradient;
    screen.fillRect(0,landscapeArea,this.size.x,this.size.y);

    this.drawAll(this.stars, screen);
    this.drawAll(this.bodies, screen);

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

