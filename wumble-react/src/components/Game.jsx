import React, {useState} from 'react';
import './Game.css';

const Game = () => {
	const [input, setInput] = useState('');
	const [msg, setMsg] = useState('');
	const [attempts, setAttempts] = useState(0);
	const wordAns = 'MOOD';	

	const handleInput = (userInput) => {
		console.log(userInput);
		if (/^[a-zA-Z]+$/.test(userInput) || userInput === '') {
			if (userInput.length > 4 && userInput !== '') {
				setMsg('The word is only 4 letters long');
			} else {
				setInput(userInput.toUpperCase());
				setMsg('');
			}
		} else {
			setMsg('We only accept letters here');
		}
	}

	const checkInput = (word) => {
		if (word.match(/^[A-Za-z]+$/)) {
			if (word.toUpperCase() === wordAns) {
				setAttempts(attempts + 1);
				setMsg('Congrats! You guessed correctly');
			} else if (word.length !== 4) {
				setMsg('The word must be 4 letters long!');
			} else {
				setAttempts(attempts + 1);
				setMsg(letterChecker(word));
			}
		} else {
			setMsg(word + ' is not a word');
		}
	}

	const letterChecker = (word) => {
		let matchedLetters = [];
		for (let i = 0; i < wordAns.length; i++) {
			for (let j = 0; j < word.length; j++) {
				if (word[j] === wordAns[i]) {
					matchedLetters.push(word[j]);
					break;
				}
			}
		}
		let checkedString = matchedLetters.length > 0 ? 'You got ' + matchedLetters.join(', ') + ' correct' : 'You matched no letters correctly';
		return checkedString;
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
