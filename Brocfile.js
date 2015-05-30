const funnel = require('broccoli-funnel');
const concat = require('broccoli-concat');
const eslint = require('broccoli-lint-eslint');
const mergeTrees = require('broccoli-merge-trees');
const esTranspiler = require('broccoli-babel-transpiler');
const pkg = require('./package.json');

const src = 'src';

const indexHtml = funnel(src, {
  files: ['index.html']
});

const imageDir = funnel('./images', {
  destDir: 'images'
});

const loader = funnel('./node_modules/es6-module-loader/dist/', {
  files: ['es6-module-loader.js','es6-module-loader.js.map']
});

const systemjs = funnel('./node_modules/systemjs/dist/', {
  files: ['system.js','system.js.map']
});

const requirejs = funnel('./node_modules/requirejs/', {
  files: ['require.js']
});

const lodash = funnel('./node_modules/lodash-es', {
  destDir: 'lodash',
  files: ['function/debounce.js',
          'lang/isObject.js',
          'date/now.js',
          'internal/getNative.js',
          'lang/isNative.js',
          'string/escapeRegExp.js',
          'internal/isObjectLike.js',
          'object/assign.js',
          'internal/assignWith.js',
          'internal/baseAssign.js',
          'internal/createAssigner.js',
          'object/keys.js',
          'internal/baseCopy.js',
          'internal/bindCallback.js',
          'internal/isIterateeCall.js',
          'function/restParam.js',
          'internal/isArrayLike.js',
          'internal/shimKeys.js', // start with this one
          'utility/identity.js',
          'internal/isObject.js',
          'internal/getLength.js',
          'internal/isLength.js',
          'internal/baseToString.js'
         ]
});

const lintedJs = eslint(src, {});

const js = esTranspiler(lintedJs, {
  stage: 0,
  moduleIds: true,
  modules: 'amd',

  // Transforms /index.js files to use their containing directory name
  //getModuleId: function (name) {
    //name = pkg.name + '/' + name;
    //return name.replace(/\/index$/, '');
  //},

  // Fix relative imports inside /index's
  resolveModuleSource: function (source, filename) {
    var match = filename.match(/(.+)\/index\.\S+$/i);

    // is this an import inside an /index file?
    if (match) {
      var path = match[1];
      return source
        .replace(/^\.\//, path + '/')
        .replace(/^\.\.\//, '');
    } else {
      return source;
    }
  }
});

const tpLodash = esTranspiler(lodash, {
  stage: 0,
  moduleIds: true,
  modules: 'amd'
});

const main = concat(js, {
  inputFiles: [
    '**/*.js'
  ],
  outputFile: '/' + pkg.name + '.js'
});

module.exports = mergeTrees([js, indexHtml, imageDir, requirejs, tpLodash], {overwrite:true});
