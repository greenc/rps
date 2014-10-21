/* global Game */

/**
 * UI stuff
 *
 * @return {Object} Public methods
 */
Game.ui = (function() {

	'use strict';

	var pub = {};

	/**
	 * Update the points scoreboard
	 */
	pub.updateScore = function() {
		var player = Game.state.current.score.player,
			cpu    = Game.state.current.score.cpu;
		Game.selectors.scoreplayer.textContent = player;
		Game.selectors.scorecpu.textContent = cpu;
	};

	/**
	 * Create the round counter in its initial state
	 */
	pub.createRoundCounter = function() {
		var num    = Game.config.roundSize,
			parent = Game.selectors.rounds,
			frag   = document.createDocumentFragment(),
			el, i;

		parent.innerHTML = '';

		for(i = 0; i < num; i++) {
			el = document.createElement('li');
			frag.appendChild(el);
		}

		parent.appendChild(frag);
	};

	/**
	 * Create the choice options menu
	 */
	pub.createPlayerChoiceMenu = function() {
		var moves  = Game.config.moves,
			parent = Game.selectors.choices,
			frag   = document.createDocumentFragment(),
			el, i;

		parent.innerHTML = '';

		for(i = 0; i < moves.length; i++) {
			el = document.createElement('li');
			el.className = 'choose-' + moves[i];
			el.textContent = moves[i];
			frag.appendChild(el);
		}

		parent.appendChild(frag);
	};

	return pub;

})();