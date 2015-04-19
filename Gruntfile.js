/*global module*/

module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jslint: {
            client: {
                src: ['Gruntfile.js', 'src/**/*.js'],
                directives: {
                    browser: true
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['src/js/**/*.js'],
                        dest: 'dist/js/',
                        filter: 'isFile',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['src/css/images/*'],
                        dest: 'dist/css/images',
                        flatten: true
                    }
                ]
            }
        },
        uglify: {
            main: {
                files: {
                    'dist/js/demo.min.js': ['dist/js/demo.js']
                }
            }
        },
        clean: ['dist'],
        imageEmbed: {
            dist: {
                src: ['dist/css/demo.css'],
                dest: 'dist/css/demo.css',
                options: {
                    deleteAfterEncoding: false
                }
            }
        },
        less: {
            production: {
                files: {
                    'dist/css/demo.css': 'src/css/demo.less'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['dist/css/demo.css'],
                    ext: '.min.css'
                }]
            }
        },
        'ieBase64Protector': {
            files: {
                '.lt-ie8': 'dist/css/demo.css'
            }
        },
        watch: {
            files: ['*', 'src/**/*'],
            tasks: ['build']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-image-embed');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadTasks('tasks/ie-base64-protector');

    grunt.registerTask('build', [
        'jshint',
        'jslint',
        'clean',
        'copy',
        'less',
        'ieBase64Protector',
        'imageEmbed',
        'cssmin',
        'uglify'
    ]);

};
