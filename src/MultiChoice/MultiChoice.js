import './MultiChoice.css';
import { useState } from 'react';

export function MultiChoice({ option, isCorrect, onCorrectAnswer }) {
  // const [answer, setAnswer] = useState(option);
  const [className, setClassName] = useState('MultiChoice');

  const handleButtonClick = () => {
    if (isCorrect) {
      // setAnswer(answer);
      setClassName('MultiChoiceCorrect');
      onCorrectAnswer();
    } else {
      // setAnswer(answer);
      setClassName('MultiChoiceIncorrect');
    }
  };

  return (
    <button className={className} onClick={handleButtonClick}>
      {' '}
      {option}{' '}
    </button>
  );
}
