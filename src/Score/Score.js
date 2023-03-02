import './Score.css';

export function Score({score}) {
  return (
    <div className="Score">
      <h2>Your current score is {score}</h2>
    </div>
  );
}
