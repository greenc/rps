/* global Game */

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
	 * @param {Object} el        DOM node
	 * @param {String} className Class to add
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
	 * @param {Object} el        DOM node
	 * @param {String} className Class to remove
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

	/**
	 * Replace a class with another

	 * @param  {Object} el     DOM node
	 * @param  {String} remove Class to remove
	 * @param  {String} add    Class to add
	 */
	pub.swapClass = function(el, remove, add) {
		pub.removeClass(el, remove);
		pub.addClass(el, add);
	};

	/**
	 * Returns a random integer between the
	 * 2 supplied values (inclusive)
	 *
	 * @param  {Number} min Min int
	 * @param  {Number} max Max int
	 * @return {Number}     Random int
	 */
	pub.getRandomInteger = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	return pub;

})();