import './MultiChoice.css';
import { useState } from 'react';

export function MultiChoice({
  option,
  isCorrect,
  onCorrectAnswer,
  isAnswered
}) {
  const [className, setClassName] = useState('MultiChoice');

  function handleButtonClick() {
    if (!isAnswered) {
      if (isCorrect) {
        setClassName('MultiChoiceCorrect');
        onCorrectAnswer();
      } else {
        setClassName('MultiChoiceIncorrect');
      }
    }
  }

  return (
    <button className={className} onClick={handleButtonClick}>
      {' '}
      {option}{' '}
    </button>
  );
}
