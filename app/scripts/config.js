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

	// Adjacency matrix:
	// -1 = player win
	//  0 = tie,
	//  1 = cpu win
	matrix : [
		[ 0, -1,  1], // Rock
		[ 1,  0, -1], // Paper
		[-1,  1,  0]  // Scissors
	]

};