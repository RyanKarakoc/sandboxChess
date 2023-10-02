const {
  loadMoveSound,
  loadCaptureSound,
  loadCastleSound,
  loadCheckSound,
} = require("../../../audioLoader.js");

const {
  checkPawnMovement,
  checkRookMovement,
  checkKnightMovement,
  checkBishopMovement,
} = require("./utils.js");

class Piece {
  constructor(type, colour, representation) {
    this.type = type;
    this.colour = colour;
    this.representation = representation;
    this.takenTile = "";
    this.moveSound = loadMoveSound();
    this.captureSound = loadCaptureSound();
    this.castleSound = loadCastleSound();
    this.checkSound = loadCheckSound();
    this.columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  }
}

class Pawn extends Piece {
  constructor(colour, representation) {
    super("pawn", colour, representation);
    this.whiteSymbol = "♙";
    this.blackSymbol = "♟︎";
  }
  movement(startTile, endTile, boardState, colour) {
    return checkPawnMovement(startTile, endTile, boardState, colour);
  }
  playSound(endTile, boardState) {
    let audio = new Audio(this.moveSound);
    if (
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)] ===
      null
    ) {
      audio.play();
    } else if (
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)] !==
        null &&
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)]
        .colour !== this.colour
    ) {
      audio = new Audio(this.captureSound);
      this.takenTile = `x${endTile.column}`;
      audio.play();
    }
  }
}

class Rook extends Piece {
  constructor(colour, representation) {
    super("rook", colour, representation);
    this.whiteSymbol = "♖";
    this.blackSymbol = "♜";
  }
  movement(startTile, endTile, boardState, colour) {
    return checkRookMovement(startTile, endTile, boardState, colour);
  }
  playSound(endTile, boardState) {
    let audio = new Audio(this.moveSound);
    if (
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)] ===
      null
    ) {
      audio.play();
    } else if (
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)] !==
        null &&
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)]
        .colour !== this.colour
    ) {
      audio = new Audio(this.captureSound);
      this.takenTile = `x${endTile.column}`;
      audio.play();
    }
  }
}

class Knight extends Piece {
  constructor(colour, representation) {
    super("knight", colour, representation);
    this.whiteSymbol = "♘";
    this.blackSymbol = "♞";
  }
  movement(startTile, endTile, boardState, colour) {
    return checkKnightMovement(startTile, endTile, boardState, colour);
  }
  playSound(endTile, boardState) {
    let audio = new Audio(this.moveSound);
    if (
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)] ===
      null
    ) {
      audio.play();
    } else if (
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)] !==
        null &&
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)]
        .colour !== this.colour
    ) {
      audio = new Audio(this.captureSound);
      this.takenTile = `x${endTile.column}`;
      audio.play();
    }
  }
}

class Bishop extends Piece {
  constructor(colour, representation) {
    super("bishop", colour, representation);
    this.whiteSymbol = "♗";
    this.blackSymbol = "♝";
  }
  movement(startTile, endTile, boardState, colour) {
    return checkBishopMovement(startTile, endTile, boardState, colour);
  }
  playSound(endTile, boardState) {
    let audio = new Audio(this.moveSound);
    if (
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)] ===
      null
    ) {
      audio.play();
    } else if (
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)] !==
        null &&
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)]
        .colour !== this.colour
    ) {
      audio = new Audio(this.captureSound);
      this.takenTile = `x${endTile.column}`;

      audio.play();
    }
  }
}

class Queen extends Piece {
  constructor(colour, representation) {
    super("queen", colour, representation);
    this.whiteSymbol = "♕";
    this.blackSymbol = "♛";
  }
  movement(startTile, endTile, boardState) {
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
        if (movement[i].colour === this.colour) {
          return false;
        } else {
          this.takenTile = `x${endTile.column}`;
          return true;
        }
      }
    }

    return true;
  }
  playSound(endTile, boardState) {
    let audio = new Audio(this.moveSound);
    if (
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)] ===
      null
    ) {
      audio.play();
    } else if (
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)] !==
        null &&
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)]
        .colour !== this.colour
    ) {
      audio = new Audio(this.captureSound);
      audio.play();
    }
  }
}

class King extends Piece {
  constructor(colour, representation) {
    super("king", colour, representation);
    this.whiteSymbol = "♔";
    this.blackSymbol = "♚";
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
          this.takenTile = `x${endTile.column}`;
          return true;
        }
      }
    }

    return true;
  }
  playSound(endTile, boardState) {
    let audio = new Audio(this.moveSound);
    if (
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)] ===
      null
    ) {
      audio.play();
    } else if (
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)] !==
        null &&
      boardState[endTile.row - 1][this.columnRef.indexOf(endTile.column)]
        .colour !== this.colour
    ) {
      audio = new Audio(this.captureSound);
      audio.play();
    }
  }
}

module.exports = { Pawn, Rook, Knight, Bishop, Queen, King };
