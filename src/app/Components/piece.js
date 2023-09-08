export class Piece {
  constructor(type, colour, representation) {
    this.type = type;
    this.colour = colour;
    this.representation = representation;
  }
}

export class Pawn extends Piece {
  constructor(colour, representation) {
    super("pawn", colour, representation);
  }
  movement(startTile, endTile, boardState) {
    const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const emptyTile =
      boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null;
    const targetTile =
      boardState[endTile.row - 1][columnRef.indexOf(endTile.column)];
    const oneDiagonalSpace =
      columnRef.indexOf(endTile.column) -
        columnRef.indexOf(startTile.column) ===
        1 ||
      columnRef.indexOf(endTile.column) -
        columnRef.indexOf(startTile.column) ===
        -1;
    const takingPiece =
      boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null ||
      boardState[endTile.row - 1][columnRef.indexOf(endTile.column)].colour !==
        this.colour;

    if (this.colour === "white") {
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
          endTile.row === 4 &&
          endTile.column === startTile.column
        ) {
          return true;
          // if taking when on row 2
        } else if (
          !emptyTile &&
          targetTile.colour !== this.colour &&
          endTile.row === 3 &&
          oneDiagonalSpace &&
          takingPiece
        ) {
          return true;
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
        targetTile.colour !== this.colour &&
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
          endTile.row === 5 &&
          endTile.column === startTile.column
        ) {
          return true;
          // if taking when on row 2
        } else if (
          !emptyTile &&
          targetTile.colour !== this.colour &&
          endTile.row === 6 &&
          oneDiagonalSpace &&
          takingPiece
        ) {
          return true;
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
        targetTile.colour !== this.colour &&
        endTile.row === startTile.row - 1 &&
        oneDiagonalSpace &&
        takingPiece
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}

export class Rook extends Piece {
  constructor(colour, representation) {
    super("rook", colour, representation);
  }
  movement(startTile, endTile, boardState) {
    const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const movingPiece = startTile;
    const column = [];
    const row = boardState[startTile.row - 1];

    for (let i = 0; i < boardState.length; i++) {
      column.push(boardState[i][columnRef.indexOf(startTile.column)]);
    }

    const checkNotVerticalJumping = (startTile, endTile) => {
      let movingTiles = column.slice(startTile.row, endTile.row);
      const inBetweenTiles = movingTiles.slice(0, -1);

      // change moving tiles when moving negative y
      if (startTile.row > endTile.row) {
        movingTiles = column.slice(endTile.row - 1, startTile.row - 1);
      }

      // if all tiles are null
      const inBetweenTilesAreNull = inBetweenTiles.every((piece) => {
        return piece === null;
      });

      if (!inBetweenTilesAreNull) {
        return false;
      }

      for (let i = 0; i < movingTiles.length; i++) {
        if (movingTiles[i] !== null) {
          if (movingTiles[i].colour === movingPiece.piece.colour) {
            return false;
          } else {
            return true;
          }
        }
      }
      return true;
    };

    const checkNotHorizontalJumping = (startTile, endTile) => {
      let movingTiles = row.slice(
        columnRef.indexOf(startTile.column) + 1,
        columnRef.indexOf(endTile.column) + 1
      );

      // if moving negative x
      if (
        columnRef.indexOf(startTile.column) > columnRef.indexOf(endTile.column)
      ) {
        movingTiles = row.slice(
          columnRef.indexOf(endTile.column),
          columnRef.indexOf(startTile.column)
        );
      }

      const inBetweenTiles = movingTiles.slice(0, -1);

      // if all tiles are null
      const inBetweenTilesAreNull = inBetweenTiles.every((piece) => {
        return piece === null;
      });

      if (!inBetweenTilesAreNull) {
        return false;
      }

      for (let i = 0; i < movingTiles.length; i++) {
        if (movingTiles[i] !== null) {
          if (movingTiles[i].colour === movingPiece.piece.colour) {
            return false;
          } else {
            return true;
          }
        }
      }
      return true;
    };

    if (this.colour === "white") {
      // check vertical movement
      if (
        endTile.column === startTile.column &&
        checkNotVerticalJumping(startTile, endTile, boardState)
      ) {
        return true;
        // check horizontal movement
      } else if (
        endTile.row === startTile.row &&
        checkNotHorizontalJumping(startTile, endTile)
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (this.colour === "black") {
      // check vertical movement
      if (
        endTile.column === startTile.column &&
        checkNotVerticalJumping(startTile, endTile, boardState)
      ) {
        return true;
        // check horizontal movement
      } else if (
        endTile.row === startTile.row &&
        checkNotHorizontalJumping(startTile, endTile)
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}

export class Knight extends Piece {
  constructor(colour, representation) {
    super("knight", colour, representation);
  }
  movement(startTile, endTile, boardState) {
    const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
    if (this.colour === "white") {
      if (
        endTile.row === startTile.row + 2 &&
        (columnRef.indexOf(endTile.column) ===
          columnRef.indexOf(startTile.column) + 1 ||
          columnRef.indexOf(endTile.column) ===
            columnRef.indexOf(startTile.column) - 1) &&
        (boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] ===
          null ||
          boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
            .colour === "black")
      ) {
        return true;
      } else if (
        endTile.row === startTile.row - 2 &&
        (columnRef.indexOf(endTile.column) ===
          columnRef.indexOf(startTile.column) + 1 ||
          columnRef.indexOf(endTile.column) ===
            columnRef.indexOf(startTile.column) - 1) &&
        (boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] ===
          null ||
          boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
            .colour === "black")
      ) {
        return true;
      } else if (
        columnRef.indexOf(endTile.column) ===
          columnRef.indexOf(startTile.column) + 2 &&
        (endTile.row === startTile.row + 1 ||
          endTile.row === startTile.row - 1) &&
        (boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] ===
          null ||
          boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
            .colour === "black")
      ) {
        return true;
      } else if (
        columnRef.indexOf(endTile.column) ===
          columnRef.indexOf(startTile.column) - 2 &&
        (endTile.row === startTile.row + 1 ||
          endTile.row === startTile.row - 1) &&
        (boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] ===
          null ||
          boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
            .colour === "black")
      ) {
        return true;
      } else {
      }
      return false;
    }
    if (this.colour === "black") {
      if (
        endTile.row === startTile.row + 2 &&
        (columnRef.indexOf(endTile.column) ===
          columnRef.indexOf(startTile.column) + 1 ||
          columnRef.indexOf(endTile.column) ===
            columnRef.indexOf(startTile.column) - 1) &&
        (boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] ===
          null ||
          boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
            .colour === "white")
      ) {
        return true;
      } else if (
        endTile.row === startTile.row - 2 &&
        (columnRef.indexOf(endTile.column) ===
          columnRef.indexOf(startTile.column) + 1 ||
          columnRef.indexOf(endTile.column) ===
            columnRef.indexOf(startTile.column) - 1) &&
        (boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] ===
          null ||
          boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
            .colour === "white")
      ) {
        return true;
      } else if (
        columnRef.indexOf(endTile.column) ===
          columnRef.indexOf(startTile.column) + 2 &&
        (endTile.row === startTile.row + 1 ||
          endTile.row === startTile.row - 1) &&
        (boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] ===
          null ||
          boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
            .colour === "white")
      ) {
        return true;
      } else if (
        columnRef.indexOf(endTile.column) ===
          columnRef.indexOf(startTile.column) - 2 &&
        (endTile.row === startTile.row + 1 ||
          endTile.row === startTile.row - 1) &&
        (boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] ===
          null ||
          boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
            .colour === "white")
      ) {
        return true;
      } else {
      }
      return false;
    }
  }
}

