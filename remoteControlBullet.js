define('remoteControlBullet', ['exports', 'module', 'withDrawRect', 'withCollisionDestroys', 'lodash/object/extend'], function (exports, module, _withDrawRect, _withCollisionDestroys, _lodashObjectExtend) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _withDrawRect2 = _interopRequire(_withDrawRect);

  var _withCollisionDestroys2 = _interopRequire(_withCollisionDestroys);

  var _extend = _interopRequire(_lodashObjectExtend);

  var RemoteControlBullet = (function () {
    function RemoteControlBullet(game, center, velocity, _x, player) {
      var size = arguments[3] === undefined ? { x: 3, y: 3 } : arguments[3];

      _classCallCheck(this, RemoteControlBullet);

      this.game = game;
      this.center = center;
      this.size = size;
      this.velocity = velocity;
      this.color = 'yellow';
      this.player = player;
      (0, _extend)(this, _withDrawRect2);
      (0, _extend)(this, _withCollisionDestroys2);
    }

    _createClass(RemoteControlBullet, [{
      key: 'update',
      value: function update() {
        this.center.x = this.player.center.x;
        this.center.y += this.velocity.y;

        var screenRect = {
          center: { x: this.game.size.x / 2, y: this.game.size.y / 2 },
          size: this.game.size
        };

        if (!this.game.isColliding(this, screenRect)) {
          this.game.removeBody(this);
        }
      }
    }]);

    return RemoteControlBullet;
  })();

  module.exports = RemoteControlBullet;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW90ZUNvbnRyb2xCdWxsZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O01BSXFCLG1CQUFtQjtBQUMzQixhQURRLG1CQUFtQixDQUMxQixJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsTUFBd0IsTUFBTSxFQUFFO1VBQTlCLElBQUksZ0NBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7OzRCQURyQyxtQkFBbUI7O0FBRXBDLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0FBQ2hCLFVBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0FBQ3BCLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0FBQ2hCLFVBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0FBQ3hCLFVBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBO0FBQ3JCLFVBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0FBQ3BCLG1CQUFPLElBQUksaUJBQWUsQ0FBQTtBQUMxQixtQkFBTyxJQUFJLDBCQUF3QixDQUFBO0tBQ3BDOztpQkFWa0IsbUJBQW1COzthQVloQyxrQkFBRztBQUNQLFlBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtBQUNwQyxZQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTs7QUFFaEMsWUFBSSxVQUFVLEdBQUc7QUFDZixnQkFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDNUQsY0FBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtTQUNyQixDQUFBOztBQUVELFlBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUU7QUFDNUMsY0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDM0I7T0FDRjs7O1dBeEJrQixtQkFBbUI7OzttQkFBbkIsbUJBQW1CIiwiZmlsZSI6InJlbW90ZUNvbnRyb2xCdWxsZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aERyYXdSZWN0IGZyb20gJ3dpdGhEcmF3UmVjdCdcbmltcG9ydCB3aXRoQ29sbGlzaW9uRGVzdHJveXMgZnJvbSAnd2l0aENvbGxpc2lvbkRlc3Ryb3lzJ1xuaW1wb3J0IGV4dGVuZCBmcm9tICdsb2Rhc2gvb2JqZWN0L2V4dGVuZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVtb3RlQ29udHJvbEJ1bGxldCB7XG4gIGNvbnN0cnVjdG9yKGdhbWUsIGNlbnRlciwgdmVsb2NpdHksIHNpemUgPSB7IHg6IDMsIHk6IDN9LCBwbGF5ZXIpIHtcbiAgICB0aGlzLmdhbWUgPSBnYW1lXG4gICAgdGhpcy5jZW50ZXIgPSBjZW50ZXJcbiAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5XG4gICAgdGhpcy5jb2xvciA9IFwieWVsbG93XCJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllclxuICAgIGV4dGVuZCh0aGlzLCB3aXRoRHJhd1JlY3QpXG4gICAgZXh0ZW5kKHRoaXMsIHdpdGhDb2xsaXNpb25EZXN0cm95cylcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmNlbnRlci54ID0gdGhpcy5wbGF5ZXIuY2VudGVyLnhcbiAgICB0aGlzLmNlbnRlci55ICs9IHRoaXMudmVsb2NpdHkueVxuXG4gICAgbGV0IHNjcmVlblJlY3QgPSB7XG4gICAgICBjZW50ZXI6IHsgeDogdGhpcy5nYW1lLnNpemUueCAvIDIsIHk6IHRoaXMuZ2FtZS5zaXplLnkgLyAyIH0sXG4gICAgICBzaXplOiB0aGlzLmdhbWUuc2l6ZVxuICAgIH1cblxuICAgIGlmICghdGhpcy5nYW1lLmlzQ29sbGlkaW5nKHRoaXMsIHNjcmVlblJlY3QpKSB7XG4gICAgICB0aGlzLmdhbWUucmVtb3ZlQm9keSh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4iXX0=