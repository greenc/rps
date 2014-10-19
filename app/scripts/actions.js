/* global Game */

/**
 * Game actions
 *
 * @return {Object} Public methods
 */
Game.actions = (function() {

	'use strict';

	var pub = {};

	/**
	 * Increase score counter by one to the appropriate player
	 * and return new score for that player
	 *
	 * @param  {Number} to (1, -1)
	 * @return {Number}    New score
	 */
	pub.givePoint = function(to) {
		return ++Game.state.current.score[to];
	};

	/**
	 * Log the result of a round for the current point
	 * and return it
	 *
	 * @param  {Number} result (1, 0, -1)
	 * @return {Number} result
	 */
	pub.logMove = function(result) {
		Game.state.current.thisPoint.push(result);
		return result;
	};

	/**
	 * Decide what move to play - currently quite dumb
	 * 
	 * @return {String} The move to play, as an int
	 */
	pub.chooseMove = function() {
		var numMoves = Game.config.matrix.length;
		return Game.helpers.getRandomInteger(0, numMoves -1);
	};

	/**
	 * Returns the result of a round
	 *
	 * @param  {Number} playerMove
	 * @param  {Number} cpuMove
	 * @return {Number} (1, 0, -1)
	 */
	pub.decideWinner = function(playerMove, cpuMove) {
		return Game.config.matrix[playerMove][cpuMove];
	};

	return pub;

})();