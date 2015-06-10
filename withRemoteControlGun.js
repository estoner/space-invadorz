define('withRemoteControlGun', ['exports', 'module', 'remoteControlBullet', 'lodash/function/throttle'], function (exports, module, _remoteControlBullet, _lodashFunctionThrottle) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _RemoteControlBullet = _interopRequire(_remoteControlBullet);

  var _throttle = _interopRequire(_lodashFunctionThrottle);

  var weapon = {
    shoot: function shoot() {
      var direction = arguments[0] === undefined ? 1 : arguments[0];

      var bullet = new _RemoteControlBullet(this.game, { x: this.center.x, y: this.center.y - 20 }, { x: 0, y: -7 * direction }, { x: 2, y: 2 }, this);
      // this is a side effect
      this.game.addBody(bullet);
      // this is also a side effect
      this.game.shootSound(this.game.audioContext, 0.2, this.game.gainNode);
    }
  };
  weapon.shoot = (0, _throttle)(weapon.shoot, 200, { trailing: false });
  module.exports = weapon;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhSZW1vdGVDb250cm9sR3VuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBLE1BQUksTUFBTSxHQUFHO0FBQ1gsU0FBSyxFQUFBLGlCQUFnQjtVQUFmLFNBQVMsZ0NBQUcsQ0FBQzs7QUFDakIsVUFBSSxNQUFNLEdBQUcseUJBQ1gsSUFBSSxDQUFDLElBQUksRUFDVCxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQzNDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ2QsSUFBSSxDQUNMLENBQUE7O0FBRUQsVUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7O0FBRXpCLFVBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0tBQ3RFO0dBQ0YsQ0FBQTtBQUNELFFBQU0sQ0FBQyxLQUFLLEdBQUcsZUFBUyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBRSxDQUFBO21CQUMvQyxNQUFNIiwiZmlsZSI6IndpdGhSZW1vdGVDb250cm9sR3VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbW90ZUNvbnRyb2xCdWxsZXQgZnJvbSAncmVtb3RlQ29udHJvbEJ1bGxldCdcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvZnVuY3Rpb24vdGhyb3R0bGUnXG5cbmxldCB3ZWFwb24gPSB7XG4gIHNob290KGRpcmVjdGlvbiA9IDEpIHtcbiAgICBsZXQgYnVsbGV0ID0gbmV3IFJlbW90ZUNvbnRyb2xCdWxsZXQoXG4gICAgICB0aGlzLmdhbWUsXG4gICAgICB7IHg6IHRoaXMuY2VudGVyLngsIHk6IHRoaXMuY2VudGVyLnkgLSAyMCB9LFxuICAgICAgeyB4OiAwLCB5OiAtNyAqIGRpcmVjdGlvbiB9LFxuICAgICAgeyB4OiAyLCB5OiAyIH0sXG4gICAgICB0aGlzXG4gICAgKVxuICAgIC8vIHRoaXMgaXMgYSBzaWRlIGVmZmVjdFxuICAgIHRoaXMuZ2FtZS5hZGRCb2R5KGJ1bGxldClcbiAgICAvLyB0aGlzIGlzIGFsc28gYSBzaWRlIGVmZmVjdFxuICAgIHRoaXMuZ2FtZS5zaG9vdFNvdW5kKHRoaXMuZ2FtZS5hdWRpb0NvbnRleHQsIDAuMiwgdGhpcy5nYW1lLmdhaW5Ob2RlKVxuICB9XG59XG53ZWFwb24uc2hvb3QgPSB0aHJvdHRsZSh3ZWFwb24uc2hvb3QsIDIwMCwge3RyYWlsaW5nOiBmYWxzZX0gKVxuZXhwb3J0IGRlZmF1bHQgd2VhcG9uXG4iXX0=