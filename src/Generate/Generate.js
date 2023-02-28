import './Generate.css';

export function Generate({ onGenerateQuiz }) {

  return (
    <div className="Generate">
            <button className="Button" onClick={onGenerateQuiz}>
        GENERATE NEW QUIZ
      </button>
    </div>
  );
}