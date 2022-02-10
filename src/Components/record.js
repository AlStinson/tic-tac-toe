import {connect} from 'react-redux';
import {selectForRecord} from './../selectors.js';
import {doGoToMove,doRestart,doChangeOrder} from './../actions.js';

const actions = {doGoToMove,doRestart,doChangeOrder};

const Record = state => {
	const {record, moves, turn, ascendingOrder} = state;
	const {doGoToMove, doRestart, doChangeOrder} = state;
	const list = record.slice(1,record.length).map((set,move) => {
		move ++;
		move = ascendingOrder ? move : record.length-move;
		const info = move + ") Square played: " + numberToPosition(moves[move-1]) + "  ";
		const strong = move === turn;
		return (
			<li key={"history" + move}> 
				<RecordItem info={info} strong={strong}/>
				<button onClick={() => doGoToMove(move)}>
					{"Go to move #" + move}
				</button> 
			</li>
		);
	});
	return (
		<>
		<button onClick={() => doRestart()}> 
			Restart
		</button>
		<button onClick={() => doChangeOrder()}> 
			{"Sort history by " + (ascendingOrder?"descending":"ascending") + " order"}
		</button>
		<ol>
			{list}
		</ol>
		</>
	);
}

const RecordItem = props => {
	if(props.strong){
		return(<strong> {props.info} </strong>);
	} else {
		return(props.info);
	}
}

const numberToPosition = n => ("(" + n%3 + "," + Math.floor(n/3) + ")");

export default connect(selectForRecord,actions)(Record);