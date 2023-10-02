const {
    Pawn,
    Rook,
    Knight,
    Bishop,
    Queen,
    King,
  } = require("../src/app/Components/piece.js");

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