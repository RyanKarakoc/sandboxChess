const AlternatingColourTile = ({ colour }) => {
  let bgColour = "";
  if (colour === "White") {
    bgColour = "bg-white";
  } else if (colour === "Black") {
    bgColour = "bg-neutral-400";
  }

  return (
    <div
      className={`w-1/6 h-3/4 rounded-half border-2 border-black ${bgColour} shadow-lg flex justify-center items-center`}
    >
      {colour}
    </div>
  );
};

export default AlternatingColourTile;
