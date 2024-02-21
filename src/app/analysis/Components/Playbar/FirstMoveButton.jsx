import { LuChevronFirst } from "react-icons/lu";

const FirstMoveButton = ({
  analysisMoveNumber,
  setAnalysisMoveNumber,
  moves,
}) => {
  const isDisabled = analysisMoveNumber === 0 ? true : false;
  const handleOnClick = () => {
    setAnalysisMoveNumber(0);
  };
  return (
    <button
      onClick={handleOnClick}
      disabled={isDisabled}
      className="w-1/4 h-auto bg-white border-black border-2 rounded-md mx-1"
    >
      <LuChevronFirst size={55} />
    </button>
  );
};

export default FirstMoveButton;
