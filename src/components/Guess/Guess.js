import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers'

function Cell({ letter, status }) {
  let classes = status ? `cell ${status}` : "cell"
  return <span className={classes}>{letter}</span>;
}

function Guess({ Xindex, word, answer }) {

  let wordWithStatus = checkGuess(word, answer);

  return (
    <p className='guess'>
      {range(0, 5, 1).map((index) => {

        let keyCell = `${Xindex}-${index}`;
        return (
          <Cell key={keyCell}
            letter={wordWithStatus?.[index].letter}
            status={wordWithStatus?.[index].status}
          />)

      })}
    </p>
  );
}

export default Guess;
