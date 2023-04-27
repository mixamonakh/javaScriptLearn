const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
        static: './dist/',
        hot: false,
        devMiddleware: {
            publicPath: '/dist/',
            writeToDisk: true,
         },    
       }
  };