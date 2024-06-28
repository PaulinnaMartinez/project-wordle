import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [listGuess, setListGuess] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("ongoing");

  const handleList = (newGuess) => {
    let newListGuess = [...listGuess];
    newListGuess.push(newGuess);
    setListGuess(newListGuess);
    checkGameStatus(newGuess, newListGuess.length)
  }

  const checkGameStatus = (newGuess, numGuesses) => {
    if (newGuess === answer) {
      setGameStatus("won")
    }
    if (numGuesses === 6) {
      setGameStatus("lost")
    }
  }

  return (
    <>
      {(gameStatus !== "ongoing") && <Banner answer={answer} tries={listGuess.length} hasWon={gameStatus == "won"} />}
      <GuessResults listGuess={listGuess} answer={answer} />
      <GuessInput handleList={handleList} gameEnded={gameStatus !== "ongoing"} />
    </>
  );
}

export default Game;
