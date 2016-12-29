import React from 'react';
import expect from 'expect'
import { mount, shallow } from 'enzyme'
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

describe('Box Components', function () {

    it('标题应该是 `welcome es6 world!`', function () {
        const wrapper = mount(<Box/>);
        expect(wrapper.find('h1').at(0).text()).toBe('welcome es6 world!');
    })

})

