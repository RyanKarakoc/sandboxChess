const AddMoveButton = ({
  moves,
  setMoves,
  chosenPiece,
  chosenStartTile,
  chosenEndTile,
  setCount,
  count,
  board,
  setBoard,
}) => {
  const handleOnClick = () => {
    // getting the piece type from the image path
    const str = chosenPiece.src;
    const match = str.match(/\/([a-z]+)\./); // Match the piece name between "/" and "."
    const pieceType = match ? match[1] : null; // Get the matched piece name

    const pieceRepresentation = [
      { type: "pawn", white: "♟︎", black: "♙" },
      { type: "rook", white: "♜", black: "♖" },
      { type: "knight", white: "♞", black: "♘" },
      { type: "bishop", white: "♝", black: "♗" },
      { type: "queen", white: "♛", black: "♕" },
      { type: "king", white: "♚", black: "♔" },
    ];

    let newMove = [];

    const moveCount = count + 1;

    const boardOffset = -1;

    const columnRef = ["a", "b", "c", "d", "e", "f", "g", "h"];

    const startTileBoardColumn = columnRef.indexOf(chosenStartTile[0]);
    const startTileBoardRow = Number(chosenStartTile[1]) + boardOffset;

    const endTileBoardColumn = columnRef.indexOf(chosenEndTile[0]);
    const endTileBoardRow = Number(chosenEndTile[1]) + boardOffset;

    const newBoard = [...board];

    for (const piece of pieceRepresentation) {
      if (count % 2 === 0) {
        // if it's whites move
        if (piece.type === pieceType) {
          // add correct colour piece to move
          const endTileHasOpponentPiece =
            newBoard[endTileBoardRow][endTileBoardColumn] !== null &&
            pieceRepresentation
              .map((piece) => {
                return piece.black;
              })
              .includes(newBoard[endTileBoardRow][endTileBoardColumn]);
          if (endTileHasOpponentPiece) {
            newMove.push(
              moveCount,
              piece.black,
              `${chosenStartTile[0]}x${chosenEndTile[0]}`,
              chosenEndTile[1]
            );
          } else {
            newMove.push(
              moveCount,
              piece.black,
              `${chosenStartTile[0]}${chosenEndTile[0]}`,
              chosenEndTile[1]
            );
          }
        }
      } else if (count % 2 !== 0) {
        // if it's blacks move
        if (piece.type === pieceType) {
          // add correct colour piece to move
          const endTileHasOpponentPiece =
            newBoard[endTileBoardRow][endTileBoardColumn] !== null &&
            pieceRepresentation
              .map((piece) => {
                return piece.white;
              })
              .includes(newBoard[endTileBoardRow][endTileBoardColumn]);
          if (endTileHasOpponentPiece) {
            newMove.push(
              moveCount,
              piece.white,
              `${chosenStartTile[0]}x${chosenEndTile[0]}`,
              chosenEndTile[1]
            );
          } else {
            newMove.push(
              moveCount,
              piece.white,
              `${chosenStartTile[0]}${chosenEndTile[0]}`,
              chosenEndTile[1]
            );
          }
        }
      }
    }

    for (const piece of pieceRepresentation) {
      if (piece.type === pieceType && count % 2 === 0) {
        newBoard[startTileBoardRow][startTileBoardColumn] = null;
        newBoard[endTileBoardRow][endTileBoardColumn] = piece.white;
        setBoard(newBoard);
      } else if (piece.type === pieceType && count % 2 !== 0) {
        newBoard[startTileBoardRow][startTileBoardColumn] = null;
        newBoard[endTileBoardRow][endTileBoardColumn] = piece.black;
        setBoard(newBoard);
      }
    }

    setMoves((prevMoves) => {
      return [...prevMoves, newMove];
    });

    setCount((prevCount) => {
      return (prevCount += 1);
    });
  };

  return (
    <div
      onClick={handleOnClick}
      className="w-1/6 h-3/4 rounded-half border-2 border-black bg-green-300 shadow-lg ml-2 flex justify-center items-center hover:scale-110 active:scale-90 transition-transform cursor-pointer select-none"
    >
      <div className="text-2xl text-black">✔</div>
    </div>
  );
};

export default AddMoveButton;
