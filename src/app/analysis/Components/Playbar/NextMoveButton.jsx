import { MdSkipNext } from "react-icons/md";

const NextMoveButton = ({
  analysisMoveNumber,
  setAnalysisMoveNumber,
  moves,
}) => {
  const isDisabled = analysisMoveNumber === moves.length ? true : false;
  const handleOnClick = () => {
    setAnalysisMoveNumber((prevNumber) => (prevNumber += 1));
  };

  return (
    <button
      className="w-1/4 h-auto bg-white border-black border-2 rounded-md mx-1"
      onClick={handleOnClick}
      disabled={isDisabled}
    >
      <MdSkipNext size={55} />
    </button>
  );
};

export default NextMoveButton;
