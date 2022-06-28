import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import Game from './components/Game.jsx';

ReactDOM.render(
	<CookiesProvider>
		<Game />
	</CookiesProvider>, document.getElementById('game')
);

