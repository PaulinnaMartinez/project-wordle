import React from 'react';

function GuessInput({ handleList }) {
  const [guess, setGuess] = React.useState('')

  function tryGuess(event) {
    event.preventDefault();
    handleList(guess);
    console.log({ guess });
    newGuess("")
  }

  function newGuess(newGuess) {
    setGuess(newGuess.toUpperCase());
  }

  return (
    <>
      <form onSubmit={(event) => tryGuess(event)}>
        <label>Enter guess:</label>
        <input value={guess} maxLength={5} minLength={5}
          pattern='[A-Za-z]{5}' title='5 letras'
          onChange={(event) => newGuess(event.target.value)}></input>
      </form>
    </>
  );
}

export default GuessInput;