/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import "./App.scss";
import { useEffect } from "react";
import { Answer } from "./components/Answer/Answer";
import { getRandomQuiz } from "./utils/getRandomQuiz";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import { LetterA, LetterB, LetterC, LetterD } from "./icons";
import { GameEnd } from "./components/GameEnd/GameEnd";
import useData from "./hooks/useData";
import { GameInit } from "./components/GameInit/GameInit";

const MAX_TURNS = 5;
const initialMatch = {
  points: 0,
  progress: new Array(MAX_TURNS).fill(null),
};

function App() {
  const { data, reloadData } = useData();

  const [quizs, setQuizs] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState({});
  const [playing, setPlaying] = useState(false);
  const [finish, setFinish] = useState(false);
  const [validateMode, setValidateMode] = useState(false);
  const [turn, setTurn] = useState(1);
  const [match, setMatch] = useState(initialMatch);

  const letters = [LetterA, LetterB, LetterC, LetterD];

  useEffect(() => {
    setQuizs(data);
    setCurrentQuiz(getRandomQuiz(data));
  }, [data]);

  useEffect(() => {
    // Comprobar si se ha terminado la partida
    if (turn > MAX_TURNS) return setFinish(true);

    // Actualizar el array eliminando el último quiz realizado al cambiar de turno
    if (turn > 1) {
      const updatedQuizs = quizs.filter((quiz) => quiz.id !== currentQuiz.id);
      setQuizs(updatedQuizs);
      setCurrentQuiz(getRandomQuiz(updatedQuizs));
      setValidateMode(false);
    }
  }, [turn]);

  const toggleValidate = (result) => {
    setValidateMode(true);

    setMatch((prevMatch) => {
      const { points, progress } = prevMatch;

      const newPoints = result ? points + 1 : points;
      const newProgress = [...progress];
      newProgress[turn - 1] = result;

      return {
        points: newPoints,
        progress: newProgress,
      };
    });

    setTimeout(() => {
      setTurn(turn + 1);
    }, 3000);
  };

  const restartGame = () => {
    setFinish(false);
    setPlaying(false);
    setTurn(1);
    setValidateMode(false);
    setMatch(initialMatch);

    reloadData();
  };

  return (
    <div className="quiz-games">
      <header className="quiz-header">
        <img
          className="title"
          src="/quiz-games-title.png"
          alt="logo of Quiz Games Page"
        />
      </header>
      <main className="quiz-container">
        {playing ? (
          !finish ? (
            quizs.length > 0 ? (
              <>
                <h1 className="quiz-title">{currentQuiz.question}</h1>
                <ol className="quiz-list">
                  {currentQuiz.answers.options.map((quiz, index) => (
                    <Answer
                      key={quiz}
                      Letter={letters[index]}
                      option={quiz}
                      correct={currentQuiz.answers.correct}
                      validateMode={validateMode}
                      toggleValidate={toggleValidate}
                    />
                  ))}
                </ol>
              </>
            ) : (
              <h2>Todavía no se han cargado las preguntas</h2>
            )
          ) : (
            <GameEnd
              score={(match.points / MAX_TURNS) * 100}
              restartGame={restartGame}
            />
          )
        ) : (
          <GameInit setPlaying={setPlaying} />
        )}
      </main>
      <footer className="quiz-footer">
        {playing && <ProgressBar progress={match.progress} turn={turn} />}
      </footer>
    </div>
  );
}

export default App;
