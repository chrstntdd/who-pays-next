
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
                exclude: path.join(__dirname, 'client', 'scripts'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.scss$/,  
                exclude: /nodemodules/,    
                include: path.join(__dirname, 'client', 'scripts'),
                loaders: ['raw-loader', 'sass-loader']
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },


    entry: {
        'main' : path.join(__dirname, 'client', 'scripts', 'main.ts'),
    },

    output: {
        path: path.join(__dirname, 'dist', 'js'),
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
