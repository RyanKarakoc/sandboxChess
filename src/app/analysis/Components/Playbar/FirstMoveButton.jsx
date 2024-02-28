import { useGlobalState } from "@/app/Components/context/GlobabStateProvider";
import { LuChevronFirst } from "react-icons/lu";

const FirstMoveButton = () => {
  const {
    setMoves,
    analysisMoves,
    setAlternateMove,
    analysisMoveNumber,
    setAnalysisMoveNumber,
  } = useGlobalState();
  const isDisabled = analysisMoveNumber === 0 ? true : false;
  const handleOnClick = () => {
    setAlternateMove(1);
    setAnalysisMoveNumber(0);
    setMoves(analysisMoves);
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
