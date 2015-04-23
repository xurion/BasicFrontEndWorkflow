/*global describe, it, expect */

describe('Simple true is equal to true', function () {

    'use strict';

    it('should always pass because true is equal to true', function () {

        expect(true).toBe(true);
    });

    it('and false should not equal true', function () {

        expect(false).not.toBe(true);
    });
});
