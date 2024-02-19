import { useState } from "react";

const ColourChooseButton = ({ colour }) => {
  const defaultWhiteButtonStyle =
    "bg-white shadow-lg text-center text-black py-2 px-4 rounded-full text-black w-40 my-5 hover:scale-110 active:scale-110 transition-transform";
  const defaultBlackButtonStyle =
    "bg-neutral-400 shadow-lg text-center text-black py-2 px-4 rounded-full text-black w-40 my-5 hover:scale-110 active:scale-110 transition-transform";
  const highlightedWhiteButton =
    "border-4 border-lime-500 bg-white shadow-lg text-center text-black py-2 px-4 rounded-full text-black w-40 my-5 hover:scale-110 active:scale-110 transition-transform";
  const highlightedBlackButton =
    "border-4 border-lime-500 bg-neutral-400 shadow-lg text-center text-black py-2 px-4 rounded-full text-black w-40 my-5 hover:scale-110 active:scale-110 transition-transform";

  const [whiteButtonClicked, setWhiteButtonClicked] = useState(false);
  const [blackButtonClicked, setBlackButtonClicked] = useState(false);

  const [whiteColourButtonStyling, setWhiteColourButtonStyling] = useState(
    defaultWhiteButtonStyle
  );
  const [blackColourButtonStyling, setBlackColourButtonStyling] = useState(
    defaultBlackButtonStyle
  );

  const handleWhiteButtonClicked = () => {
    setWhiteButtonClicked(true);
    setBlackButtonClicked(false);
    setWhiteColourButtonStyling(highlightedWhiteButton);
    setBlackColourButtonStyling(defaultBlackButtonStyle);
  };

  const handleBlackButtonClicked = () => {
    setBlackButtonClicked(true);
    setWhiteButtonClicked(false);
    setBlackColourButtonStyling(highlightedBlackButton);
    setWhiteColourButtonStyling(defaultWhiteButtonStyle);
  };

  return (
    <div className="flex flex-row items-center m-0">
      <button
        onClick={handleWhiteButtonClicked}
        className={whiteColourButtonStyling}
      >
        White
        {colour}
      </button>
      <div className="mr-8"></div>
      <button
        onClick={handleBlackButtonClicked}
        className={blackColourButtonStyling}
      >
        Black
        {colour}
      </button>
    </div>
  );
};

export default ColourChooseButton;
