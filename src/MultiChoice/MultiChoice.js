import './MultiChoice.css';
import { useState } from 'react';

export function MultiChoice({ answer, isCorrect }) {
  const [correctIncorrect, setCorrectIncorrect] = useState(answer)

  const handleButtonClick = () => {
    isCorrect ? setCorrectIncorrect('Correct!') : setCorrectIncorrect('Incorrect :(')
  }

  return <button className="MultiChoice" onClick={handleButtonClick}>  {correctIncorrect} </button>;
}
