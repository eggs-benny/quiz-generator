import './MultiChoice.css';
import { useState } from 'react';

export function MultiChoice({ option, isCorrect }) {
  const [answer, setAnswer] = useState(option)

  const handleButtonClick = () => {
    isCorrect ? setAnswer('Correct!') : setAnswer('Incorrect :(')
  }

  return <button className="MultiChoice" onClick={handleButtonClick}>  {answer} </button>;
}
