define('lodash/internal/createAssigner', ['exports', 'module', './bindCallback', './isIterateeCall', '../function/restParam'], function (exports, module, _bindCallback, _isIterateeCall, _functionRestParam) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _bindCallback2 = _interopRequire(_bindCallback);

  var _isIterateeCall2 = _interopRequire(_isIterateeCall);

  var _restParam = _interopRequire(_functionRestParam);

  /**
   * Creates a function that assigns properties of source object(s) to a given
   * destination object.
   *
   * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return (0, _restParam)(function (object, sources) {
      var index = -1,
          length = object == null ? 0 : sources.length,
          customizer = length > 2 ? sources[length - 2] : undefined,
          guard = length > 2 ? sources[2] : undefined,
          thisArg = length > 1 ? sources[length - 1] : undefined;

      if (typeof customizer == 'function') {
        customizer = (0, _bindCallback2)(customizer, thisArg, 5);
        length -= 2;
      } else {
        customizer = typeof thisArg == 'function' ? thisArg : undefined;
        length -= customizer ? 1 : 0;
      }
      if (guard && (0, _isIterateeCall2)(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, customizer);
        }
      }
      return object;
    });
  }

  module.exports = createAssigner;
});