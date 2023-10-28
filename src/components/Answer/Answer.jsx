import "./Answer.scss";

export const Answer = ({
  option,
  correct,
  validateMode,
  toggleValidate,
  letter,
}) => {
  const answerCheck = option === correct;

  const validateResult = (e) => {
    if (validateMode) return;

    if (answerCheck) {
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("incorrect");
    }

    toggleValidate(answerCheck);
  };

  return (
    <li
      className={`quiz-answer 
      ${validateMode && answerCheck ? "correct" : ""}`}
      onClick={validateResult}
    >
      {letter} - {option}
    </li>
  );
};
