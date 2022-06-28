import React, {useState} from 'react';
import './Game.css';

const Game = () => {
	const [input, setInput] = useState('');
	const [msg, setMsg] = useState('');
	const [attempts, setAttempts] = useState(0);
	const wordAns = 'sift';	

	const handleInput = (input) => {
		if (/^[a-zA-z]+$/.test(input) || input === '') {
			setInput(input.toUpperCase());
			setMsg('');
		} else {
			setMsg('We only accept letters here');
		}
	}

	const checkInput = (word) => {
		if (/^[a-zA-z]+$/.test(word)) {
			if (word.toLowerCase() === wordAns) {
				setAttempts(attempts + 1);
				setMsg('Congrats! You guessed correctly');
			} else if (word.length !== 4) {
				setMsg('The word must be 4 letters long!');
			} else {
				setAttempts(attempts + 1);
				setMsg('Wrong! Try again');
			}
		} else {
			setMsg(word + ' is not a word');
		}
	}

	return (
		<div id="wumbleGame">
			<h1>Wumble!</h1>
			<input id="firstGuess" className="guess" type="text" onChange={e => handleInput(e.target.value)} value={input} />
			<div id="msg">{msg}</div>
			<button id="inputCheck" onClick={() => checkInput(input)}>Check Answer</button>
			{attempts > 0 &&
				<div id="attempts">You have had {attempts} attempt(s)</div>
			}
		</div>
	);
}

export default Game;
