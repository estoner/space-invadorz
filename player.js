define('player', ['exports', 'module', 'keyboarder', 'touch', 'withCollisionDestroys', 'withDrawImage', 'lodash/object/extend'], function (exports, module, _keyboarder, _touch, _withCollisionDestroys, _withDrawImage, _lodashObjectExtend) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _Keyboarder = _interopRequire(_keyboarder);

  var _Touch = _interopRequire(_touch);

  var _withCollisionDestroys2 = _interopRequire(_withCollisionDestroys);

  var _withDrawImage2 = _interopRequire(_withDrawImage);

  var _extend = _interopRequire(_lodashObjectExtend);

  var Player = (function () {
    function Player(game) {
      _classCallCheck(this, Player);

      this.game = game;
      this.size = { x: 14, y: 34 };
      this.center = { x: this.game.size.x / 2, y: this.game.size.y - this.game.playerHeight };
      this.keyboarder = new _Keyboarder();
      this.touch = new _Touch();
      this.lastShotFired = 0;
      this.image = new Image(this.size.x, this.size.y);
      this.image.src = 'images/smallfighter0005x2.png';
      (0, _extend)(this, _withDrawImage2);
      (0, _extend)(this, _withCollisionDestroys2);
      (0, _extend)(this, this.game.ordnanceAdvancer.next().value);
    }

    _createClass(Player, [{
      key: 'update',
      value: function update() {
        var speed = 3;
        if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
          if (this.center.x > speed) {
            this.center.x -= speed;
          }
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
          if (this.center.x < this.game.size.x) {
            this.center.x += speed;
          }
        }

        if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
          this.shoot();
        }

        if (this.touch.state()) {
          var ts = this.touch.state().touches[0];
          this.center.x = ts.pageX;
          this.shoot();
        }
      }
    }]);

    return Player;
  })();

  module.exports = Player;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BTXFCLE1BQU07QUFDZCxhQURRLE1BQU0sQ0FDYixJQUFJLEVBQUU7NEJBREMsTUFBTTs7QUFFdkIsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7QUFDaEIsVUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFBO0FBQzVCLFVBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7QUFDdkYsVUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBZ0IsQ0FBQTtBQUNsQyxVQUFJLENBQUMsS0FBSyxHQUFHLFlBQVcsQ0FBQTtBQUN4QixVQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQTtBQUN0QixVQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDaEQsVUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsK0JBQStCLENBQUE7QUFDaEQsbUJBQU8sSUFBSSxrQkFBZ0IsQ0FBQTtBQUMzQixtQkFBTyxJQUFJLDBCQUF3QixDQUFBO0FBQ25DLG1CQUFPLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3REOztpQkFia0IsTUFBTTs7YUFlbkIsa0JBQUc7QUFDUCxZQUFNLEtBQUssR0FBRyxDQUFDLENBQUE7QUFDZixZQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3JELGNBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFDO0FBQ3hCLGdCQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUE7V0FDdkI7U0FDRixNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDN0QsY0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUM7QUFDbkMsZ0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQTtXQUN2QjtTQUNGOztBQUVELFlBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDdEQsY0FBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2I7O0FBRUQsWUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFO0FBQ3RCLGNBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3RDLGNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUE7QUFDeEIsY0FBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2I7T0FFRjs7O1dBckNrQixNQUFNOzs7bUJBQU4sTUFBTSIsImZpbGUiOiJwbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS2V5Ym9hcmRlciBmcm9tICdrZXlib2FyZGVyJ1xuaW1wb3J0IFRvdWNoIGZyb20gJ3RvdWNoJ1xuaW1wb3J0IHdpdGhDb2xsaXNpb25EZXN0cm95cyBmcm9tICd3aXRoQ29sbGlzaW9uRGVzdHJveXMnXG5pbXBvcnQgd2l0aERyYXdJbWFnZSBmcm9tICd3aXRoRHJhd0ltYWdlJ1xuaW1wb3J0IGV4dGVuZCBmcm9tICdsb2Rhc2gvb2JqZWN0L2V4dGVuZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgIHRoaXMuZ2FtZSA9IGdhbWVcbiAgICB0aGlzLnNpemUgPSB7IHg6IDE0LCB5OiAzNCB9XG4gICAgdGhpcy5jZW50ZXIgPSB7IHg6IHRoaXMuZ2FtZS5zaXplLnggLyAyLCB5OiB0aGlzLmdhbWUuc2l6ZS55IC0gdGhpcy5nYW1lLnBsYXllckhlaWdodCB9XG4gICAgdGhpcy5rZXlib2FyZGVyID0gbmV3IEtleWJvYXJkZXIoKVxuICAgIHRoaXMudG91Y2ggPSBuZXcgVG91Y2goKVxuICAgIHRoaXMubGFzdFNob3RGaXJlZCA9IDBcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgICB0aGlzLmltYWdlLnNyYyA9IFwiaW1hZ2VzL3NtYWxsZmlnaHRlcjAwMDV4Mi5wbmdcIlxuICAgIGV4dGVuZCh0aGlzLCB3aXRoRHJhd0ltYWdlKVxuICAgIGV4dGVuZCh0aGlzLCB3aXRoQ29sbGlzaW9uRGVzdHJveXMpXG4gICAgZXh0ZW5kKHRoaXMsIHRoaXMuZ2FtZS5vcmRuYW5jZUFkdmFuY2VyLm5leHQoKS52YWx1ZSlcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBzcGVlZCA9IDNcbiAgICBpZiAodGhpcy5rZXlib2FyZGVyLmlzRG93bih0aGlzLmtleWJvYXJkZXIuS0VZUy5MRUZUKSkge1xuICAgICAgaWYgKHRoaXMuY2VudGVyLnggPiBzcGVlZCl7XG4gICAgICAgIHRoaXMuY2VudGVyLnggLT0gc3BlZWRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMua2V5Ym9hcmRlci5pc0Rvd24odGhpcy5rZXlib2FyZGVyLktFWVMuUklHSFQpKSB7XG4gICAgICBpZiAodGhpcy5jZW50ZXIueCA8IHRoaXMuZ2FtZS5zaXplLngpe1xuICAgICAgICB0aGlzLmNlbnRlci54ICs9IHNwZWVkXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMua2V5Ym9hcmRlci5pc0Rvd24odGhpcy5rZXlib2FyZGVyLktFWVMuU1BBQ0UpKSB7XG4gICAgICB0aGlzLnNob290KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b3VjaC5zdGF0ZSgpKSB7XG4gICAgICBsZXQgdHMgPSB0aGlzLnRvdWNoLnN0YXRlKCkudG91Y2hlc1swXVxuICAgICAgdGhpcy5jZW50ZXIueCA9IHRzLnBhZ2VYXG4gICAgICB0aGlzLnNob290KClcbiAgICB9XG5cbiAgfVxuXG59XG5cbiJdfQ==