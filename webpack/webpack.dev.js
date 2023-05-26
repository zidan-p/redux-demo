const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode : "development",
    devtool : "cheap-module-source-map",
    devServer : {
        hot : true,
        open : true, // maybe for open in browser
        port : 3006,
        watchFiles : ["./../src/**/*"]
    },
    plugins : [
        new ReactRefreshWebpackPlugin(), 
        //store reacct states every code changes
    ]
}