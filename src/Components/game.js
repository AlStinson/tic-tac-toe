import Record from './record.js';
import Board from './board.js';
import Status from './status.js';


const Game = () => (
    <div className="game">
        <div className="game-board">
			<Board />
        </div>
        <div className="game-info">
          <Status/>
          <Record />
        </div>
    </div>
);

export default Game;