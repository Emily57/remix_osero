import React from "react";
import Cell from "./Cell";

interface BoardProps {
  board: (string | null)[][];
  currentPlayer: string;
  handleClick: (row: number, col: number) => void;
  validMoves: [number, number][];
}

const Board: React.FC<BoardProps> = ({
  board,
  currentPlayer,
  handleClick,
  validMoves,
}) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 50px)" }}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            cell={cell}
            handleClick={handleClick}
            isValidMove={validMoves.some(
              ([r, c]) => r === rowIndex && c === colIndex
            )}
            currentPlayer={currentPlayer}
          />
        ))
      )}
    </div>
  );
};

export default Board;
