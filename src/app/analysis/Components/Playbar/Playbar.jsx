import FirstMoveButton from "./FirstMoveButton";
import LastMoveButton from "./LastMoveButton";
import NextMoveButton from "./NextMoveButton";
import PreviousMoveButton from "./PreviousMoveButton";

const Playbar = ({ analysisMoveNumber, setAnalysisMoveNumber, moves }) => {
  return (
    <div className="w-auto h-20 rounded-md border-4 border-black bg-amber-200 flex items-center justify-center">
      <FirstMoveButton
        analysisMoveNumber={analysisMoveNumber}
        setAnalysisMoveNumber={setAnalysisMoveNumber}
        moves={moves}
      />
      <PreviousMoveButton
        analysisMoveNumber={analysisMoveNumber}
        setAnalysisMoveNumber={setAnalysisMoveNumber}
        moves={moves}
      />
      <NextMoveButton
        analysisMoveNumber={analysisMoveNumber}
        setAnalysisMoveNumber={setAnalysisMoveNumber}
        moves={moves}
      />
      <LastMoveButton
        analysisMoveNumber={analysisMoveNumber}
        setAnalysisMoveNumber={setAnalysisMoveNumber}
        moves={moves}
      />
    </div>
  );
};

export default Playbar;
