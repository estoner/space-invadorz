define('lodash/internal/shimKeys', ['exports', 'module', '../lang/isArguments', '../lang/isArray', './isIndex', './isLength', '../object/keysIn'], function (exports, module, _langIsArguments, _langIsArray, _isIndex, _isLength, _objectKeysIn) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _isArguments = _interopRequire(_langIsArguments);

  var _isArray = _interopRequire(_langIsArray);

  var _isIndex2 = _interopRequire(_isIndex);

  var _isLength2 = _interopRequire(_isLength);

  var _keysIn = _interopRequire(_objectKeysIn);

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * A fallback implementation of `Object.keys` which creates an array of the
   * own enumerable property names of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function shimKeys(object) {
    var props = (0, _keysIn)(object),
        propsLength = props.length,
        length = propsLength && object.length;

    var allowIndexes = !!length && (0, _isLength2)(length) && ((0, _isArray)(object) || (0, _isArguments)(object));

    var index = -1,
        result = [];

    while (++index < propsLength) {
      var key = props[index];
      if (allowIndexes && (0, _isIndex2)(key, length) || hasOwnProperty.call(object, key)) {
        result.push(key);
      }
    }
    return result;
  }

  module.exports = shimKeys;
});