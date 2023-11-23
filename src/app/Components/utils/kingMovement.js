const { isTileUnderAttack } = require("./tilesUnderAttack");

const checkKingMovement = (startTile, endTile, boardState, colour) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const movement = [];

  if (
    columnRef.indexOf(startTile.column) < columnRef.indexOf(endTile.column) &&
    startTile.row < endTile.row
  ) {
    let offset = 1;
    for (let i = 0; i < endTile.row - startTile.row; i++) {
      movement.push(
        boardState[startTile.row + i][
          columnRef.indexOf(startTile.column) + offset
        ]
      );
      offset++;
    }
  } else if (
    columnRef.indexOf(startTile.column) < columnRef.indexOf(endTile.column) &&
    startTile.row > endTile.row
  ) {
    let offset = 2;
    for (let i = 0; i < startTile.row - endTile.row; i++) {
      movement.push(
        boardState[startTile.row - offset][
          columnRef.indexOf(startTile.column) + 1 + i
        ]
      );
      offset++;
    }
  } else if (
    columnRef.indexOf(startTile.column) > columnRef.indexOf(endTile.column) &&
    startTile.row < endTile.row
  ) {
    let offset = 1;
    for (
      let i = 0;
      i <
      columnRef.indexOf(startTile.column) - columnRef.indexOf(endTile.column);
      i++
    ) {
      movement.push(
        boardState[startTile.row + i][
          columnRef.indexOf(startTile.column) - offset
        ]
      );
      offset++;
    }
  } else if (
    columnRef.indexOf(startTile.column) > columnRef.indexOf(endTile.column) &&
    startTile.row > endTile.row
  ) {
    let offset = 1;
    for (
      let i = 0;
      i <
      columnRef.indexOf(startTile.column) - columnRef.indexOf(endTile.column);
      i++
    ) {
      movement.push(
        boardState[startTile.row - 1 - offset][
          columnRef.indexOf(startTile.column) - offset
        ]
      );
      offset++;
    }
  }

  // if moving in straight lines
  if (
    endTile.row === startTile.row &&
    columnRef.indexOf(endTile.column) < columnRef.indexOf(startTile.column)
  ) {
    for (
      let i = 0;
      i <
      columnRef.indexOf(startTile.column) - columnRef.indexOf(endTile.column);
      i++
    ) {
      const rowOffset = 1;
      const columnOffsett = 1;
      movement.push(
        boardState[endTile.row - rowOffset][
          columnRef.indexOf(startTile.column) - columnOffsett - i
        ]
      );
    }
  } else if (
    endTile.row === startTile.row &&
    columnRef.indexOf(endTile.column) > columnRef.indexOf(startTile.column)
  ) {
    for (
      let i = 0;
      i <
      columnRef.indexOf(endTile.column) - columnRef.indexOf(startTile.column);
      i++
    ) {
      const rowOffset = 1;
      const columnOffsett = 1;
      movement.push(
        boardState[endTile.row - rowOffset][
          columnRef.indexOf(startTile.column) + columnOffsett + i
        ]
      );
    }
  } else if (
    endTile.row < startTile.row &&
    columnRef.indexOf(endTile.column) === columnRef.indexOf(startTile.column)
  ) {
    for (let i = 0; i < startTile.row - endTile.row; i++) {
      const rowOffset = 2;
      movement.push(
        boardState[startTile.row - rowOffset - i][
          columnRef.indexOf(startTile.column)
        ]
      );
    }
  } else if (
    endTile.row > startTile.row &&
    columnRef.indexOf(endTile.column) === columnRef.indexOf(startTile.column)
  ) {
    for (let i = 0; i < endTile.row - startTile.row; i++) {
      movement.push(
        boardState[startTile.row + i][columnRef.indexOf(startTile.column)]
      );
    }
  }

  //removing the endtile
  const inBetweenTiles = movement.slice(0, -1);

  //all tiles inbetween
  const inBetweenTilesAreNull = inBetweenTiles.every((piece) => {
    return piece === null;
  });

  // checks jumping oposite colours
  if (!inBetweenTilesAreNull) {
    return false;
  }

  if (movement.length > 1) {
    return false;
  }

  for (let i = 0; i < movement.length; i++) {
    if (movement[i] !== null) {
      if (movement[i].colour === colour) {
        return false;
      } else {
        return true;
      }
    }
  }

  return true;
};

