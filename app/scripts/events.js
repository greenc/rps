/* global Game */

/**
 * Event handlers and their bindings
 *
 * @return {Object} Public methods
 */
Game.events = (function() {

	'use strict';

	var pub = {};

	/**
	 * Visually shows the popover overlay
	 */
	var openPopover = function() {
		Game.selectors.popover.style.display = 'block';
	};

	/**
	 * Visually hides the popover overlay
	 */
	var closePopover = function() {
		Game.selectors.popover.style.display = 'none';
	};

	/**
	 * Attaches DOM event handlers
	 */
	var attachEvents = function() {

		Game.selectors.showRules.addEventListener('click', openPopover);
		Game.selectors.closeRules.addEventListener('click', closePopover);
	};

	/**
	 * Initialisation method
	 */
	pub.init = function() {
		attachEvents();
	};

	return pub;

})();