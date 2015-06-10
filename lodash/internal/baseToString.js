define('lodash/internal/baseToString', ['exports', 'module'], function (exports, module) {
  /**
   * Converts `value` to a string if it's not one. An empty string is returned
   * for `null` or `undefined` values.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  'use strict';

  function baseToString(value) {
    if (typeof value == 'string') {
      return value;
    }
    return value == null ? '' : value + '';
  }

  module.exports = baseToString;
});