import './MultiChoice.css';

export function MultiChoice({
  option,
  isCorrect,
  onCorrectAnswer,
  onIncorrectAnswer,
  isAnswered,
  className,
  setSelected
}) {
  function handleButtonClick() {
    if (!isAnswered) {
      if (isCorrect) {
        onCorrectAnswer();
      } else {
        onIncorrectAnswer();
      }
      setSelected(true);
    }
  }

  return (
    <button
      className={className}
      onClick={handleButtonClick}
    >
      {option}
    </button>
  );
}