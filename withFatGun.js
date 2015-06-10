define('withFatGun', ['exports', 'module', 'bullet', 'lodash/function/throttle'], function (exports, module, _bullet, _lodashFunctionThrottle) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _Bullet = _interopRequire(_bullet);

  var _throttle = _interopRequire(_lodashFunctionThrottle);

  var weapon = {
    shoot: function shoot() {
      var direction = arguments[0] === undefined ? 1 : arguments[0];

      var bullet = new _Bullet(this.game, { x: this.center.x, y: this.center.y - 20 }, { x: 0, y: -2 * direction }, { x: 6, y: 6 });
      // this is a side effect
      this.game.addBody(bullet);
      // this is also a side effect
      this.game.shootSound(this.game.audioContext, 0.3, this.game.gainNode);
    }
  };
  weapon.shoot = (0, _throttle)(weapon.shoot, 300, { trailing: false });
  module.exports = weapon;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhGYXRHdW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0EsTUFBSSxNQUFNLEdBQUc7QUFDWCxTQUFLLEVBQUEsaUJBQWdCO1VBQWYsU0FBUyxnQ0FBRyxDQUFDOztBQUNqQixVQUFJLE1BQU0sR0FBRyxZQUNYLElBQUksQ0FBQyxJQUFJLEVBQ1QsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUMzQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxFQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUNmLENBQUE7O0FBRUQsVUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7O0FBRXpCLFVBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0tBQ3RFO0dBQ0YsQ0FBQTtBQUNELFFBQU0sQ0FBQyxLQUFLLEdBQUcsZUFBUyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBRSxDQUFBO21CQUMvQyxNQUFNIiwiZmlsZSI6IndpdGhGYXRHdW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVsbGV0IGZyb20gJ2J1bGxldCdcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvZnVuY3Rpb24vdGhyb3R0bGUnXG5cbmxldCB3ZWFwb24gPSB7XG4gIHNob290KGRpcmVjdGlvbiA9IDEpIHtcbiAgICBsZXQgYnVsbGV0ID0gbmV3IEJ1bGxldChcbiAgICAgIHRoaXMuZ2FtZSxcbiAgICAgIHsgeDogdGhpcy5jZW50ZXIueCwgeTogdGhpcy5jZW50ZXIueSAtIDIwIH0sXG4gICAgICB7IHg6IDAsIHk6IC0yICogZGlyZWN0aW9uIH0sXG4gICAgICB7IHg6IDYsIHk6IDYgfVxuICAgIClcbiAgICAvLyB0aGlzIGlzIGEgc2lkZSBlZmZlY3RcbiAgICB0aGlzLmdhbWUuYWRkQm9keShidWxsZXQpXG4gICAgLy8gdGhpcyBpcyBhbHNvIGEgc2lkZSBlZmZlY3RcbiAgICB0aGlzLmdhbWUuc2hvb3RTb3VuZCh0aGlzLmdhbWUuYXVkaW9Db250ZXh0LCAwLjMsIHRoaXMuZ2FtZS5nYWluTm9kZSlcbiAgfVxufVxud2VhcG9uLnNob290ID0gdGhyb3R0bGUod2VhcG9uLnNob290LCAzMDAsIHt0cmFpbGluZzogZmFsc2V9IClcbmV4cG9ydCBkZWZhdWx0IHdlYXBvblxuIl19