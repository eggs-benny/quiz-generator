import './Quiz.css';
import { Question } from '../Question/Question';

export function Quiz({ questions }) {

  
  return (
    <div className="Quiz">
      {questions.length > 0 ? (
        questions.map((question, index) => {
       
          return (
            <Question
              key={question.id}
              options={question.options}
              question={question.question}
              index={index+1}
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