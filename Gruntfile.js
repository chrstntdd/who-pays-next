'use strict';

var webpack = require('webpack');

module.exports = function(grunt) {
    grunt.initConfig({
        webpack: {
            build: {
                context: __dirname + '/src',
                entry: './js',
                output: {
                    path: __dirname + 'dist/js',
                    filename: 'main.js'
                },
                watch: true,
                keepalive: true,
                plugins: [new webpack.optimize.UglifyJsPlugin({
                    mangle: false
                })]
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // grunt.registerTask('default', ['sass', 'watch']);
    grunt.registerTask('default', ['webpack']);
    grunt.registerTask('server', ['connect']);
};
