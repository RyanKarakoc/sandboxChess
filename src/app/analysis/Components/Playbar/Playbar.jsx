import { useGlobalState } from "@/app/Components/context/GlobabStateProvider";
import FirstMoveButton from "./FirstMoveButton";
import LastMoveButton from "./LastMoveButton";
import NextMoveButton from "./NextMoveButton";
import PreviousMoveButton from "./PreviousMoveButton";

const Playbar = () => {
  const { alternateMove, setAlternateMove, moves, setMoves } = useGlobalState();

  return (
    <div className="w-auto h-20 rounded-md border-4 border-black bg-amber-200 flex items-center justify-center">
      <FirstMoveButton />
      <PreviousMoveButton />
      <NextMoveButton />
      <LastMoveButton />
    </div>
  );
};

export default Playbar;
