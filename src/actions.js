export const doMove = (board,move) => ({
	type: "MOVED", 
	payload: {
		board: board,
		move: move
	}
});

export const doGoToMove = (move) => ({
	type: "WENT_TO_MOVE", 
	payload: move
});

export const doRestart = () => ({
	type: "RESTARTED"
});

export const doChangeOrder = (order) => ({
	type: "ORDER_CHANGED", 
	payload: order
});