const canKingCastle = (
  startTile,
  endTile,
  boardState,
  colour,
  haveKingsMoved,
  haveRooksMoved
) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const endTileColumnNumber = columnRef.indexOf(endTile.column);
  const startTileColumnNumber = columnRef.indexOf(startTile.column);
  const boardSize = 8;
  const rowOffset = 1;
  const columnOffsett = 1;

  const whiteQueenSideTilesToCheck = [
    { column: "c", row: 1 },
    { column: "d", row: 1 },
    { column: "e", row: 1 },
  ];
  const whiteKingSideTilesToCheck = [
    { column: "e", row: 1 },
    { column: "f", row: 1 },
    { column: "g", row: 1 },
  ];
  const blackQueenSideTilesToCheck = [
    { column: "c", row: 8 },
    { column: "d", row: 8 },
    { column: "e", row: 8 },
  ];
  const blackKingSideTilesToCheck = [
    { column: "e", row: 8 },
    { column: "f", row: 8 },
    { column: "g", row: 8 },
  ];

  if (colour === "white") {
    if (startTile.column !== "e" || startTile.row !== 1) {
      return false;
    }
    if (endTile.row === 2) {
      return false;
    }
    if (haveKingsMoved.whiteKing) {
      return false; // if the white king has already moved
    }
    if (haveRooksMoved.whiteRooks.hasQueenSideWhiteRookMoved) {
      return false; // if the white queen side rook has already moved
    }
    if (endTile.row === 1 && endTile.column === "c") {
      for (const tiles of whiteQueenSideTilesToCheck) {
        if (isTileUnderAttack(startTile, endTile, boardState, colour, tiles)) {
          return false; // if any tile is under attack return false
        }
      }
      return true; // If none of the tiles are under attack, return true
    } else if (endTile.row === 1 && endTile.column === "g") {
      if (haveRooksMoved.whiteRooks.hasKingSideWhiteRookMoved) {
        return false; // if the white king side rook has already moved
      }
      for (const tiles of whiteKingSideTilesToCheck) {
        if (isTileUnderAttack(startTile, endTile, boardState, colour, tiles)) {
          return false; // if any tile is under attack return false
        }
      }
      return true; // If none of the tiles are under attack, return true
    }
  } else {
    if (startTile.column !== "e" || startTile.row !== 8) {
      return false;
    }
    if (endTile.row === 7) {
      return false;
    }
    if (haveKingsMoved.blackKing) {
      return false; // if the black king has already moved
    }
    if (haveRooksMoved.blackRooks.hasQueenSideblackRookMoved) {
      return false; // if the black queen side rook has already moved
    }
    if (endTile.row === 8 && endTile.column === "c") {
      for (const tiles of blackQueenSideTilesToCheck) {
        if (isTileUnderAttack(startTile, endTile, boardState, colour, tiles)) {
          return false; // if any tile is under attack return false
        }
      }
      return true; // If none of the tiles are under attack, return true
    } else if (endTile.row === 8 && endTile.column === "g") {
      if (haveRooksMoved.blackRooks.hasKingSideblackRookMoved) {
        return false; // if the black king side rook has already moved
      }
      for (const tiles of blackKingSideTilesToCheck) {
        if (isTileUnderAttack(startTile, endTile, boardState, colour, tiles)) {
          return false; // if any tile is under attack return false
        }
      }
      return true; // If none of the tiles are under attack, return true
    }
  }
};

module.exports = {
  checkKingMovement,
  canKingCastle,
};
