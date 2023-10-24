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
  checkBishopMovement,
  checkBishopAttackingKing,
} = require("../src/app/Components/utils/bishopMovement.js");

describe("checkBishopMovement", () => {
  describe("x pos, y,pos", () => {
    describe("white bishop", () => {
      test("should return true when moving bishop is white, and nothing in the way", () => {
        // arrange
        const startTile = { column: "f", row: 1 };
        const endTile = { column: "h", row: 3 };
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
            null,
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
        const result = checkBishopMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving bishop is white, and something is in the way", () => {
        // arrange
        const startTile = { column: "f", row: 1 };
        const endTile = { column: "h", row: 3 };
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
        const result = checkBishopMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black bishop", () => {
      test("should return true when moving bishop is black, and nothing in the way", () => {
        // arrange
        const startTile = { column: "d", row: 6 };
        const endTile = { column: "f", row: 8 };
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
            new Bishop("black", blackBishop),
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
            null,
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
            null,
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkBishopMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving bishop is black, and something is in the way", () => {
        // arrange
        const startTile = { column: "e", row: 6 };
        const endTile = { column: "f", row: 8 };
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
            null,
            new Bishop("black", blackBishop),
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
            new Queen("black", blackQueen),
            new King("black", blackKing),
            null,
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkBishopMovement(
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
  describe("x pos, y neg", () => {
    describe("white bishop", () => {
      test("should return true when moving bishop is white, and nothing in the way", () => {
        // arrange
        const startTile = { column: "d", row: 3 };
        const endTile = { column: "f", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("white", whiteKing),
            null,
            new Knight("white", whiteKnight),
            new Rook("white", whiteRook),
          ],
          [
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            null,
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
          ],
          [
            null,
            null,
            null,
            new Bishop("white", whiteBishop),
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
        const result = checkBishopMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving bishop is white, and something is in the way", () => {
        // arrange
        const startTile = { column: "f", row: 1 };
        const endTile = { column: "d", row: 3 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("white", whiteKing),
            null,
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
            new Bishop("white", whiteBishop),
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
        const result = checkBishopMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black bishop", () => {
      test("should return true when moving bishop is black, and nothing in the way", () => {
        // arrange
        const startTile = { column: "f", row: 8 };
        const endTile = { column: "h", row: 6 };
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
            null,
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
        const result = checkBishopMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving bishop is black, and something is in the way", () => {
        // arrange
        const startTile = { column: "f", row: 8 };
        const endTile = { column: "h", row: 6 };
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
        const result = checkBishopMovement(
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
  describe("x neg, y,pos", () => {
    describe("white bishop", () => {
      test("should return true when moving bishop is white, and nothing in the way", () => {
        // arrange
        const startTile = { column: "c", row: 1 };
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
            null,
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
        const result = checkBishopMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving bishop is white, and something is in the way", () => {
        // arrange
        const startTile = { column: "c", row: 1 };
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
        const result = checkBishopMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black bishop", () => {
      test("should return true when moving bishop is black, and nothing in the way", () => {
        // arrange
        const startTile = { column: "e", row: 6 };
        const endTile = { column: "c", row: 8 };
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
            null,
            new Bishop("black", blackBishop),
            null,
            null,
            null,
          ],
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
            null,
            new Queen("black", blackQueen),
            new King("black", blackKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkBishopMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving bishop is black, and something is in the way", () => {
        // arrange
        const startTile = { column: "h", row: 2 };
        const endTile = { column: "h", row: 4 };
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
            null,
            new Bishop("black", blackBishop),
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
            null,
            new Queen("black", blackQueen),
            new King("black", blackKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkBishopMovement(
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
  describe("x neg, y,neg", () => {
    describe("white bishop", () => {
      test("should return true when moving bishop is white, and nothing in the way", () => {
        // arrange
        const startTile = { column: "h", row: 3 };
        const endTile = { column: "f", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("white", whiteKing),
            null,
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
            null,
            new Pawn("white", whitePawn),
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            new Bishop("white", whiteBishop),
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
        const result = checkBishopMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving bishop is white, and something is in the way", () => {
        // arrange
        const startTile = { column: "h", row: 2 };
        const endTile = { column: "h", row: 4 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("white", whiteKing),
            null,
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
            null,
            null,
            null,
            null,
            new Bishop("white", whiteBishop),
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
        const result = checkBishopMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black bishop", () => {
      test("should return true when moving bishop is black, and nothing in the way", () => {
        // arrange
        const startTile = { column: "c", row: 8 };
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
          [null, null, null, null, null, null, null, null],
          [
            new Pawn("black", blackPawn),
            null,
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
        const result = checkBishopMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving bishop is black, and something is in the way", () => {
        // arrange
        const startTile = { column: "c", row: 8 };
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
        const result = checkBishopMovement(
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
    describe("white bishop", () => {
      test("should return true when white bishop captures a black piece", () => {
        // arrange
        const startTile = { column: "f", row: 1 };
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
            null,
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
          ],
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
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
        const result = checkBishopMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
    });
    describe("black bishop", () => {
      test("should return true when black bishop captures a white piece", () => {
        // arrange
        const startTile = { column: "c", row: 8 };
        const endTile = { column: "h", row: 3 };
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
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            new Pawn("white", whitePawn),
          ],
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
        const result = checkBishopMovement(
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

describe("checkBishopAttackingKing", () => {
  describe("x neg y neg", () => {
    describe("white bishop", () => {
      test("should return true when white bishop is attacking black king, and nothing in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            null,
            new Queen("white", whiteQueen),
            new King("black", blackKing),
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
            null,
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
          ],
          [
            null,
            null,
            null,
            null,
            null,
            new Pawn("white", whitePawn),
            null,
            null,
          ],
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            new Bishop("white", whiteBishop),
          ],
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
            new King("white", whiteKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "white";
        // act
        const result = checkBishopAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when white bishop is attacking black king, and something is in the way", () => {
        // arange
        const startTile = { column: "h", row: 4 };
        const endTile = { column: "g", row: 3 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            null,
            new Queen("white", whiteQueen),
            new King("black", blackKing),
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
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            new Bishop("white", whiteBishop),
          ],
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
            new King("white", whiteKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "white";
        // act
        const result = checkBishopAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black bishop", () => {
      test("should return true when black bishop is attacking white king, and nothing in the way", () => {
        // arange
        const startTile = { column: "c", row: 5 };
        const endTile = { column: "f", row: 2 };
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
          [
            null,
            null,
            new Bishop("black", blackBishop),
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
            null,
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkBishopAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when black bishop is attacking white king, and something is in the way", () => {
        // arange
        const startTile = { column: "d", row: 6 };
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
          [
            null,
            null,
            null,
            new Bishop("black", blackBishop),
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
            new Queen("black", blackQueen),
            new King("black", blackKing),
            null,
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkBishopAttackingKing(
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
  describe("x neg y pos", () => {
    describe("white bishop", () => {
      test("should return true when white bishop is attacking black king, and nothing in the way", () => {
        // arange
        const startTile = { column: "g", row: 6 };
        const endTile = { column: "h", row: 5 };
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
            null,
            null,
            new Pawn("black", blackPawn),
            new Bishop("white", whiteBishop),
            null,
          ],
          [
            new Pawn("black", blackPawn),
            new Pawn("black", blackPawn),
            new Pawn("black", blackPawn),
            new Pawn("black", blackPawn),
            new Pawn("black", blackPawn),
            null,
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
        const result = checkBishopAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when white bishop is attacking black king, and something is in the way", () => {
        // arange
        const startTile = { column: "g", row: 6 };
        const endTile = { column: "h", row: 5 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("white", whiteKing),
            null,
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
            null,
            null,
            null,
            new Bishop("white", whiteBishop),
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
            new Queen("black", blackQueen),
            new King("black", blackKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "white";
        // act
        const result = checkBishopAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black bishop", () => {
      test("should return true when black bishop is attacking white king, and nothing in the way", () => {
        // arange
        const startTile = { column: "g", row: 6 };
        const endTile = { column: "h", row: 5 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            null,
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
            null,
            null,
            new Pawn("black", blackPawn),
            new Bishop("black", blackBishop),
            null,
          ],
          [
            new Pawn("black", blackPawn),
            new Pawn("black", blackPawn),
            new Pawn("black", blackPawn),
            new Pawn("black", blackPawn),
            new Pawn("black", blackPawn),
            null,
            new Pawn("black", blackPawn),
            new Pawn("black", blackPawn),
          ],
          [
            new Rook("black", blackRook),
            new Knight("black", blackKnight),
            null,
            new Queen("black", blackQueen),
            new King("white", whiteKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkBishopAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when black bishop is attacking white king, and something is in the way", () => {
        // arange
        const startTile = { column: "g", row: 6 };
        const endTile = { column: "h", row: 5 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            null,
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
            null,
            null,
            null,
            new Bishop("black", blackBishop),
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
            null,
            new Queen("black", blackQueen),
            new King("white", whiteKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkBishopAttackingKing(
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
  describe("x pos y neg", () => {
    describe("white bishop", () => {
      test("should return true when white bishop is attacking black king, and nothing in the way", () => {
        // arange
        const startTile = { column: "b", row: 4 };
        const endTile = { column: "a", row: 5 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("black", blackKing),
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
            new Pawn("white", whitePawn),
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
            null,
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "white";
        // act
        const result = checkBishopAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when white bishop is attacking black king, and something is in the way", () => {
        // arange
        const startTile = { column: "b", row: 4 };
        const endTile = { column: "a", row: 5 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            null,
            new Queen("white", whiteQueen),
            new King("black", blackKing),
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
          [
            null,
            new Bishop("white", whiteBishop),
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
            null,
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "white";
        // act
        const result = checkBishopAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black bishop", () => {
      test("should return true when black bishop is attacking white king, and nothing in the way", () => {
        // arange
        const startTile = { column: "b", row: 4 };
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
            null,
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
            new Pawn("white", whitePawn),
          ],
          [
            null,
            null,
            null,
            new Pawn("white", whitePawn),
            null,
            null,
            null,
            null,
          ],
          [
            null,
            new Bishop("black", blackBishop),
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
            null,
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkBishopAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when black bishop is attacking white king, and something is in the way", () => {
        // arange
        const startTile = { column: "b", row: 4 };
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
          [
            null,
            new Bishop("black", blackBishop),
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
            null,
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkBishopAttackingKing(
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
  describe("x pos y pos", () => {
    describe("white bishop", () => {
      test("should return true when white bishop is attacking black king, and nothing in the way", () => {
        // arange
        const startTile = { column: "b", row: 5 };
        const endTile = { column: "a", row: 4 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("white", whiteKing),
            null,
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
          [
            null,
            new Bishop("white", whiteBishop),
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          [
            null,
            null,
            null,
            new Pawn("black", blackPawn),
            null,
            null,
            null,
            null,
          ],
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
        const colour = "white";
        // act
        const result = checkBishopAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when white bishop is attacking black king, and something is in the way", () => {
        // arange
        const startTile = { column: "b", row: 5 };
        const endTile = { column: "a", row: 4 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("white", whiteKing),
            null,
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
          [
            null,
            new Bishop("white", whiteBishop),
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
        const result = checkBishopAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black bishop", () => {
      test("should return true when black bishop is attacking white king, and nothing in the way", () => {
        // arange
        const startTile = { column: "b", row: 5 };
        const endTile = { column: "a", row: 4 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            null,
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
            new Pawn("black", blackPawn),
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
            new Queen("black", blackQueen),
            new King("white", whiteKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkBishopAttackingKing(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when black bishop is attacking white king, and something is in the way", () => {
        // arange
        const startTile = { column: "b", row: 5 };
        const endTile = { column: "a", row: 4 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            null,
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
          [
            null,
            new Bishop("black", blackBishop),
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
            null,
            new Queen("black", blackQueen),
            new King("white", whiteKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkBishopAttackingKing(
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
});
