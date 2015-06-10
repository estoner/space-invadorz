define('lodash/lang/isArray', ['exports', 'module', '../internal/getNative', '../internal/isLength', '../internal/isObjectLike'], function (exports, module, _internalGetNative, _internalIsLength, _internalIsObjectLike) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _getNative = _interopRequire(_internalGetNative);

  var _isLength = _interopRequire(_internalIsLength);

  var _isObjectLike = _interopRequire(_internalIsObjectLike);

  /** `Object#toString` result references. */
  var arrayTag = '[object Array]';

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
   * of values.
   */
  var objToString = objectProto.toString;

  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeIsArray = (0, _getNative)(Array, 'isArray');

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(function() { return arguments; }());
   * // => false
   */
  var isArray = nativeIsArray || function (value) {
    return (0, _isObjectLike)(value) && (0, _isLength)(value.length) && objToString.call(value) == arrayTag;
  };

  module.exports = isArray;
});