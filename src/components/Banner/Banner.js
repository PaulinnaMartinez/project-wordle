import React from 'react';

function HappyBanner({ tries }) {
  return (
    <>
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{tries} guesses</strong>.
        </p>
      </div>
    </>
  )
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  )
}

function Banner({ tries, answer, hasWon }) {

  let banner = hasWon
    ? <HappyBanner tries={tries} />
    : <SadBanner answer={answer} />

  return banner;

  // return (
  //   numGuesses > 0
  //     ? <HappyBanner numGuesses={numGuesses} />
  //     : <SadBanner answer={answer} />
  // )
}

export default Banner;
