define('withBasicGun', ['exports', 'module', 'bullet', 'lodash/function/throttle'], function (exports, module, _bullet, _lodashFunctionThrottle) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _Bullet = _interopRequire(_bullet);

  var _throttle = _interopRequire(_lodashFunctionThrottle);

  var weapon = {
    shoot: function shoot() {
      var direction = arguments[0] === undefined ? 1 : arguments[0];

      var bullet = new _Bullet(this.game, { x: this.center.x, y: this.center.y - 20 }, { x: 0, y: -7 * direction });
      // this is a side effect
      this.game.addBody(bullet);
      // this is also a side effect
      this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode);
    }
  };
  weapon.shoot = (0, _throttle)(weapon.shoot, 200, { trailing: false });
  module.exports = weapon;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhCYXNpY0d1bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQSxNQUFJLE1BQU0sR0FBRztBQUNYLFNBQUssRUFBQSxpQkFBZ0I7VUFBZixTQUFTLGdDQUFHLENBQUM7O0FBQ2pCLFVBQUksTUFBTSxHQUFHLFlBQ1gsSUFBSSxDQUFDLElBQUksRUFDVCxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQzNDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQzVCLENBQUE7O0FBRUQsVUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7O0FBRXpCLFVBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0tBQ3RFO0dBQ0YsQ0FBQTtBQUNELFFBQU0sQ0FBQyxLQUFLLEdBQUcsZUFBUyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBRSxDQUFBO21CQUMvQyxNQUFNIiwiZmlsZSI6IndpdGhCYXNpY0d1bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWxsZXQgZnJvbSAnYnVsbGV0J1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC9mdW5jdGlvbi90aHJvdHRsZSdcblxubGV0IHdlYXBvbiA9IHtcbiAgc2hvb3QoZGlyZWN0aW9uID0gMSkge1xuICAgIGxldCBidWxsZXQgPSBuZXcgQnVsbGV0KFxuICAgICAgdGhpcy5nYW1lLFxuICAgICAgeyB4OiB0aGlzLmNlbnRlci54LCB5OiB0aGlzLmNlbnRlci55IC0gMjAgfSxcbiAgICAgIHsgeDogMCwgeTogLTcgKiBkaXJlY3Rpb24gfVxuICAgIClcbiAgICAvLyB0aGlzIGlzIGEgc2lkZSBlZmZlY3RcbiAgICB0aGlzLmdhbWUuYWRkQm9keShidWxsZXQpXG4gICAgLy8gdGhpcyBpcyBhbHNvIGEgc2lkZSBlZmZlY3RcbiAgICB0aGlzLmdhbWUuc2hvb3RTb3VuZCh0aGlzLmdhbWUuYXVkaW9Db250ZXh0LCAwLjIsIHRoaXMuZ2FtZS5nYWluTm9kZSlcbiAgfVxufVxud2VhcG9uLnNob290ID0gdGhyb3R0bGUod2VhcG9uLnNob290LCAyMDAsIHt0cmFpbGluZzogZmFsc2V9IClcbmV4cG9ydCBkZWZhdWx0IHdlYXBvblxuIl19