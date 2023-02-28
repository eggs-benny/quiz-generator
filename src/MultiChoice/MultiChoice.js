import './MultiChoice.css';
import { useState } from 'react';

export function MultiChoice({ option, isCorrect }) {
  const [answer, setAnswer] = useState(option);
  const [className, setClassName] = useState('MultiChoice');

  const handleButtonClick = () => {
    if (isCorrect) {
      setAnswer('Correct!');
      setClassName('MultiChoiceCorrect');
    } else {
      setAnswer('Incorrect :(');
      setClassName('MultiChoiceIncorrect');
    }
  };

  return (
    <button className={className} onClick={handleButtonClick}>
      {' '}
      {answer}{' '}
    </button>
  );
}
