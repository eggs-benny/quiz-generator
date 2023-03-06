import './Generate.css';
import { useState, useEffect } from 'react';

export function Generate({ handleGenerateQuiz }) {
  const [difficulty, setDifficulty] = useState('');

  function difficultySelector(selectedDifficulty) {
    if (selectedDifficulty === difficulty) {
      setDifficulty('');
    }
    const difficultyLevel = `&difficulty=${selectedDifficulty}`;
    setDifficulty(difficultyLevel);
    handleGenerateQuiz(difficulty);
  }

  const difficultyLevels = ['easy', 'medium', 'hard'];

  useEffect(() => {
    handleGenerateQuiz(difficulty);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty]);

  return (
    <div className="Generate">
      <div className="dropdown">
        <button className="Button">ONE MORE QUIZ</button>
        <div className="dropdown-content">
          {difficultyLevels.map((level) => (
            <button
              key={level}
              className="dropbtn"
              onClick={() => difficultySelector(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
