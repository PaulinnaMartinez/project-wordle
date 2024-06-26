import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [listGuess, setListGuess] = React.useState([])

  const handleList = (newGuess) => {
    let newListGuess = [...listGuess];
    newListGuess.push(newGuess);
    setListGuess(newListGuess);
  }

  return (
    <>
      <GuessResults listGuess={listGuess} />
      <GuessInput handleList={handleList} />
    </>
  );
}

export default Game;
