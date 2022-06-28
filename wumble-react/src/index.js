import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import Game from './components/Game.jsx';

const game = ReactDOM.createRoot(document.getElementById('game'));
game.render(
	<CookiesProvider>
		<Game />
	</CookiesProvider>
);

