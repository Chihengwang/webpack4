module.exports = {
    entry: './src/script1.js',
    output: {
      path: __dirname+'/dist',
      filename: 'bundle.js',
      publicPath: '/'
    },
    module:{
      rules:[
        {
          test: /\.js?$/,
          exclude:/(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
              presets: ['es2015']
          }
        },
        {
          test:/\.scss$/,
          loader:'style-loader!css-loader!sass-loader',
        }
      ]
      
    }
  };
