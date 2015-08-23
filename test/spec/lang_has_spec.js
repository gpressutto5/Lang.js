'use strict';

var util = require('util');
var Lang = require('../../src/lang.js');
var messages = require('../fixture/messages');

Lang.setMessages(messages);

describe('The Lang.has() method', function() {

    it('should exists', function() {
        expect(Lang.has).toBeDefined();
    });

    it('should be a function', function() {
        expect(typeof Lang.has).toBe('function');
    });

    it('should return false when the given key is no defined', function() {
        expect(Lang.has('foo.bar')).toBe(false);
        expect(Lang.has(null)).toBe(false);
    });

    it('should return true when the given key is defined', function() {
        expect(Lang.has('messages.home')).toBe(true);
        expect(Lang.has('validation.accepted')).toBe(true);
    });

    it('should return true when the given key and locale are defined', function() {
        expect(Lang.has('messages.home', 'es')).toBe(true);
        expect(Lang.has('messages.home', 'ht')).toBe(true);  
    });

    it('should return false when the locale of a existing key is not defined', function() {
        expect(Lang.has('messages.home', 'bla')).toBe(false);
        expect(Lang.has('validation.accepted', 'bla')).toBe(false);
    });
});
