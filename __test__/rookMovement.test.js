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

const { checkRookMovement } = require("../src/app/Components/utils.js");

describe("checkRookMovement", () => {
  describe("moving vertically", () => {
    describe("white rook", () => {
      test("should return true when moving rook is white, and nothing in the way", () => {
        // arange
        const startTile = { column: "h", row: 1 };
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
          [null, null, null, null, null, null, null, null],
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
        const result = checkRookMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving rook is white, and something is in the way", () => {
        // arange
        const startTile = { column: "h", row: 1 };
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
            null,
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
            new Pawn("white", whitePawn),
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
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "white";
        // act
        const result = checkRookMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black rook", () => {
      test("should return true when moving rook is black, and nothing in the way", () => {
        // arange
        const startTile = { column: "h", row: 8 };
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
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            new Pawn("black", blackPawn),
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
            null,
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
        const result = checkRookMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving rook is white, and something is in the way", () => {
        // arange
        const startTile = { column: "h", row: 8 };
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
          [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            new Pawn("black", blackPawn),
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
            null,
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
        const result = checkRookMovement(
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
  describe("moving horizontaly", () => {
    describe("white rook", () => {
      test("should return true when moving rook is white, and nothing in the way", () => {
        // arange
        const startTile = { column: "h", row: 3 };
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
            null,
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
            new Rook("white", whiteRook),
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
        const result = checkRookMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving rook is white, and something is in the way", () => {
        // arange
        const startTile = { column: "h", row: 3 };
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
            null,
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
          [
            null,
            null,
            new Pawn("white", whitePawn),
            null,
            null,
            null,
            null,
            new Rook("white", whiteRook),
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
        const result = checkRookMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black rook", () => {
      test("should return true when moving rook is black, and nothing in the way", () => {
        // arange
        const startTile = { column: "h", row: 6 };
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
            null,
            null,
            null,
            null,
            new Rook("black", blackRook),
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
            null,
          ],
        ];
        const colour = "black";
        // act
        const result = checkRookMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving rook is white, and something is in the way", () => {
        // arange
        const startTile = { column: "h", row: 6 };
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
            new Pawn("black", blackPawn),
            null,
            null,
            null,
            null,
            new Rook("black", blackRook),
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
            new Queen("black", blackQueen),
            new King("black", blackKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            null,
          ],
        ];
        const colour = "black";
        // act
        const result = checkRookMovement(
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
    describe("white rook", () => {
      test("should return true when white rook captures black piece, vertically", () => {
        // arange
        const startTile = { column: "h", row: 1 };
        const endTile = { column: "h", row: 7 };
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
        const result = checkRookMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return true when white rook captures black piece, horizontally", () => {
        // arange
        const startTile = { column: "h", row: 3 };
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
            null,
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
            new Rook("black", blackRook),
            null,
            null,
            null,
            null,
            null,
            null,
            new Rook("white", whiteRook),
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
            null,
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
        const result = checkRookMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
    });
    describe("black rook", () => {
      test("should return true when black rook captures black piece, vertically", () => {
        // arange
        const startTile = { column: "h", row: 8 };
        const endTile = { column: "h", row: 2 };
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
            null,
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
        const result = checkRookMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return true when black rook captures black piece, horizontaly", () => {
        // arange
        const startTile = { column: "h", row: 6 };
        const endTile = { column: "a", row: 6 };
        const boardState = [
          [
            null,
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
          [
            new Rook("white", whiteRook),
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
            null,
            null,
            null,
            null,
            null,
            null,
            new Rook("black", blackRook),
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
            null,
          ],
        ];
        const colour = "black";
        // act
        const result = checkRookMovement(
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
