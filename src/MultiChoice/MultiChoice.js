import './MultiChoice.css';
import { useState } from 'react';

export function MultiChoice({
  option,
  isCorrect,
  onCorrectAnswer,
  onIncorrectAnswer,
  isAnswered,
  selected,
  className,
  setSelected
}) {
  function handleButtonClick() {
    if (!isAnswered) {
      if (isCorrect) {
        setSelected(true);
        onCorrectAnswer();
      } else {
        setSelected(true);
        onIncorrectAnswer();
      }
    }
  }

  return (
    <button
      className={className}
      onClick={handleButtonClick}
      disabled={isAnswered}
      style={selected ? { backgroundColor: '#ff6961' } : {}}
    >
      {option}
    </button>
  );
}