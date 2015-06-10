define('lodash/internal/baseAssign', ['exports', 'module', './baseCopy', '../object/keys'], function (exports, module, _baseCopy, _objectKeys) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _baseCopy2 = _interopRequire(_baseCopy);

  var _keys = _interopRequire(_objectKeys);

  /**
   * The base implementation of `_.assign` without support for argument juggling,
   * multiple sources, and `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return source == null ? object : (0, _baseCopy2)(source, (0, _keys)(source), object);
  }

  module.exports = baseAssign;
});