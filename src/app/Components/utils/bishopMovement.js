const checkBishopMovement = (startTile, endTile, boardState, colour) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const diagonal = [];

  if (startTile.row === endTile.row) {
    return false;
  }

  if (
    columnRef.indexOf(startTile.column) === columnRef.indexOf(endTile.column)
  ) {
    return false;
  }

  // creating the diagonal move
  if (
    // x pos y pos
    columnRef.indexOf(startTile.column) < columnRef.indexOf(endTile.column) &&
    startTile.row < endTile.row &&
    endTile.row - startTile.row ===
      columnRef.indexOf(endTile.column) - columnRef.indexOf(startTile.column)
  ) {
    console.log("x pos, y pos");

    let offset = 1;
    for (let i = 0; i < endTile.row - startTile.row; i++) {
      diagonal.push(
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
    console.log("x pos, y neg");
    let offset = 2;
    for (let i = 0; i < startTile.row - endTile.row; i++) {
      diagonal.push(
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
    console.log("x neg, y pos");
    let offset = 1;
    for (
      let i = 0;
      i <
      columnRef.indexOf(startTile.column) - columnRef.indexOf(endTile.column);
      i++
    ) {
      diagonal.push(
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
    console.log("x neg, y neg");
    let offset = 1;
    for (
      let i = 0;
      i <
      columnRef.indexOf(startTile.column) - columnRef.indexOf(endTile.column);
      i++
    ) {
      diagonal.push(
        boardState[startTile.row - 1 - offset][
          columnRef.indexOf(startTile.column) - offset
        ]
      );
      offset++;
    }
  }

  //removing the endtile
  const inBetweenTiles = diagonal.slice(0, -1);
  //all tiles inbetween
  const inBetweenTilesAreNull = inBetweenTiles.every((piece) => {
    return piece === null;
  });
  // checks jumping oposite colours
  if (!inBetweenTilesAreNull) {
    return false;
  }

  if (diagonal.length === 0) {
    return false;
  }

  for (let i = 0; i < diagonal.length; i++) {
    if (diagonal[i] !== null) {
      if (diagonal[i].colour === colour) {
        return false;
      } else {
        return true;
      }
    }
  }
  return true;
};

const checkBishopAttackingKing = (startTile, endTile, boardState, colour) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const endTileColumnNumber = columnRef.indexOf(endTile.column);
  const startTileColumnNumber = columnRef.indexOf(startTile.column);
  const boardSize = 8;
  const rowOffset = 1;
  const columnOffsett = 1;
  const bishopScope = [];

  // create array for each axis
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
  console.log(xPosYNeg);
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

  // if moved 1 square remove the bishop from the axis array
  if (
    endTile.row - startTile.row > 0 &&
    endTileColumnNumber - startTileColumnNumber > 0
  ) {
    xNegYNeg.shift();
  }
  if (
    endTile.row - startTile.row < 0 &&
    endTileColumnNumber - startTileColumnNumber > 0
  ) {
    xNegYPos.shift();
  }
  if (
    endTile.row - startTile.row > 0 &&
    endTileColumnNumber - startTileColumnNumber < 0
  ) {
    xPosYNeg.shift();
  }
  if (
    endTile.row - startTile.row < 0 &&
    endTileColumnNumber - startTileColumnNumber < 0
  ) {
    xPosYPos.shift();
  }
  // push all axis arrays into scope
  bishopScope.push(xNegYNeg);
  bishopScope.push(xNegYPos);
  bishopScope.push(xPosYNeg);
  bishopScope.push(xPosYPos);

  // search bishopScope to see if the enemy king is there
  // loop through bishopScope
  for (let i = 0; i < bishopScope.length; i++) {
    const axisArray = bishopScope[i];
    console.log(i);
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

module.exports = { checkBishopMovement, checkBishopAttackingKing };
