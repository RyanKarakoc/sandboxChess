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
  isTileUnderAttack,
} = require("../src/app/Components/utils/tilesUnderAttack.js");

describe("isTileUnderAttack", () => {
  describe("pawn attacking", () => {
    describe("white castle tile", () => {
      test("should return true if pawn is attacking the tile", () => {
        // Arrange
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
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
            new Pawn("black", blackPawn),
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
        const colour = "white";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return true if pawn is attacking the tile", () => {
        // Arrange
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
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
        const colour = "white";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return false if pawn is not attacking the tile", () => {
        // Arrange
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
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
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(false);
      });
    });
    describe("black castle tile", () => {
      test("should return true if pawn is attacking the tile", () => {
        // Arrange
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "c", row: 8 };
        const targetTile = { column: "c", row: 8 };
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
            new Pawn("white", whitePawn),
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
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return true if pawn is attacking the tile", () => {
        // Arrange
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "c", row: 8 };
        const targetTile = { column: "c", row: 8 };
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
            new Pawn("white", whitePawn),
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
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return false if pawn is not attacking the tile", () => {
        // Arrange
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "c", row: 8 };
        const targetTile = { column: "c", row: 8 };
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
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(false);
      });
    });
  });
  describe("rook attacking", () => {
    describe("white castle tile", () => {
      test("should return true when rook attacking tile", () => {
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            null,
            null,
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
            new Rook("black", blackRook),
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
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return true when rook attacking tile", () => {
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "d", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            null,
            null,
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
            null,
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
            new Rook("black", blackRook),
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
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return false when rook is not attacking the tile", () => {
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
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
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(false);
      });
    });
    describe("black castle tile", () => {
      test("should return true when rook attacking tile", () => {
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "g", row: 8 };
        const targetTile = { column: "g", row: 8 };
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
            new Rook("white", whiteRook),
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
            null,
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return true when rook attacking tile", () => {
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "g", row: 8 };
        const targetTile = { column: "f", row: 8 };
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
            new Rook("white", whiteRook),
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
            null,
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return false when rook is not attacking the tile", () => {
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "g", row: 8 };
        const targetTile = { column: "f", row: 8 };
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
            new Rook("white", whiteRook),
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
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(false);
      });
    });
  });
  describe("knight attacking", () => {
    describe("white castle tile", () => {
      test("should return true when knight attacking tile", () => {
        // Arrange
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            null,
            null,
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
            new Knight("black", blackKnight),
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
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return true when knight attacking tile", () => {
        // Arrange
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            null,
            null,
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
            new Knight("black", blackKnight),
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
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return false when knight not attacking tile", () => {
        // Arrange
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            null,
            null,
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
          [null, null, null, null, null, null, null, null],
          [
            null,
            null,
            null,
            null,
            new Knight("black", blackKnight),
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
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(false);
      });
    });
    describe("black castle tile", () => {
      test("should return true when knight attacking tile", () => {
        // Arrange
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "g", row: 8 };
        const targetTile = { column: "f", row: 8 };
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
            null,
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return true when knight attacking tile", () => {
        // Arrange
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "c", row: 8 };
        const targetTile = { column: "g", row: 8 };
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
            null,
            new Knight("white", whiteKnight),
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
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return false when knight not attacking tile", () => {
        // Arrange
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "c", row: 8 };
        const targetTile = { column: "c", row: 8 };
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
            new Knight("white", whiteKnight),
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
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(false);
      });
    });
  });
  describe("bishop attacking", () => {
    describe("white castle tile", () => {
      test("should return true when bishop attacking tile", () => {
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            null,
            null,
            null,
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
          [
            new Bishop("black", blackBishop),
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
        const colour = "white";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return true when bishop attacking tile", () => {
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            null,
            null,
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
            null,
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
            new Bishop("black", blackBishop),
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
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return false when bishop not attacking tile", () => {
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            null,
            null,
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
            new Bishop("black", blackBishop),
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
        const colour = "white";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(false);
      });
    });
    describe("black castle tile", () => {
      test("should return true when bishop attacking tile", () => {
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "c", row: 8 };
        const targetTile = { column: "f", row: 8 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            null,
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
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return true when bishop attacking tile", () => {
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "c", row: 8 };
        const targetTile = { column: "g", row: 8 };
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
            null,
            null,
            new Bishop("white", whiteBishop),
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
            null,
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return false when bishop not attacking tile", () => {
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "c", row: 8 };
        const targetTile = { column: "g", row: 8 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            new Knight("white", whiteKnight),
            null,
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
            new Bishop("white", whiteBishop),
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
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(false);
      });
    });
  });
  describe("queen attacking", () => {
    describe("white castle tile", () => {
      test("should return true when queen attacking tile", () => {
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            null,
            null,
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
            new Queen("black", blackQueen),
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
            null,
            new King("black", blackKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "white";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return true when queen attacking tile", () => {
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
        const boardState = [
          [
            new Queen("black", blackQueen),
            null,
            null,
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
            null,
            new King("black", blackKing),
            new Bishop("black", blackBishop),
            new Knight("black", blackKnight),
            new Rook("black", blackRook),
          ],
        ];
        const colour = "white";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return false when queen not attacking tile", () => {
        const startTile = { column: "e", row: 1 };
        const endTile = { column: "c", row: 1 };
        const targetTile = { column: "c", row: 1 };
        const boardState = [
          [
            new Rook("white", whiteRook),
            null,
            null,
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
        const colour = "white";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(false);
      });
    });
    describe("black castle tile", () => {
      test("should return true when queen attacking tile", () => {
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "g", row: 8 };
        const targetTile = { column: "f", row: 8 };
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
            null,
            null,
            new Queen("white", whiteQueen),
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
            null,
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return true when queen attacking tile", () => {
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "f", row: 8 };
        const targetTile = { column: "g", row: 8 };
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
            new Queen("white", whiteQueen),
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
            null,
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(true);
      });
      test("should return false when queen not attacking tile", () => {
        const startTile = { column: "e", row: 8 };
        const endTile = { column: "f", row: 8 };
        const targetTile = { column: "g", row: 8 };
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
          [null, null, null, null, null, null, null, null],
          [null, null, null, null, null, null, null, null],
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
            null,
            new Rook("black", blackRook),
          ],
        ];
        const colour = "black";
        // Act
        const result = isTileUnderAttack(
          startTile,
          endTile,
          boardState,
          colour,
          targetTile
        );
        // Assert
        expect(result).toBe(false);
      });
    });
  });
});
