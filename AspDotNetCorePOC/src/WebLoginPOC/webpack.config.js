/// <binding />
//Webpack - to bundle, compress & minification
"use strict";

var path = require('path');
var webpack = require('webpack');

//var CommonHelper = require('./wwwroot/js/utils/commonHelper');

//var version = "1.0.0.434";

module.exports = {
    entry: {
        "my-leads": path.join(__dirname, 'wwwroot/js', 'startMain.jsx')
    },
    output: {
        path: path.join(__dirname, 'wwwroot/js', 'release'),
        filename: process.env.NODE_ENV === 'production' ? "[name].min.js" : "[name].js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.css', '.png', '.jpg'],
        moduleDirectories: ['node_modules']
    },
    plugins: [
        //new webpack.OldWatchingPlugin(),
        //new webpack.optimize.UglifyJsPlugin({
        //    sourceMap: true,
        //    mangle: false,
        //    compress: {
        //        warnings: false
        //    }
        //})
    ],
    module: {
        preLoaders: [
           { test: /\.json$/, loader: 'json' },
        ],
        loaders: [
             
        {
            test: /\.jsx?$/,
            loader: "babel-loader",
            query: {
                presets: ['react']
            }
        },
        {
            test: /\.css$/,
            loaders: ['style', 'css'],
        }]
    }
};