define('touch', ['exports', 'module'], function (exports, module) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Touch = (function () {
    function Touch() {
      _classCallCheck(this, Touch);

      this.touchState = false;
      var self = this;
      var canvas = document.getElementById('screen');
      canvas.addEventListener('touchmove', function (event) {
        self.setState(event);
      }, false);
      canvas.addEventListener('touchend', function () {
        self.setState(false);
      }, false);
    }

    _createClass(Touch, [{
      key: 'setState',
      value: function setState(e) {
        this.touchState = e;
      }
    }, {
      key: 'state',
      value: function state() {
        return this.touchState;
      }
    }]);

    return Touch;
  })();

  module.exports = Touch;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdWNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7TUFBcUIsS0FBSztBQUNiLGFBRFEsS0FBSyxHQUNWOzRCQURLLEtBQUs7O0FBRXRCLFVBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO0FBQ3ZCLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtBQUNmLFVBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDaEQsWUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFTLEtBQUssRUFBRTtBQUNuRCxZQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO09BQ3JCLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDVCxZQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFlBQVc7QUFDN0MsWUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtPQUNyQixFQUFFLEtBQUssQ0FBQyxDQUFBO0tBQ1Y7O2lCQVhrQixLQUFLOzthQWFoQixrQkFBQyxDQUFDLEVBQUM7QUFDVCxZQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtPQUNwQjs7O2FBRUksaUJBQUU7QUFDTCxlQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7T0FDdkI7OztXQW5Ca0IsS0FBSzs7O21CQUFMLEtBQUsiLCJmaWxlIjoidG91Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb3VjaCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG91Y2hTdGF0ZSA9IGZhbHNlXG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY3JlZW5cIilcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoZXZlbnQpXG4gICAgfSwgZmFsc2UpXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKGZhbHNlKVxuICAgIH0sIGZhbHNlKVxuICB9XG5cbiAgc2V0U3RhdGUoZSl7XG4gICAgdGhpcy50b3VjaFN0YXRlID0gZVxuICB9XG5cbiAgc3RhdGUoKXtcbiAgICByZXR1cm4gdGhpcy50b3VjaFN0YXRlXG4gIH1cbn1cblxuIl19