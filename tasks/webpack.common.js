module.exports = {
  entry: [
    './ceeu.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: false,
          presets: [
            ['env', {
              targets: {
                browsers: ['ie >= 11']
              },
              modules: false
            }]
          ],
          plugins: [
            ['transform-runtime', {
              regenerator: true
            }]
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  }
};
