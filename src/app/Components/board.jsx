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

const whitePawnInstance = new Pawn("white", whitePawn);
const whiteRookInstance = new Rook("white", whiteRook);
const whiteKnightInstance = new Knight("white", whiteKnight);
const whiteBishopInstance = new Bishop("white", whiteBishop);
const whiteQueenInstance = new Queen("white", whiteQueen);
const whiteKingInstance = new King("white", whiteKing);

const blackPawnInstance = new Pawn("black", blackPawn);
const blackRookInstance = new Rook("black", blackRook);
const blackKnightInstance = new Knight("black", blackKnight);
const blackBishopInstance = new Bishop("black", blackBishop);
const blackQueenInstance = new Queen("black", blackQueen);
const blackKingInstance = new King("black", blackKing);

const Board = ({ moves, setMoves }) => {
  const initialBoardState = [
    [
      whiteRookInstance,
      whiteKnightInstance,
      whiteBishopInstance,
      whiteQueenInstance,
      whiteKingInstance,
      whiteBishopInstance,
      whiteKnightInstance,
      whiteRookInstance,
    ],
    [
      whitePawnInstance,
      whitePawnInstance,
      whitePawnInstance,
      whitePawnInstance,
      whitePawnInstance,
      whitePawnInstance,
      whitePawnInstance,
      whitePawnInstance,
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      blackPawnInstance,
      blackPawnInstance,
      blackPawnInstance,
      blackPawnInstance,
      blackPawnInstance,
      blackPawnInstance,
      blackPawnInstance,
      blackPawnInstance,
    ],
    [
      blackRookInstance,
      blackKnightInstance,
      blackBishopInstance,
      blackQueenInstance,
      blackKingInstance,
      blackBishopInstance,
      blackKnightInstance,
      blackRookInstance,
    ],
  ];

  const [boardState, setBoardState] = useState(initialBoardState);
  const [movingPiece, setMovingPiece] = useState(null);
  const [startTile, setStartTile] = useState(null);
  const [alternateMove, setAlternateMove] = useState(1);
  const [sound, setSound] = useState();

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
                      if (movingPiece.colour === "white") {
                        const piece = new Pawn("white", whitePawn);
                        if (
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            setSound
                          ) &&
                          alternateMove % 2 === 1
                        ) {
                          piece.playSound(endTile, boardState);
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
                          piece.movement(
                            startTile,
                            endTile,
                            boardState,
                            setSound
                          ) &&
                          alternateMove % 2 === 0
                        ) {
                          piece.playSound(endTile, boardState);
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
                          piece.movement(startTile, endTile, boardState) &&
                          alternateMove % 2 === 1
                        ) {
                          piece.playSound(endTile, boardState);
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
                          piece.movement(startTile, endTile, boardState) &&
                          alternateMove % 2 === 0
                        ) {
                          piece.playSound(endTile, boardState);
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
                          piece.movement(startTile, endTile, boardState) &&
                          alternateMove % 2 === 1
                        ) {
                          piece.playSound(endTile, boardState);
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
                          piece.movement(startTile, endTile, boardState) &&
                          alternateMove % 2 === 0
                        ) {
                          piece.playSound(endTile, boardState);
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
                          piece.movement(startTile, endTile, boardState) &&
                          alternateMove % 2 === 1
                        ) {
                          piece.playSound(endTile, boardState);
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
                          piece.movement(startTile, endTile, boardState) &&
                          alternateMove % 2 === 0
                        ) {
                          piece.playSound(endTile, boardState);
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
                          piece.movement(startTile, endTile, boardState) &&
                          alternateMove % 2 === 1
                        ) {
                          piece.playSound(endTile, boardState);
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
                          piece.movement(startTile, endTile, boardState) &&
                          alternateMove % 2 === 0
                        ) {
                          piece.playSound(endTile, boardState);
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
                      if (movingPiece.colour === "white") {
                        const piece = new King("white", whiteKing);
                        if (
                          piece.movement(startTile, endTile, boardState) &&
                          alternateMove % 2 === 1
                        ) {
                          piece.playSound(endTile, boardState);
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
                          piece.movement(startTile, endTile, boardState) &&
                          alternateMove % 2 === 0
                        ) {
                          piece.playSound(endTile, boardState);
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
                    // setSoundState(move);
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
