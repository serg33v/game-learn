const merge = require('webpack-merge');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        
      
    },
    plugins: [
        new HardSourceWebpackPlugin()
    ]
});
