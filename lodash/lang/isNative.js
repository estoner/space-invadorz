define('lodash/lang/isNative', ['exports', 'module', '../string/escapeRegExp', '../internal/isObjectLike'], function (exports, module, _stringEscapeRegExp, _internalIsObjectLike) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _escapeRegExp = _interopRequire(_stringEscapeRegExp);

  var _isObjectLike = _interopRequire(_internalIsObjectLike);

  /** `Object#toString` result references. */
  var funcTag = '[object Function]';

  /** Used to detect host constructors (Safari > 5). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var fnToString = Function.prototype.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
   * of values.
   */
  var objToString = objectProto.toString;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' + (0, _escapeRegExp)(fnToString.call(hasOwnProperty)).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  /**
   * Checks if `value` is a native function.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
   * @example
   *
   * _.isNative(Array.prototype.push);
   * // => true
   *
   * _.isNative(_);
   * // => false
   */
  function isNative(value) {
    if (value == null) {
      return false;
    }
    if (objToString.call(value) == funcTag) {
      return reIsNative.test(fnToString.call(value));
    }
    return (0, _isObjectLike)(value) && reIsHostCtor.test(value);
  }

  module.exports = isNative;
});