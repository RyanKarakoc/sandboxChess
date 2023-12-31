"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// import { Pawn, Rook, Knight, Bishop, Queen, King } from "./piece.js";

const {
  Pawn,
  Rook,
  Knight,
  Bishop,
  Queen,
  King,
} = require("../Components/piece.js");

const {
  updateBoardForCastling,
  updateBoardForEnPessant,
} = require("./utils/boardUpdates.js");

import blackPawn from "../../../public/blackPieces/pawn.png";
import blackRook from "../../../public/blackPieces/rook.png";
import blackKnight from "../../../public/blackPieces/knight.png";
import blackBishop from "../../../public/blackPieces/bishop.png";
import blackQueen from "../../../public/blackPieces/queen.png";
import blackKing from "../../../public/blackPieces/king.png";
import whitePawn from "../../../public/whitePieces/pawn.png";
import whiteRook from "../../../public/whitePieces/rook.png";
import whiteKnight from "../../../public/whitePieces/knight.png";
import whiteBishop from "../../../public/whitePieces/bishop.png";
import whiteQueen from "../../../public/whitePieces/queen.png";
import whiteKing from "../../../public/whitePieces/king.png";
import { canKingCastle } from "./utils/kingMovement";
import { checkEnPassant } from "./utils/pawnMovements";

class Tile {
  constructor(row, column, piece) {
    this.column = column;
    this.row = row;
    this.colour = "bg-yellow-100";
    this.piece = null;
  }
  update() {
    this.colour = "bg-green-700";
  }
  insertPiece(piece) {
    this.piece = piece;
  }
}

