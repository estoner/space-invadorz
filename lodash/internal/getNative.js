define('lodash/internal/getNative', ['exports', 'module', '../lang/isNative'], function (exports, module, _langIsNative) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _isNative = _interopRequire(_langIsNative);

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = object == null ? undefined : object[key];
    return (0, _isNative)(value) ? value : undefined;
  }

  module.exports = getNative;
});