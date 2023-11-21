const pawnAttackingTile = (
  startTile,
  endTile,
  boardState,
  colour,
  attackedTile
) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const rowOffset = 1;
  const columnOffsett = 1;
  const attackedTileColumn = columnRef.indexOf(attackedTile.column);
  const attackedTileRow = attackedTile.row - rowOffset;

  // pawn
  if (colour === "white") {
    const pawnAttackingTileFromXNeg =
      boardState[attackedTileRow + 1][attackedTileColumn - 1];
    const pawnAttackingTileFromXPos =
      boardState[attackedTileRow + 1][attackedTileColumn + 1];
    if (
      (pawnAttackingTileFromXNeg !== null &&
        pawnAttackingTileFromXNeg.type === "pawn" &&
        pawnAttackingTileFromXNeg.colour !== colour) ||
      (pawnAttackingTileFromXPos !== null &&
        pawnAttackingTileFromXPos.type === "pawn" &&
        pawnAttackingTileFromXPos.colour !== colour)
    ) {
      return true;
    }
  } else {
    const pawnAttackingTileFromXNeg =
      boardState[attackedTileRow - 1][attackedTileColumn - 1];
    const pawnAttackingTileFromXPos =
      boardState[attackedTileRow - 1][attackedTileColumn + 1];
    if (
      (pawnAttackingTileFromXNeg !== null &&
        pawnAttackingTileFromXNeg.type === "pawn" &&
        pawnAttackingTileFromXNeg.colour !== colour) ||
      (pawnAttackingTileFromXPos !== null &&
        pawnAttackingTileFromXPos.type === "pawn" &&
        pawnAttackingTileFromXPos.colour !== colour)
    ) {
      return true;
    }
  }
  return false;
};

const rookAttackingTile = (
  startTile,
  endTile,
  boardState,
  colour,
  attackedTile
) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const rowOffset = 1;
  const columnOffsett = 1;
  const boardSize = 8;
  const attackedTileColumn = columnRef.indexOf(attackedTile.column);
  const attackedTileRow = attackedTile.row - rowOffset;

  const rookDirections = [
    { x: 0, y: 1 }, // up
    { x: 0, y: -1 }, // down
    { x: 1, y: 0 }, // right
    { x: -1, y: 0 }, // left
  ];

  for (const direction of rookDirections) {
    let newRow = attackedTileRow + direction.y;
    let newColumn = attackedTileColumn + direction.x;

    while (
      newRow >= 0 &&
      newRow < boardSize &&
      newColumn >= 0 &&
      newColumn < boardSize
    ) {
      if (
        boardState[newRow][newColumn] !== null &&
        boardState[newRow][newColumn].colour !== colour
      ) {
        if (boardState[newRow][newColumn].type === "rook") {
          return true; // Rook can attack the tile
        } else {
          break; // Obstruction by another piece, stop checking in this direction
        }
      } else if (
        boardState[newRow][newColumn] !== null &&
        boardState[newRow][newColumn].colour === colour
      ) {
        break; // Own piece blocking the path, Rook cannot attack the tile
      }
      newRow += direction.y;
      newColumn += direction.x;
    }
  }
  return false; // Rook cannot attack the tile due to obstructions
};

const knightAttackingTile = (
  startTile,
  endTile,
  boardState,
  colour,
  attackedTile
) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const rowOffset = 1;
  const columnOffsett = 1;
  const boardSize = 8;
  const attackedTileColumn = columnRef.indexOf(attackedTile.column);
  const attackedTileRow = attackedTile.row - rowOffset;

  const knightJumps = [
    { x: -2, y: 1 },
    { x: -2, y: -1 },
    { x: -1, y: 2 },
    { x: -1, y: -2 },
    { x: 2, y: 1 },
    { x: 2, y: -1 },
    { x: 1, y: 2 },
    { x: 1, y: -2 },
  ];

  for (const jump of knightJumps) {
    const knightTileRow = attackedTileRow + jump.y;
    const knightTileColumn = attackedTileColumn + jump.x;

    const withinBoardBoundries =
      knightTileRow >= 0 &&
      knightTileColumn >= 0 &&
      knightTileRow <= 7 &&
      knightTileColumn <= 7;

    if (withinBoardBoundries) {
      if (
        boardState[knightTileRow][knightTileColumn] !== null &&
        boardState[knightTileRow][knightTileColumn].type === "knight" &&
        boardState[knightTileRow][knightTileColumn].colour !== colour
      ) {
        return true;
      }
    }
  }
  return false;
};