export class Bishop extends Piece {
  constructor(colour, representation) {
    super("bishop", colour, representation);
  }
  movement(startTile, endTile, boardState) {
    const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const diagonal = [];
    const movingPiece = startTile;

    if (startTile.row === endTile.row) {
      return false;
    }

    if (
      columnRef.indexOf(startTile.column) === columnRef.indexOf(endTile.column)
    ) {
      return false;
    }

    if (
      columnRef.indexOf(startTile.column) < columnRef.indexOf(endTile.column) &&
      startTile.row < endTile.row
    ) {
      // creating the diagonal move
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
      columnRef.indexOf(startTile.column) < columnRef.indexOf(endTile.column) &&
      startTile.row > endTile.row
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
      columnRef.indexOf(startTile.column) > columnRef.indexOf(endTile.column) &&
      startTile.row < endTile.row
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
      columnRef.indexOf(startTile.column) > columnRef.indexOf(endTile.column) &&
      startTile.row > endTile.row
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
    console.log(inBetweenTilesAreNull);
    if (!inBetweenTilesAreNull) {
      console.log("false");
      return false;
    }

    for (let i = 0; i < diagonal.length; i++) {
      console.log(diagonal);
      if (diagonal[i] !== null) {
        console.log("2");
        if (diagonal[i].colour === movingPiece.piece.colour) {
          console.log("3");
          console.log(boardState);
          console.log("false");
          return false;
        } else {
          return true;
        }
      }
    }
    return true;
  }
}

export class Queen extends Piece {
  constructor(colour, representation) {
    super("queen", colour, representation);
  }
  movement(startTile, endTile, boardState) {
    const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const movement = [];

    // if moving diagonal
    if (
      columnRef.indexOf(startTile.column) < columnRef.indexOf(endTile.column) &&
      startTile.row < endTile.row
    ) {
      console.log("x pos, y pos");
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
      console.log("x pos, y neg");
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
      console.log("x neg, y pos");
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
      console.log("x neg, y neg");
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
      console.log("x neg");
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
      console.log("x pos");
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
      console.log("y neg");
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
      console.log("x pos");
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

    for (let i = 0; i < movement.length; i++) {
      if (movement[i] !== null) {
        if (movement[i].colour === this.colour) {
          return false;
        } else {
          return true;
        }
      }
    }

    return true;
  }
}

export class King extends Piece {
  constructor(colour, representation) {
    super("king", colour, representation);
  }
  movement(startTile, endTile, boardState) {
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
        if (movement[i].colour === this.colour) {
          return false;
        } else {
          return true;
        }
      }
    }

    return true;
  }
}
