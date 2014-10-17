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
	 * Resets current game state and begins a new game
	 */
	var startNewGame = function() {
		Game.state.reset();
		console.log('Starting a new game :)');
	};

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
		Game.selectors.newGame.addEventListener('click', startNewGame);
	};

	/**
	 * Initialisation method
	 */
	pub.init = function() {
		attachEvents();
	};

	return pub;

})();