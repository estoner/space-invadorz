define('lodash/internal/assignWith', ['exports', 'module', '../object/keys'], function (exports, module, _objectKeys) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _keys = _interopRequire(_objectKeys);

  /**
   * A specialized version of `_.assign` for customizing assigned values without
   * support for argument juggling, multiple sources, and `this` binding `customizer`
   * functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {Function} customizer The function to customize assigned values.
   * @returns {Object} Returns `object`.
   */
  function assignWith(object, source, customizer) {
    var index = -1,
        props = (0, _keys)(source),
        length = props.length;

    while (++index < length) {
      var key = props[index],
          value = object[key],
          result = customizer(value, source[key], key, object, source);

      if ((result === result ? result !== value : value === value) || value === undefined && !(key in object)) {
        object[key] = result;
      }
    }
    return object;
  }

  module.exports = assignWith;
});