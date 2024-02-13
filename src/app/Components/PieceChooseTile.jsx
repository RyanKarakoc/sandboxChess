import { useState } from "react";

import Image from "next/image";

const PieceChooserTile = ({ chosenPiece, setPieceSelectorModal }) => {
  const handleOnclick = () => {
    setPieceSelectorModal(true);
  };
  return (
    <div className="w-1/6 h-3/4 rounded-half border-2 border-black bg-white ml-2 flex justify-center items-center">
      <Image src={chosenPiece} onClick={handleOnclick}></Image>
    </div>
  );
};

export default PieceChooserTile;
