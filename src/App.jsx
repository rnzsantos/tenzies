import { nanoid } from "nanoid"
import { useState, useEffect } from "react"
import Confetti from "react-confetti"
import useWindowSize from "react-use-window-size"
import Die from "./components/Die"
import data from "./js/App"
import "./App.css"

function App() {
  const [dice, setDice] = useState(() => data)
  const [tenzies, setTenzies] = useState(() => false)

  useEffect(() => {
    const isAllValueSame = dice.every(die => die.value === dice[0].value)
    const isAllDieHold = dice.every(die => die.isHold)

    if (isAllValueSame && isAllDieHold) setTenzies(true)
  }, [dice])

  function handleDieClick(e, id) {
    if (tenzies) return

    setDice(prevState =>
      prevState.map(die =>
        die.id === id ? { ...die, isHold: !die.isHold } : die
      )
    )
  }

  function getNewDiceValue() {
    setDice(prevState =>
      prevState.map(die =>
        die.isHold
          ? { ...die }
          : { ...die, value: Math.floor(Math.random() * 6) + 1 }
      )
    )
  }

  function newGame() {
    setTenzies(false)
    setDice(data)
  }

  const dieElement = dice.map(die => (
    <Die key={nanoid()} {...die} handleDieClick={handleDieClick} />
  ))

  const { width, height } = useWindowSize()

  return (
    <>
      {tenzies && <Confetti width={width} height={height} />}
      <main>
        <div className="container">
          <h1 className="title">Tenzies</h1>
          <h4 className="instructions">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </h4>
          <div className="dice-container">{dieElement}</div>
          <button
            className="btn btn-primary"
            onClick={tenzies ? newGame : getNewDiceValue}>
            {tenzies ? "New Game" : "Roll"}
          </button>
        </div>
      </main>
      <footer>
        <small>
          Developed by <a href="">Renzo</a>
        </small>
      </footer>
    </>
  )
}

export default App
