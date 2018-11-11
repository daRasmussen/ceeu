module.exports = {
  entry: [
    './ceeu.js'
  ],
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js']
  }
};
