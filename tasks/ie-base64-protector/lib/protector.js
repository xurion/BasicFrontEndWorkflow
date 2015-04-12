/* globals module, require */

var cssParser = require('css'),
    fs = require('fs');

module.exports.protect = function (file, selectorPrefix) {

    'use strict';

    var rawCss,
        css,
        i,
        j,
        k,
        newSelectors,
        newStyles;

    //grunt.verbose.write('Parsing ' + file);

    rawCss = fs.readFileSync(file).toString();
    css = cssParser.parse(rawCss).stylesheet.rules;

    //grunt.verbose.write('Found ' + css.length + ' styles');

    for (i = 0; i < css.length; i = i + 1) {

        if (css[i].type === 'rule') {

            for (j = 0; j < css[i].declarations.length; j = j + 1) {

                if (css[i].declarations[j].property === 'background' || css[i].declarations[j].property === 'background-image') {

                    if (/[a-zA-Z0-9\/:\.]+\.[a-zA-Z]+/.test(css[i].declarations[j].value)) {

                        newSelectors = '';

                        for (k = 0; k < css[i].selectors.length; k = k + 1) {

                            newSelectors = newSelectors + selectorPrefix + ' ' + css[i].selectors[k] + ',';
                        }

                        newSelectors = newSelectors.substr(0, newSelectors.length - 1);
                        newStyles = newStyles + newSelectors + '{' + css[i].declarations[j].property + ':' + css[i].declarations[j].value + ';/*ImageEmbed:skip*/' + '}';
                    }
                }
            }
        }
    }

    //grunt.verbose.write('Writing new styles to ' + file);

    fs.appendFileSync(file, newStyles);

    //grunt.verbose.write('Written the following styles: ' + newStyles);
};
