import React from 'react';
import { range } from '../../utils';

function Guess({ Xindex, word }) {
  let wordArray = word.split("");
  return (
    <p className='guess'>
      {range(0, 5, 1).map((index) => {
        let keyCell = `${Xindex}-${index}`
        return <span key={keyCell} className="cell">{wordArray[index]}</span>;
      })}
    </p>
  );
}

export default Guess;
