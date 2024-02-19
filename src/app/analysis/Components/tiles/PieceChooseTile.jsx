import { useState } from "react";

import Image from "next/image";

const PieceChooserTile = ({ chosenPiece, setPieceSelectorModal }) => {
  const handleOnclick = () => {
    setPieceSelectorModal(true);
  };
  return (
    <div className="w-1/6 h-3/4 rounded-half border-2 border-black bg-white shadow-lg ml-2 flex justify-center items-center hover:scale-110 active:scale-110 transition-transform cursor-pointer">
      <Image
        layout=""
        width={70}
        height={70}
        src={chosenPiece}
        alt="Chosen Piece"
        onClick={handleOnclick}
      ></Image>
    </div>
  );
};

export default PieceChooserTile;
