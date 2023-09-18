"use client";
import { useState } from "react";
import Header from "../Components/Header";
import MoveList from "../Components/MoveList";
import Board from "../Components/board";

export default function Page() {
  const [moves, setMoves] = useState([]);

  return (
    <>
      <Header />
      <div className="flex justify-center ">
        <Board moves={moves} setMoves={setMoves} />
        <div className="mx-10 ">
          <MoveList moves={moves} setMoves={setMoves} />
        </div>
      </div>
    </>
  );
}
