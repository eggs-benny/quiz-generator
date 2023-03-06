import './App.css';
import { Generate } from '../Generate/Generate';
import { Quiz } from '../Quiz/Quiz';
import { Score } from '../Score/Score';
import { Trivia } from '../util/Trivia';
import { useState, useEffect } from 'react';

export function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [incorrectAnswers, setIncorrectAnswers] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  async function handleGenerateQuiz(difficulty) {
    try {
      const questionResults = await Trivia.results(difficulty);
      setQuestions(questionResults);
      setScore(0);
      setAnswered(0)
    } catch (error) {
      console.error(error);
    }
  };

  function handleCorrectAnswer(questionId) {
    if (!correctAnswers[questionId]) {
      setScore(score + 1);
      setAnswered(answered + 1);
      setCorrectAnswers({ ...correctAnswers });
    }
  }

  function handleIncorrectAnswer(questionId) {
    if (!incorrectAnswers[questionId]) {
      setAnswered(answered + 1)
      setIncorrectAnswers({ ...incorrectAnswers });
    }
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 600);
    }
    
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div>
      <div>
      {isMobile ? <p>This is a mobile device</p> : <p>This is not a mobile device</p>}
    </div>
      <h1>
        <span className="highlight">Trivia </span>Forever
      </h1>
      <div className="App">
        <Quiz questions={questions} onCorrectAnswer={handleCorrectAnswer} onIncorrectAnswer={handleIncorrectAnswer}/>
        <Score score={score} answered={answered}/>
        <Generate handleGenerateQuiz={handleGenerateQuiz} />
      </div>
    </div>
  );
}
