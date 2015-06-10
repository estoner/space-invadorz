define('invader', ['exports', 'module', 'withDrawImage', 'withCollisionDestroys', 'withInvaderWeapon', 'lodash/object/extend'], function (exports, module, _withDrawImage, _withCollisionDestroys, _withInvaderWeapon, _lodashObjectExtend) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _withDrawImage2 = _interopRequire(_withDrawImage);

  var _withCollisionDestroys2 = _interopRequire(_withCollisionDestroys);

  var _withInvaderWeapon2 = _interopRequire(_withInvaderWeapon);

  var _extend = _interopRequire(_lodashObjectExtend);

  var Invader = (function () {
    function Invader(game, center) {
      _classCallCheck(this, Invader);

      this.game = game;
      this.center = center;
      this.size = { x: 19, y: 33 };
      this.patrolX = 0;
      this.patrolY = 20;
      this.speedX = 0.3;
      this.image = new Image(this.size.x, this.size.y);
      this.image.src = 'images/alien4x2.png';
      (0, _extend)(this, _withDrawImage2);
      (0, _extend)(this, _withCollisionDestroys2);
      (0, _extend)(this, _withInvaderWeapon2);
    }

    _createClass(Invader, [{
      key: 'update',
      value: function update() {
        if (this.patrolX < 0 || this.patrolX > 30) {
          this.speedX = -this.speedX;
          if (this.center.y < this.game.size.y - this.game.playerHeight) {
            this.center.y += this.patrolY;
          } else {
            this.game.victory = false;
          }
        }

        if (Math.random() > 0.995 && !this.game.invadersBelow(this)) {
          this.shoot();
        }

        this.center.x += this.speedX;
        this.patrolX += this.speedX;
      }
    }]);

    return Invader;
  })();

  module.exports = Invader;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFLcUIsT0FBTztBQUNmLGFBRFEsT0FBTyxDQUNkLElBQUksRUFBRSxNQUFNLEVBQUU7NEJBRFAsT0FBTzs7QUFFeEIsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7QUFDaEIsVUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7QUFDcEIsVUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFBO0FBQzVCLFVBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO0FBQ2hCLFVBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFBO0FBQ2pCLFVBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO0FBQ2pCLFVBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNoRCxVQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQTtBQUN0QyxtQkFBTyxJQUFJLGtCQUFnQixDQUFBO0FBQzNCLG1CQUFPLElBQUksMEJBQXdCLENBQUE7QUFDbkMsbUJBQU8sSUFBSSxzQkFBb0IsQ0FBQTtLQUNoQzs7aUJBYmtCLE9BQU87O2FBZXBCLGtCQUFHO0FBQ1AsWUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtBQUN6QyxjQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtBQUMxQixjQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQztBQUM1RCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQTtXQUM5QixNQUFNO0FBQ0wsZ0JBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtXQUMxQjtTQUVGOztBQUVELFlBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssSUFDckIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNsQyxjQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDYjs7QUFFRCxZQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFBO0FBQzVCLFlBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQTtPQUM1Qjs7O1dBakNrQixPQUFPOzs7bUJBQVAsT0FBTyIsImZpbGUiOiJpbnZhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdpdGhEcmF3SW1hZ2UgZnJvbSAnd2l0aERyYXdJbWFnZSdcbmltcG9ydCB3aXRoQ29sbGlzaW9uRGVzdHJveXMgZnJvbSAnd2l0aENvbGxpc2lvbkRlc3Ryb3lzJ1xuaW1wb3J0IHdpdGhJbnZhZGVyV2VhcG9uIGZyb20gJ3dpdGhJbnZhZGVyV2VhcG9uJ1xuaW1wb3J0IGV4dGVuZCBmcm9tICdsb2Rhc2gvb2JqZWN0L2V4dGVuZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52YWRlciB7XG4gIGNvbnN0cnVjdG9yKGdhbWUsIGNlbnRlcikge1xuICAgIHRoaXMuZ2FtZSA9IGdhbWVcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMuc2l6ZSA9IHsgeDogMTksIHk6IDMzIH1cbiAgICB0aGlzLnBhdHJvbFggPSAwXG4gICAgdGhpcy5wYXRyb2xZID0gMjBcbiAgICB0aGlzLnNwZWVkWCA9IDAuM1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UodGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICAgIHRoaXMuaW1hZ2Uuc3JjID0gXCJpbWFnZXMvYWxpZW40eDIucG5nXCJcbiAgICBleHRlbmQodGhpcywgd2l0aERyYXdJbWFnZSlcbiAgICBleHRlbmQodGhpcywgd2l0aENvbGxpc2lvbkRlc3Ryb3lzKVxuICAgIGV4dGVuZCh0aGlzLCB3aXRoSW52YWRlcldlYXBvbilcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5wYXRyb2xYIDwgMCB8fCB0aGlzLnBhdHJvbFggPiAzMCkge1xuICAgICAgdGhpcy5zcGVlZFggPSAtdGhpcy5zcGVlZFhcbiAgICAgIGlmICh0aGlzLmNlbnRlci55IDwgdGhpcy5nYW1lLnNpemUueSAtIHRoaXMuZ2FtZS5wbGF5ZXJIZWlnaHQpe1xuICAgICAgICB0aGlzLmNlbnRlci55ICs9IHRoaXMucGF0cm9sWVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nYW1lLnZpY3RvcnkgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjk5NSAmJlxuICAgICAgICAhdGhpcy5nYW1lLmludmFkZXJzQmVsb3codGhpcykpIHtcbiAgICAgIHRoaXMuc2hvb3QoKVxuICAgIH1cblxuICAgIHRoaXMuY2VudGVyLnggKz0gdGhpcy5zcGVlZFhcbiAgICB0aGlzLnBhdHJvbFggKz0gdGhpcy5zcGVlZFhcbiAgfVxuXG59XG5cblxuIl19