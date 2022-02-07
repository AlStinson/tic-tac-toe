import {createSelector} from 'reselect';

export const selectGame = state => state.game;
export const selectTurn = state => state.game.turn;
export const selectRecord = state => state.game.record;
export const selectMoves = state => state.game.moves;
export const selectAscendingOrder = state => state.look.historialAscendingOrder;

export const selectCurrent = createSelector(
	selectTurn,
	selectRecord,
	(turn, record) => {
		return {current: record.slice()[turn].squares};
	}
);

export const selectWinner = createSelector( 
	selectCurrent, 
	({current}) => {
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (current[a] && current[a] === current[b] && current[a] === current[c]) {
				return {winner: lines[i]};
			}
		}
		return {winner : null};
	}
);

export const selectXIsNext = createSelector( 
	selectTurn, 
	(turn) => {
		return {xIsNext: turn%2===0};
	}
)

export const selectBoard = createSelector(
	selectCurrent,
	selectWinner,
	selectXIsNext, 
	(current,winner,xIsNext) => {
		return Object.assign({},current,winner,xIsNext);
	}
)

export const selectForRecord = createSelector(
	selectGame,
	selectAscendingOrder,
	(game,ascendingOrder) => {
		return ({
			turn: game.turn,
			record: game.record,
			moves: game.moves,
			ascendingOrder: ascendingOrder
		});
	}
);

const lines = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];