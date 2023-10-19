const checkPawnMovement = (startTile, endTile, boardState, colour) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const emptyTile =
    boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null;
  const secondEmptyTileWhite =
    boardState[endTile.row - 2][columnRef.indexOf(endTile.column)] === null;
  const secondEmptyTileblack =
    boardState[endTile.row][columnRef.indexOf(endTile.column)] === null;
  const targetTile =
    boardState[endTile.row - 1][columnRef.indexOf(endTile.column)];
  const oneDiagonalSpace =
    columnRef.indexOf(endTile.column) - columnRef.indexOf(startTile.column) ===
      1 ||
    columnRef.indexOf(endTile.column) - columnRef.indexOf(startTile.column) ===
      -1;
  const takingPiece =
    boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null ||
    boardState[endTile.row - 1][columnRef.indexOf(endTile.column)].colour !==
      colour;

  if (colour === "white") {
    if (startTile.row === 2) {
      // if on row 2
      // forward 1 space
      if (
        emptyTile &&
        endTile.row === 3 &&
        endTile.column === startTile.column
      ) {
        return true;
        //forward 2 spaces
      } else if (
        emptyTile &&
        secondEmptyTileWhite &&
        endTile.row === 4 &&
        endTile.column === startTile.column
      ) {
        return true;
        // if taking when on row 2
      } else if (
        !emptyTile &&
        targetTile.colour !== colour &&
        endTile.row === 3 &&
        oneDiagonalSpace &&
        takingPiece
      ) {
        return true;
      } else {
        return false;
      }
    }
    // not row 2
    else if (
      emptyTile &&
      endTile.row === startTile.row + 1 &&
      endTile.column === startTile.column
    ) {
      return true;
      //taking
    } else if (
      !emptyTile &&
      targetTile.colour !== colour &&
      endTile.row === startTile.row + 1 &&
      oneDiagonalSpace &&
      takingPiece
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    if (startTile.row === 7) {
      // if on row 2
      // forward 1 space
      if (
        emptyTile &&
        endTile.row === 6 &&
        endTile.column === startTile.column
      ) {
        return true;
        //forward 2 spaces
      } else if (
        emptyTile &&
        secondEmptyTileblack &&
        endTile.row === 5 &&
        endTile.column === startTile.column
      ) {
        return true;
        // if taking when on row 2
      } else if (
        !emptyTile &&
        targetTile.colour !== colour &&
        endTile.row === 6 &&
        oneDiagonalSpace &&
        takingPiece
      ) {
        return true;
      } else {
        return false;
      }
    }
    // not row 2
    else if (
      emptyTile &&
      endTile.row === startTile.row - 1 &&
      endTile.column === startTile.column
    ) {
      return true;
      //taking
    } else if (
      !emptyTile &&
      targetTile.colour !== colour &&
      endTile.row === startTile.row - 1 &&
      oneDiagonalSpace &&
      takingPiece
    ) {
      return true;
    } else {
      return false;
    }
  }
};

const checkPawnAttackingKing = (startTile, endTile, boardState, colour) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let whiteKingPosition = "";
  let blackKingPosition = "";
  // getting position of the white king
  for (let i = 0; i < boardState.length; i++) {
    for (let j = 0; j < boardState[i].length; j++) {
      if (
        boardState[i][j] !== null &&
        boardState[i][j].type === "king" &&
        boardState[i][j].colour === "white"
      ) {
        whiteKingPosition = [`${columnRef[j]}`, i + 1];
      } else if (
        boardState[i][j] !== null &&
        boardState[i][j].type === "king" &&
        boardState[i][j].colour === "black"
      ) {
        blackKingPosition = [`${columnRef[j]}`, i + 1];
      }
    }
  }

  //check if attacking black king
  if (colour === "white") {
    if (
      (columnRef.indexOf(endTile.column) ===
        columnRef.indexOf(whiteKingPosition[0]) + 1 ||
        columnRef.indexOf(endTile.column) ===
          columnRef.indexOf(blackKingPosition[0]) - 1) &&
      endTile.row === blackKingPosition[1] - 1
    ) {
      return true;
    } else {
      return false;
    }
    //check if attacking white king
  } else if (colour === "black") {
    if (
      (columnRef.indexOf(endTile.column) ===
        columnRef.indexOf(whiteKingPosition[0]) + 1 ||
        columnRef.indexOf(endTile.column) ===
          columnRef.indexOf(whiteKingPosition[0]) - 1) &&
      endTile.row === whiteKingPosition[1] + 1
    ) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = { checkPawnMovement, checkPawnAttackingKing };