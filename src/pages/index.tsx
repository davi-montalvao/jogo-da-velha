import React, { useEffect, useState } from "react"

export default function TicTacToe() {
  const emptyBoard = Array(9).fill('')
  const [board, setBoard] = useState(emptyBoard)
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X")
  const [winner, setWinner] = useState<"X" | "O" | "E" | null>(null)
  const [gameStarted, setGameStarted] = useState(false)

  const handleCellClick = (index: number) => {
    if (winner) {
      return
    }

    if (board[index] !== "") {
      return
    }

    setGameStarted(true)
    setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item))
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
  }

  const checkWinner = () => {
    const possibleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ]

    possibleWaysToWin.forEach(cells => {
      if (cells.every(cell => cell === "O")) setWinner("O")
      if (cells.every(cell => cell === "X")) setWinner("X")
    })
    checkDraw()
  }

  const checkDraw = () => {
    if (board.every(item => item !== "")) {
      setWinner("E")
    }
  }

  const resetGame = () => {
    setCurrentPlayer("X")
    setBoard(emptyBoard)
    setWinner(null)
    setGameStarted(false)
  }

  useEffect(() => {
    checkWinner()
  }, [board])

  return (
    <div className="game-container">
      <header className="game-header">
        <h1 className="game-title">Jogo da Velha</h1>
        {!winner && gameStarted && (
          <div className="current-player">
            <span>Vez do jogador:</span>
            <span className={`player-indicator ${currentPlayer}`}>
              {currentPlayer}
            </span>
          </div>
        )}
      </header>

      <div className={`game-board ${winner ? "game-over" : ""}`}>
        {board.map((item, index) => (
          <div
            key={index}
            className={`board-cell ${item} ${!item && !winner ? 'clickable' : ''}`}
            onClick={() => handleCellClick(index)}
          >
            {item && (
              <span className={`cell-content ${item}`}>
                {item}
              </span>
            )}
          </div>
        ))}
      </div>

      {winner && (
        <div className="game-result">
          <div className="result-message">
            {winner === "E" ? (
              <h2 className="draw-message">
                <span className="draw-icon">🤝</span>
                <span>Empatou!</span>
              </h2>
            ) : (
              <h2 className="winner-message">
                <span className="winner-icon">🎉</span>
                <span className={`winner-text ${winner}`}>
                  {winner} venceu!
                </span>
              </h2>
            )}
          </div>
          <button className="reset-button" onClick={resetGame}>
            <span>Jogar Novamente</span>
            <span className="button-icon">🔄</span>
          </button>
        </div>
      )}

      {!gameStarted && !winner && (
        <div className="game-instructions">
          <p>Clique em qualquer célula para começar!</p>
        </div>
      )}
    </div>
  )
}
