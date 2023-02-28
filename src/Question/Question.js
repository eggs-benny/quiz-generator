import './Question.css';
import { MultiChoice } from '../MultiChoice/MultiChoice';
import { useState, useEffect } from 'react';

export function Question({ question, options, index }) {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setCounter(index)
  }, [index])

  function randomize(options) {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]]
    }
  }

  randomize(options)


  return (
    <div>
      <div className="Question">Question {counter}: {question}</div>
      <div className="Answers">
        {options.map((option) => {
          return (
            <MultiChoice
              key={option.id}
              option={option.option}
              isCorrect={option.isCorrect}
            />
          );
        })}
      </div>
    </div>
  );
}
