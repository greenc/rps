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
		Game.ui.createPlayerChoiceMenu();
		Game.ui.updateScore();
		Game.helpers.swapClass(Game.selectors.title, 'show-fade', 'hide-fade');
		Game.helpers.swapClass(Game.selectors.scoreboard, 'hide-fade', 'show-fade');
		Game.helpers.swapClass(Game.selectors.chooseMove, 'hide-fade', 'show-fade');
	};

	/**
	 * Visually show the popover overlay
	 */
	var openPopover = function() {
		Game.helpers.swapClass(Game.selectors.popover, 'hide-fade', 'show-fade');
	};

	/**
	 * Visually hide the popover overlay
	 */
	var closePopover = function() {
		Game.helpers.swapClass(Game.selectors.popover, 'show-fade', 'hide-fade');
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