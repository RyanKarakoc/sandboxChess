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
  checkPawnMovement,
  checkRookMovement,
  checkKnightMovement,
} = require("../src/app/Components/utils.js");

describe("checkPawnMovement", () => {
  describe("starting position move 2 spaces", () => {
    describe("white pawn", () => {
      test("should return true when moving pawn is white, starting at row 2, nothing in the way", () => {
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
        const result = checkPawnMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving pawn is white, starting at row 2, and something is in the way", () => {
        // arrange
        const startTile = { column: "h", row: 2, colour: "bg-green-700" };
        const endTile = { column: "h", row: 4, colour: "bg-yellow-100" };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("white", whiteKing),
            new Bishop("white", whiteBishop),
            null,
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
            new Knight("white", whiteKnight),
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
        const result = checkPawnMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black pawn", () => {
      test("should return true when moving pawn is black, starting at row 2, nothing in the way", () => {
        // arrange
        const startTile = { column: "h", row: 7, colour: "bg-green-700" };
        const endTile = { column: "h", row: 5, colour: "bg-yellow-100" };
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
        const result = checkPawnMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving pawn is black, starting at row 7, and something is in the way", () => {
        // arrange
        const startTile = { column: "h", row: 7, colour: "bg-green-700" };
        const endTile = { column: "h", row: 5, colour: "bg-yellow-100" };
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
            new Knight("black", blackKnight),
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
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkPawnMovement(
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
  describe("move 1 space", () => {
    describe("white pawn", () => {
      test("should return true when moving pawn is white, and nothing in the way", () => {
        // arrange
        const startTile = { column: "h", row: 2, colour: "bg-green-700" };
        const endTile = { column: "h", row: 3, colour: "bg-yellow-100" };
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
        const result = checkPawnMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving pawn is white, and something is in the way", () => {
        // arrange
        const startTile = { column: "h", row: 2, colour: "bg-green-700" };
        const endTile = { column: "h", row: 3, colour: "bg-yellow-100" };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("white", whiteKing),
            new Bishop("white", whiteBishop),
            null,
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
            new Knight("white", whiteKnight),
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
        const result = checkPawnMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black pawn", () => {
      test("should return true when moving pawn is black, and nothing in the way", () => {
        // arrange
        const startTile = { column: "h", row: 7, colour: "bg-green-700" };
        const endTile = { column: "h", row: 6, colour: "bg-yellow-100" };
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
        const result = checkPawnMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when moving pawn is white, and something is in the way", () => {
        // arrange
        const startTile = { column: "h", row: 7, colour: "bg-green-700" };
        const endTile = { column: "h", row: 6, colour: "bg-yellow-100" };
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
            new Knight("black", blackKnight),
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
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkPawnMovement(
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
    describe("white pawn", () => {
      test("should return true when a white pawn captures a black pawn", () => {
        // arrange
        const startTile = { column: "h", row: 2, colour: "bg-green-700" };
        const endTile = { column: "g", row: 3, colour: "bg-yellow-100" };
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
          [
            null,
            null,
            null,
            null,
            null,
            null,
            new Pawn("black", blackPawn),
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
        const colour = "white";
        // act
        const result = checkPawnMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when a white pawn moves diagonally with nothing to capture", () => {
        // arrange
        const startTile = { column: "h", row: 2, colour: "bg-green-700" };
        const endTile = { column: "g", row: 3, colour: "bg-yellow-100" };
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
        const result = checkPawnMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(false);
      });
    });
    describe("black pawn", () => {
      test("should return true when a black pawn captures a white pawn", () => {
        // arrange
        const startTile = { column: "h", row: 7, colour: "bg-green-700" };
        const endTile = { column: "g", row: 6, colour: "bg-yellow-100" };
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
          [
            null,
            null,
            null,
            null,
            null,
            null,
            new Pawn("white", whitePawn),
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
        const colour = "black";
        // act
        const result = checkPawnMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
      test("should return false when a black pawn moves diagonally with nothing to capture", () => {
        // arrange
        const startTile = { column: "h", row: 7, colour: "bg-green-700" };
        const endTile = { column: "g", row: 6, colour: "bg-yellow-100" };
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
        const result = checkPawnMovement(
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

describe("checkKnightMovement", () => {
  describe("x+2, y+1", () => {
    describe("white knight", () => {
      test("should return true when moving knight is white", () => {
        const startTile = { column: "b", row: 3 };
        const endTile = { column: "d", row: 4 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            null,
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
            null,
            new Knight("white", whiteKnight),
            null,
            null,
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
        const result = checkKnightMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
    });
    describe("black knight", () => {
      test("should return true when moving knight is black", () => {
        const startTile = { column: "b", row: 4 };
        const endTile = { column: "d", row: 5 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            null,
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
            new Knight("white", whiteKnight),
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
        const colour = "black";
        // act
        const result = checkKnightMovement(
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
  describe("x+2, y-1", () => {
    describe("white knight", () => {
      test("should return true when moving knight is white", () => {
        const startTile = { column: "b", row: 4 };
        const endTile = { column: "d", row: 3 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            null,
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
            new Knight("white", whiteKnight),
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
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "white";
        // act
        const result = checkKnightMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
    });
    describe("black knight", () => {
      test("should return true when moving knight is black", () => {
        const startTile = { column: "b", row: 5 };
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
            new Knight("black", blackKnight),
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
            null,
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
        const result = checkKnightMovement(
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
  describe("x-2, y+1", () => {
    describe("white knight", () => {
      test("should return true when moving knight is white", () => {
        const startTile = { column: "g", row: 3 };
        const endTile = { column: "e", row: 4 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("white", whiteKing),
            new Bishop("white", whiteBishop),
            null,
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
            new Knight("white", whiteKnight),
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
        const result = checkKnightMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
    });
    describe("black knight", () => {
      test("should return true when moving knight is black", () => {
        const startTile = { column: "g", row: 5 };
        const endTile = { column: "e", row: 6 };
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
            new Knight("black", blackKnight),
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
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkKnightMovement(
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
  describe("x-2, y-1", () => {
    describe("white knight", () => {
      test("should return true when moving knight is white", () => {
        const startTile = { column: "g", row: 4 };
        const endTile = { column: "e", row: 3 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("white", whiteKing),
            new Bishop("white", whiteBishop),
            null,
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
            new Knight("white", whiteKnight),
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
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "white";
        // act
        const result = checkKnightMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
    });
    describe("black knight", () => {
      test("should return true when moving knight is black", () => {
        const startTile = { column: "g", row: 6 };
        const endTile = { column: "e", row: 5 };
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
            new Knight("black", blackKnight),
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
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkKnightMovement(
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
  describe("y+2, x+1", () => {
    describe("white knight", () => {
      test("should return true when moving knight is white", () => {
        const startTile = { column: "g", row: 4 };
        const endTile = { column: "e", row: 3 };
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
        const result = checkKnightMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
    });
    describe("black knight", () => {
      test("should return true when moving knight is black", () => {
        const startTile = { column: "f", row: 6 };
        const endTile = { column: "g", row: 8 };
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
            new Knight("black", blackKnight),
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
            new Bishop("black", blackBishop),
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkKnightMovement(
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
  describe("y+2, x-1", () => {
    describe("white knight", () => {
      test("should return true when moving knight is white", () => {
        const startTile = { column: "g", row: 1 };
        const endTile = { column: "f", row: 3 };
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
        const result = checkKnightMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
    });
    describe("black knight", () => {
      test("should return true when moving knight is black", () => {
        const startTile = { column: "c", row: 6 };
        const endTile = { column: "b", row: 8 };
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
            new Knight("black", blackKnight),
            null,
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
            null,
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
        const result = checkKnightMovement(
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
  describe("y-2, x+1", () => {
    describe("white knight", () => {
      test("should return true when moving knight is white", () => {
        const startTile = { column: "f", row: 3 };
        const endTile = { column: "g", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("white", whiteKing),
            new Bishop("white", whiteBishop),
            null,
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
            new Knight("white", whiteKnight),
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
        const result = checkKnightMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
    });
    describe("black knight", () => {
      test("should return true when moving knight is black", () => {
        const startTile = { column: "b", row: 8 };
        const endTile = { column: "c", row: 6 };
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
        const result = checkKnightMovement(
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
  describe("y-2, x-1", () => {
    describe("white knight", () => {
      test("should return true when moving knight is white", () => {
        const startTile = { column: "h", row: 3 };
        const endTile = { column: "g", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            new Bishop("white", whiteBishop),
            new Queen("white", whiteQueen),
            new King("white", whiteKing),
            new Bishop("white", whiteBishop),
            null,
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
            new Knight("white", whiteKnight),
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
        const result = checkKnightMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
    });
    describe("black knight", () => {
      test("should return true when moving knight is black", () => {
        const startTile = { column: "b", row: 8 };
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
        const result = checkKnightMovement(
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
  describe("capturing", () => {
    describe("white knight", () => {
      test("should return true when white knight captures a black piece", () => {
        const startTile = { column: "g", row: 1 };
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
        const colour = "white";
        // act
        const result = checkKnightMovement(
          startTile,
          endTile,
          boardState,
          colour
        );
        // assert
        expect(result).toBe(true);
      });
    });
    describe("black knight", () => {
      test("should return true when black knight captures a white piece", () => {
        const startTile = { column: "b", row: 8 };
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
            null,
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
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // act
        const result = checkKnightMovement(
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
