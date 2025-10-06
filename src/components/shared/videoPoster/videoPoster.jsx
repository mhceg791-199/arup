import React from "react";

function VideoPoster({ video }) {
  return (
    <>
      <video
        className="w-full h-[80vh] object-cover"
        autoPlay
        muted
        loop
        src={video}
      ></video>
    </>
  );
}

export default VideoPoster;
