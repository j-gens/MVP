module.exports = {
  mode: 'none',
  entry: './client/index.jsx',
  output: {
    filename: 'bundled.js',
    path: __dirname + '/public',
  },
  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
      }, {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  watch: true,
}