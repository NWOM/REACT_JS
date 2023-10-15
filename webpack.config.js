const path = require('path');
const HWP=require('html-webpack-plugin')
module.exports = {
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, 'C:\\Users\\suman\\OneDrive\\Desktop\\REACT JS', 'dist'),
    filename: 'transpiled.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HWP({template: path.resolve('./index.html')}),

    ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  mode: 'development',
}

