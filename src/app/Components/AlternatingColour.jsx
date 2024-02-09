const AlternatingColour = ({ colour }) => {
  let bgColour = "";
  if (colour === "white") {
    bgColour = "bg-white";
  } else if (colour === "black") {
    bgColour = "bg-neutral-400";
  }

  return (
    <div
      className={`w-1/6 h-3/4 rounded-half border-2 border-black ${bgColour} ml-2 flex justify-center items-center`}
    >
      {colour}
    </div>
  );
};

export default AlternatingColour;
