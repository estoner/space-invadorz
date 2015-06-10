define('lodash/object/keys', ['exports', 'module', '../internal/getNative', '../internal/isArrayLike', '../lang/isObject', '../internal/shimKeys'], function (exports, module, _internalGetNative, _internalIsArrayLike, _langIsObject, _internalShimKeys) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _getNative = _interopRequire(_internalGetNative);

  var _isArrayLike = _interopRequire(_internalIsArrayLike);

  var _isObject = _interopRequire(_langIsObject);

  var _shimKeys = _interopRequire(_internalShimKeys);

  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeKeys = (0, _getNative)(Object, 'keys');

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.keys)
   * for more details.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  var keys = !nativeKeys ? _shimKeys : function (object) {
    var Ctor = object == null ? null : object.constructor;
    if (typeof Ctor == 'function' && Ctor.prototype === object || typeof object != 'function' && (0, _isArrayLike)(object)) {
      return (0, _shimKeys)(object);
    }
    return (0, _isObject)(object) ? nativeKeys(object) : [];
  };

  module.exports = keys;
});