const Board = ({ moves, setMoves }) => {
  const initialBoardState = [
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

  const [boardState, setBoardState] = useState(initialBoardState);
  const [movingPiece, setMovingPiece] = useState(null);
  const [startTile, setStartTile] = useState(null);
  const [alternateMove, setAlternateMove] = useState(1);
  const [hasWhiteKingMoved, setHasWhiteKingMoved] = useState(false);
  const [hasBlackKingMoved, setHasBlackKingMoved] = useState(false);
  const [hasKingSideWhiteRookMoved, setHasKingSideWhiteRookMoved] =
    useState(false);
  const [hasKingSideBlackRookMoved, setHasKingSideBlackRookMoved] =
    useState(false);
  const [hasQueenSideWhiteRookMoved, setHasQueenSideWhiteRookMoved] =
    useState(false);
  const [hasQueenSideBlackRookMoved, setHasQueenSideBlackRookMoved] =
    useState(false);

  const board = [];

  const boardSize = 8;
  const letterRef = ["a", "b", "c", "d", "e", "f", "g", "h"];

  for (let row = boardSize; row > 0; row--) {
    const rowTiles = [];
    for (let column = boardSize - 1; column >= 0; column--) {
      const tile = new Tile(row, letterRef[column]);
      const piece = boardState[row - 1][column];
      if ((row + column) % 2 !== 0) {
        tile.update();
      }
      if (piece) {
        tile.insertPiece(piece);
      }
      rowTiles.unshift(tile);
    }
    board.push(rowTiles);
  }

  return (
    <div className="flex justify-center items-center mb-20">
      <div className="border-4 border-solid border-black rounded-md p-10 bg-amber-200">
        <div className="border-4 border-black">
          {board.map((row, rowIndex) => (
            <div className="flex" key={rowIndex}>
              {row.map((tile, columnIndex) => (
                <div
                  className={`relative h-10 md:h-20 w-10 md:w-20 select-none ${tile.colour}`}
                  key={`${rowIndex}-${columnIndex}`}
                  onMouseDown={(e) => {
                    setStartTile(tile);
                    setMovingPiece(tile.piece);
                  }}
                  onDragStart={(e) => {
                    setStartTile(tile);
                    setMovingPiece(tile.piece);
                  }}
                  onDrag={(e) => {
                    tile.piece = null;
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                  }}
                  onDrop={(e) => {
                    const endTile = tile;
                    const newBoard = board.map((row) => {
                      tile.piece = movingPiece;
                      return row.map((tile) => {
                        return tile.piece;
                      });
                    });

                    if (movingPiece.type === "pawn") {
                      const lastMove = moves[moves.length - 1] || [];
                      if (movingPiece.colour === "white") {
                        const piece = new Pawn("white", whitePawn);
                        if (
                          checkEnPassant(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            lastMove
                          ) &&
                          alternateMove % 2 === 1
                        ) {
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            lastMove
                          );
                          const boardAfterEnPassant = updateBoardForEnPessant(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          );
                          setBoardState(boardAfterEnPassant);
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.whiteSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        }
                        if (
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            lastMove
                          ) &&
                          alternateMove % 2 === 1
                        ) {
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            lastMove
                          );
                          setBoardState(newBoard.reverse());
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.whiteSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        } else {
                          setMovingPiece(piece);
                        }
                      } else {
                        const piece = new Pawn("black", blackPawn);
                        if (
                          checkEnPassant(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            lastMove
                          ) &&
                          alternateMove % 2 === 0
                        ) {
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            lastMove
                          );
                          const boardAfterEnPassant = updateBoardForEnPessant(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          );
                          setBoardState(boardAfterEnPassant);
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.whiteSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        }
                        if (
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            lastMove
                          ) &&
                          alternateMove % 2 === 0
                        ) {
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            lastMove
                          );
                          setBoardState(newBoard.reverse());
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.blackSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        } else {
                          setMovingPiece(piece);
                        }
                      }
                    } else if (movingPiece.type === "rook") {
                      if (movingPiece.colour === "white") {
                        const piece = new Rook("white", whiteRook);
                        if (
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          ) &&
                          alternateMove % 2 === 1
                        ) {
                          if (startTile.row === 1 && startTile.column === "a") {
                            setHasQueenSideWhiteRookMoved(true);
                          }
                          if (startTile.row === 1 && startTile.column === "h") {
                            setHasKingSideWhiteRookMoved(true);
                          }
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          );
                          setBoardState(newBoard.reverse());
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.whiteSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        } else {
                          setMovingPiece(piece);
                        }
                      } else {
                        const piece = new Rook("black", blackRook);
                        if (
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          ) &&
                          alternateMove % 2 === 0
                        ) {
                          if (startTile.row === 8 && startTile.column === "a") {
                            setHasQueenSideBlackRookMoved(true);
                          }
                          if (startTile.row === 8 && startTile.column === "h") {
                            setHasKingSideBlackRookMoved(true);
                          }
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          );
                          setBoardState(newBoard.reverse());
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.blackSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        } else {
                          setMovingPiece(piece);
                        }
                      }
                    } else if (movingPiece.type === "knight") {
                      if (movingPiece.colour === "white") {
                        const piece = new Knight("white", whiteKnight);
                        if (
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          ) &&
                          alternateMove % 2 === 1
                        ) {
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          );
                          setBoardState(newBoard.reverse());
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.whiteSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        } else {
                          setMovingPiece(piece);
                        }
                      } else {
                        const piece = new Knight("black", blackKnight);
                        if (
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          ) &&
                          alternateMove % 2 === 0
                        ) {
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          );
                          setBoardState(newBoard.reverse());
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.blackSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        } else {
                          setMovingPiece(piece);
                        }
                      }
                    } else if (movingPiece.type === "bishop") {
                      if (movingPiece.colour === "white") {
                        const piece = new Bishop("white", whiteBishop);
                        if (
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          ) &&
                          alternateMove % 2 === 1
                        ) {
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          );
                          setBoardState(newBoard.reverse());
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.whiteSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        } else {
                          setMovingPiece(piece);
                        }
                      } else {
                        const piece = new Bishop("black", blackBishop);
                        if (
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          ) &&
                          alternateMove % 2 === 0
                        ) {
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          );
                          setBoardState(newBoard.reverse());
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.blackSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        } else {
                          setMovingPiece(piece);
                        }
                      }
                    } else if (movingPiece.type === "queen") {
                      if (movingPiece.colour === "white") {
                        const piece = new Queen("white", whiteQueen);
                        if (
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          ) &&
                          alternateMove % 2 === 1
                        ) {
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          );
                          setBoardState(newBoard.reverse());
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.whiteSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        } else {
                          setMovingPiece(piece);
                        }
                      } else {
                        const piece = new Queen("black", blackQueen);
                        if (
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          ) &&
                          alternateMove % 2 === 0
                        ) {
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          );
                          setBoardState(newBoard.reverse());
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.blackSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        } else {
                          setMovingPiece(piece);
                        }
                      }
                    } else if (movingPiece.type === "king") {
                      const haveKingsMoved = {
                        whiteKing: hasWhiteKingMoved,
                        blackKing: hasBlackKingMoved,
                      };
                      const haveRooksMoved = {
                        whiteRooks: {
                          queenSideRook: hasQueenSideWhiteRookMoved,
                          kingSideRook: hasKingSideWhiteRookMoved,
                        },
                        blackRooks: {
                          queenSideRook: hasQueenSideBlackRookMoved,
                          kingSideRook: hasKingSideBlackRookMoved,
                        },
                      };
                      if (movingPiece.colour === "white") {
                        const piece = new King("white", whiteKing);
                        if (
                          canKingCastle(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            haveKingsMoved,
                            haveRooksMoved
                          ) &&
                          alternateMove % 2 === 1
                        ) {
                          setHasWhiteKingMoved(true);
                          const boardAfterCastling = updateBoardForCastling(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          );
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            haveKingsMoved,
                            haveRooksMoved
                          );
                          setBoardState(boardAfterCastling);
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.whiteSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        }
                        if (
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          ) &&
                          alternateMove % 2 === 1
                        ) {
                          setHasWhiteKingMoved(true);
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            haveKingsMoved,
                            haveRooksMoved
                          );
                          setBoardState(newBoard.reverse());
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.whiteSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        } else {
                          setMovingPiece(piece);
                        }
                      } else {
                        const piece = new King("black", blackKing);
                        if (
                          canKingCastle(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            haveKingsMoved,
                            haveRooksMoved
                          ) &&
                          alternateMove % 2 === 0
                        ) {
                          setHasBlackKingMoved(true);
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            haveKingsMoved,
                            haveRooksMoved
                          );
                          const boardAfterCastling = updateBoardForCastling(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          );
                          setBoardState(boardAfterCastling);
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.whiteSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        }
                        if (
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour
                          ) &&
                          alternateMove % 2 === 0
                        ) {
                          setHasBlackKingMoved(true);
                          piece.playSound(
                            startTile,
                            endTile,
                            boardState,
                            movingPiece.colour,
                            haveKingsMoved,
                            haveRooksMoved
                          );
                          setBoardState(newBoard.reverse());
                          setAlternateMove(alternateMove + 1);
                          setMoves((prevMoves) => [
                            ...prevMoves,
                            [
                              alternateMove,
                              piece.blackSymbol,
                              piece.takenTile || endTile.column,
                              endTile.row,
                            ],
                          ]);
                        } else {
                          setMovingPiece(piece);
                        }
                      }
                    }
                  }}
                >
                  <div>
                    {/* Display Pieces */}
                    {tile.piece && (
                      <Image
                        className={`absolute inset-0 flex items-center justify-center w-fit select-none cursor-grabbing`}
                        src={tile.piece.representation}
                        alt={`${tile.piece.color} ${tile.piece.representation}`}
                      ></Image>
                    )}
                    {/* Display Tile Column Letters */}
                    {tile.row === 1 && (
                      <div
                        className={`absolute right-1 bottom-0 ${
                          tile.colour === "bg-yellow-100"
                            ? "text-green-700"
                            : "text-yellow-100"
                        } select-none`}
                      >
                        {tile.column}
                      </div>
                    )}
                    {/* Display Tile Row Numbers*/}
                    {tile.column === "a" && (
                      <div
                        className={`absolute top-0 left-1 ${
                          tile.colour === "bg-yellow-100"
                            ? "text-green-700"
                            : "text-yellow-100"
                        } select-none`}
                      >
                        {tile.row}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
