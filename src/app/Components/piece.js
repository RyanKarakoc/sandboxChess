const {
  loadMoveSound,
  loadCaptureSound,
  loadCastleSound,
  loadCheckSound,
} = require("../../../audioLoader.js");

const {
  checkPawnMovement,
  checkPawnAttackingKing,
} = require("./utils/pawnMovements.js");

const {
  checkRookMovement,
  checkRookAttackingKing,
} = require("./utils/rookMovements.js");

const {
  checkKnightMovement,
  checkKnightAttackingKing,
} = require("./utils/knightMovement.js");

const {
  checkBishopMovement,
  checkBishopAttackingKing,
} = require("./utils/bishopMovement.js");

const {
  checkQueenMovement,
  checkQueenAttackingKing,
} = require("./utils/queenMovement.js");

const { checkKingMovement } = require("./utils.js");

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
  playSound(startTile, endTile, boardState, colour) {
    let audio = new Audio(this.moveSound);
    if (checkPawnAttackingKing(startTile, endTile, boardState, colour)) {
      console.log("yes");
      audio = new Audio(this.checkSound);
      audio.play();
      return;
    }
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
  playSound(startTile, endTile, boardState, colour) {
    let audio = new Audio(this.moveSound);
    if (checkRookAttackingKing(startTile, endTile, boardState, colour)) {
      console.log("yes");
      audio = new Audio(this.checkSound);
      audio.play();
      return;
    }
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
  playSound(startTile, endTile, boardState, colour) {
    let audio = new Audio(this.moveSound);
    if (checkKnightAttackingKing(startTile, endTile, boardState, colour)) {
      audio = new Audio(this.checkSound);
      audio.play();
      return;
    }
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
  playSound(startTile, endTile, boardState, colour) {
    let audio = new Audio(this.moveSound);
    if (checkBishopAttackingKing(startTile, endTile, boardState, colour)) {
      audio = new Audio(this.checkSound);
      audio.play();
      return;
    }
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
  movement(startTile, endTile, boardState, colour) {
    return checkQueenMovement(startTile, endTile, boardState, colour);
  }
  playSound(startTile, endTile, boardState, colour) {
    let audio = new Audio(this.moveSound);
    if (checkQueenAttackingKing(startTile, endTile, boardState, colour)) {
      audio = new Audio(this.checkSound);
      audio.play();
      return;
    }
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

class King extends Piece {
  constructor(colour, representation) {
    super("king", colour, representation);
    this.whiteSymbol = "♔";
    this.blackSymbol = "♚";
  }
  movement(startTile, endTile, boardState, colour) {
    return checkKingMovement(startTile, endTile, boardState, colour);
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

module.exports = { Pawn, Rook, Knight, Bishop, Queen, King };
