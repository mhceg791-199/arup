import React from "react";

function ImagePoster({ image }) {
  return (
    <img
      className="w-full h-[80vh] object-cover"
      src={image}
      alt="Poster"
    />
  );
}

export default ImagePoster;
