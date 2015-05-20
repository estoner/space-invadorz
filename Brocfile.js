const funnel = require('broccoli-funnel');
const concat = require('broccoli-concat');
const mergeTrees = require('broccoli-merge-trees');
const esTranspiler = require('broccoli-babel-transpiler');
const pkg = require('./package.json');

const src = 'src';

const indexHtml = funnel(src, {
  files: ['index.html']
});

const loader = funnel('./node_modules/es6-module-loader/dist/', {
  files: ['es6-module-loader.js','es6-module-loader.js.map']
});

const systemjs = funnel('./node_modules/systemjs/dist/', {
  files: ['system.js','system.js.map']
});

const js = esTranspiler(src, {
  stage: 0,
  moduleIds: true,
  modules: 'system',

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

//const main = concat(js, {
  //inputFiles: [
    //'**/*.js'
  //],
  //outputFile: '/' + pkg.name + '.js'
//});

const main = concat(js, {
  inputFiles: [
    '**/*.js'
  ],
  outputFile: '/' + pkg.name + '.js'
});

module.exports = mergeTrees([js, indexHtml, loader, systemjs], {overwrite:true});
