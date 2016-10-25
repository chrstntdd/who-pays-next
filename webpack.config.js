
var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './client/main.ts',
    output: {
        path: './dist/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './index.html'
        // })
    ]
};
