import React, { useRef, useEffect } from "react";
import { useGlobalState } from "./context/GlobabStateProvider";

const MoveList = () => {
  const { moves } = useGlobalState();
  const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const pairedMoves = moves.reduce((result, element, index) => {
    if (index % 2 === 0) {
      result.push([element]);
    } else {
      result[result.length - 1].push(element);
    }
    return result;
  }, []);

  // Create a ref for the scrollable div
  const scrollableDivRef = useRef(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  };

  // Scroll to the bottom whenever new content is added
  useEffect(() => {
    scrollToBottom();
  }, [moves]);

  return (
    <>
      <div className="flex justify-center items-center mb-2 ">
        <div
          ref={scrollableDivRef}
          className="border-4 border-solid border-black rounded-md p-4 bg-amber-200 w-72 h-96 overflow-y-auto relative"
        >
          <div className="flex justify-center border-4 border-black rounded-md p-2 bg-amber-100 mb-1 sticky">
            Moves
          </div>
          {/*create a box for each pair of moves*/}
          {pairedMoves.map((pair, index) => {
            return (
              <div
                key={index}
                className="flex justify-center border-4 border-black rounded-md p-2 bg-amber-100 mb-1"
              >
                {pair.map((singleMove, moveIndex) => {
                  const isOddIndex = moveIndex % 2 === 0;
                  const bgColour = isOddIndex ? "bg-white" : "bg-neutral-400";
                  const textColour = isOddIndex ? "" : "text-black";
                  return (
                    <div
                      key={moveIndex}
                      className={`flex justify-center border-4 border-black rounded-md p-1 ${bgColour} ${textColour} mx-1`}
                    >
                      {singleMove[1] === "♚" || singleMove[1] === "♔"
                        ? columnRef.indexOf(singleMove[2][0]) <
                          columnRef.indexOf(singleMove[3][0])
                          ? "O-O"
                          : "O-O-O"
                        : `${singleMove[1]} ${singleMove[3][0]}${singleMove[3][1]}`}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MoveList;
