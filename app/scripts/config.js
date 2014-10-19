/**
 * Initial setup and config for the game.
 */

// Create namespace
var Game = {};

Game.config = {

	// localStorage access key
	storageKey : 'rpc_state',

	// Best of n rounds per point
	roundSize : 3,

	// Move mappings
	moves : [
		'rock',
		'paper',
		'scissors'
	],

	/**
	 * Adjacency table for calculating the outcome
	 * of a pair of moves in a round. The columns
	 * represent player 1, the rows represent player
	 * 2 (cpu).
	 *
	 *  1 = player win
	 *  0 = tie,
	 * -1 = cpu win
	 *
	 */
	matrix : [
		//R   P   S
		[ 0, -1,  1], // R
		[ 1,  0, -1], // P
		[-1,  1,  0]  // S
	]

};