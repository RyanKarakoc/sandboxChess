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
  analysisBoard,
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

const Board = ({
  moves,
  setMoves,
  generateAnyalysisGame,
  analysisMoveNumber,
}) => {
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
  const [alternateMove, setAlternateMove] = useState(moves.length + 1);
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

  useEffect(() => {
    if (generateAnyalysisGame) {
      setBoardState(analysisBoard(moves, analysisMoveNumber));
    }
  }, [analysisMoveNumber]);

  const onMouseDown = (tile) => {
    setStartTile(tile);
    setMovingPiece(tile.piece);
  };

  const onDragStart = (tile) => {
    setStartTile(tile);
    setMovingPiece(tile.piece);
  };

  const onDrag = (tile) => {
    tile.piece = null;
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (tile) => {
    const endTile = tile;
    const newBoard = board.map((row) => {
      tile.piece = movingPiece;
      return row.map((tile) => {
        return tile.piece;
      });
    });

    let piece = null;

    const type = movingPiece.type;
    const pieceColour = movingPiece.colour;

    if (pieceColour === "white") {
      if (type === "pawn") piece = new Pawn("white", whitePawn);
      else if (type === "rook") piece = new Rook("white", whiteRook);
      else if (type === "knight") piece = new Knight("white", whiteKnight);
      else if (type === "bishop") piece = new Bishop("white", whiteBishop);
      else if (type === "queen") piece = new Queen("white", whiteQueen);
      else if (type === "king") piece = new King("white", whiteKing);
    } else {
      if (type === "pawn") piece = new Pawn("black", blackPawn);
      else if (type === "rook") piece = new Rook("black", blackRook);
      else if (type === "knight") piece = new Knight("black", blackKnight);
      else if (type === "bishop") piece = new Bishop("black", blackBishop);
      else if (type === "queen") piece = new Queen("black", blackQueen);
      else if (type === "king") piece = new King("black", blackKing);
    }

    const colourToMove = alternateMove % 2 === 1 ? "white" : "black";

    const lastMove = moves[moves.length - 1] || [];

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

    const enPessant =
      piece.colour === colourToMove
        ? checkEnPassant(
            startTile,
            endTile,
            boardState,
            movingPiece.colour,
            lastMove
          )
        : false;

    const isCastleLegal =
      piece.colour === colourToMove
        ? canKingCastle(
            startTile,
            endTile,
            boardState,
            movingPiece.colour,
            haveKingsMoved,
            haveRooksMoved
          )
        : false;

    const isMoveLegal =
      piece.colour === colourToMove
        ? piece.movement(
            startTile,
            endTile,
            boardState,
            movingPiece.colour,
            lastMove
          )
        : false;

    if (enPessant) {
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
          [startTile.column, startTile.row],
          piece.takenTile
            ? [`x${endTile.column}`, endTile.row]
            : [endTile.column, endTile.row],
        ],
      ]);
    } else if (isCastleLegal) {
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
          [startTile.column, startTile.row],
          piece.takenTile
            ? [`x${endTile.column}`, endTile.row]
            : [endTile.column, endTile.row],
        ],
      ]);
    } else {
      if (isMoveLegal) {
        piece.colour === "white"
          ? [
              piece.type === "king" ? setHasWhiteKingMoved(true) : null,
              startTile.column === "a" && startTile.row === 1
                ? setHasQueenSideWhiteRookMoved(true)
                : null,
              startTile.column === "h" && startTile.row === 1
                ? setHasKingSideWhiteRookMoved(true)
                : null,
            ]
          : [
              piece.type === "king" ? setHasBlackKingMoved(true) : null,
              startTile.column === "a" && startTile.row === 8
                ? setHasQueenSideBlackRookMoved(true)
                : null,
              startTile.column === "h" && startTile.row === 8
                ? setHasKingSideBlackRookMoved(true)
                : null,
            ];

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
            [startTile.column, startTile.row],
            piece.takenTile
              ? [`x${endTile.column}`, endTile.row]
              : [endTile.column, endTile.row],
          ],
        ]);
      }
    }

    setMovingPiece(piece);
  };

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
                  onMouseDown={(e) => onMouseDown(tile)}
                  onDragStart={(e) => onDragStart(tile)}
                  onDrag={(e) => onDrag(tile)}
                  onDragOver={onDragOver}
                  onDrop={(e) => onDrop(tile)}
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
