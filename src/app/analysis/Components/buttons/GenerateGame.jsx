const GenerateGame = ({ setShowboard, setGenerateAnalysisGame }) => {
  const handleOnClick = () => {
    setGenerateAnalysisGame(true);
    setShowboard(true);
  };
  return (
    <div
      onClick={handleOnClick}
      className="w-1/4 h-auto rounded-half border-2 border-black bg-green-300 shadow-lg p-4 flex justify-center items-center hover:scale-110 active:scale-90 transition-transform select-none cursor-pointer"
    >
      Generate Game
    </div>
  );
};

export default GenerateGame;
