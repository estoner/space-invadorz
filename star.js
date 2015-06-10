define('star', ['exports', 'module', 'withDrawRect', 'lodash/object/extend'], function (exports, module, _withDrawRect, _lodashObjectExtend) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _withDrawRect2 = _interopRequire(_withDrawRect);

  var _extend = _interopRequire(_lodashObjectExtend);

  var Star = (function () {
    function Star(game, center) {
      _classCallCheck(this, Star);

      this.game = game;
      this.center = center;
      this.size = { x: 2, y: 2 };
      this.color = '#dddddd';
      (0, _extend)(this, _withDrawRect2);
    }

    _createClass(Star, null, [{
      key: 'createStars',
      value: function createStars(game, numStars) {
        var stars = [];
        for (var i = 0; i < numStars; i++) {
          var x = Math.random() * game.size.x;
          var y = Math.random() * (game.size.y - game.playerHeight);
          stars.push(new Star(game, { x: x, y: y }));
        }
        return stars;
      }
    }]);

    return Star;
  })();

  module.exports = Star;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQUdxQixJQUFJO0FBQ1osYUFEUSxJQUFJLENBQ1gsSUFBSSxFQUFFLE1BQU0sRUFBRTs0QkFEUCxJQUFJOztBQUVyQixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtBQUNoQixVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtBQUNwQixVQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUE7QUFDMUIsVUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7QUFDdEIsbUJBQU8sSUFBSSxpQkFBZSxDQUFBO0tBQzNCOztpQkFQa0IsSUFBSTs7YUFTTCxxQkFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQ2pDLFlBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQTtBQUNkLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDakMsY0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQ25DLGNBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFBLEFBQUMsQ0FBQTtBQUN6RCxlQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtTQUMxQztBQUNELGVBQU8sS0FBSyxDQUFBO09BQ2I7OztXQWpCa0IsSUFBSTs7O21CQUFKLElBQUkiLCJmaWxlIjoic3Rhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aXRoRHJhd1JlY3QgZnJvbSAnd2l0aERyYXdSZWN0J1xuaW1wb3J0IGV4dGVuZCBmcm9tICdsb2Rhc2gvb2JqZWN0L2V4dGVuZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhciB7XG4gIGNvbnN0cnVjdG9yKGdhbWUsIGNlbnRlcikge1xuICAgIHRoaXMuZ2FtZSA9IGdhbWVcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMuc2l6ZSA9IHsgeDogMiwgeTogMiB9XG4gICAgdGhpcy5jb2xvciA9IFwiI2RkZGRkZFwiXG4gICAgZXh0ZW5kKHRoaXMsIHdpdGhEcmF3UmVjdClcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVTdGFycyhnYW1lLCBudW1TdGFycykge1xuICAgIGxldCBzdGFycyA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TdGFyczsgaSsrKSB7XG4gICAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCkgKiBnYW1lLnNpemUueFxuICAgICAgbGV0IHkgPSBNYXRoLnJhbmRvbSgpICogKGdhbWUuc2l6ZS55IC0gZ2FtZS5wbGF5ZXJIZWlnaHQpXG4gICAgICBzdGFycy5wdXNoKG5ldyBTdGFyKGdhbWUsIHsgeDogeCwgeTogeX0pKVxuICAgIH1cbiAgICByZXR1cm4gc3RhcnNcbiAgfVxuXG59XG5cbiJdfQ==