var Game = Game || {};

/**
 * Game state
 *
 * @return {Object} Public methods
 */
Game.state = (function() {

	'use strict';

	var pub = {};
	var key = Game.config.storageKey;

	// Initial state to use when a new game begins
	var defaults = {
		pointsPlayer : 0,  // Human player's points
		pointsCpu    : 0,  // Computer's points
		currentPoint : [], // 0 = tie, 1 = player win, 2 = cpu win
		bestOf       : 3   // Number of moves to decide each point
	};

	// Active game state
	pub.current = {};

	/**
	 * Resets the saved and current game state
	 */
	pub.reset = function() {
		Game.localStorage.remove(key);
		pub.current = defaults;
	};

	/**
	 * Saves game state to localStorage
	 */
	pub.save = function() {
		Game.localStorage.set(key, pub.current);
	};

	/**
	 * Loads game state if set, or defaults if not
	 */
	pub.load = function() {
		pub.current = Game.localStorage.isSet(key) ? Game.localStorage.get(key) : defaults;
	};

	return pub;

})();