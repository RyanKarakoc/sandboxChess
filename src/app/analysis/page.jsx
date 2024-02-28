"use client";
import { useEffect, useRef, useState } from "react";
import AlternatingColourTile from "./Components/tiles/AlternatingColourTile";
import ColourChooseButton from "./Components/buttons/ColourChooseButton";
import Header from "../Components/Header";
import StartTileSelectorTile from "./Components/tiles/StartTileSelectorTile";
import PieceChooserTile from "./Components/tiles/PieceChooseTile";
import PieceSelectorModal from "./Components/modals/PieceSelectorModal";

import whitePawn from "../../../public/whitePieces/pawn.png";
import blackPawn from "../../../public/blackPieces/pawn.png";
import EndTileSelectorTile from "./Components/tiles/EndTileSelectorTile";
import EndTileSelectorModal from "./Components/modals/EndTileSelectorModal";
import AddMoveButton from "./Components/buttons/AddMoveButton";
import StartTileSelectorModal from "./Components/modals/StartTileSelectorModal";
import Board from "../Components/board";
import GenerateGame from "./Components/buttons/GenerateGame";
import MoveList from "../Components/MoveList";
import Playbar from "./Components/Playbar/Playbar";
import {
  GlobalStateProvider,
  useGlobalState,
} from "../Components/context/GlobabStateProvider";
import MovesArea from "./Components/tiles/MovesArea";

export default function Page() {
  const [count, setCount] = useState(0);
  const [pieceSelectorModal, setPieceSelectorModal] = useState(false);
  const [chosenPiece, setChosenPiece] = useState(whitePawn);
  const [endTileSelectorModal, setEndTileSelectorModal] = useState(false);
  const [chosenEndTile, setChosenEndTile] = useState("a1");
  const [startTileSelectorModal, setStartTileSelectorModal] = useState(false);
  const [chosenStartTile, setChosenStartTile] = useState("a1");
  const [board, setBoard] = useState([
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ]);
  const [generateAnyalysisGame, setGenerateAnalysisGame] = useState(false);
  const [showBoard, setShowboard] = useState(false);

  // Create a ref for the scrollable div
  const scrollableDivRef = useRef(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (count % 2 !== 0) {
      setChosenPiece(blackPawn);
    } else {
      setChosenPiece(whitePawn);
    }
    scrollToBottom();
  }, []);

  return (
    <GlobalStateProvider>
      <>
        <Header />

        {startTileSelectorModal ? (
          <StartTileSelectorModal
            setChosenStartTile={setChosenStartTile}
            setStartTileSelectorModal={setStartTileSelectorModal}
          />
        ) : null}
        {endTileSelectorModal ? (
          <EndTileSelectorModal
            setChosenEndTile={setChosenEndTile}
            setEndTileSelectorModal={setEndTileSelectorModal}
          />
        ) : null}
        {pieceSelectorModal ? (
          <PieceSelectorModal
            moveNumber={count}
            setChosenPiece={setChosenPiece}
            setPieceSelectorModal={setPieceSelectorModal}
          />
        ) : null}
        {showBoard ? (
          <div className="flex justify-center">
            <Board generateAnyalysisGame={generateAnyalysisGame} />
            <div className="mx-10">
              <MoveList />
              <Playbar />
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <h1> What colour are you?</h1>
              <ColourChooseButton />
              <h1 className="mt-10 mb-4">Enter game moves.</h1>
              <div className="w-1/3 h-64 rounded-lg border-2 border-black bg-white flex flex-col items-center">
                <div className="w-4/5 h-1/3 rounded-half border-2 border-black bg-amber-50 shadow-lg mt-8 flex justify-center items-center">
                  <AlternatingColourTile
                    colour={count % 2 === 0 ? "White" : "Black"}
                  />
                  <PieceChooserTile
                    chosenPiece={chosenPiece}
                    setPieceSelectorModal={setPieceSelectorModal}
                  />
                  <StartTileSelectorTile
                    chosenStartTile={chosenStartTile}
                    setStartTileSelectorModal={setStartTileSelectorModal}
                  />
                  <EndTileSelectorTile
                    chosenEndTile={chosenEndTile}
                    setEndTileSelectorModal={setEndTileSelectorModal}
                  />
                  <AddMoveButton
                    chosenPiece={chosenPiece}
                    chosenStartTile={chosenStartTile}
                    chosenEndTile={chosenEndTile}
                    setCount={setCount}
                    count={count}
                    board={board}
                    setBoard={setBoard}
                  />
                </div>
                <div
                  ref={scrollableDivRef}
                  className="w-4/5 h-1/3 rounded-half border-2 border-black bg-amber-50 mt-5 overflow-y-auto "
                >
                  <MovesArea />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-10">
              <GenerateGame
                setShowboard={setShowboard}
                setGenerateAnalysisGame={setGenerateAnalysisGame}
              />
            </div>
          </>
        )}
      </>
    </GlobalStateProvider>
  );
}
