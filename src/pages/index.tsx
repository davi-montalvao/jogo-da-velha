import React, { useEffect, useState } from "react"


export default function TicTacToe() {
  const emptyBoard = Array(9).fill('')
  const [board, setBoard] = useState(emptyBoard)
  const [currentPlayer, setCurrentPlayer]= useState<any>("X")
  const [winner, setWinner] = useState<any>(null)


  const handleCellClick = (index:number) => {
    if(winner) {
      console.log("Jogo finalizado")
      return
    } 

    if(board[index] !== "") {
      return null
    } 
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
    if(board.every(item => item !== "")) {
      setWinner("E")
    }
  }

  const resetGame = () => {
    setCurrentPlayer("X")
    setBoard(emptyBoard)
    setWinner(null)
  }

  useEffect(() => {
    checkWinner()    
  }, [board]);

  return (
    <main>
      <h1 className="title"> Jogo da velha </h1>

      <div className={`board ${winner ? "game-over" : ""}`}>
      {board.map((item, index) => (
        <div 
          key={index}
          className={`cell ${item}`}
          onClick={()=> handleCellClick(index)}
          >
            {item}
        </div>
      ))}
      </div>
      {winner &&
        <footer>
          {winner === "E" ?
            <h2 className="winner-message">
              <span className={winner}>Empatou!</span>
            </h2>
          :
            <h2 className="winner-message">
             <span className={winner}>{winner} </span> venceu!
            </h2>
          }
          <button onClick={resetGame}>Recomeçar jogo</button>
        </footer>
      }

    </main>
  )
}
