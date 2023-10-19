import "./Answer.scss";

export const Answer = ({ option, correct, validate, setValidate }) => {
  const validateResult = (e) => {
    if (validate) return;

    if (option === correct) {
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("incorrect");
    }

    setValidate(true);
  };

  return (
    <li
      className={`quiz-answer 
      ${validate && option === correct ? "correct" : ""}`}
      onClick={validateResult}
    >
      {option}
    </li>
  );
};
