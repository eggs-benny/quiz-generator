import './Question.css';
import { MultiChoice } from '../MultiChoice/MultiChoice';

export function Question() {
  return (
    <div>
      <div className="Question"> This is a question?</div>
      <div className="Answers">
        <MultiChoice />
        <MultiChoice />
        <MultiChoice />
        <MultiChoice />
      </div>
    </div>
  );
}
