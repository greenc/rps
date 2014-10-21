/* global Game */

/**
 * DOM Selectors
 *
 * @return {Object} Public methods
 */
Game.selectors = (function() {

	'use strict';

	var pub = {
		title       : document.querySelector('.title'),
		scoreboard  : document.querySelector('.scoreboard'),
		chooseMove  : document.querySelector('.choose-move'),
		choices     : document.querySelector('.choices'),
		popover     : document.querySelector('.popover'),
		showRules   : document.querySelector('.button.showRules'),
		closeRules  : document.querySelector('.button.closeRules'),
		newGame     : document.querySelector('.button.newGame'),
		rounds      : document.querySelector('.scoreboard .rounds'),
		scoreplayer : document.querySelector('.score-player div'),
		scorecpu    : document.querySelector('.score-cpu div')
	};

	return pub;

})();