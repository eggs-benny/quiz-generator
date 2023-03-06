import './Score.css';

export function Score({ score, answered }) {
  const percent = Math.ceil((score / answered) * 100);
  let comment = '';
  if (answered >= 10) {
  switch (true) {
    case percent < 40:
      comment = 'Not good';
      break;
    case percent < 60:
      comment = 'Pretty good';
      break;
    case percent < 80:
      comment = 'Very good';
      break;
    case percent <= 100:
      comment = 'Perfect!';
      break;
    default:
      comment = 'Awful';
      break;
  }
}

  return (
    <div className="Score">
      <h2>{percent}% correct</h2>
      <h2>{comment}</h2>
    </div>
  );
}

