import {connect} from 'react-redux';
import {selectBoard} from './../selectors.js';

const Status = state => {
	const {current, winner, xIsNext,turn} = state
	const status = winner  ? 'Winner: ' + current[winner[0]] : 
	         turn>=9 ? 'Stalemate' :
					   'Next player: ' + (xIsNext ? 'X' : 'O');
	return <div> {status} </div>;
}

export default connect(selectBoard)(Status);