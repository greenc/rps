/* global Game */

/**
 * Game state
 *
 * @return {Object} Public methods
 */
Game.state = (function() {

	'use strict';

	var pub  = {},
		key  = Game.config.storageKey,
		size = Game.config.roundSize;

	// Initial state to use when a new game begins
	var defaults = {
		thisPoint: [], // 1 = player win, 0 = tie, -1 = cpu win
		bestOf: size,  // Number of moves to decide each point
		score: {
			player: 0,
			cpu: 0
		}
	};

	// Active game state
	pub.current = {};

	/**
	 * Reset the saved and current game state
	 */
	pub.reset = function() {
		Game.localStorage.remove(key);
		pub.current = defaults;
	};

	/**
	 * Save game state to localStorage
	 */
	pub.save = function() {
		Game.localStorage.set(key, pub.current);
	};

	/**
	 * Load game state if set, or defaults if not
	 */
	pub.load = function() {
		pub.current = Game.localStorage.isSet(key) ? Game.localStorage.get(key) : defaults;
	};

	return pub;

})();