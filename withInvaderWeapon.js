define('withInvaderWeapon', ['exports', 'module', 'bullet'], function (exports, module, _bullet) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _Bullet = _interopRequire(_bullet);

  var weapon = {
    shoot: function shoot() {
      var direction = arguments[0] === undefined ? 1 : arguments[0];

      var bullet = new _Bullet(this.game, { x: this.center.x, y: this.center.y + this.size.y / 2 + this.patrolY }, { x: Math.random() / 2 - 0.2, y: 2 * direction });
      // this is a side effect
      this.game.addBody(bullet);
      // this is also a side effect
      this.game.shootSound(this.game.audioContext, 0.1, this.game.gainNode);
    }
  };
  module.exports = weapon;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhJbnZhZGVyV2VhcG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxNQUFJLE1BQU0sR0FBRztBQUNYLFNBQUssRUFBQSxpQkFBZ0I7VUFBZixTQUFTLGdDQUFHLENBQUM7O0FBQ2pCLFVBQUksTUFBTSxHQUFHLFlBQ1gsSUFBSSxDQUFDLElBQUksRUFDVCxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFDdEUsRUFBRSxDQUFDLEVBQUUsQUFBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUNuRCxDQUFBOztBQUVELFVBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBOztBQUV6QixVQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUN0RTtHQUNGLENBQUE7bUJBQ2MsTUFBTSIsImZpbGUiOiJ3aXRoSW52YWRlcldlYXBvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWxsZXQgZnJvbSAnYnVsbGV0J1xubGV0IHdlYXBvbiA9IHtcbiAgc2hvb3QoZGlyZWN0aW9uID0gMSkge1xuICAgIGxldCBidWxsZXQgPSBuZXcgQnVsbGV0KFxuICAgICAgdGhpcy5nYW1lLFxuICAgICAgeyB4OiB0aGlzLmNlbnRlci54LCB5OiB0aGlzLmNlbnRlci55ICsgdGhpcy5zaXplLnkgLyAyICsgdGhpcy5wYXRyb2xZfSxcbiAgICAgIHsgeDogKE1hdGgucmFuZG9tKCkgLyAyKSAtIDAuMiwgeTogMiAqIGRpcmVjdGlvbiB9XG4gICAgKVxuICAgIC8vIHRoaXMgaXMgYSBzaWRlIGVmZmVjdFxuICAgIHRoaXMuZ2FtZS5hZGRCb2R5KGJ1bGxldClcbiAgICAvLyB0aGlzIGlzIGFsc28gYSBzaWRlIGVmZmVjdFxuICAgIHRoaXMuZ2FtZS5zaG9vdFNvdW5kKHRoaXMuZ2FtZS5hdWRpb0NvbnRleHQsIDAuMSwgdGhpcy5nYW1lLmdhaW5Ob2RlKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCB3ZWFwb25cbiJdfQ==