import './Generate.css';

export function Generate({ getQuestions }) {

  return (
    <div className="Generate">
            <button className="Button" onClick={getQuestions}>
        GENERATE NEW QUIZ
      </button>
    </div>
  );
}