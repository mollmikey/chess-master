import { useState } from 'react'
import { Link } from 'react-router-dom'

function Board() {
  const [isWhitePerspective, setIsWhitePerspective] = useState(true)
  const [activeLayout, setActiveLayout] = useState(1)
  const [selectedLayout, setSelectedLayout] = useState(1)
  const squares = []

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const squareColor = (row + col) % 2 === 0 ? 'light' : 'dark'
      const squareId = String.fromCharCode(97 + col) + (8 - row)
      let squareLetter = squareId[0]
      let squareNumber = squareId[1]

      if (activeLayout === 2) {
        if (isWhitePerspective) {
          if (row !== 7) {
            squareLetter = ''
          }
          if (col !== 0) {
            squareNumber = ''
          }
        } else {
          if (row !== 0) {
            squareLetter = ''
          }
          if (col !== 7) {
            squareNumber = ''
          }
        }
      }

      if (activeLayout === 4) {
        if (row !== 0 && row !== 7) {
          squareLetter = ''
        }
        if (col !== 0 && col !== 7) {
          squareNumber = ''
        }
      }

      squares.push(
        <div
          key={squareId}
          className={`square ${squareColor}`}
          data-square-letter={squareLetter}
          data-square-number={squareNumber}
          data-layout={activeLayout}
        ></div>,
      )
    }
  }

  const switchPerspective = () => {
    setIsWhitePerspective(!isWhitePerspective)
  }

  return (
    <>
      <Link className="ChessMaster-Link" to="/">
        <img
          className="logo"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Font_Awesome_5_solid_chess-pawn.svg/1200px-Font_Awesome_5_solid_chess-pawn.svg.png"
        ></img>
        <h1 className="ChessMaster">Chess Master</h1>
      </Link>
      <div className="buttons-container">
        <button
          className={selectedLayout === 1 ? 'layout-1 selected' : 'layout-1'}
          onClick={() => {
            setSelectedLayout(1)
            setActiveLayout(1)
          }}
        >
          1
        </button>

        <button
          className={selectedLayout === 2 ? 'layout-2 selected' : 'layout-2'}
          onClick={() => {
            setSelectedLayout(2)
            setActiveLayout(2)
          }}
        >
          2
        </button>

        <button
          className={selectedLayout === 3 ? 'layout-3 selected' : 'layout-3'}
          onClick={() => {
            setSelectedLayout(3)
            setActiveLayout(3)
          }}
        >
          3
        </button>

        <button
          className={selectedLayout === 4 ? 'layout-4 selected' : 'layout-4'}
          onClick={() => {
            setSelectedLayout(4)
            setActiveLayout(4)
          }}
        >
          4
        </button>
        <button
          className={
            isWhitePerspective
              ? 'perspective-button'
              : 'perspective-button clicked'
          }
          onClick={switchPerspective}
        >
          Switch Perspective
        </button>
      </div>
      <div className="chessboard-container">
        <div className="chessboard">
          {isWhitePerspective ? squares : [...squares].reverse()}
        </div>
      </div>
    </>
  )
}

export default Board
