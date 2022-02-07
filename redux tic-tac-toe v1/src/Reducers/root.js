import {combineReducers} from 'redux';
import {gameReducer} from './game.js';
import {lookReducer} from './look.js';

export const rootReducer = combineReducers({
	game: gameReducer,
	look: lookReducer
})