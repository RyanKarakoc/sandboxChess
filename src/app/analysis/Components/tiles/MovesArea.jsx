const {
  useGlobalState,
} = require("@/app/Components/context/GlobabStateProvider");

const MovesArea = () => {
  const { moves, setMoves } = useGlobalState();

  return (
    <div className="m-2 flex flex-wrap justify-center items-center">
      {moves.map((move, index) => {
        const whiteMoveStyle = "border rounded-md border-black bg-white px-2";
        const blackMoveStyle =
          "border rounded-md border-black bg-neutral-400 px-2";
        return (
          <div
            key={index}
            className={index % 2 === 0 ? whiteMoveStyle : blackMoveStyle}
          >
            {move}
          </div>
        );
      })}
    </div>
  );
};

export default MovesArea;
