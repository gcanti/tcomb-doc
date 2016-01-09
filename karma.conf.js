var webpack = require('webpack');
var path = require('path');

module.exports = function getConfig(config) {
  config.set({
    browserNoActivityTimeout: 30000,
    browsers: [process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome'],
    singleRun: true,
    frameworks: ['tap'],
    files: [
      'test/index.js'
    ],
    preprocessors: {
      'test/index.js': ['webpack']
    },
    webpack: {
      node: {
        fs: 'empty'
      },
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            include: path.resolve('lib'),
            loader: 'isparta'
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('test')
        })
      ]
    },
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['dots', 'coverage'],
    coverageReporter: {
      type: 'text'
    }
  });
};
