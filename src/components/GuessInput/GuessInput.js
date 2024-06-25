import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('')

  function tryGuess(event) {
    event.preventDefault();
    console.log(guess);
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
          onChange={(event) => newGuess(event.target.value)}></input>
      </form>
    </>
  );
}

export default GuessInput;