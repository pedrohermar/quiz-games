import confetti from "canvas-confetti";
import "./GameEnd.scss";

export const GameEnd = ({ score }) => {
  if (score >= 80) confetti();
  return (
    <div className="game-end">
      <h3>Partida finalizada</h3>
      <p>Tu acierto ha sido de</p>
      <p
        className={`score
       ${
         score >= 80
           ? "text-green-500"
           : score >= 50
           ? "text-orange-500"
           : "text-red-500"
       }`}
      >
        {score}%
      </p>
      <button class="restart-btn">Volver a Jugar</button>
    </div>
  );
};
