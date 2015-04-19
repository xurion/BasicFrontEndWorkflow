/* globals module, require, __dirname*/

module.exports = function (grunt) {

    'use strict';

    var protector = require(__dirname + '/lib/protector.js');

    grunt.registerMultiTask('ieBase64Protector', 'Duplicates blocks of styles that contain a background image, adds a custom prefix to the selector and adds a comment after the background style to prevent imageEmbed from encoding the image', function () {

        var options = grunt.config.get('ieBase64Protector'),
            cssFiles = options.files,
            selectorPrefix;

        for (selectorPrefix in cssFiles) {

            if (cssFiles.hasOwnProperty(selectorPrefix)) {

                protector.protect(cssFiles[selectorPrefix], selectorPrefix);

            }
        }
    });
};
