import { useState } from 'react'

// Define the positions
const positions = [
  'a8',
  'b8',
  'c8',
  'd8',
  'e8',
  'f8',
  'g8',
  'h8',
  'a7',
  'b7',
  'c7',
  'd7',
  'e7',
  'f7',
  'g7',
  'h7',
  'a6',
  'b6',
  'c6',
  'd6',
  'e6',
  'f6',
  'g6',
  'h6',
  'a5',
  'b5',
  'c5',
  'd5',
  'e5',
  'f5',
  'g5',
  'h5',
  'a4',
  'b4',
  'c4',
  'd4',
  'e4',
  'f4',
  'g4',
  'h4',
  'a3',
  'b3',
  'c3',
  'd3',
  'e3',
  'f3',
  'g3',
  'h3',
  'a2',
  'b2',
  'c2',
  'd2',
  'e2',
  'f2',
  'g2',
  'h2',
  'a1',
  'b1',
  'c1',
  'd1',
  'e1',
  'f1',
  'g1',
  'h1',
]

const Practice = () => {
  const [randomPosition, setRandomPosition] = useState('')
  const [correctScore, setCorrectScore] = useState(0)
  const [incorrectScore, setIncorrectScore] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [isGenerated, setIsGenerated] = useState(false)
  const [isGuessMade, setIsGuessMade] = useState(false)
  const [remainingPositions, setRemainingPositions] = useState([...positions])
  const [incorrectPositions, setIncorrectPositions] = useState<string[]>([])

  const generateRandomPosition = () => {
    if (remainingPositions.length === 0) {
      setRemainingPositions([...positions])
    }
    const randomIndex = Math.floor(Math.random() * remainingPositions.length)
    const newPosition = remainingPositions[randomIndex]
    setRemainingPositions(
      remainingPositions.filter((pos) => pos !== newPosition),
    )
    setRandomPosition(newPosition)
    setIsGenerated(true)
    setIsGuessMade(false)
  }

  const handleButtonClick = (position: string) => {
    setTotalScore((prevTotalScore) => prevTotalScore + 1)
    if (position === randomPosition) {
      setCorrectScore((prevCorrectScore) => prevCorrectScore + 1)
    } else {
      setIncorrectScore((prevIncorrectScore) => prevIncorrectScore + 1)
      setIncorrectPositions((prevIncorrectPositions) => [
        ...prevIncorrectPositions,
        position,
      ])
    }
    setIsGuessMade(true)
    if (totalScore + 1 !== 0) {
      generateRandomPosition()
    }
  }

  const resetGame = () => {
    setTotalScore(0)
    setCorrectScore(0)
    setIncorrectScore(0)
    setIsGenerated(false)
    setIsGuessMade(false)
    setRemainingPositions([...positions])
  }

  const retryIncorrect = () => {
    setRemainingPositions([...incorrectPositions])
    setIncorrectScore(0)
    setTotalScore(64 - incorrectPositions.length)
    setIncorrectPositions([])
  }

  return (
    <div className="position-generator">
      <h1>Select the correct square</h1>
      {totalScore === 0 && (
        <button className="pos-gen-button" onClick={generateRandomPosition}>
          Generate Random Position
        </button>
      )}
      <p>{randomPosition}</p>
      <div className="score-container">
        <p>Total score: {totalScore}/64</p>
        <p>Correct score: {correctScore}</p>
        <p>Incorrect score: {incorrectScore}</p>
      </div>
      <div className="guess-buttons">
        {positions.map((position) => (
          <button
            key={position}
            className="position-button"
            onClick={() => handleButtonClick(position)}
            disabled={!isGenerated || isGuessMade}
          >
            {position}
          </button>
        ))}
      </div>
      {totalScore === 64 && (
        <div>
          <button onClick={resetGame}>Play Again</button>
          <button onClick={retryIncorrect}>Retry Incorrect</button>
        </div>
      )}
    </div>
  )
}

export default Practice
