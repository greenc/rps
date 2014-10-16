var Game = Game || {};

/**
 * Quick wrapper for the localStorage API
 *
 * @return {Object} Public methods
 */
Game.localStorage = (function() {

	'use strict';

	var pub = {};

	// Retrieve a set value by key
	pub.get = function(key) {
		return JSON.parse(localStorage.getItem(key));
	};

	// Set a value 
	pub.set = function(key, val) {
		localStorage.setItem(key, JSON.stringify(val));
	};

	// Check if a value is set
	pub.isSet = function(key) {
		var val = pub.get(key);
		return (null === val || 'undefined' === typeof val) ? false : true;
	};

	// Remove a set value
	pub.remove = function(key) {
		localStorage.removeItem(key);
	};

	return pub;

})();