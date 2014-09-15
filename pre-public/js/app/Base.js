/*
 * MainBase
 */
define(function () {
    console.log('MASK: mainBase called');
    function mainBase(id, require) {
        this.id = id;
        this.require = require;
	    var $ = require('jquery'),
	        backbone = require('backbone'),
	        underscore = require('underscore'),
	        lodash = require('lodash'),
	        jquery = require('jquery'),
	        bootstrap = require('bootstrap'), // bootstrap extends jquery
	        expect = require('expect'),
	        mocha = require('mocha'),
	        jquerypp = require('jquerypp.custom'),
	        framewarp = require('framewarp');
    };
    mainBase.prototype = {
        // empty
    };
    return mainBase;
});
