define('withLaserGun', ['exports', 'module', 'bullet', 'lodash/function/throttle'], function (exports, module, _bullet, _lodashFunctionThrottle) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _Bullet = _interopRequire(_bullet);

  var _throttle = _interopRequire(_lodashFunctionThrottle);

  var weapon = {
    shoot: function shoot() {
      var direction = arguments[0] === undefined ? 1 : arguments[0];

      var bullet = new _Bullet(this.game, { x: this.center.x, y: this.center.y - 35 }, { x: 0, y: -20 * direction }, { x: 1, y: 75 });
      // this is a side effect
      this.game.addBody(bullet);
      // this is also a side effect
      this.game.shootSound(this.game.audioContext, 0.3, this.game.gainNode);
    }
  };
  weapon.shoot = (0, _throttle)(weapon.shoot, 400, { trailing: false });
  module.exports = weapon;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhMYXNlckd1bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQSxNQUFJLE1BQU0sR0FBRztBQUNYLFNBQUssRUFBQSxpQkFBZ0I7VUFBZixTQUFTLGdDQUFHLENBQUM7O0FBQ2pCLFVBQUksTUFBTSxHQUFHLFlBQ1gsSUFBSSxDQUFDLElBQUksRUFDVCxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQzNDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsU0FBUyxFQUFFLEVBQzVCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQ2hCLENBQUE7O0FBRUQsVUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7O0FBRXpCLFVBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0tBQ3RFO0dBQ0YsQ0FBQTtBQUNELFFBQU0sQ0FBQyxLQUFLLEdBQUcsZUFBUyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBRSxDQUFBO21CQUMvQyxNQUFNIiwiZmlsZSI6IndpdGhMYXNlckd1bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWxsZXQgZnJvbSAnYnVsbGV0J1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC9mdW5jdGlvbi90aHJvdHRsZSdcblxubGV0IHdlYXBvbiA9IHtcbiAgc2hvb3QoZGlyZWN0aW9uID0gMSkge1xuICAgIGxldCBidWxsZXQgPSBuZXcgQnVsbGV0KFxuICAgICAgdGhpcy5nYW1lLFxuICAgICAgeyB4OiB0aGlzLmNlbnRlci54LCB5OiB0aGlzLmNlbnRlci55IC0gMzUgfSxcbiAgICAgIHsgeDogMCwgeTogLTIwICogZGlyZWN0aW9uIH0sXG4gICAgICB7IHg6IDEsIHk6IDc1IH1cbiAgICApXG4gICAgLy8gdGhpcyBpcyBhIHNpZGUgZWZmZWN0XG4gICAgdGhpcy5nYW1lLmFkZEJvZHkoYnVsbGV0KVxuICAgIC8vIHRoaXMgaXMgYWxzbyBhIHNpZGUgZWZmZWN0XG4gICAgdGhpcy5nYW1lLnNob290U291bmQodGhpcy5nYW1lLmF1ZGlvQ29udGV4dCwgMC4zLCB0aGlzLmdhbWUuZ2Fpbk5vZGUpXG4gIH1cbn1cbndlYXBvbi5zaG9vdCA9IHRocm90dGxlKHdlYXBvbi5zaG9vdCwgNDAwLCB7dHJhaWxpbmc6IGZhbHNlfSApXG5leHBvcnQgZGVmYXVsdCB3ZWFwb25cbiJdfQ==