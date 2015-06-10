define("draw", ["exports", "module"], function (exports, module) {
  "use strict";

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Draw = (function () {
    function Draw() {
      _classCallCheck(this, Draw);
    }

    _createClass(Draw, null, [{
      key: "drawRect",
      value: function drawRect(screen, body, color) {
        screen.fillStyle = color;
        screen.fillRect(body.center.x - body.size.x / 2, body.center.y - body.size.y / 2, body.size.x, body.size.y);
      }
    }, {
      key: "drawImage",
      value: function drawImage(screen, image, center, size) {
        screen.drawImage(image, center.x - size.x / 2, center.y, size.x, size.y);
      }
    }]);

    return Draw;
  })();

  module.exports = Draw;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztNQUFxQixJQUFJO2FBQUosSUFBSTs0QkFBSixJQUFJOzs7aUJBQUosSUFBSTs7YUFDUixrQkFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNuQyxjQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtBQUN4QixjQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQzdCOzs7YUFDZSxtQkFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDNUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQ1AsTUFBTSxDQUFDLENBQUMsR0FBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQUFBQyxFQUN2QixNQUFNLENBQUMsQ0FBQyxFQUNSLElBQUksQ0FBQyxDQUFDLEVBQ04sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO09BQ3ZCOzs7V0Fka0IsSUFBSTs7O21CQUFKLElBQUkiLCJmaWxlIjoiZHJhdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcge1xuICBzdGF0aWMgZHJhd1JlY3Qoc2NyZWVuLCBib2R5LCBjb2xvcikge1xuICAgIHNjcmVlbi5maWxsU3R5bGUgPSBjb2xvclxuICAgIHNjcmVlbi5maWxsUmVjdChib2R5LmNlbnRlci54IC0gYm9keS5zaXplLnggLyAyLFxuICAgICAgICAgICAgICAgICAgICBib2R5LmNlbnRlci55IC0gYm9keS5zaXplLnkgLyAyLFxuICAgICAgICAgICAgICAgICAgICBib2R5LnNpemUueCxcbiAgICAgICAgICAgICAgICAgICAgYm9keS5zaXplLnkpXG4gIH1cbiAgc3RhdGljIGRyYXdJbWFnZShzY3JlZW4sIGltYWdlLCBjZW50ZXIsIHNpemUpIHtcbiAgICBzY3JlZW4uZHJhd0ltYWdlKGltYWdlLFxuICAgICAgICAgICAgICAgICAgIGNlbnRlci54IC0gKHNpemUueCAvIDIpLFxuICAgICAgICAgICAgICAgICAgIGNlbnRlci55LFxuICAgICAgICAgICAgICAgICAgIHNpemUueCxcbiAgICAgICAgICAgICAgICAgICBzaXplLnkpXG4gIH1cbn1cbiJdfQ==