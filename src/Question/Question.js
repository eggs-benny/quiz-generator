import './Question.css';
import './../MultiChoice/MultiChoice.css';
import { MultiChoice } from '../MultiChoice/MultiChoice';
import { useState, useEffect } from 'react';

export function Question({
  question,
  options,
  index,
  onCorrectAnswer,
  onIncorrectAnswer
}) {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selected, setSelected] = useState(null);


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

  const handleCorrectAnswer = () => {
    setIsAnswered(true);
    onCorrectAnswer();
  };

  const handleIncorrectAnswer = () => {
    setIsAnswered(true);
    onIncorrectAnswer();
  };

  return (
    <div>
      <div className="Question">
        Question {questionNumber}: {question}
      </div>
      <div className="Answers">
        {options.map((option) => {
          const isCorrect = option.isCorrect;
          const className = isAnswered
            ? isCorrect
              ? 'MultiChoiceCorrect'
              : selected === option.id
              ? 'MultiChoiceIncorrect'
              : 'MultiChoice'
            : 'MultiChoice';

          return (
            <MultiChoice
              key={option.id}
              option={option.option}
              isCorrect={isCorrect}
              onCorrectAnswer={handleCorrectAnswer}
              onIncorrectAnswer={handleIncorrectAnswer}
              isAnswered={isAnswered}
              selected={selected === option.id}
              className={className}
              setSelected={() => setSelected(option.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
