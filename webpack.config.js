module.exports = {
  entry: {
    main: './js/main.js',
    header: './js/header/index.js'
  },
  watch: true,
  output: {
    path: './public',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
