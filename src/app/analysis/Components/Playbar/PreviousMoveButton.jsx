import { useGlobalState } from "@/app/Components/context/GlobabStateProvider";
import { MdSkipPrevious } from "react-icons/md";

const PreviousMoveButton = () => {
  const {
    moves,
    setMoves,
    analysisMoves,
    analysisMoveNumber,
    alternateMove,
    setAlternateMove,
    setAnalysisMoveNumber,
  } = useGlobalState();
  const isDisabled = analysisMoveNumber === 0 ? true : false;

  const handleOnClick = () => {
    setAlternateMove(alternateMove - 1);
    setAnalysisMoveNumber(analysisMoveNumber - 1);

    const originalMoves = [...moves];

    // keeps original analysisMoves
    if (analysisMoveNumber > analysisMoves.length) {
      originalMoves.pop();
      setMoves(originalMoves);
    }
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
