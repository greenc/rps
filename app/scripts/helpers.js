var Game = Game || {};

/**
 * Generic helper methods
 *
 * @return {Object} Public methods
 */
Game.helpers = (function() {

	'use strict';

	var pub = {};

	/**
	 * Adds a class to a DOM element
	 * 
	 * @param {Object}  el         DOM node
	 * @param {String}  className  Class to add
	 */
	pub.addClass = function(el, className) {
		if(el.classList) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	};

	/**
	 * Removes a class from a DOM element
	 * 
	 * @param {Object}  el         DOM node
	 * @param {String}  className  Class to remove
	 */
	pub.removeClass = function(el, className) {
		var regex;
		if(el.classList) {
			el.classList.remove(className);
		} else {
			regex = new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi');
			el.className = el.className.replace(regex, ' ');
		}
	};

	return pub;

})();