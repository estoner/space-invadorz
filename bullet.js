define('bullet', ['exports', 'module', 'withDrawRect', 'withCollisionDestroys', 'lodash/object/extend'], function (exports, module, _withDrawRect, _withCollisionDestroys, _lodashObjectExtend) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _withDrawRect2 = _interopRequire(_withDrawRect);

  var _withCollisionDestroys2 = _interopRequire(_withCollisionDestroys);

  var _extend = _interopRequire(_lodashObjectExtend);

  var Bullet = (function () {
    function Bullet(game, center, velocity) {
      var size = arguments[3] === undefined ? { x: 3, y: 3 } : arguments[3];

      _classCallCheck(this, Bullet);

      this.game = game;
      this.center = center;
      this.size = size;
      this.velocity = velocity;
      this.color = 'yellow';
      (0, _extend)(this, _withDrawRect2);
      (0, _extend)(this, _withCollisionDestroys2);
    }

    _createClass(Bullet, [{
      key: 'update',
      value: function update() {
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
    }]);

    return Bullet;
  })();

  module.exports = Bullet;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bGxldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7TUFJcUIsTUFBTTtBQUNkLGFBRFEsTUFBTSxDQUNiLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUF3QjtVQUF0QixJQUFJLGdDQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDOzs0QkFEcEMsTUFBTTs7QUFFdkIsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7QUFDaEIsVUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7QUFDcEIsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7QUFDaEIsVUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7QUFDeEIsVUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUE7QUFDckIsbUJBQU8sSUFBSSxpQkFBZSxDQUFBO0FBQzFCLG1CQUFPLElBQUksMEJBQXdCLENBQUE7S0FDcEM7O2lCQVRrQixNQUFNOzthQVduQixrQkFBRztBQUNQLFlBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0FBQ2hDLFlBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBOztBQUVoQyxZQUFJLFVBQVUsR0FBRztBQUNmLGdCQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUM1RCxjQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1NBQ3JCLENBQUE7O0FBRUQsWUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsRUFBRTtBQUM1QyxjQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUMzQjtPQUNGOzs7V0F2QmtCLE1BQU07OzttQkFBTixNQUFNIiwiZmlsZSI6ImJ1bGxldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aXRoRHJhd1JlY3QgZnJvbSAnd2l0aERyYXdSZWN0J1xuaW1wb3J0IHdpdGhDb2xsaXNpb25EZXN0cm95cyBmcm9tICd3aXRoQ29sbGlzaW9uRGVzdHJveXMnXG5pbXBvcnQgZXh0ZW5kIGZyb20gJ2xvZGFzaC9vYmplY3QvZXh0ZW5kJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQge1xuICBjb25zdHJ1Y3RvcihnYW1lLCBjZW50ZXIsIHZlbG9jaXR5LCBzaXplID0ge3g6IDMsIHk6IDN9ICkge1xuICAgIHRoaXMuZ2FtZSA9IGdhbWVcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHlcbiAgICB0aGlzLmNvbG9yID0gXCJ5ZWxsb3dcIlxuICAgIGV4dGVuZCh0aGlzLCB3aXRoRHJhd1JlY3QpXG4gICAgZXh0ZW5kKHRoaXMsIHdpdGhDb2xsaXNpb25EZXN0cm95cylcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmNlbnRlci54ICs9IHRoaXMudmVsb2NpdHkueFxuICAgIHRoaXMuY2VudGVyLnkgKz0gdGhpcy52ZWxvY2l0eS55XG5cbiAgICBsZXQgc2NyZWVuUmVjdCA9IHtcbiAgICAgIGNlbnRlcjogeyB4OiB0aGlzLmdhbWUuc2l6ZS54IC8gMiwgeTogdGhpcy5nYW1lLnNpemUueSAvIDIgfSxcbiAgICAgIHNpemU6IHRoaXMuZ2FtZS5zaXplXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmdhbWUuaXNDb2xsaWRpbmcodGhpcywgc2NyZWVuUmVjdCkpIHtcbiAgICAgIHRoaXMuZ2FtZS5yZW1vdmVCb2R5KHRoaXMpXG4gICAgfVxuICB9XG59XG5cbiJdfQ==