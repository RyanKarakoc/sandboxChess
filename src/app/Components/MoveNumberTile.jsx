const MoveNumberTile = ({ moveNumber }) => {
  return (
    <div className="w-1/6 h-3/4 rounded-half border-2 border-black shadow-lg bg-white ml-2 flex justify-center items-center">
      {moveNumber}
    </div>
  );
};

export default MoveNumberTile;
