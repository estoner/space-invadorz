define('lodash/internal/isIterateeCall', ['exports', 'module', './isArrayLike', './isIndex', '../lang/isObject'], function (exports, module, _isArrayLike, _isIndex, _langIsObject) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _isArrayLike2 = _interopRequire(_isArrayLike);

  var _isIndex2 = _interopRequire(_isIndex);

  var _isObject = _interopRequire(_langIsObject);

  /**
   * Checks if the provided arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!(0, _isObject)(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number' ? (0, _isArrayLike2)(object) && (0, _isIndex2)(index, object.length) : type == 'string' && index in object) {
      var other = object[index];
      return value === value ? value === other : other !== other;
    }
    return false;
  }

  module.exports = isIterateeCall;
});