const { Pawn, Rook, King } = require("../piece.js");

const blackPawn = require("../../../../public/blackPieces/pawn.png");
const blackRook = require("../../../../public/blackPieces/rook.png");
const blackKing = require("../../../../public/blackPieces/king.png");
const whitePawn = require("../../../../public/whitePieces/pawn.png");
const whiteRook = require("../../../../public/whitePieces/rook.png");
const whiteKing = require("../../../../public/whitePieces/king.png");

const updateBoardForCastling = (startTile, endTile, boardState, colour) => {
  const newBoard = [...boardState];
  if (colour === "white") {
    const king = new King("white", whiteKing);
    const rook = new Rook("white", whiteRook);
    if (endTile.column === "c") {
      newBoard[0][0] = null;
      newBoard[0][1] = null;
      newBoard[0][2] = king;
      newBoard[0][3] = rook;
      newBoard[0][4] = null;
    }
    if (endTile.column === "g") {
      newBoard[0][4] = null;
      newBoard[0][5] = rook;
      newBoard[0][6] = king;
      newBoard[0][7] = null;
    }
  }
  if (colour === "black") {
    const king = new King("black", blackKing);
    const rook = new Rook("black", blackRook);
    if (endTile.column === "c") {
      newBoard[7][0] = null;
      newBoard[7][1] = null;
      newBoard[7][2] = king;
      newBoard[7][3] = rook;
      newBoard[7][4] = null;
    }
    if (endTile.column === "g") {
      newBoard[7][4] = null;
      newBoard[7][5] = rook;
      newBoard[7][6] = king;
      newBoard[7][7] = null;
    }
  }
  return newBoard;
};

const updateBoardForEnPessant = (startTile, endTile, boardState, colour) => {
  const newBoard = [...boardState];
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const rowOffset = 1;

  if (colour === "white") {
    const pawn = new Pawn("white", whitePawn);
    newBoard[startTile.row - rowOffset][columnRef.indexOf(startTile.column)] =
      null; // original position now null
    newBoard[endTile.row - rowOffset][columnRef.indexOf(endTile.column)] = pawn; // new position of pawn
    newBoard[startTile.row - rowOffset][columnRef.indexOf(endTile.column)] =
      null; // removed the taken pawn
  }

  if (colour === "black") {
    const pawn = new Pawn("black", blackPawn);

    // newBoard[3][4]
    console.log(startTile.row - rowOffset);
    console.log(columnRef.indexOf(endTile.column));

    newBoard[startTile.row - rowOffset][columnRef.indexOf(startTile.column)] =
      null; // original position now null
    newBoard[endTile.row - rowOffset][columnRef.indexOf(endTile.column)] = pawn; // new position of pawn
    newBoard[startTile.row - rowOffset][columnRef.indexOf(endTile.column)] =
      null; // removed the taken pawn
  }
  return newBoard;
};

module.exports = { updateBoardForCastling, updateBoardForEnPessant };
