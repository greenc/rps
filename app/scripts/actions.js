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
	 * Increases score counter by one to the appropriate player
	 *
	 * @param  {String}  to  player || cpu
	 * @return {Number}      New score
	 */
	pub.givePoint = function(to) {
		if(to !== 'player' && to !== 'cpu') { return; }
		return ++Game.state.current.score[to];
	};

	return pub;

})();