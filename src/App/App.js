import './App.css';
import { Generate } from "../Generate/Generate"
import { Quiz } from "../Quiz/Quiz"
import { Score } from "../Score/Score"

function App() {
  return (
<div>
      <h1>
        <span className="highlight">Quizzy </span>Gen Gen
      </h1>
      <div className="App">
        <Generate />
        <Quiz />
        <Score />
      </div>
    </div>
  );
}

export default App;