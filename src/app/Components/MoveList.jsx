import React, { useRef, useEffect } from "react";

const MoveList = ({ moves }) => {
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
      <div className="flex justify-center items-center mb-20 ">
        <div
          ref={scrollableDivRef}
          className="border-4 border-solid border-black rounded-md p-10 bg-amber-200 w-72 max-h-96 overflow-y-auto relative"
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
                      {`${singleMove[1]} ${singleMove[2]}${singleMove[3]}`}
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
