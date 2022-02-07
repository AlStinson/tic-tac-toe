export const doMove = (board,move) => {
	return {
		type: "MOVED", 
		payload: {
			board: board,
			move: move
		}
	}
}
export const doGoToMove = (move) => {
	return {
		type: "WENT_TO_MOVE", 
		payload: move
	}
}
export const doRestart = () => {
	return {
		type: "RESTARTED"
	}
}
export const doChangeOrder = (order) => {
	return {
		type: "ORDER_CHANGED", 
		payload: order
	}
}