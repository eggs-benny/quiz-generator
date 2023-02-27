import './App.css';
import { Generate } from "../Generate/Generate"
import { Quiz } from "../Quiz/Quiz"
import { Score } from "../Score/Score"
import { Trivia } from "../util/Trivia"
import { useState } from 'react';

export function App() {
  const [questions, setQuestions] = useState([])

  const results = async () => {
    try {
      const questionResults = await Trivia.results();
      setQuestions(questionResults);
    } catch (error) {
      console.error(error)
    }
  }
  return (
<div>
      <h1>
        <span className="highlight">Quizzy </span>Gen Gen
      </h1>
      <div className="App">
        {Trivia.questions()}
        <Generate getQuestions={results}/>
        <Quiz questions={questions}/>
        <Score />
      </div>
    </div>
  );
}
