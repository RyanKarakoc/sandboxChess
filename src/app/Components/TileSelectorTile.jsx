const TileSelectorTile = ({ chosenTile, setTileSelectorModal }) => {
  const handleOnclick = () => {
    setTileSelectorModal(true);
  };
  return (
    <div
      onClick={handleOnclick}
      className="w-1/6 h-3/4 rounded-half border-2 border-black bg-white ml-2 flex justify-center items-center"
    >
      {chosenTile}
    </div>
  );
};

export default TileSelectorTile;
