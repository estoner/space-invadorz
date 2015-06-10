define('withMultiGun', ['exports', 'module', 'bullet', 'lodash/function/throttle'], function (exports, module, _bullet, _lodashFunctionThrottle) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _Bullet = _interopRequire(_bullet);

  var _throttle = _interopRequire(_lodashFunctionThrottle);

  var weapon = {
    shoot: function shoot() {
      var direction = arguments[0] === undefined ? 1 : arguments[0];

      for (var i = 1; i < 4; i++) {
        var j = i * 8 - 16;
        var bullet = new _Bullet(this.game, { x: this.center.x + j, y: this.center.y - 20 }, { x: 0, y: -5 * direction }, { x: 2, y: 2 });
        this.game.addBody(bullet);
      }
      // this is a side effect
      // this is also a side effect
      this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode);
    }
  };
  weapon.shoot = (0, _throttle)(weapon.shoot, 300, { trailing: false });
  module.exports = weapon;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhNdWx0aUd1bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQSxNQUFJLE1BQU0sR0FBRztBQUNYLFNBQUssRUFBQSxpQkFBZ0I7VUFBZixTQUFTLGdDQUFHLENBQUM7O0FBQ2pCLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDMUIsWUFBSSxDQUFDLEdBQUcsQUFBQyxDQUFDLEdBQUcsQ0FBQyxHQUFJLEVBQUUsQ0FBQTtBQUNwQixZQUFJLE1BQU0sR0FBRyxZQUNYLElBQUksQ0FBQyxJQUFJLEVBQ1QsRUFBRSxDQUFDLEVBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxBQUFDLEVBQUUsQ0FBQyxFQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQUFBQyxFQUFFLEVBQ25ELEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQ2YsQ0FBQTtBQUNELFlBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO09BQzFCOzs7QUFHRCxVQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUN0RTtHQUNGLENBQUE7QUFDRCxRQUFNLENBQUMsS0FBSyxHQUFHLGVBQVMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFDLENBQUUsQ0FBQTttQkFDL0MsTUFBTSIsImZpbGUiOiJ3aXRoTXVsdGlHdW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVsbGV0IGZyb20gJ2J1bGxldCdcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvZnVuY3Rpb24vdGhyb3R0bGUnXG5cbmxldCB3ZWFwb24gPSB7XG4gIHNob290KGRpcmVjdGlvbiA9IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgbGV0IGogPSAoaSAqIDgpIC0gMTZcbiAgICAgIGxldCBidWxsZXQgPSBuZXcgQnVsbGV0KFxuICAgICAgICB0aGlzLmdhbWUsXG4gICAgICAgIHsgeDogKHRoaXMuY2VudGVyLnggKyBqKSwgeTogKHRoaXMuY2VudGVyLnkgLSAyMCkgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAtNSAqIGRpcmVjdGlvbiB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgKVxuICAgICAgdGhpcy5nYW1lLmFkZEJvZHkoYnVsbGV0KVxuICAgIH1cbiAgICAvLyB0aGlzIGlzIGEgc2lkZSBlZmZlY3RcbiAgICAvLyB0aGlzIGlzIGFsc28gYSBzaWRlIGVmZmVjdFxuICAgIHRoaXMuZ2FtZS5zaG9vdFNvdW5kKHRoaXMuZ2FtZS5hdWRpb0NvbnRleHQsIDAuMiwgdGhpcy5nYW1lLmdhaW5Ob2RlKVxuICB9XG59XG53ZWFwb24uc2hvb3QgPSB0aHJvdHRsZSh3ZWFwb24uc2hvb3QsIDMwMCwge3RyYWlsaW5nOiBmYWxzZX0gKVxuZXhwb3J0IGRlZmF1bHQgd2VhcG9uXG4iXX0=