define('keyboarder', ['exports', 'module'], function (exports, module) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Keyboarder = (function () {
    function Keyboarder() {
      var _this = this;

      _classCallCheck(this, Keyboarder);

      this.KEYS = {
        LEFT: 37,
        RIGHT: 39,
        SPACE: 32,
        R: 82,
        M: 77,
        P: 80
      };
      this.keyState = {};
      window.addEventListener('keydown', function (e) {
        _this.keyState[e.keyCode] = true;
      });
      window.addEventListener('keyup', function (e) {
        _this.keyState[e.keyCode] = false;
      });
    }

    _createClass(Keyboarder, [{
      key: 'isDown',
      value: function isDown(keyCode) {
        return this.keyState[keyCode] === true;
      }
    }]);

    return Keyboarder;
  })();

  module.exports = Keyboarder;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleWJvYXJkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztNQUFxQixVQUFVO0FBQ2xCLGFBRFEsVUFBVSxHQUNmOzs7NEJBREssVUFBVTs7QUFFM0IsVUFBSSxDQUFDLElBQUksR0FBRztBQUNWLFlBQUksRUFBRSxFQUFFO0FBQ1IsYUFBSyxFQUFFLEVBQUU7QUFDVCxhQUFLLEVBQUUsRUFBRTtBQUNULFNBQUMsRUFBRSxFQUFFO0FBQ0wsU0FBQyxFQUFFLEVBQUU7QUFDTCxTQUFDLEVBQUUsRUFBRTtPQUNOLENBQUE7QUFDRCxVQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtBQUNsQixZQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUEsQ0FBQyxFQUFJO0FBQ3RDLGNBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUE7T0FDaEMsQ0FBQyxDQUFBO0FBQ0YsWUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUMsRUFBSTtBQUNwQyxjQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFBO09BQ2pDLENBQUMsQ0FBQTtLQUNIOztpQkFqQmtCLFVBQVU7O2FBbUJ0QixnQkFBQyxPQUFPLEVBQUU7QUFDZixlQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFBO09BQ3ZDOzs7V0FyQmtCLFVBQVU7OzttQkFBVixVQUFVIiwiZmlsZSI6ImtleWJvYXJkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5LRVlTID0ge1xuICAgICAgTEVGVDogMzcsXG4gICAgICBSSUdIVDogMzksXG4gICAgICBTUEFDRTogMzIsXG4gICAgICBSOiA4MixcbiAgICAgIE06IDc3LFxuICAgICAgUDogODBcbiAgICB9XG4gICAgdGhpcy5rZXlTdGF0ZSA9IHt9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgIHRoaXMua2V5U3RhdGVbZS5rZXlDb2RlXSA9IHRydWVcbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgdGhpcy5rZXlTdGF0ZVtlLmtleUNvZGVdID0gZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgaXNEb3duIChrZXlDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMua2V5U3RhdGVba2V5Q29kZV0gPT09IHRydWVcbiAgfVxuXG59XG5cbiJdfQ==