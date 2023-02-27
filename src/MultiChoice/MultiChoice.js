import './MultiChoice.css';

export function MultiChoice({ answer, isCorrect }) {
  return <button className="MultiChoice">  {answer} {isCorrect ? 'true' : 'false'}</button>;
}
