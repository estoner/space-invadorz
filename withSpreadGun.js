define('withSpreadGun', ['exports', 'module', 'bullet', 'lodash/function/throttle'], function (exports, module, _bullet, _lodashFunctionThrottle) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _Bullet = _interopRequire(_bullet);

  var _throttle = _interopRequire(_lodashFunctionThrottle);

  var weapon = {
    shoot: function shoot() {
      var direction = arguments[0] === undefined ? 1 : arguments[0];

      for (var i = 1; i <= 3; i++) {
        var j = i - 2;
        var bullet = new _Bullet(this.game, { x: this.center.x + j * 2, y: this.center.y - 20 }, { x: j, y: -5 * direction }, { x: 2, y: 2 });
        this.game.addBody(bullet);
      }
      this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode);
    }
  };
  weapon.shoot = (0, _throttle)(weapon.shoot, 400, { trailing: false });
  module.exports = weapon;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTcHJlYWRHdW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0EsTUFBSSxNQUFNLEdBQUc7QUFDWCxTQUFLLEVBQUEsaUJBQWdCO1VBQWYsU0FBUyxnQ0FBRyxDQUFDOztBQUNqQixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzNCLFlBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDYixZQUFJLE1BQU0sR0FBRyxZQUNYLElBQUksQ0FBQyxJQUFJLEVBQ1QsRUFBRSxDQUFDLEVBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQUFBQyxFQUFFLENBQUMsRUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEFBQUMsRUFBRSxFQUN2RCxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxFQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUNmLENBQUE7QUFDRCxZQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtPQUMxQjtBQUNELFVBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0tBQ3RFO0dBQ0YsQ0FBQTtBQUNELFFBQU0sQ0FBQyxLQUFLLEdBQUcsZUFBUyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBRSxDQUFBO21CQUMvQyxNQUFNIiwiZmlsZSI6IndpdGhTcHJlYWRHdW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVsbGV0IGZyb20gJ2J1bGxldCdcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvZnVuY3Rpb24vdGhyb3R0bGUnXG5cbmxldCB3ZWFwb24gPSB7XG4gIHNob290KGRpcmVjdGlvbiA9IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgIGxldCBqID0gaSAtIDJcbiAgICAgIGxldCBidWxsZXQgPSBuZXcgQnVsbGV0KFxuICAgICAgICB0aGlzLmdhbWUsXG4gICAgICAgIHsgeDogKHRoaXMuY2VudGVyLnggKyBqICogMiksIHk6ICh0aGlzLmNlbnRlci55IC0gMjApIH0sXG4gICAgICAgIHsgeDogaiwgeTogLTUgKiBkaXJlY3Rpb24gfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH1cbiAgICAgIClcbiAgICAgIHRoaXMuZ2FtZS5hZGRCb2R5KGJ1bGxldClcbiAgICB9XG4gICAgdGhpcy5nYW1lLnNob290U291bmQodGhpcy5nYW1lLmF1ZGlvQ29udGV4dCwgMC4yLCB0aGlzLmdhbWUuZ2Fpbk5vZGUpXG4gIH1cbn1cbndlYXBvbi5zaG9vdCA9IHRocm90dGxlKHdlYXBvbi5zaG9vdCwgNDAwLCB7dHJhaWxpbmc6IGZhbHNlfSApXG5leHBvcnQgZGVmYXVsdCB3ZWFwb25cbiJdfQ==