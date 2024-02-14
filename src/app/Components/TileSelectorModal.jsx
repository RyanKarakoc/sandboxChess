import { useEffect, useState } from "react";

const TileSelecetorModal = ({ setChosenTile, setTileSelectorModal }) => {
  const defaultColumnTileStyle =
    "w-1/4 h-auto rounded-half border-2 border-black bg-white shadow-lg m-1 flex justify-center items-center hover:scale-110 active:scale-110 transition-transform select-none cursor-pointer";
  const highlightedColumnTileStyle =
    "w-1/4 h-auto rounded-half border-2 border-lime-500 bg-white shadow-lg m-1 flex justify-center items-center hover:scale-110 active:scale-110 transition-transform select-none cursor-pointer  ";
  const defaultRowTileStyle =
    "w-1/4 h-auto rounded-half border-2 border-black bg-white shadow-lg m-1 flex justify-center items-center hover:scale-110 active:scale-110 transition-transform select-none cursor-pointer";
  const highlightedRowTileStyle =
    "w-1/4 h-auto rounded-half border-2 border-lime-500 bg-white shadow-lg m-1 flex justify-center items-center hover:scale-110 active:scale-110 transition-transform select-none cursor-pointer  ";

  const [activeColumnIndex, setActiveColumnIndex] = useState(null);
  const [activeRowIndex, setActiveRowIndex] = useState(null);

  const tileColumns = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const tileRows = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const handleOutsideModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setTileSelectorModal(false);
    }
  };

  const handleColumnTileOnClick = (columnIndex) => {
    setActiveColumnIndex(columnIndex);
    if ((activeColumnIndex, activeRowIndex)) {
      setTileSelectorModal(false);
    }
  };

  const getColumnTileStyle = (columnIndex) => {
    return columnIndex === activeColumnIndex
      ? highlightedColumnTileStyle
      : defaultColumnTileStyle;
  };

  const handleRowTileOnClick = (rowIndex) => {
    setActiveRowIndex(rowIndex);
    if ((activeColumnIndex, activeRowIndex)) {
      setTileSelectorModal(false);
    }
  };

  const getRowTileStyle = (rowIndex) => {
    return rowIndex === activeRowIndex
      ? highlightedRowTileStyle
      : defaultRowTileStyle;
  };

  console.log(activeColumnIndex, "columnIndex");
  console.log(activeRowIndex, "rowIndex");

  useEffect(() => {
    if (activeColumnIndex !== null && activeRowIndex !== null) {
      setChosenTile(() => {
        return tileColumns[activeColumnIndex] + tileRows[activeRowIndex];
      });
      setTileSelectorModal(false);
    }
  }, [activeColumnIndex, activeRowIndex]);

  return (
    <div
      onClick={handleOutsideModalClick}
      className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center"
    >
      <div className="w-1/2 h-64 rounded-half border-2 border-black bg-white flex justify-center">
        <div className="w-1/2 h-auto rounded-half border-2 border-black bg-amber-50 m-2 flex flex-wrap justify-center">
          {tileColumns.map((column, columnIndex) => {
            return (
              <div
                onClick={() => handleColumnTileOnClick(columnIndex)}
                key={columnIndex}
                className={getColumnTileStyle(columnIndex)}
              >
                {column}
              </div>
            );
          })}
        </div>
        <div className="w-1/2 h-auto rounded-half border-2 border-black bg-amber-50 m-2 flex flex-wrap justify-center">
          {tileRows.map((row, rowIndex) => {
            return (
              <div
                onClick={() => handleRowTileOnClick(rowIndex)}
                key={rowIndex}
                className={getRowTileStyle(rowIndex)}
              >
                {row}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TileSelecetorModal;
