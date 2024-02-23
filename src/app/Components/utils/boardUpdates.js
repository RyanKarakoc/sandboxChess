const { Pawn, Rook, Knight, Bishop, Queen, King } = require("../piece.js");

const blackPawn = require("../../../../public/blackPieces/pawn.png");
const blackRook = require("../../../../public/blackPieces/rook.png");
const blackKnight = require("../../../../public/blackPieces/knight.png");
const blackBishop = require("../../../../public/blackPieces/bishop.png");
const blackQueen = require("../../../../public/blackPieces/queen.png");
const blackKing = require("../../../../public/blackPieces/king.png");
const whitePawn = require("../../../../public/whitePieces/pawn.png");
const whiteRook = require("../../../../public/whitePieces/rook.png");
const whiteKnight = require("../../../../public/whitePieces/knight.png");
const whiteBishop = require("../../../../public/whitePieces/bishop.png");
const whiteQueen = require("../../../../public/whitePieces/queen.png");
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

    newBoard[startTile.row - rowOffset][columnRef.indexOf(startTile.column)] =
      null; // original position now null
    newBoard[endTile.row - rowOffset][columnRef.indexOf(endTile.column)] = pawn; // new position of pawn
    newBoard[startTile.row - rowOffset][columnRef.indexOf(endTile.column)] =
      null; // removed the taken pawn
  }
  return newBoard;
};

const analysisBoard = (moves, moveNumber) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const boardOffsett = 1;
  const count = moveNumber;

  const newBoard = [
    [
      new Rook("white", whiteRook),
      new Knight("white", whiteKnight),
      new Bishop("white", whiteBishop),
      new Queen("white", whiteQueen),
      new King("white", whiteKing),
      new Bishop("white", whiteBishop),
      new Knight("white", whiteKnight),
      new Rook("white", whiteRook),
    ],
    [
      new Pawn("white", whitePawn),
      new Pawn("white", whitePawn),
      new Pawn("white", whitePawn),
      new Pawn("white", whitePawn),
      new Pawn("white", whitePawn),
      new Pawn("white", whitePawn),
      new Pawn("white", whitePawn),
      new Pawn("white", whitePawn),
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      new Pawn("black", blackPawn),
      new Pawn("black", blackPawn),
      new Pawn("black", blackPawn),
      new Pawn("black", blackPawn),
      new Pawn("black", blackPawn),
      new Pawn("black", blackPawn),
      new Pawn("black", blackPawn),
      new Pawn("black", blackPawn),
    ],
    [
      new Rook("black", blackRook),
      new Knight("black", blackKnight),
      new Bishop("black", blackBishop),
      new Queen("black", blackQueen),
      new King("black", blackKing),
      new Bishop("black", blackBishop),
      new Knight("black", blackKnight),
      new Rook("black", blackRook),
    ],
  ];

  if (count === 0) {
    return newBoard;
  }

  for (let i = 0; i < count; i++) {
    const piece = moves[i][1];
    const startTileColumn = moves[i][2][0];
    const startTileRow = moves[i][2][1];
    const endTileColumn = moves[i][3][0][moves[i][3][0].length - 1];
    const endTileRow = moves[i][3][1];

    const colour = i % 2 === 0 ? "white" : "black";
    const newBoardStartColumn = columnRef.indexOf(startTileColumn);
    const newBoardStartRow = startTileRow - boardOffsett;
    const newBoardEndColumn = columnRef.indexOf(endTileColumn);
    const newBoardEndRow = endTileRow - boardOffsett;

    let newPiece = null;

    if (piece === "♟︎") newPiece = new Pawn("white", whitePawn);
    if (piece === "♜") newPiece = new Rook("white", whiteRook);
    if (piece === "♞") newPiece = new Pawn("white", whiteKnight);
    if (piece === "♝") newPiece = new Rook("white", whiteBishop);
    if (piece === "♛") newPiece = new Rook("white", whiteQueen);
    if (piece === "♚") newPiece = new Rook("white", whiteKing);

    if (piece === "♙") newPiece = new Pawn("black", blackPawn);
    if (piece === "♖") newPiece = new Rook("black", blackRook);
    if (piece === "♘") newPiece = new Pawn("black", blackKnight);
    if (piece === "♗") newPiece = new Rook("black", blackBishop);
    if (piece === "♕") newPiece = new Rook("black", blackQueen);
    if (piece === "♔") newPiece = new Rook("black", blackKing);

    if (newPiece) {
      newPiece.playSound(
        { column: startTileColumn, row: startTileRow },
        { column: endTileColumn, row: endTileRow },
        newBoard,
        colour,
        moves[moves.length - 1]
      );
      newBoard[newBoardStartRow][newBoardStartColumn] = null;
      newBoard[newBoardEndRow][newBoardEndColumn] = newPiece;
    }
  }

  return newBoard;
};

module.exports = {
  updateBoardForCastling,
  updateBoardForEnPessant,
  analysisBoard,
};
