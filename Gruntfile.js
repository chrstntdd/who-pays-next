'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        // TODO : Later
        // sass: {
        //     dist: {
        //         files: {
        //             'css/normalize.css' : 'sass/normalize.scss',
        //             'css/style.css' : 'sass/style.scss'
        //         },
        //         options: {
        //             style: 'expanded',
        //             noCache: true,
        //             sourcemap: 'none'
        //         }
        //     }
        // },
        // TODO : Later
        // watch: {
        //     options: {
        //         livereload: true
        //     },
        //     sass: {
        //         files: ['sass/**/*.scss'],
        //         tasks: ['sass'],
        //     },
        //     html: {
        //         files: ['**/*.html']
        //     }
        // }
        webpack: {
            build: {
                entry: './src/js',
                output: {
                    path: 'dist/js',
                    filename: 'main.js'
                },
                watch: true,
                keepalive: true
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
