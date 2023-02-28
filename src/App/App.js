import './App.css';
import { Generate } from '../Generate/Generate';
import { Quiz } from '../Quiz/Quiz';
import { Score } from '../Score/Score';
import { Trivia } from '../util/Trivia';
import { useState } from 'react';

export function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [incorrectAnswers, setIncorrectAnswers] = useState({});
  const [answer, setAnswer] = useState('');
  const [answerStyling, setAnswerStyling] = useState('');

  const handleGenerateQuiz = async () => {
    try {
      const questionResults = await Trivia.results();
      setQuestions(questionResults);
      setScore(0);
      setAnswerStyling('Initial');
      setCorrectAnswers({});
      setIncorrectAnswers({});
    } catch (error) {
      console.error(error);
    }
  };

  function handleCorrectAnswer(questionId) {
    if (!correctAnswers[questionId]) {
      setScore(score + 1);
      setAnswer(answer + 'Yes');
      setAnswerStyling('Green');
      setCorrectAnswers({ ...correctAnswers, [questionId]: true });
    }
  }

  function handleIncorrectAnswer(questionId) {
    if (!incorrectAnswers[questionId]) {
      setAnswer(answer + ' ✘');
      setAnswerStyling('Red');
      setIncorrectAnswers({ ...incorrectAnswers, [questionId]: true });
    }
  }

  return (
    <div>
      <h1>
        <span className="highlight">Quizzy </span>Gen Gen
      </h1>
      <div className="App">
        <Generate onGenerateQuiz={handleGenerateQuiz} />
        <Quiz
          questions={questions}
          onCorrectAnswer={handleCorrectAnswer}
          onIncorrectAnswer={handleIncorrectAnswer}
          answerStyling={answerStyling}
        />
        <Score score={score} />
      </div>
    </div>
  );
}
