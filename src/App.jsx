import "./App.scss";

function App() {
  return (
    <>
      <header className="quiz-header">
        <h1>Página de inicio</h1>
      </header>
      <main className="quiz-container">
        <h2 className="quiz-title">Pregunta para el Quiz</h2>
        <ul className="quiz-list">
          <li>Respuesta 1</li>
          <li>Respuesta 2</li>
          <li>Respuesta 3</li>
          <li>Respuesta 4</li>
        </ul>
      </main>
    </>
  );
}

export default App;
