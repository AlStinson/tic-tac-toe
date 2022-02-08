import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {rootReducer} from './Reducers/root.js';
import Game from './Components/game.js';

import './index.css';

const store = createStore(rootReducer);

// ========================================

ReactDOM.render(
	<Provider store={store}>
		<Game/>
	</Provider>,
	document.getElementById('root')
);



