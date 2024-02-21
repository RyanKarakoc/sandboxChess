import { MdSkipPrevious } from "react-icons/md";

const PreviousMoveButton = ({
  analysisMoveNumber,
  setAnalysisMoveNumber,
  moves,
}) => {
  const isDisabled = analysisMoveNumber === 0 ? true : false;
  const handleOnClick = () => {
    setAnalysisMoveNumber((prevNumber) => (prevNumber -= 1));
  };
  return (
    <button
      onClick={handleOnClick}
      disabled={isDisabled}
      className="w-1/4 h-auto bg-white border-black border-2 rounded-md mx-1"
    >
      <MdSkipPrevious size={55} />
    </button>
  );
};

export default PreviousMoveButton;
