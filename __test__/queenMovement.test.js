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
  checkQueenMovement,
  checkQueenAttackingKing,
} = require("../src/app/Components/utils/queenMovement.js");

describe("checkQueenMovement", () => {
  describe("horizontal movement", () => {
    describe("white Queen", () => {
      test("should return true when moving queen is white, and nothing in the way", () => {
        // arange
        const startTile = { column: "d", row: 3 };
        const endTile = { column: "a", row: 3 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            null,
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
          [
            null,
            null,
            null,
            new Queen("white", whiteQueen),
            null,
            null,
            null,
            null,
          ],
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
        const colour = "white";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving queen is white, and something in the way", () => {
        // arange
        const startTile = { column: "d", row: 3 };
        const endTile = { column: "a", row: 3 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            null,
            new King("white", whiteKing),
            new Bishop("white", whiteBishop),
            new Knight("white", whiteKnight),
            new Rook("white", whiteRook),
          ],
          [
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            null,
            new Pawn("black", blackPawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
          ],
          [
            null,
            null,
            new Pawn("white", whitePawn),
            new Queen("white", whiteQueen),
            null,
            null,
            null,
            null,
          ],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [
            null,
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
        const colour = "white";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black Queen", () => {
      test("should return true when moving queen is black, and nothing in the way", () => {
        // arange
        const startTile = { column: "d", row: 6 };
        const endTile = { column: "a", row: 6 };
        const boardState = [
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
          [
            null,
            null,
            null,
            new Queen("black", blackQueen),
            null,
            null,
            null,
            null,
          ],
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
            null,
            new King("black", blackKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving queen is black, and something in the way", () => {
        // arange
        const startTile = { column: "d", row: 6 };
        const endTile = { column: "a", row: 6 };
        const boardState = [
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
            new Pawn("black", blackPawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
          ],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [
            null,
            null,
            new Pawn("black", blackPawn),
            new Queen("black", blackQueen),
            null,
            null,
            null,
            null,
          ],
          [
            new Pawn("black", blackPawn),
            new Pawn("black", blackPawn),
            null,
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
            null,
            new King("black", blackKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
  });
  describe("vertical movement", () => {
    describe("white Queen", () => {
      test("should return true when moving queen is white, and nothing in the way", () => {
        // arange
        const startTile = { column: "d", row: 3 };
        const endTile = { column: "a", row: 3 };
        const boardState = [
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
            null,
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
        const colour = "white";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving queen is white, and something in the way", () => {
        // arange
        const startTile = { column: "d", row: 1 };
        const endTile = { column: "d", row: 6 };
        const boardState = [
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
            new Pawn("black", blackPawn),
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
            null,
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
        const colour = "white";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black Queen", () => {
      test("should return true when moving queen is black, and nothing in the way", () => {
        // arange
        const startTile = { column: "d", row: 8 };
        const endTile = { column: "d", row: 3 };
        const boardState = [
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
        const colour = "black";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving queen is black, and something in the way", () => {
        // arange
        const startTile = { column: "d", row: 8 };
        const endTile = { column: "d", row: 3 };
        const boardState = [
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
            new Pawn("black", blackPawn),
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
        const colour = "black";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
  });
  describe("diagonal movement", () => {
    describe("white Queen", () => {
      test("should return true when moving queen is white, and nothing in the way", () => {
        // arange
        const startTile = { column: "d", row: 1 };
        const endTile = { column: "a", row: 4 };
        const boardState = [
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
        const colour = "white";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving queen is white, and something in the way", () => {
        // arange
        const startTile = { column: "d", row: 1 };
        const endTile = { column: "a", row: 4 };
        const boardState = [
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
            new Pawn("black", blackPawn),
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
            null,
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
        const colour = "white";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black Queen", () => {
      test("should return true when moving queen is black, and nothing in the way", () => {
        // arange
        const startTile = { column: "d", row: 8 };
        const endTile = { column: "a", row: 5 };
        const boardState = [
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
            null,
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
        const colour = "black";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving queen is black, and something in the way", () => {
        // arange
        const startTile = { column: "d", row: 8 };
        const endTile = { column: "a", row: 5 };
        const boardState = [
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
            new Pawn("black", blackPawn),
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
        const colour = "black";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
  });
  describe("capturing", () => {
    describe("white Queen", () => {
      test("should return true when when moving horizontaly and capturing a black piece", () => {
        // arange
        const startTile = { column: "d", row: 3 };
        const endTile = { column: "a", row: 3 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            null,
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
          [
            new Pawn("black", blackPawn),
            null,
            null,
            new Queen("white", whiteQueen),
            null,
            null,
            null,
            null,
          ],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [
            null,
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
        const colour = "white";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return true when when moving vertically and capturing a black piece", () => {
        // arange
        const startTile = { column: "d", row: 1 };
        const endTile = { column: "d", row: 7 };
        const boardState = [
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
            null,
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
        const colour = "white";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return true when when moving diagonaly and capturing a black piece", () => {
        // arange
        const startTile = { column: "d", row: 1 };
        const endTile = { column: "a", row: 4 };
        const boardState = [
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
            new Pawn("black", blackPawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
          ],
          [null, null, null, null, null, null, null, null],
          [
            new Pawn("black", blackPawn),
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [
            null,
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
        const colour = "white";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
    });
    describe("black Queen", () => {
      test("should return true when when moving horizontaly and capturing a white piece", () => {
        // arange
        const startTile = { column: "d", row: 3 };
        const endTile = { column: "a", row: 3 };
        const boardState = [
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
            null,
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
          [
            new Pawn("white", whitePawn),
            null,
            null,
            new Queen("black", blackQueen),
            null,
            null,
            null,
            null,
          ],
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
            null,
            new King("black", blackKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return true when when moving vertically and capturing a black piece", () => {
        // arange
        const startTile = { column: "d", row: 8 };
        const endTile = { column: "d", row: 2 };
        const boardState = [
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
        const colour = "black";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return true when when moving diagonally and capturing a white piece", () => {
        // arange
        const startTile = { column: "d", row: 8 };
        const endTile = { column: "a", row: 5 };
        const boardState = [
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
            null,
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("black", blackPawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
          ],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
          [
            new Pawn("white", whitePawn),
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [null, null, null, null, null, null, null, null],
          [
            new Pawn("black", blackPawn),
            new Pawn("black", blackPawn),
            null,
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
        const colour = "black";
        // act
        const result = checkQueenMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
    });
  });
});

describe("checkQueenAttackingKing", () => {
  describe("horizontal", () => {
    describe("white queen", () => {
      test("should return true when white queen is attacking black king and nothing in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
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
        const colour = "white";
        // act
        const result = checkQueenAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when white queen is attacking black king and something is in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
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
        const colour = "white";
        // act
        const result = checkQueenAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black queen", () => {
      test("should return true when black queen is attacking white king and nothing in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
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
        const colour = "black";
        // act
        const result = checkQueenAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when black queen is attacking white king and something is in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
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
        const colour = "black";
        // act
        const result = checkQueenAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
  });
  describe("vertical", () => {
    describe("white queen", () => {
      test("should return true when white queen is attacking black king and nothing in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
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
        const colour = "white";
        // act
        const result = checkQueenAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when white queen is attacking black king and something is in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
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
        const colour = "white";
        // act
        const result = checkQueenAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black queen", () => {
      test("should return true when black queen is attacking white king and nothing in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
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
        const colour = "black";
        // act
        const result = checkQueenAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when black queen is attacking white king and something is in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
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
        const colour = "black";
        // act
        const result = checkQueenAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
  });
  describe("diagonal", () => {
    describe("white queen", () => {
      test("should return true when white queen is attacking black king and nothing in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
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
        const colour = "white";
        // act
        const result = checkQueenAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when white queen is attacking black king and something is in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
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
        const colour = "white";
        // act
        const result = checkQueenAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black queen", () => {
      test("should return true when black queen is attacking white king and nothing in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
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
        const colour = "black";
        // act
        const result = checkQueenAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when black queen is attacking white king and something is in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
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
        const colour = "black";
        // act
        const result = checkQueenAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
  });
  describe("random test", () => {
    test("", () => {
      // arange
      const startTile = { column: "h", row: 4 };
      const endTile = { column: "g", row: 3 };
      const boardState = [
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
      const colour = "white";
      // act
      const result = checkQueenAttackingKing(
        startTile,
        endTile,
        boardState,
        colour
      );
      // assert
      expect(result).toBe(true);
    });
  });
});
