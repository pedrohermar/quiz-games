import "./GameInit.scss"

export const GameInit = ({setPlaying}) => {
  return (
    <button className="init-btn" onClick={() => setPlaying(true)}>Empezar</button>
  )
}
