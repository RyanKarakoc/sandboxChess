const { Rook, King } = require("../../Components/piece.js");

const blackRook = require("../../../../public/blackPieces/rook.png");
const blackKing = require("../../../../public/blackPieces/king.png");
const whiteRook = require("../../../../public/whitePieces/rook.png");
const whiteKing = require("../../../../public/whitePieces/king.png");

const updateBoardForCastling = (startTile, endTile, boardState, colour) => {
  const newBoard = [...boardState];
  if (colour === "white") {
    const king = new King("white", whiteKing);
    const rook = new Rook("white", whiteRook);
    console.log(king);
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

module.exports = { updateBoardForCastling };
