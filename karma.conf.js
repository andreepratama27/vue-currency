module.exports = config => {

  config.set({

    browsers: [
      'PhantomJS'
    ],

    frameworks: ['mocha', 'chai'],

    files: ['spec/**/*.js'],

    reporters: ['spec', 'coverage'],

    preprocessors: {

      'spec/**/*.js': ['webpack']
    },

    webpack: {
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue'
        }
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader'
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader',
          }
        ]
      }
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },

    singleRun: true
  })
}
