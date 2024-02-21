import { LuChevronLast } from "react-icons/lu";

const LastMoveButton = ({
  analysisMoveNumber,
  setAnalysisMoveNumber,
  moves,
}) => {
  const isDisabled = analysisMoveNumber === moves.length ? true : false;
  const handleOnClick = () => {
    setAnalysisMoveNumber(moves.length);
  };
  return (
    <button
      onClick={handleOnClick}
      disabled={isDisabled}
      className="w-1/4 h-auto bg-white border-black border-2 rounded-md mx-1"
    >
      <LuChevronLast size={55} />
    </button>
  );
};

export default LastMoveButton;
