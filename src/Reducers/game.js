const initialGameState = {
	turn: 0,
	record: [{squares:Array(9).fill(null)}],
	moves: [],
};

export const gameReducer = (state=initialGameState, action) => {
	if (action.type === "MOVED"){
		return Object.assign({},state,{
			turn: state.turn+1,
			record: state.record.slice(0,state.turn+1).concat([{squares: action.payload.board}]),
			moves: state.moves.concat([action.payload.move])			
		});
	}
	if (action.type === "WENT_TO_MOVE"){
		return Object.assign({},state,{
			turn: action.payload
		});
	}
	if(action.type === "RESTARTED"){
		return Object.assign({},state,{
			turn:0,
			record: [{squares:Array(9).fill(null)}],
			moves: []
		})
	}
	return state;
};