import { useGlobalState } from "@/app/Components/context/GlobabStateProvider";
import { LuChevronLast } from "react-icons/lu";

const LastMoveButton = () => {
  const { moves, setAlternateMove, analysisMoveNumber, setAnalysisMoveNumber } =
    useGlobalState();
  const isDisabled = analysisMoveNumber === moves.length ? true : false;
  const handleOnClick = () => {
    setAlternateMove(moves.length);
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
