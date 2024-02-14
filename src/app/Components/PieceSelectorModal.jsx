import { useState } from "react";
import Image from "next/image";

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

const PieceSelectorModal = ({
  moveNumber,
  setPieceSelectorModal,
  setChosenPiece,
}) => {
  const [clickedPiece, setClickedPiece] = useState();
  const whitePieceOptions = [
    whitePawn,
    whiteRook,
    whiteKnight,
    whiteBishop,
    whiteQueen,
    whiteKing,
  ];

  const blackPieceOptions = [
    blackPawn,
    blackRook,
    blackKnight,
    blackBishop,
    blackQueen,
    blackKing,
  ];

  const handleOutsideModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setPieceSelectorModal(false);
    }
  };

  const handlePieceClick = (pieceImage) => {
    setChosenPiece(pieceImage);
    setPieceSelectorModal(false);
  };

  return (
    <div
      onClick={handleOutsideModalClick}
      className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center"
    >
      <div className="w-1/2 h-64 rounded-half border-2 border-black bg-white flex justify-center">
        {moveNumber % 2 === 0
          ? whitePieceOptions.map((pieceImage, index) => {
              return (
                <Image
                  onClick={() => handlePieceClick(pieceImage)}
                  src={pieceImage}
                  key={index}
                  alt={`${pieceImage}`}
                  className="w-4/5 h-1/3 rounded-half border-2 border-black bg-amber-50 shadow-lg ml-2 mr-2 mt-20 flex justify-center items-center hover:scale-110 active:scale-110 transition-transform select-none cursor-pointer"
                ></Image>
              );
            })
          : blackPieceOptions.map((image, index) => {
              return (
                <Image
                  onClick={() => handlePieceClick(pieceImage)}
                  src={image}
                  key={index}
                  alt={`${pieceImage}`}
                  className="w-4/5 h-1/3 rounded-half border-2 border-black bg-amber-50 shadow-lg ml-2 mr-2 mt-20 flex justify-center items-center hover:scale-110 active:scale-110 transition-transform select-none cursor-pointer"
                ></Image>
              );
            })}
      </div>
    </div>
  );
};

export default PieceSelectorModal;
