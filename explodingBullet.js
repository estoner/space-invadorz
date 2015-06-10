define('explodingBullet', ['exports', 'module', 'bullet', 'withDrawRect', 'withCollisionDestroys', 'lodash/object/extend'], function (exports, module, _bullet, _withDrawRect, _withCollisionDestroys, _lodashObjectExtend) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _Bullet = _interopRequire(_bullet);

  var _withDrawRect2 = _interopRequire(_withDrawRect);

  var _withCollisionDestroys2 = _interopRequire(_withCollisionDestroys);

  var _extend = _interopRequire(_lodashObjectExtend);

  var ExplodingBullet = (function () {
    function ExplodingBullet(game, center, velocity, _x, player) {
      var size = arguments[3] === undefined ? { x: 8, y: 8 } : arguments[3];

      _classCallCheck(this, ExplodingBullet);

      this.game = game;
      this.center = center;
      this.size = size;
      this.velocity = velocity;
      this.color = 'yellow';
      this.player = player;
      (0, _extend)(this, _withDrawRect2);
      (0, _extend)(this, _withCollisionDestroys2);
    }

    _createClass(ExplodingBullet, [{
      key: 'update',
      value: function update() {
        this.center.y += this.velocity.y;

        var screenRect = {
          center: { x: this.game.size.x / 2, y: this.game.size.y / 2 },
          size: this.game.size
        };

        if (!this.game.isColliding(this, screenRect)) {
          this.game.removeBody(this);
        }
      }
    }, {
      key: 'explode',
      value: function explode() {
        var directions = [{ x: 0, y: -2 }, { x: 1, y: -1 }, { x: 2, y: 0 }, { x: 1, y: 1 }, { x: -1, y: 1 }, { x: -2, y: 0 }, { x: -1, y: -1 }];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = directions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var direction = _step.value;

            var bullet = new _Bullet(this.game, { x: this.center.x + direction.x * 4, y: this.center.y + direction.y * 4 }, { x: direction.x, y: direction.y }, { x: 1, y: 1 });
            this.game.addBody(bullet);
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

        this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode);
      }
    }]);

    return ExplodingBullet;
  })();

  module.exports = ExplodingBullet;
});
//# sourceMappingURL=data:application/json;base64,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QUE7V0FDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCxZQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtPQUN0RTs7O1dBN0NrQixlQUFlOzs7bUJBQWYsZUFBZSIsImZpbGUiOiJleHBsb2RpbmdCdWxsZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVsbGV0IGZyb20gJ2J1bGxldCdcbmltcG9ydCB3aXRoRHJhd1JlY3QgZnJvbSAnd2l0aERyYXdSZWN0J1xuaW1wb3J0IHdpdGhDb2xsaXNpb25EZXN0cm95cyBmcm9tICd3aXRoQ29sbGlzaW9uRGVzdHJveXMnXG5pbXBvcnQgZXh0ZW5kIGZyb20gJ2xvZGFzaC9vYmplY3QvZXh0ZW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsb2RpbmdCdWxsZXQge1xuICBjb25zdHJ1Y3RvcihnYW1lLCBjZW50ZXIsIHZlbG9jaXR5LCBzaXplID0geyB4OiA4LCB5OiA4fSwgcGxheWVyKSB7XG4gICAgdGhpcy5nYW1lID0gZ2FtZVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eVxuICAgIHRoaXMuY29sb3IgPSBcInllbGxvd1wiXG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXJcbiAgICBleHRlbmQodGhpcywgd2l0aERyYXdSZWN0KVxuICAgIGV4dGVuZCh0aGlzLCB3aXRoQ29sbGlzaW9uRGVzdHJveXMpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5jZW50ZXIueSArPSB0aGlzLnZlbG9jaXR5LnlcblxuICAgIGxldCBzY3JlZW5SZWN0ID0ge1xuICAgICAgY2VudGVyOiB7IHg6IHRoaXMuZ2FtZS5zaXplLnggLyAyLCB5OiB0aGlzLmdhbWUuc2l6ZS55IC8gMiB9LFxuICAgICAgc2l6ZTogdGhpcy5nYW1lLnNpemVcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZ2FtZS5pc0NvbGxpZGluZyh0aGlzLCBzY3JlZW5SZWN0KSkge1xuICAgICAgdGhpcy5nYW1lLnJlbW92ZUJvZHkodGhpcylcbiAgICB9XG4gIH1cblxuICBleHBsb2RlKCkge1xuICAgIGxldCBkaXJlY3Rpb25zID0gW1xuICAgICAge3g6IDAsIHk6IC0yfSxcbiAgICAgIHt4OiAxLCB5OiAtMX0sXG4gICAgICB7eDogMiwgeTogMH0sXG4gICAgICB7eDogMSwgeTogMX0sXG4gICAgICB7eDogLTEsIHk6IDF9LFxuICAgICAge3g6IC0yLCB5OiAwfSxcbiAgICAgIHt4OiAtMSwgeTogLTF9XG4gICAgXVxuICAgIGZvciAobGV0IGRpcmVjdGlvbiBvZiBkaXJlY3Rpb25zKSB7XG4gICAgICBsZXQgYnVsbGV0ID0gbmV3IEJ1bGxldChcbiAgICAgICAgdGhpcy5nYW1lLFxuICAgICAgICB7IHg6ICh0aGlzLmNlbnRlci54ICsgZGlyZWN0aW9uLnggKiA0KSwgeTogKHRoaXMuY2VudGVyLnkgKyBkaXJlY3Rpb24ueSAqIDQpIH0sXG4gICAgICAgIHsgeDogZGlyZWN0aW9uLngsIHk6IGRpcmVjdGlvbi55IH0sXG4gICAgICAgIHsgeDogMSwgeTogMSB9XG4gICAgICApXG4gICAgICB0aGlzLmdhbWUuYWRkQm9keShidWxsZXQpXG4gICAgfVxuICAgIHRoaXMuZ2FtZS5zaG9vdFNvdW5kKHRoaXMuZ2FtZS5hdWRpb0NvbnRleHQsIDAuMiwgdGhpcy5nYW1lLmdhaW5Ob2RlKVxuICB9XG59XG5cbiJdfQ==