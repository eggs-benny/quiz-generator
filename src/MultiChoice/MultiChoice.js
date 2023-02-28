import './MultiChoice.css';
// import { useState } from 'react';

export function MultiChoice({
  option,
  isCorrect,
  onCorrectAnswer,
  onIncorrectAnswer,
  answerStyling
}) {

  const handleButtonClick = () => {
    isCorrect ? onCorrectAnswer() : onIncorrectAnswer();
  };

  return (
    <button className={answerStyling} onClick={handleButtonClick}>
      {' '}
      {option}{' '}
    </button>
  );
}
