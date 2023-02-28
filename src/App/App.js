import './App.css';
import { Generate } from '../Generate/Generate';
import { Quiz } from '../Quiz/Quiz';
import { Score } from '../Score/Score';
import { Trivia } from '../util/Trivia';
import { useState } from 'react';

export function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const results = async () => {
    try {
      const questionResults = await Trivia.results();
      setQuestions(questionResults);
    } catch (error) {
      console.error(error);
    }
  };

  function handleCorrectAnswer() {
    setScore(score + 1);
    console.log(score);
  };

  return (
    <div>
      <h1>
        <span className="highlight">Quizzy </span>Gen Gen
      </h1>
      <div className="App">
        <Generate getQuestions={results} />
        <Quiz questions={questions} onCorrectAnswer={handleCorrectAnswer} />
        <Score score={score} />
      </div>
    </div>
  );
}
