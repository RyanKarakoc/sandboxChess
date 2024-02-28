const {
  Pawn,
  Rook,
  Knight,
  Bishop,
  Queen,
  King,
} = require("../src/app/Components/piece.js");

const audioLoader = require("../audioLoader.js");

// mock audio sounds
jest.mock("../audioLoader.js", () => ({
  loadMoveSound: jest.fn(() => "mock-move-sound.mp3"),
  loadCaptureSound: jest.fn(() => "mock-capture-sound.mp3"),
  loadCastleSound: jest.fn(() => "mock-castle-sound.mp3"),
  loadCheckSound: jest.fn(() => "mock-check-sound.mp3"),
}));

// mock images
const blackPawn = require("../fileMock.js");
const blackRook = require("../fileMock.js");
const blackKnight = require("../fileMock.js");
const blackBishop = require("../fileMock.js");
const blackQueen = require("../fileMock.js");
const blackKing = require("../fileMock.js");
const whitePawn = require("../fileMock.js");
const whiteRook = require("../fileMock.js");
const whiteKnight = require("../fileMock.js");
const whiteBishop = require("../fileMock.js");
const whiteQueen = require("../fileMock.js");
const whiteKing = require("../fileMock.js");

const {
  analysisBoard,
} = require("../src/app/Components/utils/boardUpdates.js");

const pawn = { white: "♟︎", black: "♙" };
const rook = { white: "♜", black: "♖" };
const knight = { white: "♞", black: "♘" };
const bishop = { white: "♝", black: "♗" };
const queen = { white: "♛", black: "♕" };
const king = { white: "♚", black: "♔" };

describe("analysisBoard", () => {
  test("moveNumber 0 should show an initial boardState", () => {
    // Arrange
    const moves = [
      [1, pawn.white, "cc", 4],
      [1, pawn.black, "dd", 4],
      [1, pawn.white, "cxd", 5],
    ];
    const moveNumber = 0;
    const newBoardState = [
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
    // Act
    const result = analysisBoard(moves, moveNumber);
    // Assert
    expect(result).toEqual(newBoardState);
  });
  test("moveNumber equal to last move should show an boardState representing the final move of the game", () => {
    // Arrange
    const moves = [
      [1, pawn.white, ["c", 2], ["c", 4]],
      [1, pawn.black, ["d", 7], ["d", 5]],
      [1, pawn.white, ["c", 4], ["xd", 5]],
    ];
    const moveNumber = moves.length;
    const newBoardState = [
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
        null,
        new Pawn("white", whitePawn),
        new Pawn("white", whitePawn),
        new Pawn("white", whitePawn),
        new Pawn("white", whitePawn),
        new Pawn("white", whitePawn),
      ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, new Pawn("white", whitePawn), null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [
        new Pawn("black", blackPawn),
        new Pawn("black", blackPawn),
        new Pawn("black", blackPawn),
        null,
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
    // Act
    const result = analysisBoard(moves, moveNumber);
    // Assert
    expect(result).toEqual(newBoardState);
  });
  test.only("moveNumber 2 should show an boardState representing the second move of the game", () => {
    // Arrange
    const moves = [
      [1, pawn.white, ["c", 2], ["c", 4]],
      [1, pawn.black, ["d", 7], ["d", 5]],
      [1, pawn.white, ["c", 4], ["xd", 5]],
    ];
    const moveNumber = 2;
    const newBoardState = [
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
        null,
        new Pawn("white", whitePawn),
        new Pawn("white", whitePawn),
        new Pawn("white", whitePawn),
        new Pawn("white", whitePawn),
        new Pawn("white", whitePawn),
      ],
      [null, null, null, null, null, null, null, null],
      [null, null, new Pawn("white", whitePawn), null, null, null, null, null],
      [null, null, null, new Pawn("black", blackPawn), null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [
        new Pawn("black", blackPawn),
        new Pawn("black", blackPawn),
        new Pawn("black", blackPawn),
        null,
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
    // Act
    const result = analysisBoard(moves, moveNumber);
    // Assert
    expect(result).toEqual(newBoardState);
  });
});
