define('lodash/internal/isArrayLike', ['exports', 'module', './getLength', './isLength'], function (exports, module, _getLength, _isLength) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _getLength2 = _interopRequire(_getLength);

  var _isLength2 = _interopRequire(_isLength);

  /**
   * Checks if `value` is array-like.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   */
  function isArrayLike(value) {
    return value != null && (0, _isLength2)((0, _getLength2)(value));
  }

  module.exports = isArrayLike;
});