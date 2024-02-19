const EndTileSelectorTile = ({ chosenEndTile, setEndTileSelectorModal }) => {
  const handleOnclick = () => {
    setEndTileSelectorModal(true);
  };
  return (
    <div
      onClick={handleOnclick}
      className="w-1/6 h-3/4 rounded-half border-2 border-black bg-white shadow-lg ml-2 flex justify-center items-center hover:scale-110 active:scale-110 transition-transform cursor-pointer select-none"
    >
      {chosenEndTile}
    </div>
  );
};

export default EndTileSelectorTile;
