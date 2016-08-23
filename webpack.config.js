module.exports = {
  entry: {
    core: './js/core/index.js',
    header: './js/header/index.js',
    catalog: './js/catalog/index.js',
    shared: './js/shared/index.js'
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
