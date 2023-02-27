import './Quiz.css';
import { Question } from '../Question/Question';

export function Quiz() {
  return (
    <div className="Quiz">
      <Question/>
      <Question/>
    </div>
  );
}
