import './App.css';
import { Generate } from '../Generate/Generate';
import { Quiz } from '../Quiz/Quiz';
import { Score } from '../Score/Score';
import { Trivia } from '../util/Trivia';
import { useState } from 'react';

export function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState({})

  const handleGenerateQuiz = async (difficulty) => {
    try {
      const questionResults = await Trivia.results(difficulty);
      setQuestions(questionResults);
      setScore(0)
    } catch (error) {
      console.error(error);
    }
  };

  function handleCorrectAnswer(questionId) {
    if (!correctAnswers[questionId]) {
    setScore(score + 1);
    setCorrectAnswers({ ...correctAnswers, [questionId]: true})
    }
  };

  return (
    <div>
      <h1>
        <span className="highlight">Quizzy </span>Gen Gen
      </h1>
      <div className="App">
        <Generate handleGenerateQuiz={handleGenerateQuiz} />
        <Quiz questions={questions} onCorrectAnswer={handleCorrectAnswer} />
        <Score score={score} />
      </div>
    </div>
  );
}
