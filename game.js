define('game', ['exports', 'module', 'invader', 'player', 'star', 'keyboarder', 'withBasicGun', 'withRemoteControlGun', 'withFatGun', 'withMultiGun', 'withSpreadGun', 'withShieldGun', 'withLaserGun', 'withExplodingBulletGun', 'lodash/function/debounce'], function (exports, module, _invader, _player, _star, _keyboarder, _withBasicGun, _withRemoteControlGun, _withFatGun, _withMultiGun, _withSpreadGun, _withShieldGun, _withLaserGun, _withExplodingBulletGun, _lodashFunctionDebounce) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _Invader = _interopRequire(_invader);

  var _Player = _interopRequire(_player);

  var _Star = _interopRequire(_star);

  var _Keyboarder = _interopRequire(_keyboarder);

  var _withBasicGun2 = _interopRequire(_withBasicGun);

  var _withRemoteControlGun2 = _interopRequire(_withRemoteControlGun);

  var _withFatGun2 = _interopRequire(_withFatGun);

  var _withMultiGun2 = _interopRequire(_withMultiGun);

  var _withSpreadGun2 = _interopRequire(_withSpreadGun);

  var _withShieldGun2 = _interopRequire(_withShieldGun);

  var _withLaserGun2 = _interopRequire(_withLaserGun);

  var _withExplodingBulletGun2 = _interopRequire(_withExplodingBulletGun);

  var _debounce = _interopRequire(_lodashFunctionDebounce);

  var Game = (function () {
    function Game() {
      var _this = this;

      _classCallCheck(this, Game);

      var width = 550;
      var height = 550;
      var canvas = document.getElementById('screen');
      var DPR = window.devicePixelRatio;
      var trueWidth = width * DPR;
      var trueHeight = height * DPR;
      canvas.width = trueWidth;
      canvas.height = trueHeight;
      canvas.style.width = width;
      canvas.style.height = height;
      var screen = canvas.getContext('2d');
      screen.scale(2, 2);

      this.keyboarder = new _Keyboarder();
      this.size = { x: width, y: height };
      this.center = { x: width / 2, y: height / 2 };
      this.playerHeight = 75;
      this.ordnanceAdvancer = this.advanceOrdnance();
      this.score = 0;
      this.reset();
      this.mute = (0, _debounce)(this.muteCore, 500, true);
      this.pause = (0, _debounce)(this.pauseCore, 500, true);

      // frickin' Safari
      if ('webkitAudioContext' in window) {
        this.audioContext = new window.webkitAudioContext();
      } else {
        this.audioContext = new window.AudioContext();
      }
      this.gainNode = this.audioContext.createGain();
      this.gainNode.gain.value = 0.2;
      this.muted = true;

      this.paused = false;

      var tick = function tick() {
        if (!_this.paused) {
          _this.update();
          _this.draw(screen);
        }
        _this.acceptGlobalKeys();
        requestAnimationFrame(tick);
      };

      tick();
    }

    _createClass(Game, [{
      key: 'advanceOrdnance',
      value: regeneratorRuntime.mark(function advanceOrdnance() {
        var i;
        return regeneratorRuntime.wrap(function advanceOrdnance$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < 1000000)) {
                context$2$0.next = 21;
                break;
              }

              context$2$0.next = 4;
              return _withBasicGun2;

            case 4:
              context$2$0.next = 6;
              return _withFatGun2;

            case 6:
              context$2$0.next = 8;
              return _withMultiGun2;

            case 8:
              context$2$0.next = 10;
              return _withRemoteControlGun2;

            case 10:
              context$2$0.next = 12;
              return _withSpreadGun2;

            case 12:
              context$2$0.next = 14;
              return _withShieldGun2;

            case 14:
              context$2$0.next = 16;
              return _withLaserGun2;

            case 16:
              context$2$0.next = 18;
              return _withExplodingBulletGun2;

            case 18:
              i++;
              context$2$0.next = 1;
              break;

            case 21:
            case 'end':
              return context$2$0.stop();
          }
        }, advanceOrdnance, this);
      })
    }, {
      key: 'reset',
      value: function reset() {
        this.victory = undefined;
        this.bodies = this.createInvaders(this).concat(new _Player(this));

        this.numStars = 50;
        this.stars = _Star.createStars(this, this.numStars);
      }
    }, {
      key: 'update',
      value: function update() {

        this.reportCollisions(this.bodies);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.bodies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var body = _step.value;

            if (body.update !== undefined) {
              body.update();
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var invaders = this.bodies.filter(function (body) {
          return body instanceof _Invader;
        });
        var players = this.bodies.filter(function (body) {
          return body instanceof _Player;
        });

        if (invaders.length === 0) {
          this.victory = true;
        } else if (players.length === 0) {
          this.victory = false;
        }

        if (typeof this.victory === 'boolean') {
          this.reset();
          if (this.keyboarder.isDown(this.keyboarder.KEYS.R)) {
            this.reset();
          }
        }
      }
    }, {
      key: 'drawAll',
      value: function drawAll(array, screen) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = array[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            if (item.draw !== undefined) {
              item.draw(screen);
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }, {
      key: 'draw',
      value: function draw(screen) {
        screen.clearRect(0, 0, this.size.x, this.size.y);
        var landscapeArea = this.size.y - this.playerHeight;
        var gradient = screen.createLinearGradient(this.center.x, this.size.y, this.center.x, landscapeArea);
        gradient.addColorStop(0, '#0000AA');
        gradient.addColorStop(1, 'black');
        screen.fillStyle = gradient;
        screen.fillRect(0, landscapeArea, this.size.x, this.size.y);

        this.drawAll(this.stars, screen);
        this.drawAll(this.bodies, screen);

        this.drawScore(this.score, screen);

        if (this.victory !== undefined) {
          var center = this.size.x / 2;
          screen.font = '48px Montserrat';
          screen.shadowOffsetX = 1;
          screen.shadowOffsetY = 1;
          //screen.shadowBlur = 10
          screen.shadowColor = 'grey';
          if (this.victory) {
            screen.fillStyle = 'green';
            screen.textAlign = 'center';
            screen.fillText('YOU WIN', center, 50);
            screen.font = '16px Montserrat';
            screen.fillText('Press R to restart', center, 100);
          } else if (!this.victory) {
            screen.fillStyle = 'red';
            screen.textAlign = 'center';
            screen.fillText('YOU LOSE', center, 50);
            screen.font = '16px Montserrat';
            screen.fillText('Press R to restart', center, 100);
          }
        }
        screen.shadowOffsetX = 0;
        screen.shadowOffsetY = 0;
        screen.shadowBlur = 0;
      }
    }, {
      key: 'shootSound',
      value: function shootSound(context, duration, gainNode) {
        var osc = context.createOscillator();
        osc.connect(gainNode);
        osc.frequency.setValueAtTime(4000, context.currentTime);
        osc.frequency.linearRampToValueAtTime(440, context.currentTime + duration);
        osc.start(context.currentTime);
        osc.stop(context.currentTime + duration);
      }
    }, {
      key: 'muteCore',
      value: function muteCore(context, gain) {
        if (this.muted) {
          gain.connect(context.destination);
          this.muted = false;
        } else {
          gain.disconnect(context);
          this.muted = true;
        }
      }
    }, {
      key: 'pauseCore',
      value: function pauseCore() {
        if (this.paused) {
          this.paused = false;
        } else {
          this.paused = true;
        }
      }
    }, {
      key: 'invadersBelow',
      value: function invadersBelow(invader) {
        return this.bodies.filter(function (b) {
          return b instanceof _Invader && Math.abs(invader.center.x - b.center.x) < b.size.x && b.center.y > invader.center.y;
        }).length > 0;
      }
    }, {
      key: 'addBody',
      value: function addBody(body) {
        this.bodies.push(body);
      }
    }, {
      key: 'removeBody',
      value: function removeBody(body) {
        var bodyIndex = this.bodies.indexOf(body);
        if (bodyIndex !== -1) {
          this.bodies.splice(bodyIndex, 1);
        }
      }
    }, {
      key: 'isColliding',
      value: function isColliding(b1, b2) {
        return !(b1 === b2 || b1.center.x + b1.size.x / 2 <= b2.center.x - b2.size.x / 2 || b1.center.y + b1.size.y / 2 <= b2.center.y - b2.size.y / 2 || b1.center.x - b1.size.x / 2 >= b2.center.x + b2.size.x / 2 || b1.center.y - b1.size.y / 2 >= b2.center.y + b2.size.y / 2);
      }
    }, {
      key: 'reportCollisions',
      value: function reportCollisions(bodies) {
        var bodyPairs = [];
        for (var i = 0; i < bodies.length; i++) {
          for (var j = i + 1; j < bodies.length; j++) {
            if (this.isColliding(bodies[i], bodies[j])) {
              bodyPairs.push([bodies[i], bodies[j]]);
            }
          }
        }

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = bodyPairs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var pair = _step3.value;

            if (pair[0].collision !== undefined) {
              pair[0].collision(pair[1]);
            }

            if (pair[1].collision !== undefined) {
              pair[1].collision(pair[0]);
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
              _iterator3['return']();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }, {
      key: 'incrementScore',
      value: function incrementScore() {
        this.score += 100;
      }
    }, {
      key: 'createInvaders',
      value: function createInvaders(game) {
        var numInvaders = Math.round((game.size.x - 70) / 10);
        var numCols = Math.round(numInvaders / 3);
        var invaders = [];

        for (var i = 0; i < numInvaders; i++) {
          var x = 35 + i % numCols * 30;
          var y = 35 + i % 3 * 60;
          invaders.push(new _Invader(game, { x: x, y: y }));
        }
        return invaders;
      }
    }, {
      key: 'drawScore',
      value: function drawScore(score, screen) {
        screen.fillStyle = 'green';
        screen.textAlign = 'right';
        screen.font = '16px Montserrat';
        screen.fillText('Score: ' + score + ' ', this.size.x - 10, 20);
      }
    }, {
      key: 'acceptGlobalKeys',
      value: function acceptGlobalKeys() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.M)) {
          this.mute(this.audioContext, this.gainNode);
        }

        if (this.keyboarder.isDown(this.keyboarder.KEYS.P)) {
          this.pause();
        }
      }
    }]);

    return Game;
  })();

  module.exports = Game;

  new Game();
});
// TODO pan audio based on player position
// let amp = context.createGain()
// amp.connect(panner)
// panner.setPosition(Math.sin(pannerCounter++/2)/2, 0,0)
// panner.connect(ac.destination)
//# sourceMappingURL=data:application/json;base64,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QixjQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQUFBQyxDQUFDLEdBQUcsQ0FBQyxHQUFJLEVBQUUsQ0FBQTtBQUN6QixrQkFBUSxDQUFDLElBQUksQ0FBQyxhQUFZLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtTQUNoRDtBQUNELGVBQU8sUUFBUSxDQUFBO09BQ2hCOzs7YUFFUSxtQkFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3ZCLGNBQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFBO0FBQzFCLGNBQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFBO0FBQzFCLGNBQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUE7QUFDL0IsY0FBTSxDQUFDLFFBQVEsYUFBVyxLQUFLLFFBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO09BQzFEOzs7YUFFZSw0QkFBRztBQUNqQixZQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ2xELGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDNUM7O0FBRUQsWUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNsRCxjQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDYjtPQUNGOzs7V0FuUmtCLElBQUk7OzttQkFBSixJQUFJOztBQXNSekIsTUFBSSxJQUFJLEVBQUUsQ0FBQSIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludmFkZXIgZnJvbSAnaW52YWRlcidcbmltcG9ydCBQbGF5ZXIgZnJvbSAncGxheWVyJ1xuaW1wb3J0IFN0YXIgZnJvbSAnc3RhcidcbmltcG9ydCBLZXlib2FyZGVyIGZyb20gJ2tleWJvYXJkZXInXG5pbXBvcnQgd2l0aEJhc2ljR3VuIGZyb20gJ3dpdGhCYXNpY0d1bidcbmltcG9ydCB3aXRoUmVtb3RlQ29udHJvbEd1biBmcm9tICd3aXRoUmVtb3RlQ29udHJvbEd1bidcbmltcG9ydCB3aXRoRmF0R3VuIGZyb20gJ3dpdGhGYXRHdW4nXG5pbXBvcnQgd2l0aE11bHRpR3VuIGZyb20gJ3dpdGhNdWx0aUd1bidcbmltcG9ydCB3aXRoU3ByZWFkR3VuIGZyb20gJ3dpdGhTcHJlYWRHdW4nXG5pbXBvcnQgd2l0aFNoaWVsZEd1biBmcm9tICd3aXRoU2hpZWxkR3VuJ1xuaW1wb3J0IHdpdGhMYXNlckd1biBmcm9tICd3aXRoTGFzZXJHdW4nXG5pbXBvcnQgd2l0aEV4cGxvZGluZ0J1bGxldEd1biBmcm9tICd3aXRoRXhwbG9kaW5nQnVsbGV0R3VuJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9mdW5jdGlvbi9kZWJvdW5jZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHdpZHRoID0gNTUwXG4gICAgY29uc3QgaGVpZ2h0ID0gNTUwXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY3JlZW5cIilcbiAgICBjb25zdCBEUFIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICAgIGNvbnN0IHRydWVXaWR0aCA9IHdpZHRoICogRFBSXG4gICAgY29uc3QgdHJ1ZUhlaWdodCA9IGhlaWdodCAqIERQUlxuICAgIGNhbnZhcy53aWR0aCA9IHRydWVXaWR0aFxuICAgIGNhbnZhcy5oZWlnaHQgPSB0cnVlSGVpZ2h0XG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGhcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgbGV0IHNjcmVlbiA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgc2NyZWVuLnNjYWxlKDIsIDIpXG5cbiAgICB0aGlzLmtleWJvYXJkZXIgPSBuZXcgS2V5Ym9hcmRlcigpXG4gICAgdGhpcy5zaXplID0geyB4OiB3aWR0aCwgeTogaGVpZ2h0IH1cbiAgICB0aGlzLmNlbnRlciA9IHsgeDogd2lkdGggLyAyLCB5OiBoZWlnaHQgLyAyIH1cbiAgICB0aGlzLnBsYXllckhlaWdodCA9IDc1XG4gICAgdGhpcy5vcmRuYW5jZUFkdmFuY2VyID0gdGhpcy5hZHZhbmNlT3JkbmFuY2UoKVxuICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5tdXRlID0gZGVib3VuY2UodGhpcy5tdXRlQ29yZSwgNTAwLCB0cnVlKVxuICAgIHRoaXMucGF1c2UgPSBkZWJvdW5jZSh0aGlzLnBhdXNlQ29yZSwgNTAwLCB0cnVlKVxuXG5cbiAgICAvLyBmcmlja2luJyBTYWZhcmlcbiAgICBpZiAoJ3dlYmtpdEF1ZGlvQ29udGV4dCcgaW4gd2luZG93KSB7XG4gICAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdWRpb0NvbnRleHQgPSBuZXcgd2luZG93LkF1ZGlvQ29udGV4dCgpXG4gICAgfVxuICAgIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKClcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwLjJcbiAgICB0aGlzLm11dGVkID0gdHJ1ZVxuXG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZVxuXG5cblxuICAgIGxldCB0aWNrID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBhdXNlZCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgIHRoaXMuZHJhdyhzY3JlZW4pXG4gICAgICB9XG4gICAgICB0aGlzLmFjY2VwdEdsb2JhbEtleXMoKVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spXG4gICAgfVxuXG4gICAgdGljaygpXG5cbiAgfVxuXG4gICphZHZhbmNlT3JkbmFuY2UoKSB7XG4gICAgbGV0IGkgPSAwXG4gICAgd2hpbGUgKGkgPCAxMDAwMDAwKSB7XG4gICAgICB5aWVsZCB3aXRoQmFzaWNHdW5cbiAgICAgIHlpZWxkIHdpdGhGYXRHdW5cbiAgICAgIHlpZWxkIHdpdGhNdWx0aUd1blxuICAgICAgeWllbGQgd2l0aFJlbW90ZUNvbnRyb2xHdW5cbiAgICAgIHlpZWxkIHdpdGhTcHJlYWRHdW5cbiAgICAgIHlpZWxkIHdpdGhTaGllbGRHdW5cbiAgICAgIHlpZWxkIHdpdGhMYXNlckd1blxuICAgICAgeWllbGQgd2l0aEV4cGxvZGluZ0J1bGxldEd1blxuICAgICAgaSsrXG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy52aWN0b3J5ID0gdW5kZWZpbmVkXG4gICAgdGhpcy5ib2RpZXMgPSB0aGlzLmNyZWF0ZUludmFkZXJzKHRoaXMpLmNvbmNhdChuZXcgUGxheWVyKHRoaXMpKVxuXG4gICAgdGhpcy5udW1TdGFycyA9IDUwXG4gICAgdGhpcy5zdGFycyA9IFN0YXIuY3JlYXRlU3RhcnModGhpcywgdGhpcy5udW1TdGFycylcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgdGhpcy5yZXBvcnRDb2xsaXNpb25zKHRoaXMuYm9kaWVzKVxuXG4gICAgZm9yIChsZXQgYm9keSBvZiB0aGlzLmJvZGllcykge1xuICAgICAgaWYgKGJvZHkudXBkYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYm9keS51cGRhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBpbnZhZGVycyA9IHRoaXMuYm9kaWVzLmZpbHRlcihib2R5ID0+IHtcbiAgICAgIHJldHVybiBib2R5IGluc3RhbmNlb2YgSW52YWRlclxuICAgIH0pXG4gICAgbGV0IHBsYXllcnMgPSB0aGlzLmJvZGllcy5maWx0ZXIoYm9keSA9PiB7XG4gICAgICByZXR1cm4gYm9keSBpbnN0YW5jZW9mIFBsYXllclxuICAgIH0pXG5cbiAgICBpZiAoaW52YWRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnZpY3RvcnkgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChwbGF5ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy52aWN0b3J5ID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMudmljdG9yeSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHRoaXMucmVzZXQoKVxuICAgICAgaWYgKHRoaXMua2V5Ym9hcmRlci5pc0Rvd24odGhpcy5rZXlib2FyZGVyLktFWVMuUikpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd0FsbChhcnJheSwgc2NyZWVuKSB7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBhcnJheSkge1xuICAgICAgaWYgKGl0ZW0uZHJhdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGl0ZW0uZHJhdyhzY3JlZW4pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhdyhzY3JlZW4pIHtcbiAgICBzY3JlZW4uY2xlYXJSZWN0KDAsIDAsIHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgICBsZXQgbGFuZHNjYXBlQXJlYSA9IHRoaXMuc2l6ZS55IC0gdGhpcy5wbGF5ZXJIZWlnaHRcbiAgICBsZXQgZ3JhZGllbnQgPSBzY3JlZW4uY3JlYXRlTGluZWFyR3JhZGllbnQodGhpcy5jZW50ZXIueCwgdGhpcy5zaXplLnksIHRoaXMuY2VudGVyLngsIGxhbmRzY2FwZUFyZWEpXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIFwiIzAwMDBBQVwiKVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBcImJsYWNrXCIpXG4gICAgc2NyZWVuLmZpbGxTdHlsZSA9IGdyYWRpZW50XG4gICAgc2NyZWVuLmZpbGxSZWN0KDAsIGxhbmRzY2FwZUFyZWEsIHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcblxuICAgIHRoaXMuZHJhd0FsbCh0aGlzLnN0YXJzLCBzY3JlZW4pXG4gICAgdGhpcy5kcmF3QWxsKHRoaXMuYm9kaWVzLCBzY3JlZW4pXG5cbiAgICB0aGlzLmRyYXdTY29yZSh0aGlzLnNjb3JlLCBzY3JlZW4pXG5cbiAgICBpZiAodGhpcy52aWN0b3J5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBjZW50ZXIgPSB0aGlzLnNpemUueCAvIDJcbiAgICAgIHNjcmVlbi5mb250ID0gXCI0OHB4IE1vbnRzZXJyYXRcIlxuICAgICAgc2NyZWVuLnNoYWRvd09mZnNldFggPSAxXG4gICAgICBzY3JlZW4uc2hhZG93T2Zmc2V0WSA9IDFcbiAgICAgIC8vc2NyZWVuLnNoYWRvd0JsdXIgPSAxMFxuICAgICAgc2NyZWVuLnNoYWRvd0NvbG9yID0gXCJncmV5XCJcbiAgICAgIGlmICh0aGlzLnZpY3RvcnkpIHtcbiAgICAgICAgc2NyZWVuLmZpbGxTdHlsZSA9IFwiZ3JlZW5cIlxuICAgICAgICBzY3JlZW4udGV4dEFsaWduID0gXCJjZW50ZXJcIlxuICAgICAgICBzY3JlZW4uZmlsbFRleHQoXCJZT1UgV0lOXCIsIGNlbnRlciwgNTApXG4gICAgICAgIHNjcmVlbi5mb250ID0gXCIxNnB4IE1vbnRzZXJyYXRcIlxuICAgICAgICBzY3JlZW4uZmlsbFRleHQoXCJQcmVzcyBSIHRvIHJlc3RhcnRcIiwgY2VudGVyLCAxMDApXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnZpY3RvcnkpIHtcbiAgICAgICAgc2NyZWVuLmZpbGxTdHlsZSA9IFwicmVkXCJcbiAgICAgICAgc2NyZWVuLnRleHRBbGlnbiA9IFwiY2VudGVyXCJcbiAgICAgICAgc2NyZWVuLmZpbGxUZXh0KFwiWU9VIExPU0VcIiwgY2VudGVyLCA1MClcbiAgICAgICAgc2NyZWVuLmZvbnQgPSBcIjE2cHggTW9udHNlcnJhdFwiXG4gICAgICAgIHNjcmVlbi5maWxsVGV4dChcIlByZXNzIFIgdG8gcmVzdGFydFwiLCBjZW50ZXIsIDEwMClcbiAgICAgIH1cbiAgICB9XG4gICAgc2NyZWVuLnNoYWRvd09mZnNldFggPSAwXG4gICAgc2NyZWVuLnNoYWRvd09mZnNldFkgPSAwXG4gICAgc2NyZWVuLnNoYWRvd0JsdXIgPSAwXG4gIH1cblxuICBzaG9vdFNvdW5kKGNvbnRleHQsIGR1cmF0aW9uLCBnYWluTm9kZSkge1xuICAgIGxldCBvc2MgPSBjb250ZXh0LmNyZWF0ZU9zY2lsbGF0b3IoKVxuICAgIG9zYy5jb25uZWN0KGdhaW5Ob2RlKVxuICAgIG9zYy5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoNDAwMCwgY29udGV4dC5jdXJyZW50VGltZSlcbiAgICBvc2MuZnJlcXVlbmN5LmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKFxuICAgICAgNDQwLFxuICAgICAgY29udGV4dC5jdXJyZW50VGltZSArIGR1cmF0aW9uXG4gICAgKVxuICAgIG9zYy5zdGFydChjb250ZXh0LmN1cnJlbnRUaW1lKVxuICAgIG9zYy5zdG9wKGNvbnRleHQuY3VycmVudFRpbWUgKyBkdXJhdGlvbilcblxuICAgIC8vIFRPRE8gcGFuIGF1ZGlvIGJhc2VkIG9uIHBsYXllciBwb3NpdGlvblxuICAgIC8vIGxldCBhbXAgPSBjb250ZXh0LmNyZWF0ZUdhaW4oKVxuICAgIC8vIGFtcC5jb25uZWN0KHBhbm5lcilcbiAgICAvLyBwYW5uZXIuc2V0UG9zaXRpb24oTWF0aC5zaW4ocGFubmVyQ291bnRlcisrLzIpLzIsIDAsMClcbiAgICAvLyBwYW5uZXIuY29ubmVjdChhYy5kZXN0aW5hdGlvbilcbiAgfVxuXG4gIG11dGVDb3JlKGNvbnRleHQsIGdhaW4pIHtcbiAgICBpZiAodGhpcy5tdXRlZCkge1xuICAgICAgZ2Fpbi5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pXG4gICAgICB0aGlzLm11dGVkID0gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgZ2Fpbi5kaXNjb25uZWN0KGNvbnRleHQpXG4gICAgICB0aGlzLm11dGVkID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHBhdXNlQ29yZSgpIHtcbiAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgIHRoaXMucGF1c2VkID0gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlXG4gICAgfVxuICB9XG5cblxuICBpbnZhZGVyc0JlbG93KGludmFkZXIpIHtcbiAgICByZXR1cm4gdGhpcy5ib2RpZXMuZmlsdGVyKGIgPT4ge1xuICAgICAgcmV0dXJuIGIgaW5zdGFuY2VvZiBJbnZhZGVyICYmXG4gICAgICAgIE1hdGguYWJzKGludmFkZXIuY2VudGVyLnggLSBiLmNlbnRlci54KSA8IGIuc2l6ZS54ICYmXG4gICAgICAgIGIuY2VudGVyLnkgPiBpbnZhZGVyLmNlbnRlci55XG4gICAgfSkubGVuZ3RoID4gMFxuICB9XG5cbiAgYWRkQm9keShib2R5KSB7XG4gICAgdGhpcy5ib2RpZXMucHVzaChib2R5KVxuICB9XG5cbiAgcmVtb3ZlQm9keShib2R5KSB7XG4gICAgbGV0IGJvZHlJbmRleCA9IHRoaXMuYm9kaWVzLmluZGV4T2YoYm9keSlcbiAgICBpZiAoYm9keUluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5ib2RpZXMuc3BsaWNlKGJvZHlJbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBpc0NvbGxpZGluZyhiMSwgYjIpIHtcbiAgICByZXR1cm4gIShcbiAgICAgIGIxID09PSBiMiB8fFxuICAgICAgICBiMS5jZW50ZXIueCArIGIxLnNpemUueCAvIDIgPD0gYjIuY2VudGVyLnggLSBiMi5zaXplLnggLyAyIHx8XG4gICAgICAgIGIxLmNlbnRlci55ICsgYjEuc2l6ZS55IC8gMiA8PSBiMi5jZW50ZXIueSAtIGIyLnNpemUueSAvIDIgfHxcbiAgICAgICAgYjEuY2VudGVyLnggLSBiMS5zaXplLnggLyAyID49IGIyLmNlbnRlci54ICsgYjIuc2l6ZS54IC8gMiB8fFxuICAgICAgICBiMS5jZW50ZXIueSAtIGIxLnNpemUueSAvIDIgPj0gYjIuY2VudGVyLnkgKyBiMi5zaXplLnkgLyAyXG4gICAgKVxuICB9XG5cbiAgcmVwb3J0Q29sbGlzaW9ucyhib2RpZXMpIHtcbiAgICBsZXQgYm9keVBhaXJzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgYm9kaWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGlkaW5nKGJvZGllc1tpXSwgYm9kaWVzW2pdKSkge1xuICAgICAgICAgIGJvZHlQYWlycy5wdXNoKFtib2RpZXNbaV0sIGJvZGllc1tqXV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBwYWlyIG9mIGJvZHlQYWlycykge1xuICAgICAgaWYgKHBhaXJbMF0uY29sbGlzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFpclswXS5jb2xsaXNpb24ocGFpclsxXSlcbiAgICAgIH1cblxuICAgICAgaWYgKHBhaXJbMV0uY29sbGlzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFpclsxXS5jb2xsaXNpb24ocGFpclswXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbmNyZW1lbnRTY29yZSgpIHtcbiAgICB0aGlzLnNjb3JlICs9IDEwMFxuICB9XG5cbiAgY3JlYXRlSW52YWRlcnMoZ2FtZSkge1xuICAgIGxldCBudW1JbnZhZGVycyA9IE1hdGgucm91bmQoIChnYW1lLnNpemUueCAtIDcwKSAvIDEwKVxuICAgIGxldCBudW1Db2xzID0gTWF0aC5yb3VuZChudW1JbnZhZGVycyAvIDMpXG4gICAgbGV0IGludmFkZXJzID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtSW52YWRlcnM7IGkrKykge1xuICAgICAgbGV0IHggPSAzNSArIChpICUgbnVtQ29scykgKiAzMFxuICAgICAgbGV0IHkgPSAzNSArIChpICUgMykgKiA2MFxuICAgICAgaW52YWRlcnMucHVzaChuZXcgSW52YWRlcihnYW1lLCB7IHg6IHgsIHk6IHl9KSlcbiAgICB9XG4gICAgcmV0dXJuIGludmFkZXJzXG4gIH1cblxuICBkcmF3U2NvcmUoc2NvcmUsIHNjcmVlbikge1xuICAgIHNjcmVlbi5maWxsU3R5bGUgPSBcImdyZWVuXCJcbiAgICBzY3JlZW4udGV4dEFsaWduID0gXCJyaWdodFwiXG4gICAgc2NyZWVuLmZvbnQgPSBcIjE2cHggTW9udHNlcnJhdFwiXG4gICAgc2NyZWVuLmZpbGxUZXh0KGBTY29yZTogJHtzY29yZX0gYCwgdGhpcy5zaXplLnggLSAxMCwgMjApXG4gIH1cblxuICBhY2NlcHRHbG9iYWxLZXlzKCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkZXIuaXNEb3duKHRoaXMua2V5Ym9hcmRlci5LRVlTLk0pKSB7XG4gICAgICB0aGlzLm11dGUodGhpcy5hdWRpb0NvbnRleHQsIHRoaXMuZ2Fpbk5vZGUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMua2V5Ym9hcmRlci5pc0Rvd24odGhpcy5rZXlib2FyZGVyLktFWVMuUCkpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgIH1cbiAgfVxufVxuXG5uZXcgR2FtZSgpXG5cbiJdfQ==