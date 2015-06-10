define('lodash/internal/getLength', ['exports', 'module', './baseProperty'], function (exports, module, _baseProperty) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _baseProperty2 = _interopRequire(_baseProperty);

  /**
   * Gets the "length" property value of `object`.
   *
   * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
   * that affects Safari on at least iOS 8.1-8.3 ARM64.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {*} Returns the "length" value.
   */
  var getLength = (0, _baseProperty2)('length');

  module.exports = getLength;
});