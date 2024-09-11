import React from "react";

interface CellProps {
  row: number;
  col: number;
  cell: string | null;
  handleClick: (row: number, col: number) => void;
  isValidMove: boolean;
  currentPlayer: string;
}

const Cell: React.FC<CellProps> = ({
  row,
  col,
  cell,
  handleClick,
  isValidMove,
  currentPlayer,
}) => {
  return (
    <div
      onClick={() => handleClick(row, col)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick(row, col);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Cell ${row + 1}, ${col + 1}`}
      style={{
        width: 50,
        height: 50,
        backgroundColor: "green",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {cell && (
        <div
          style={{
            width: "80%",
            height: "80%",
            backgroundColor: cell === "B" ? "black" : "white",
            borderRadius: "50%",
          }}
        />
      )}
      {isValidMove && !cell && (
        <div
          style={{
            width: "10%",
            height: "10%",
            backgroundColor: currentPlayer === "B" ? "black" : "white",
            borderRadius: "50%",
            position: "absolute",
          }}
        />
      )}
    </div>
  );
};

export default Cell;
