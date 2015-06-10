define('withShieldGun', ['exports', 'module', 'bullet', 'lodash/function/throttle'], function (exports, module, _bullet, _lodashFunctionThrottle) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _Bullet = _interopRequire(_bullet);

  var _throttle = _interopRequire(_lodashFunctionThrottle);

  var weapon = {
    shoot: function shoot() {
      var direction = arguments[0] === undefined ? 1 : arguments[0];

      var bullet = new _Bullet(this.game, { x: this.center.x, y: this.center.y - 40 }, { x: 0, y: -1 * direction }, { x: 36, y: 2 });
      // this is a side effect
      this.game.addBody(bullet);
      // this is also a side effect
      this.game.shootSound(this.game.audioContext, 0.3, this.game.gainNode);
    }
  };
  weapon.shoot = (0, _throttle)(weapon.shoot, 250, { trailing: false });
  module.exports = weapon;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTaGllbGRHdW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0EsTUFBSSxNQUFNLEdBQUc7QUFDWCxTQUFLLEVBQUEsaUJBQWdCO1VBQWYsU0FBUyxnQ0FBRyxDQUFDOztBQUNqQixVQUFJLE1BQU0sR0FBRyxZQUNYLElBQUksQ0FBQyxJQUFJLEVBQ1QsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUMzQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxFQUMzQixFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUNoQixDQUFBOztBQUVELFVBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBOztBQUV6QixVQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUN0RTtHQUNGLENBQUE7QUFDRCxRQUFNLENBQUMsS0FBSyxHQUFHLGVBQVMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFDLENBQUUsQ0FBQTttQkFDL0MsTUFBTSIsImZpbGUiOiJ3aXRoU2hpZWxkR3VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1bGxldCBmcm9tICdidWxsZXQnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL2Z1bmN0aW9uL3Rocm90dGxlJ1xuXG5sZXQgd2VhcG9uID0ge1xuICBzaG9vdChkaXJlY3Rpb24gPSAxKSB7XG4gICAgbGV0IGJ1bGxldCA9IG5ldyBCdWxsZXQoXG4gICAgICB0aGlzLmdhbWUsXG4gICAgICB7IHg6IHRoaXMuY2VudGVyLngsIHk6IHRoaXMuY2VudGVyLnkgLSA0MCB9LFxuICAgICAgeyB4OiAwLCB5OiAtMSAqIGRpcmVjdGlvbiB9LFxuICAgICAgeyB4OiAzNiwgeTogMiB9XG4gICAgKVxuICAgIC8vIHRoaXMgaXMgYSBzaWRlIGVmZmVjdFxuICAgIHRoaXMuZ2FtZS5hZGRCb2R5KGJ1bGxldClcbiAgICAvLyB0aGlzIGlzIGFsc28gYSBzaWRlIGVmZmVjdFxuICAgIHRoaXMuZ2FtZS5zaG9vdFNvdW5kKHRoaXMuZ2FtZS5hdWRpb0NvbnRleHQsIDAuMywgdGhpcy5nYW1lLmdhaW5Ob2RlKVxuICB9XG59XG53ZWFwb24uc2hvb3QgPSB0aHJvdHRsZSh3ZWFwb24uc2hvb3QsIDI1MCwge3RyYWlsaW5nOiBmYWxzZX0gKVxuZXhwb3J0IGRlZmF1bHQgd2VhcG9uXG4iXX0=