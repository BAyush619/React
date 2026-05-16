import { useState } from 'react'
import './App.css'





function App() {
  function squares(currentSquareIndex) {
    return <button className='btn' onClick={() => handleSquareClick(currentSquareIndex)}>{board[currentSquareIndex]}</button>
  }
  const [board, setBoard] = useState(Array(9).fill(""))
  const [isXNext, setIsXNext] = useState(true)

  function handleSquareClick(squareIndex) {
    const copyBoard = [...board]
    copyBoard[squareIndex] = isXNext ? "X" : "O"
    setBoard(copyBoard)
    setIsXNext(!isXNext)
  }

  function checkWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let combination of winningCombinations) {
      const [a, b, c] = combination
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    return null
  }

  return (
    <>
      <div className='container'>
        <h1 className='title'>Tic Tac Toe</h1>
        <div className='board'>
          <div className='row'>
            {squares(0)}
            {squares(1)}
            {squares(2)}
          </div>
          <div className='row'>
            {squares(3)}
            {squares(4)}
            {squares(5)}
          </div>
          <div className='row'>
            {squares(6)}
            {squares(7)}
            {squares(8)}
          </div>
        </div>

        <p>Winner: {checkWinner()}</p>
      </div>
    </>
  )
}

export default App
