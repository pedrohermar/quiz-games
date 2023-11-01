import "./Answer.scss";
import { CorrectCIcon, IncorrectIcon } from "../../icons";
import { useState } from "react";

export const Answer = ({
  option,
  correct,
  validateMode,
  toggleValidate,
  Letter,
}) => {
  const [selected, setSelected] = useState(false);
  const answerCheck = option === correct;

  const handleClick = () => {
    if (validateMode) return;

    setSelected(true);

    toggleValidate(answerCheck);
  };

  return (
    <li
      className={`quiz-answer 
      ${
        validateMode && answerCheck
          ? "correct"
          : validateMode && selected
          ? "incorrect"
          : null
      }`}
      onClick={handleClick}
    >
      <Letter /> {option}
      <span className="check-icon">
        {validateMode && answerCheck ? (
          <CorrectCIcon />
        ) : validateMode && selected ? (
          <IncorrectIcon />
        ) : null}
      </span>
    </li>
  );
};
