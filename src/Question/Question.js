import './Question.css';
import { MultiChoice } from '../MultiChoice/MultiChoice';

export function Question({ question, options }) {
  return (
    <div>
      <div className="Question">Question: {question}</div>
      <div className="Answers">
        {options.map((option) => {
          return (
            <MultiChoice
              key={option.id}
              answer={option.answer}
              isCorrect={option.isCorrect}
            />
          );
        })}
      </div>
    </div>
  );
}
