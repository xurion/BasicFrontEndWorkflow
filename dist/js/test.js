/*global window*/

window.onload = function () {

    'use strict';

    var c = {
        c: 'c',
        cc: 'cc'
    },
        e,
        d;

    for (d in c) {
        if (c.hasOwnProperty(d)) {
            if (d && d === 1) {
                e = d;
            }
        }
    }

    return e === 'a';
};
