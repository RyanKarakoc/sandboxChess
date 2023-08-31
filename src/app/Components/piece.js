import { checkIsOnDemandRevalidate } from "next/dist/server/api-utils";

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

    if (this.colour === "white") {
      if (
        startTile.row === 2 &&
        ((endTile.row === 3 && endTile.column === startTile.column) ||
          (endTile.row === 4 && endTile.column === startTile.column))
      ) {
        return true;
        // straight line
      } else if (
        startTile.row === 3 &&
        endTile.row === 4 &&
        endTile.column === startTile.column &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
      } else if (
        startTile.row === 4 &&
        endTile.row === 5 &&
        endTile.column === startTile.column &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
      } else if (
        startTile.row === 5 &&
        endTile.row === 6 &&
        endTile.column === startTile.column &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
      } else if (
        startTile.row === 6 &&
        endTile.row === 7 &&
        endTile.column === startTile.column &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
      } else if (
        startTile.row === 7 &&
        endTile.row === 8 &&
        endTile.column === startTile.column &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
        // taking
      } else if (
        startTile.row === 2 &&
        (columnRef.indexOf(endTile.column) -
          columnRef.indexOf(startTile.column) ===
          1 ||
          columnRef.indexOf(startTile.column) -
            columnRef.indexOf(endTile.column) ===
            1) &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] !==
          null &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour === "black"
      ) {
        return true;
      } else if (
        startTile.row === 3 &&
        (columnRef.indexOf(endTile.column) -
          columnRef.indexOf(startTile.column) ===
          1 ||
          columnRef.indexOf(startTile.column) -
            columnRef.indexOf(endTile.column) ===
            1) &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] !==
          null &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour === "black"
      ) {
        return true;
      } else if (
        startTile.row === 4 &&
        (columnRef.indexOf(endTile.column) -
          columnRef.indexOf(startTile.column) ===
          1 ||
          columnRef.indexOf(startTile.column) -
            columnRef.indexOf(endTile.column) ===
            1) &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] !==
          null &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour === "black"
      ) {
        return true;
      } else if (
        startTile.row === 5 &&
        (columnRef.indexOf(endTile.column) -
          columnRef.indexOf(startTile.column) ===
          1 ||
          columnRef.indexOf(startTile.column) -
            columnRef.indexOf(endTile.column) ===
            1) &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] !==
          null &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour === "black"
      ) {
        return true;
      } else if (
        startTile.row === 6 &&
        (columnRef.indexOf(endTile.column) -
          columnRef.indexOf(startTile.column) ===
          1 ||
          columnRef.indexOf(startTile.column) -
            columnRef.indexOf(endTile.column) ===
            1) &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] !==
          null &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour === "black"
      ) {
        return true;
      } else if (
        startTile.row === 7 &&
        (columnRef.indexOf(endTile.column) -
          columnRef.indexOf(startTile.column) ===
          1 ||
          columnRef.indexOf(startTile.column) -
            columnRef.indexOf(endTile.column) ===
            1) &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] !==
          null &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour === "black"
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (this.colour === "black") {
      if (
        startTile.row === 7 &&
        ((endTile.row === 6 && endTile.column === startTile.column) ||
          (endTile.row === 5 && endTile.column === startTile.column))
      ) {
        return true;
        // straight line
      } else if (
        startTile.row === 6 &&
        endTile.row === 5 &&
        endTile.column === startTile.column &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
      } else if (
        startTile.row === 5 &&
        endTile.row === 4 &&
        endTile.column === startTile.column &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
      } else if (
        startTile.row === 4 &&
        endTile.row === 3 &&
        endTile.column === startTile.column &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
      } else if (
        startTile.row === 3 &&
        endTile.row === 2 &&
        endTile.column === startTile.column &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
      } else if (
        startTile.row === 2 &&
        endTile.row === 1 &&
        endTile.column === startTile.column &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] === null
      ) {
        return true;
        // taking
      } else if (
        startTile.row === 7 &&
        (columnRef.indexOf(endTile.column) -
          columnRef.indexOf(startTile.column) ===
          1 ||
          columnRef.indexOf(startTile.column) -
            columnRef.indexOf(endTile.column) ===
            1) &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] !==
          null &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour === "white"
      ) {
        return true;
      } else if (
        startTile.row === 6 &&
        (columnRef.indexOf(endTile.column) -
          columnRef.indexOf(startTile.column) ===
          1 ||
          columnRef.indexOf(startTile.column) -
            columnRef.indexOf(endTile.column) ===
            1) &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] !==
          null &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour === "white"
      ) {
        return true;
      } else if (
        startTile.row === 5 &&
        (columnRef.indexOf(endTile.column) -
          columnRef.indexOf(startTile.column) ===
          1 ||
          columnRef.indexOf(startTile.column) -
            columnRef.indexOf(endTile.column) ===
            1) &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] !==
          null &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour === "white"
      ) {
        return true;
      } else if (
        startTile.row === 4 &&
        (columnRef.indexOf(endTile.column) -
          columnRef.indexOf(startTile.column) ===
          1 ||
          columnRef.indexOf(startTile.column) -
            columnRef.indexOf(endTile.column) ===
            1) &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] !==
          null &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour === "white"
      ) {
        return true;
      } else if (
        startTile.row === 3 &&
        (columnRef.indexOf(endTile.column) -
          columnRef.indexOf(startTile.column) ===
          1 ||
          columnRef.indexOf(startTile.column) -
            columnRef.indexOf(endTile.column) ===
            1) &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] !==
          null &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour === "white"
      ) {
        return true;
      } else if (
        startTile.row === 2 &&
        (columnRef.indexOf(endTile.column) -
          columnRef.indexOf(startTile.column) ===
          1 ||
          columnRef.indexOf(startTile.column) -
            columnRef.indexOf(endTile.column) ===
            1) &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)] !==
          null &&
        boardState[endTile.row - 1][columnRef.indexOf(endTile.column)]
          .colour === "white"
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
  }
}

export class Knight extends Piece {
  constructor(colour, representation) {
    super("knight", colour, representation);
  }
  movement(startTile, endTile, boardState) {
    const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
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
      console.log("true");
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
      console.log("true");
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
      console.log("true");
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
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
}

export class Bishop extends Piece {
  constructor(colour, representation) {
    super("bishop", colour, representation);
  }
}

export class Queen extends Piece {
  constructor(colour, representation) {
    super("queen", colour, representation);
  }
}

export class King extends Piece {
  constructor(colour, representation) {
    super("king", colour, representation);
  }
}
