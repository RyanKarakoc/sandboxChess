const checkQueenMovement = (startTile, endTile, boardState, colour) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const movement = [];

  // if moving diagonal
  if (
    // x pos y pos
    columnRef.indexOf(startTile.column) < columnRef.indexOf(endTile.column) &&
    startTile.row < endTile.row &&
    endTile.row - startTile.row ===
      columnRef.indexOf(endTile.column) - columnRef.indexOf(startTile.column)
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
    //x pos y neg
    columnRef.indexOf(startTile.column) < columnRef.indexOf(endTile.column) &&
    startTile.row > endTile.row &&
    startTile.row - endTile.row ===
      columnRef.indexOf(endTile.column) - columnRef.indexOf(startTile.column)
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
    // x neg y pos
    columnRef.indexOf(startTile.column) > columnRef.indexOf(endTile.column) &&
    startTile.row < endTile.row &&
    endTile.row - startTile.row ===
      columnRef.indexOf(startTile.column) - columnRef.indexOf(endTile.column)
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
    // x neg y neg
    columnRef.indexOf(startTile.column) > columnRef.indexOf(endTile.column) &&
    startTile.row > endTile.row &&
    startTile.row - endTile.row ===
      columnRef.indexOf(startTile.column) - columnRef.indexOf(endTile.column)
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

  if (movement.length === 0) {
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

const checkQueenAttackingKing = (startTile, endTile, boardState, colour) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const endTileColumnNumber = columnRef.indexOf(endTile.column);
  const startTileColumnNumber = columnRef.indexOf(startTile.column);
  const movedXNegOneTile = endTileColumnNumber - startTileColumnNumber === 1;
  const movedXPosOneTile = endTileColumnNumber - startTileColumnNumber === -1;
  const movedYNegOneTile = endTile.row - startTile.row === 1;
  const movedYPosOneTile = endTile.row - startTile.row === -1;
  const boardSize = 8;
  const rowOffset = 1;
  const columnOffsett = 1;
  const queenScope = [];

  // create array for each axis

  // diagonal
  // x neg y neg
  const xNegYNeg = [];
  let xNegYNegRow = endTile.row - rowOffset;
  let xNegYNegColumn = endTileColumnNumber;
  while (xNegYNegRow > 0 && xNegYNegColumn > 0) {
    xNegYNegRow -= 1;
    xNegYNegColumn -= 1;
    if (boardState[xNegYNegRow][xNegYNegColumn] !== null) {
      xNegYNeg.push(boardState[xNegYNegRow][xNegYNegColumn]);
    }
  }
  // x neg y pos
  const xNegYPos = [];
  let xNegYPosRow = endTile.row - rowOffset;
  let xNegYPosColumn = endTileColumnNumber;
  while (xNegYPosRow < boardSize - rowOffset && xNegYPosColumn > 0) {
    xNegYPosRow += 1;
    xNegYPosColumn -= 1;
    if (boardState[xNegYPosRow][xNegYPosColumn] !== null) {
      xNegYPos.push(boardState[xNegYPosRow][xNegYPosColumn]);
    }
  }
  // x pos y neg
  const xPosYNeg = [];
  let xPosYNegRow = endTile.row - rowOffset;
  let xPosYNegColumn = endTileColumnNumber;
  while (xPosYNegRow > 0 && xPosYNegColumn < boardSize - columnOffsett) {
    xPosYNegRow -= 1;
    xPosYNegColumn += 1;
    if (boardState[xPosYNegRow][xPosYNegColumn] !== null) {
      xPosYNeg.push(boardState[xPosYNegRow][xPosYNegColumn]);
    }
  }
  // x pos y pos
  const xPosYPos = [];
  let xPosYPosRow = endTile.row - rowOffset;
  let xPosYPosColumn = endTileColumnNumber;
  while (
    xPosYPosRow < boardSize - rowOffset &&
    xPosYPosColumn < boardSize - columnOffsett
  ) {
    xPosYPosRow += 1;
    xPosYPosColumn += 1;
    if (boardState[xPosYPosRow][xPosYPosColumn] !== null) {
      xPosYPos.push(boardState[xPosYPosRow][xPosYPosColumn]);
    }
  }

  // horizontal
  // x neg
  const xNeg = [];
  for (let i = endTileColumnNumber - columnOffsett; i >= 0; i--) {
    if (boardState[endTile.row - rowOffset][i] !== null) {
      xNeg.push(boardState[endTile.row - rowOffset][i]);
    }
  }
  // x pos
  const xPos = [];
  for (let i = endTileColumnNumber + columnOffsett; i < boardSize; i++) {
    if (boardState[endTile.row - rowOffset][i] !== null) {
      xPos.push(boardState[endTile.row - rowOffset][i]);
    }
  }

  // Vertical
  // y neg
  const yNeg = [];
  for (let i = endTile.row - rowOffset - 1; i >= 0; i--) {
    if (boardState[i][endTileColumnNumber] !== null) {
      yNeg.push(boardState[i][endTileColumnNumber]);
    }
  }
  // y pos
  const yPos = [];
  for (let i = endTile.row; i < boardSize; i++) {
    if (boardState[i][endTileColumnNumber] !== null) {
      yPos.push(boardState[i][endTileColumnNumber]);
    }
  }

  // if moved 1 square remove the queen from the axis array
  if (movedXNegOneTile && movedYNegOneTile) {
    xNegYNeg.shift();
  }
  if (movedYPosOneTile && movedXNegOneTile) {
    xNegYPos.shift();
  }
  if (movedYNegOneTile && movedYNegOneTile) {
    xPosYNeg.shift();
  }
  if (movedYPosOneTile && movedXPosOneTile) {
    xPosYPos.shift();
  }
  if (endTile.row === startTile.row && movedXNegOneTile) {
    xNeg.shift();
  }
  if (endTile.row === startTile.row && movedXPosOneTile) {
    xPos.shift();
  }
  if (movedYNegOneTile && endTileColumnNumber === startTileColumnNumber) {
    yNeg.shift();
  }
  if (movedYPosOneTile && endTileColumnNumber === startTileColumnNumber) {
    yPos.shift();
  }

  // push all axis arrays into queenScope
  queenScope.push(xNegYNeg);
  queenScope.push(xNegYPos);
  queenScope.push(xPosYNeg);
  queenScope.push(xPosYPos);
  queenScope.push(xNeg);
  queenScope.push(xPos);
  queenScope.push(yNeg);
  queenScope.push(yPos);

  // search queenScope to see if the enemy king is there
  // loop through queenScope
  for (let i = 0; i < queenScope.length; i++) {
    const axisArray = queenScope[i];
    for (let j = 0; j < axisArray.length; j++) {
      if (axisArray[j].type === "king" && axisArray[j].colour !== colour) {
        const arrayContainsEnemyKing = axisArray;
        if (
          arrayContainsEnemyKing[0].type === "king" &&
          arrayContainsEnemyKing[0].colour !== colour
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  return false;
};

module.exports = { checkQueenMovement, checkQueenAttackingKing };
