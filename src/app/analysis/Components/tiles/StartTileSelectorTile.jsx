const StartTileSelectorTile = ({
  chosenStartTile,
  setStartTileSelectorModal,
}) => {
  const handleOnClick = () => {
    setStartTileSelectorModal(true);
  };
  return (
    <div
      onClick={handleOnClick}
      className="w-1/6 h-3/4 rounded-half border-2 border-black bg-white shadow-lg ml-2 flex justify-center items-center hover:scale-110 active:scale-110 transition-transform cursor-pointer select-none"
    >
      {chosenStartTile}
    </div>
  );
};

export default StartTileSelectorTile;
