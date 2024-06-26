import React from 'react';

function GuessResults({ listGuess }) {

  return (
    <>
      <ul>
        {listGuess.map((item, index) => {
          return <li key={index}>{item}</li>
        }
        )
        }
      </ul>
    </>
  );
}

export default GuessResults;
