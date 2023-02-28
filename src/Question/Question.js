import './Question.css';
import { MultiChoice } from '../MultiChoice/MultiChoice';


export function Question({ question, options }) {

  function randomize(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  }

  randomize(options)
  
  return (
    <div>
      <div className="Question">Question: {question}</div>
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
