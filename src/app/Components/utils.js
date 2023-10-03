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

module.exports = {
  checkPawnMovement,
  checkRookMovement,
  checkKnightMovement,
  checkBishopMovement,
  checkQueenMovement,
};
