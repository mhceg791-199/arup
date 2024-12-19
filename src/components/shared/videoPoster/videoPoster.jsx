import React from "react";

function VideoPoster({ video }) {
  return (
    <>
      <video
        className="w-full h-[100vh] object-cover"
        autoPlay
        muted
        loop
        src={video}
      ></video>
    </>
  );
}

export default VideoPoster;
