export const initialBoard = Array(8)
  .fill(null)
  .map(() => Array(8).fill(null));
initialBoard[3][3] = "W";
initialBoard[3][4] = "B";
initialBoard[4][3] = "B";
initialBoard[4][4] = "W";

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0], // horizontal and vertical
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1], // diagonal
];

export const isValidMove = (
  board: (string | null)[][],
  row: number,
  col: number,
  player: string
) => {
  if (board[row][col] !== null) return false;

  const opponent = player === "B" ? "W" : "B";
  for (const [dx, dy] of directions) {
    let x = row + dx;
    let y = col + dy;
    let hasOpponentBetween = false;

    while (x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y] === opponent) {
      x += dx;
      y += dy;
      hasOpponentBetween = true;
    }

    if (
      hasOpponentBetween &&
      x >= 0 &&
      x < 8 &&
      y >= 0 &&
      y < 8 &&
      board[x][y] === player
    ) {
      return true;
    }
  }
  return false;
};

export const flipDiscs = (
  board: (string | null)[][],
  row: number,
  col: number,
  player: string
) => {
  const opponent = player === "B" ? "W" : "B";
  const newBoard = board.map((row) => row.slice());

  for (const [dx, dy] of directions) {
    let x = row + dx;
    let y = col + dy;
    const discsToFlip = [];

    while (x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y] === opponent) {
      discsToFlip.push([x, y]);
      x += dx;
      y += dy;
    }

    if (x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y] === player) {
      for (const [fx, fy] of discsToFlip) {
        newBoard[fx][fy] = player;
      }
    }
  }

  newBoard[row][col] = player;
  return newBoard;
};

export const getValidMoves = (board: (string | null)[][], player: string) => {
  const validMoves: [number, number][] = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if (isValidMove(board, row, col, player)) {
        validMoves.push([row, col]);
      }
    }
  }
  return validMoves;
};
