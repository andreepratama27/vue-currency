module.exports = config => {

  config.set({
    browsers: [
      'Chrome'
    ],
    frameworks: ['jasmine'],
    files: ['spec/**/*.js'],
    reporters: ['spec'],
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

    singleRun: true
  })
}