const bishopAttackingTile = (
  startTile,
  endTile,
  boardState,
  colour,
  attackedTile
) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const rowOffset = 1;
  const columnOffsett = 1;
  const boardSize = 8;
  const attackedTileColumn = columnRef.indexOf(attackedTile.column);
  const attackedTileRow = attackedTile.row - rowOffset;

  const bishopDirections = [
    { x: -1, y: -1 }, // up-left
    { x: -1, y: 1 }, // up-right
    { x: 1, y: -1 }, // down-left
    { x: 1, y: 1 }, // down-right
  ];

  for (const direction of bishopDirections) {
    let newRow = attackedTileRow + direction.y;
    let newColumn = attackedTileColumn + direction.x;

    while (
      newRow >= 0 &&
      newRow < boardSize &&
      newColumn >= 0 &&
      newColumn < boardSize
    ) {
      if (
        boardState[newRow][newColumn] !== null &&
        boardState[newRow][newColumn].colour !== colour
      ) {
        if (boardState[newRow][newColumn].type === "bishop") {
          return true; // Bishop can attack the tile
        } else {
          break; // Obstruction by another piece, stop checking in this direction
        }
      } else if (
        boardState[newRow][newColumn] !== null &&
        boardState[newRow][newColumn].colour === colour
      ) {
        break; // Own piece blocking the path, bishop cannot attack the tile
      }
      newRow += direction.y;
      newColumn += direction.x;
    }
  }
  return false; // Bishop cannot attack the tile due to obstructions
};

const queenAttackingTile = (
  startTile,
  endTile,
  boardState,
  colour,
  attackedTile
) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const rowOffset = 1;
  const columnOffsett = 1;
  const boardSize = 8;
  const attackedTileColumn = columnRef.indexOf(attackedTile.column);
  const attackedTileRow = attackedTile.row - rowOffset;

  const queenDirections = [
    { x: -1, y: -1 }, // up-left
    { x: -1, y: 1 }, // up-right
    { x: 1, y: -1 }, // down-left
    { x: 1, y: 1 }, // down-right;
    { x: 0, y: 1 }, // up
    { x: 0, y: -1 }, // down
    { x: -1, y: 0 }, // left
    { x: 1, y: 0 }, // right
  ];

  for (const direction of queenDirections) {
    let newRow = attackedTileRow + direction.y;
    let newColumn = attackedTileColumn + direction.x;

    while (
      newRow >= 0 &&
      newRow < boardSize &&
      newColumn >= 0 &&
      newColumn < boardSize
    ) {
      if (
        boardState[newRow][newColumn] !== null &&
        boardState[newRow][newColumn].colour !== colour
      ) {
        if (boardState[newRow][newColumn].type === "queen") {
          return true; // Queen can attack the tile
        } else {
          break; // Obstruction by another piece, stop checking in this direction
        }
      } else if (
        boardState[newRow][newColumn] !== null &&
        boardState[newRow][newColumn].colour === colour
      ) {
        break; // Own piece blocking the path, Queen cannot attack the tile
      }
      newRow += direction.y;
      newColumn += direction.x;
    }
  }
  return false; // Queen cannot attack the tile due to obstructions
};

const isTileUnderAttack = (
  startTile,
  endTile,
  boardState,
  colour,
  attackedTile
) => {
  if (pawnAttackingTile(startTile, endTile, boardState, colour, attackedTile)) {
    return true;
  } else if (
    rookAttackingTile(startTile, endTile, boardState, colour, attackedTile)
  ) {
    return true;
  } else if (
    knightAttackingTile(startTile, endTile, boardState, colour, attackedTile)
  ) {
    return true;
  } else if (
    bishopAttackingTile(startTile, endTile, boardState, colour, attackedTile)
  ) {
    return true;
  } else if (
    queenAttackingTile(startTile, endTile, boardState, colour, attackedTile)
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = { isTileUnderAttack };
