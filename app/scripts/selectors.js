/* global Game */

/**
 * DOM Selectors
 *
 * @return {Object} Public methods
 */
Game.selectors = (function() {

	'use strict';

	var pub = {
		popover    : document.querySelector('.popover'),
		showRules  : document.querySelector('.button.showRules'),
		closeRules : document.querySelector('.button.closeRules')
	};

	return pub;

})();