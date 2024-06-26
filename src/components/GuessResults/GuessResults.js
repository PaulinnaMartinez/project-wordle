import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ listGuess }) {

  let word = "";
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((index) => {
          return <Guess key={index} Xindex={index} word={listGuess[index] ?? ""} />;
        })}
      </div>
    </>
  );
}

export default GuessResults;
