import React from 'react';
import expect from 'expect'
import Box from '../src/js/Box';

import { jsdom } from 'jsdom'

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('<!doctype html><html><body></body></html>');

global.window = document.defaultView;

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            expect([1,2,3].indexOf(4)).toBe(-1);
        });
    });
});

