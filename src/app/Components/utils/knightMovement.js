const checkKnightMovement = (startTile, endTile, boardState, colour) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  // x pos
  if (endTile.row === startTile.row + 2) {
    if (
      columnRef.indexOf(endTile.column) ===
        columnRef.indexOf(startTile.column) + 1 ||
      columnRef.indexOf(endTile.column) ===
        columnRef.indexOf(startTile.column) - 1
    ) {
      if (
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
      } else if (
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour !== colour
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  // x neg
  else if (endTile.row === startTile.row - 2) {
    if (
      columnRef.indexOf(endTile.column) ===
        columnRef.indexOf(startTile.column) + 1 ||
      columnRef.indexOf(endTile.column) ===
        columnRef.indexOf(startTile.column) - 1
    ) {
      if (
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
      } else if (
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour !== colour
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  //  y pos
  else if (
    columnRef.indexOf(endTile.column) ===
    columnRef.indexOf(startTile.column) + 2
  ) {
    if (
      endTile.row === startTile.row + 1 ||
      endTile.row === startTile.row - 1
    ) {
      if (
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
      } else if (
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour !== colour
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  // y neg
  else if (
    columnRef.indexOf(endTile.column) ===
    columnRef.indexOf(startTile.column) - 2
  ) {
    if (
      endTile.row === startTile.row + 1 ||
      endTile.row === startTile.row - 1
    ) {
      if (
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
      } else if (
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour !== colour
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};

const checkKnightAttackingKing = (startTile, endTile, boardState, colour) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const endTileColumnNumber = columnRef.indexOf(endTile.column);
  const knightScope = [];

  // x+2, y+1
  if (endTile.row <= 7 && endTileColumnNumber <= 5) {
    if (boardState[endTile.row][endTileColumnNumber + 2] !== null) {
      knightScope.push(boardState[endTile.row][endTileColumnNumber + 2]);
    }
  }
  // x+2, y-1
  if (endTile.row >= 2 && endTileColumnNumber <= 5) {
    if (boardState[endTile.row - 2][endTileColumnNumber + 2] !== null) {
      knightScope.push(boardState[endTile.row - 2][endTileColumnNumber + 2]);
    }
  }

  // x-2, y+1
  if (endTile.row <= 7 && endTileColumnNumber >= 2) {
    if (boardState[endTile.row][endTileColumnNumber - 2] !== null) {
      knightScope.push(boardState[endTile.row][endTileColumnNumber - 2]);
    }
  }
  // x-2, y-1
  if (endTile.row >= 2 && endTileColumnNumber >= 2) {
    if (boardState[endTile.row - 2][endTileColumnNumber - 2] !== null) {
      knightScope.push(boardState[endTile.row - 2][endTileColumnNumber - 2]);
    }
  }
  // y+2, x+1
  if (endTile.row <= 6 && endTileColumnNumber <= 6) {
    if (boardState[endTile.row + 1][endTileColumnNumber + 1] !== null) {
      knightScope.push(boardState[endTile.row + 1][endTileColumnNumber + 1]);
    }
  }

  // y+2, x-1
  if (endTile.row <= 6 && endTileColumnNumber >= 1) {
    if (boardState[endTile.row + 1][endTileColumnNumber - 1] !== null) {
      knightScope.push(boardState[endTile.row + 1][endTileColumnNumber - 1]);
    }
  }
  // y-2, x+1
  if (endTile.row >= 3 && endTileColumnNumber <= 6) {
    if (boardState[endTile.row - 3][endTileColumnNumber + 1] !== null) {
      knightScope.push(boardState[endTile.row - 3][endTileColumnNumber + 1]);
    }
  }
  // y-2, x-1
  if (endTile.row >= 3 && endTileColumnNumber >= 1) {
    if (boardState[endTile.row - 3][endTileColumnNumber - 1] !== null) {
      knightScope.push(boardState[endTile.row - 3][endTileColumnNumber - 1]);
    }
  }
  console.log(knightScope);
  // loop through knight scope
  for (let i = 0; i < knightScope.length; i++) {
    if (knightScope[i].type === "king" && knightScope[i].colour !== colour) {
      return true;
    }
  }
  return false;
};

module.exports = { checkKnightMovement, checkKnightAttackingKing };
