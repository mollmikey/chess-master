import { Outlet, Link } from 'react-router-dom'

const chessboardImg = '/images/chessboard.svg'
const practiceImg = '/images/chess-pawn.svg'
const piecesImg = '/images/chess.svg'
const settingsImg = '/images/settings-svgrepo-com.svg'
const userImg = '/images/chess-king.svg'

function App() {
  return (
    <>
      <div className="app">
        <Link className="ChessMaster-Link" to="/">
          <img
            className="logo"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Font_Awesome_5_solid_chess-pawn.svg/1200px-Font_Awesome_5_solid_chess-pawn.svg.png"
          ></img>
          <h1 className="ChessMaster">Chess Master</h1>
        </Link>
        <div className="sidebar">
          <Link to="/" className="board-link">
            Board
            <img className="board-logo" src={chessboardImg} alt="Board"></img>
          </Link>
          <Link to="/practice" className="practice-link">
            Practice
            <img className="practice-logo" src={practiceImg} alt="Practice" />
          </Link>
          <Link to="/pieces" className="pieces-link">
            Pieces
            <img className="pieces-logo" src={piecesImg} alt="Pieces" />
          </Link>
          <Link to="/settings" className="settings-link">
            Settings
            <img className="settings-logo" src={settingsImg} alt="Settings" />
          </Link>
          <Link to="/user" className="user-link">
            User
            <img className="user-logo" src={userImg} alt="User Profile" />
          </Link>
        </div>
        <div className="content">
          <div className="outlet-container">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
