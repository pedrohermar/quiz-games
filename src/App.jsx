import { useState } from "react";
import "./App.scss";
import { useEffect } from "react";
import { Answer } from "./components/Answer/Answer";

function App() {
  const [quizs, setQuizs] = useState(null);

  useEffect(() => {
    fetch("/src/data/quizs.json")
      .then((res) => res.json())
      .then((data) => setQuizs(data));
  }, []);

  return (
    <>
      <header className="quiz-header">
        <h1>Página de inicio</h1>
      </header>
      <main className="quiz-container">
        {quizs ? (
          <>
            <h2 className="quiz-title">{quizs[0].question}</h2>
            <ul className="quiz-list">
              {quizs[0].answers.options.map((quiz) => (
                <Answer key={quiz} text={quiz} />
              ))}
            </ul>
          </>
        ) : (
          <h2>Todavía no se han cargado las preguntas</h2>
        )}
      </main>
    </>
  );
}

export default App;
