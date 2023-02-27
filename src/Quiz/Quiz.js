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
              correct={question.correct}
              incorrect1={question.incorrect1}
              incorrect2={question.incorrect2}
              incorrect3={question.incorrect3}
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
