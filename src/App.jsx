/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import "./App.scss";
import { useEffect } from "react";
import { Answer } from "./components/Answer/Answer";

function App() {
  const [quizs, setQuizs] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [validateMode, setValidateMode] = useState(false);
  const [turn, setTurn] = useState(1);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("/src/data/quizs.json")
      .then((res) => res.json())
      .then((data) => {
        setQuizs(data);
        selectCurrectQuiz(data);
      });
  }, []);

  useEffect(() => {
    const updatedQuizs = quizs.filter(
      (quiz) => quiz.id !== quizs[currentQuiz].id
    );
    selectCurrectQuiz(updatedQuizs);
    setQuizs(updatedQuizs);
    setValidateMode(false);
  }, [turn]);

  const toggleValidate = (result) => {
    setValidateMode(true);

    if (result) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setTurn(turn + 1);
    }, 3000);
  };

  const selectCurrectQuiz = (array) => {
    const selectQuiz = Math.floor(Math.random() * array.length) ?? 0;
    setCurrentQuiz(selectQuiz);
  };

  return (
    <>
      <header className="quiz-header">
        <h1>Página de inicio</h1>
      </header>
      <main className="quiz-container">
        {quizs.length > 0 ? (
          <>
            <h2 className="quiz-title">{quizs[currentQuiz].question}</h2>
            <ol className="quiz-list">
              {quizs[currentQuiz].answers.options.map((quiz) => (
                <Answer
                  key={quiz}
                  option={quiz}
                  correct={quizs[currentQuiz].answers.correct}
                  validateMode={validateMode}
                  toggleValidate={toggleValidate}
                />
              ))}
            </ol>
          </>
        ) : (
          <h2>Todavía no se han cargado las preguntas</h2>
        )}
      </main>
      <footer className="text-white font-bold text-lg">
        <p>Turno: {turn}</p>
        <p>Score: {score}</p>
      </footer>
    </>
  );
}

export default App;
