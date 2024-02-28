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
      null; // removes[i]d the taken pawn
  }

  if (colour === "black") {
    const pawn = new Pawn("black", blackPawn);

    newBoard[startTile.row - rowOffset][columnRef.indexOf(startTile.column)] =
      null; // original position now null
    newBoard[endTile.row - rowOffset][columnRef.indexOf(endTile.column)] = pawn; // new position of pawn
    newBoard[startTile.row - rowOffset][columnRef.indexOf(endTile.column)] =
      null; // removesd the taken pawn
  }
  return newBoard;
};

const analysisBoard = (moves, movesNumber) => {
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const boardOffsett = 1;
  const count = movesNumber;
  let whiteKingSideCastle = false;
  let whiteSideQueenCastle = false;
  let blackKingSideCastle = false;
  let blackQueenSideCastle = false;

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
    const newBoardStartColumn = columnRef.indexOf(moves[i][2][0]);
    const newBoardStartRow = moves[i][2][1] - boardOffsett;
    const newBoardEndColumn = columnRef.indexOf(
      moves[i][3][0][moves[i][3][0].length - 1]
    );
    const newBoardEndRow = moves[i][3][1] - boardOffsett;

    const enPessantMove =
      newBoard[newBoardEndRow][newBoardEndColumn] === null &&
      moves[i][3][0][0] === "x";

    if (moves[i][1] === "♟︎" && enPessantMove) {
      const newBoardEnPessantTakenRow = 4;
      newBoard[newBoardStartRow][newBoardStartColumn] = null;
      newBoard[newBoardEnPessantTakenRow][newBoardEndColumn] = null;
      newBoard[newBoardEndRow][newBoardEndColumn] = new Pawn(
        "white",
        whitePawn
      );
      enPessant = true;
    } else if (moves[i][1] === "♙" && enPessantMove) {
      const newBoardEnPessantTakenRow = 3;
      newBoard[newBoardStartRow][newBoardStartColumn] = null;
      newBoard[newBoardEnPessantTakenRow][newBoardEndColumn] = null;
      newBoard[newBoardEndRow][newBoardEndColumn] = new Pawn(
        "black",
        blackPawn
      );
      enPessant = true;
    } else if (moves[i][1] === "♚") {
      if (
        columnRef.indexOf(moves[i][2][0]) -
          columnRef.indexOf(moves[i][3][0]) ===
          -2 &&
        !whiteKingSideCastle
      ) {
        newBoard[0][7] = null;
        newBoard[0][5] = new Rook("white", whiteRook);
        newBoard[0][4] = null;
        newBoard[0][6] = new King("white", whiteKing);
      } else if (
        columnRef.indexOf(moves[i][2][0]) -
          columnRef.indexOf(moves[i][3][0]) ===
          2 &&
        !whiteSideQueenCastle
      ) {
        newBoard[0][0] = null;
        newBoard[0][3] = new Rook("white", whiteRook);
        newBoard[0][4] = null;
        newBoard[0][2] = new King("white", whiteKing);
      }
    } else if (moves[i][1] === "♔") {
      if (
        columnRef.indexOf(moves[i][2][0]) -
          columnRef.indexOf(moves[i][3][0]) ===
          -2 &&
        !blackKingSideCastle
      ) {
        newBoard[7][7] = null;
        newBoard[7][5] = new Rook("black", blackRook);
        newBoard[7][4] = null;
        newBoard[7][6] = new King("black", blackKing);
      } else if (
        columnRef.indexOf(moves[i][2][0]) -
          columnRef.indexOf(moves[i][3][0]) ===
          2 &&
        !blackQueenSideCastle
      ) {
        newBoard[7][7] = null;
        newBoard[7][3] = new Rook("black", blackRook);
        newBoard[7][4] = null;
        newBoard[7][2] = new King("black", blackKing);
      }
    } else {
      let piece = null;

      if (moves[i][1] === "♟︎") piece = new Pawn("white", whitePawn);
      if (moves[i][1] === "♜") piece = new Rook("white", whiteRook);
      if (moves[i][1] === "♞") piece = new Knight("white", whiteKnight);
      if (moves[i][1] === "♝") piece = new Bishop("white", whiteBishop);
      if (moves[i][1] === "♛") piece = new Queen("white", whiteQueen);
      if (moves[i][1] === "♚") piece = new King("white", whiteKing);

      if (moves[i][1] === "♙") piece = new Pawn("black", blackPawn);
      if (moves[i][1] === "♖") piece = new Rook("black", blackRook);
      if (moves[i][1] === "♘") piece = new Knight("black", blackKnight);
      if (moves[i][1] === "♗") piece = new Bishop("black", blackBishop);
      if (moves[i][1] === "♕") piece = new Queen("black", blackQueen);
      if (moves[i][1] === "♔") piece = new King("black", blackKing);

      // console.log();
      // console.log(count);
      // console.log("startTile", newBoardStartRow, newBoardStartColumn);
      // console.log("endTile", newBoardEndRow, newBoardEndColumn);
      // console.log(piece.colour, piece.type);
      // console.log(enPessantMove);

      newBoard[newBoardStartRow][newBoardStartColumn] = null;
      newBoard[newBoardEndRow][newBoardEndColumn] = piece;
      // console.log("last");
    }
  }

  return newBoard;
};

module.exports = {
  updateBoardForCastling,
  updateBoardForEnPessant,
  analysisBoard,
};
