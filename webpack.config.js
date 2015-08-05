module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    publicPath: './dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.html$/, loaders: ['html']},
      // => "html" loader is used for ".html" files

      {test: /\.css$/, loader: "style!css"},
      // => "style" and "css" loader is used for ".css" files
      // Alternative syntax:
      {test: /\.css$/, loaders: ["style", "css"]},
    ]
  }
};