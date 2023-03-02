import './Generate.css';
import { useState } from 'react';

export function Generate({ handleGenerateQuiz }) {
  const [difficulty, setDifficulty] = useState('');

  const difficultySelector = (selectedDifficulty) => {
    switch (selectedDifficulty) {
      case 'easy':
        console.log('easy');
        setDifficulty('&difficulty=easy');
        break;
      case 'medium':
        console.log('medium');
        setDifficulty('&difficulty=medium');
        break;
      case 'hard':
        console.log('hard');
        setDifficulty('&difficulty=hard');
        break;
      default:
        break;
    }
    handleGenerateQuiz(difficulty);
  };

  return (
    <div className="Generate">
      <div className="dropdown">
        <button className="Button">GENERATE NEW QUIZ</button>
        <div className="dropdown-content">
          <button
            className="dropbtn"
            onClick={() => difficultySelector('easy')}
          >
            Easy
          </button>
          <button
            className="dropbtn"
            onClick={() => difficultySelector('medium')}
          >
            Medium
          </button>
          <button
            className="dropbtn"
            onClick={() => difficultySelector('hard')}
          >
            Hard
          </button>
        </div>
      </div>
    </div>
  );
}
