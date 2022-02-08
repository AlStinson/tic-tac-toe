import {connect} from 'react-redux';
import {selectBoard} from './../selectors.js';
import {doMove} from './../actions.js';


const Square = props => {
	return (
		<button className="square" 
			onClick={props.onClick}
			style = {{backgroundColor: props.winner?"#FFFF00":"#FFFFFF"}}
		>
			{props.value}
		</button>
	);
}

const Row = props => {
	const columns = [];
	for (var column=0;column<3;column++){
		const key = 3*props.row+column;
		const isWinner = !props.winner ? false : 0<= props.winner.indexOf(key);
		columns.push(<Square key={"square " + key}
							 onClick={() => props.onClick(key)}
							 value={props.squares[key]}
							 winner={isWinner}
					 />);
	}
	return(
		<div className={"board-row-" + props.row}>
		{columns}
		</div>
	);
}

const Board = state => {
	
	const {current, winner, xIsNext} = state;
	const {doMove} = state;
	const handleClick = (i) => {
		if (winner || current[i]) return;
		const newBoard = current.slice();
		newBoard[i] = (xIsNext ? 'X' : 'O')
		doMove(newBoard,i);
	}
	const rows = [];
	for (var row=0;row<3;row++){
		rows.push(<Row key={"row " + row} 
		               row={row} 
					   onClick={handleClick}
					   squares={current}
					   winner={winner}
				  />);
	}
    return <div> {rows} </div>;
}

export default connect(selectBoard,{doMove})(Board);