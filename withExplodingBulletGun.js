define('withExplodingBulletGun', ['exports', 'module', 'explodingBullet', 'lodash/function/throttle'], function (exports, module, _explodingBullet, _lodashFunctionThrottle) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _ExplodingBullet = _interopRequire(_explodingBullet);

  var _throttle = _interopRequire(_lodashFunctionThrottle);

  var weapon = {
    shoot: function shoot() {
      var direction = arguments[0] === undefined ? 1 : arguments[0];

      var bullet = new _ExplodingBullet(this.game, { x: this.center.x, y: this.center.y - 40 }, { x: 0, y: -3 * direction }, { x: 8, y: 8 }, this);
      // this is a side effect
      this.game.addBody(bullet);
      // this is also a side effect
      this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode);
    }
  };
  weapon.shoot = (0, _throttle)(weapon.shoot, 500, { trailing: false });
  module.exports = weapon;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhFeHBsb2RpbmdCdWxsZXRHdW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0EsTUFBSSxNQUFNLEdBQUc7QUFDWCxTQUFLLEVBQUEsaUJBQWdCO1VBQWYsU0FBUyxnQ0FBRyxDQUFDOztBQUNqQixVQUFJLE1BQU0sR0FBRyxxQkFDWCxJQUFJLENBQUMsSUFBSSxFQUNULEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQUUsRUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDZCxJQUFJLENBQ0wsQ0FBQTs7QUFFRCxVQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTs7QUFFekIsVUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7S0FDdEU7R0FDRixDQUFBO0FBQ0QsUUFBTSxDQUFDLEtBQUssR0FBRyxlQUFTLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFFLENBQUE7bUJBQy9DLE1BQU0iLCJmaWxlIjoid2l0aEV4cGxvZGluZ0J1bGxldEd1bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHBsb2RpbmdCdWxsZXQgZnJvbSAnZXhwbG9kaW5nQnVsbGV0J1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC9mdW5jdGlvbi90aHJvdHRsZSdcblxubGV0IHdlYXBvbiA9IHtcbiAgc2hvb3QoZGlyZWN0aW9uID0gMSkge1xuICAgIGxldCBidWxsZXQgPSBuZXcgRXhwbG9kaW5nQnVsbGV0KFxuICAgICAgdGhpcy5nYW1lLFxuICAgICAgeyB4OiB0aGlzLmNlbnRlci54LCB5OiB0aGlzLmNlbnRlci55IC0gNDAgfSxcbiAgICAgIHsgeDogMCwgeTogLTMgKiBkaXJlY3Rpb24gfSxcbiAgICAgIHsgeDogOCwgeTogOCB9LFxuICAgICAgdGhpc1xuICAgIClcbiAgICAvLyB0aGlzIGlzIGEgc2lkZSBlZmZlY3RcbiAgICB0aGlzLmdhbWUuYWRkQm9keShidWxsZXQpXG4gICAgLy8gdGhpcyBpcyBhbHNvIGEgc2lkZSBlZmZlY3RcbiAgICB0aGlzLmdhbWUuc2hvb3RTb3VuZCh0aGlzLmdhbWUuYXVkaW9Db250ZXh0LCAwLjIsIHRoaXMuZ2FtZS5nYWluTm9kZSlcbiAgfVxufVxud2VhcG9uLnNob290ID0gdGhyb3R0bGUod2VhcG9uLnNob290LCA1MDAsIHt0cmFpbGluZzogZmFsc2V9IClcbmV4cG9ydCBkZWZhdWx0IHdlYXBvblxuIl19