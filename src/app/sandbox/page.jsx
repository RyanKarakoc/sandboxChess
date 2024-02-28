"use client";
import { useState } from "react";
import Header from "../Components/Header";
import MoveList from "../Components/MoveList";
import Board from "../Components/board";
import { GlobalStateProvider } from "../Components/context/GlobabStateProvider";

export default function Page() {
  const [moves, setMoves] = useState([]);

  return (
    <GlobalStateProvider>
      <>
        <Header />
        <div className="flex justify-center ">
          <Board moves={moves} setMoves={setMoves} />
          <div className="mx-10 ">
            <MoveList moves={moves} setMoves={setMoves} />
          </div>
        </div>
      </>
    </GlobalStateProvider>
  );
}
