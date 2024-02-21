const checkRookMovement = (startTile, endTile, boardState, colour) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const movement = [];

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

const checkRookAttackingKing = (startTile, endTile, boardState, colour) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const endTileColumnNumber = columnRef.indexOf(endTile.column);
  const startTileColumnNumber = columnRef.indexOf(startTile.column);
  const boardSize = 8;
  const rowOffset = 1;
  const columnOffsett = 1;
  const rookScope = [];

  // create an array for eaxh axis
  // x neg
  const xNeg = [];
  for (let i = 0; i < endTileColumnNumber; i++) {
    if (boardState[endTile.row - rowOffset][i]) {
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
  // y neg
  const yNeg = [];
  for (let i = 0; i < endTile.row - rowOffset; i++) {
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
  // make king last in all arrays
  xPos.reverse();
  yPos.reverse();

  // if moves 1 space remove moved rook from last spot
  if (endTileColumnNumber - startTileColumnNumber === 1) {
    xNeg.pop();
  }
  if (endTileColumnNumber - startTileColumnNumber === -1) {
    xPos.pop();
  }
  if (endTile.row - startTile.row === 1) {
    yNeg.pop();
  }
  if (endTile.row - startTile.row === -1) {
    yPos.pop();
  }

  // all arrays pushed into rook scope array main array
  rookScope.push(xNeg);
  rookScope.push(xPos);
  rookScope.push(yNeg);
  rookScope.push(yPos);

  // search rookScope to see if the enemy king is there
  // loop through rookScope
  for (let i = 0; i < rookScope.length; i++) {
    const axisArray = rookScope[i];
    for (let j = 0; j < axisArray.length; j++) {
      if (axisArray[j].type === "king" && axisArray[j].colour !== colour) {
        const arrayContainsEnemyKing = axisArray;
        if (
          arrayContainsEnemyKing[arrayContainsEnemyKing.length - 1].type ===
            "king" &&
          arrayContainsEnemyKing[arrayContainsEnemyKing.length - 1].colour !==
            colour
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

module.exports = { checkRookMovement, checkRookAttackingKing };
