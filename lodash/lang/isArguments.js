define('lodash/lang/isArguments', ['exports', 'module', '../internal/isArrayLike', '../internal/isObjectLike'], function (exports, module, _internalIsArrayLike, _internalIsObjectLike) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _isArrayLike = _interopRequire(_internalIsArrayLike);

  var _isObjectLike = _interopRequire(_internalIsObjectLike);

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
   * of values.
   */
  var objToString = objectProto.toString;

  /**
   * Checks if `value` is classified as an `arguments` object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    return (0, _isObjectLike)(value) && (0, _isArrayLike)(value) && objToString.call(value) == argsTag;
  }

  module.exports = isArguments;
});