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
	 * @param  {String}  to  player || cpu
	 * @return {Number}      New score
	 */
	pub.givePoint = function(to) {
		return ++Game.state.current.score[to];
	};

	/**
	 * Log the result of a move for the current point
	 * and return the result
	 *
	 * @param  {Number}  result  (0, 1 or 2)
	 * @return {Number}  result
	 */
	pub.logMove = function(result) {
		Game.state.current.thisPoint.push(result);
		return result;
	};

	return pub;

})();