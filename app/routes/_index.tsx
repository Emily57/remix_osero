import { useState } from "react";
import Board from "~/components/Board";
import {
  flipDiscs,
  initialBoard,
  isValidMove,
  getValidMoves,
} from "~/gameLogic";

export default function Index() {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("B");

  const handleClick = (row: number, col: number) => {
    if (!isValidMove(board, row, col, currentPlayer)) return;

    const newBoard = flipDiscs(board, row, col, currentPlayer);
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "B" ? "W" : "B");
  };

  const validMoves = getValidMoves(board, currentPlayer);

  return (
    <div>
      <h1>Othello Game</h1>
      <Board
        board={board}
        currentPlayer={currentPlayer}
        handleClick={handleClick}
        validMoves={validMoves}
      />
    </div>
  );
}
