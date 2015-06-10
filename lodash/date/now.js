define('lodash/date/now', ['exports', 'module', '../internal/getNative'], function (exports, module, _internalGetNative) {
  'use strict';

  function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

  var _getNative = _interopRequire(_internalGetNative);

  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeNow = (0, _getNative)(Date, 'now');

  /**
   * Gets the number of milliseconds that have elapsed since the Unix epoch
   * (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @category Date
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => logs the number of milliseconds it took for the deferred function to be invoked
   */
  var now = nativeNow || function () {
    return new Date().getTime();
  };

  module.exports = now;
});