import Bullet from 'bullet';
import Keyboarder from 'keyboarder';
import Invader from 'invader';
import Player from 'player';
import Star from 'star';

export default class Game {
  constructor() {
    var screen = document.getElementById("screen").getContext('2d');
    this.keyboarder = new Keyboarder();
    this.size = { x: screen.canvas.width, y: screen.canvas.height };
    this.center = { x: screen.canvas.width / 2, y: screen.canvas.height / 2 };
    this.playerHeight = 75;
    this.victory;
    this.bodies = this.createInvaders(this).concat(new Player(this));

    this.numStars = 50;
    this.stars = Star.createStars(this, this.numStars);

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

    window.addEventListener('load', function() {
      new Game();
    });
  }

  update() {
    this.reportCollisions(this.bodies);

    for (var body of this.bodies) {
      if (body.update !== undefined) {
        body.update();
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

  }

  drawAll(array, screen) {
    for (var item of array) {
      if (item.draw !== undefined) {
        item.draw(screen);
      }
    }
  }

  draw(screen) {
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
  }

  shootSound(context, duration) {
    var osc = context.createOscillator();
    osc.connect(context.destination);
    osc.frequency.setValueAtTime(4000, context.currentTime);
    osc.frequency.linearRampToValueAtTime(
      440,
      context.currentTime + duration
    );
    osc.start(context.currentTime);
    osc.stop(context.currentTime + duration);
  }

  invadersBelow(invader) {
    return this.bodies.filter(function(b) {
      return b instanceof Invader &&
        Math.abs(invader.center.x - b.center.x) < b.size.x &&
        b.center.y > invader.center.y;
    }).length > 0;
  }

  addBody(body) {
    this.bodies.push(body);
  }

  removeBody(body) {
    var bodyIndex = this.bodies.indexOf(body);
    if (bodyIndex !== -1) {
      this.bodies.splice(bodyIndex, 1);
    }
  }

  win() {
    console.log("win");
  }

  lose() {
    console.log("lose");
  }


  isColliding(b1, b2) {
    return !(
      b1 === b2 ||
        b1.center.x + b1.size.x / 2 <= b2.center.x - b2.size.x / 2 ||
        b1.center.y + b1.size.y / 2 <= b2.center.y - b2.size.y / 2 ||
        b1.center.x - b1.size.x / 2 >= b2.center.x + b2.size.x / 2 ||
        b1.center.y - b1.size.y / 2 >= b2.center.y + b2.size.y / 2
    );
  }

  reportCollisions(bodies) {
    var bodyPairs = [];
    // NEEDS SEMICOLONS FOR NOW
    for (var i = 0; i < bodies.length; i++) {
      for (var j = i + 1; j < bodies.length; j++) {
        if (this.isColliding(bodies[i], bodies[j])) {
          bodyPairs.push([bodies[i], bodies[j]]);
        }
      }
    }

    for (var pair of bodyPairs) {
      if (pair[0].collision !== undefined) {
        pair[0].collision(pair[1]);
      }

      if (pair[1].collision !== undefined) {
        pair[1].collision(pair[0]);
      }
    }
  }

  createInvaders(game) {
    var numInvaders = Math.round((game.size.x - 70)/10);
    var numCols = Math.round(numInvaders/3);
    var invaders = [];
    // NEEDS SEMICOLONS FOR NOW
    for (var i = 0; i < numInvaders; i++) {
      var x = 35 + (i % numCols) * 30;
      var y = 35 + (i % 3) * 30;
      invaders.push(new Invader(game, { x: x, y: y}));
    }
    return invaders;
  }
};


window.addEventListener('load', function() {
  new Game();
});
