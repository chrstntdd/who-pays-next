
var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    module: {
        // preLoaders: [
        //     {
        //         exclude: '/node_modules/',
        //         loader: 'tslint',
        //         test: /\.ts$/
        //     }
        // ],
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                // include: './client',
                loader: 'raw'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },


    entry: {
        'main' : './client/main.ts',
    },

    output: {
        path: './dist/js',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './index.html'
        // })
        // new ExtractTextPlugin('[name].css')
    ],

};
