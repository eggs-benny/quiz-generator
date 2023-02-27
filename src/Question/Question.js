import './Question.css';
import { MultiChoice } from '../MultiChoice/MultiChoice';

export function Question({question, correct, incorrect1, incorrect2, incorrect3}) {
  return (
    <div>
      <div className="Question">Question: {question}</div>
      <div className="Answers">
        <MultiChoice answer={correct}/>
        <MultiChoice answer={incorrect1}/>
        <MultiChoice answer={incorrect2}/>
        <MultiChoice answer={incorrect3}/>
      </div>
    </div>
  );
}
