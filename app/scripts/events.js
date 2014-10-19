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
	 * Reset current game state and begin a new game
	 */
	var startNewGame = function() {
		Game.state.reset();
		Game.ui.createRoundCounter();
		Game.ui.updateScore();
		Game.helpers.removeClass(Game.selectors.title, 'show-fade');
		Game.helpers.addClass(Game.selectors.title, 'hide-fade');
		Game.helpers.removeClass(Game.selectors.scoreboard, 'hide-fade');
		Game.helpers.addClass(Game.selectors.scoreboard, 'show-fade');
	};

	/**
	 * Visually show the popover overlay
	 */
	var openPopover = function() {
		Game.helpers.removeClass(Game.selectors.popover, 'hide-fade');
		Game.helpers.addClass(Game.selectors.popover, 'show-fade');
	};

	/**
	 * Visually hide the popover overlay
	 */
	var closePopover = function() {
		Game.helpers.removeClass(Game.selectors.popover, 'show-fade');
		Game.helpers.addClass(Game.selectors.popover, 'hide-fade');
	};

	/**
	 * Attach DOM event handlers
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