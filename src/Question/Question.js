import './Question.css';
import { MultiChoice } from '../MultiChoice/MultiChoice';
import { useState, useEffect } from 'react';

export function Question({ question, options, index, onCorrectAnswer }) {
  const [questionNumber, setQuestionNumber] = useState(1);



  function randomize(options) {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
  }
  useEffect(() => {
    setQuestionNumber(index);
    randomize(options);
  }, [index, options]);

 

  return (
    <div>
      <div className="Question">
        Question {questionNumber}: {question}
      </div>
      <div className="Answers">
        {options.map((option) => {
          return (
            <MultiChoice
              key={option.id}
              option={option.option}
              isCorrect={option.isCorrect}
              onCorrectAnswer={onCorrectAnswer}
            />
          );
        })}
      </div>
    </div>
  );
}
