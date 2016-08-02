import { jsdom } from 'jsdom'
import history from 'history'

var exposedProperties = ['window', 'navigator', 'document'];

global.history=history;
global.document = jsdom('<!doctype html><html><body></body></html>');

global.window = document.defaultView;
global.window.history=global.history;

Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

global.documentRef = document;