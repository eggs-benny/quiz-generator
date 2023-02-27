import './Quiz.css';
import { Question } from '../Question/Question';

export function Quiz({ questions }) {
  return (
    <div className="Quiz">
      {questions.length > 0 ? (
        questions.map((question) => {
          return (
            <Question
              key={question.id}
              options={question.options}
              question={question.question}
            />
          );
        })
      ) : (
        <div>
          <p>Click generate</p>
        </div>
      )}
    </div>
  );
}
