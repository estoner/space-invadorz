define('lodash/object/keysIn', ['exports', 'module', '../lang/isArguments', '../lang/isArray', '../internal/isIndex', '../internal/isLength', '../lang/isObject'], function (exports, module, _langIsArguments, _langIsArray, _internalIsIndex, _internalIsLength, _langIsObject) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _isArguments = _interopRequire(_langIsArguments);

  var _isArray = _interopRequire(_langIsArray);

  var _isIndex = _interopRequire(_internalIsIndex);

  var _isLength = _interopRequire(_internalIsLength);

  var _isObject = _interopRequire(_langIsObject);

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
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
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    if (object == null) {
      return [];
    }
    if (!(0, _isObject)(object)) {
      object = Object(object);
    }
    var length = object.length;
    length = length && (0, _isLength)(length) && ((0, _isArray)(object) || (0, _isArguments)(object)) && length || 0;

    var Ctor = object.constructor,
        index = -1,
        isProto = typeof Ctor == 'function' && Ctor.prototype === object,
        result = Array(length),
        skipIndexes = length > 0;

    while (++index < length) {
      result[index] = index + '';
    }
    for (var key in object) {
      if (!(skipIndexes && (0, _isIndex)(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  module.exports = keysIn;
});