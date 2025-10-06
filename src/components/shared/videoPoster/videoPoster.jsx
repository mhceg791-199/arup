import React from "react";

function VideoPoster({ video }) {
  return (
    <img
      className="w-full h-[80vh] object-cover"
      src={video}
      alt="Poster"
    />
  );
}

export default VideoPoster;




// import React from "react";

// function VideoPoster({ video }) {
//   return (
//     <>
//       <video
//         className="w-full h-[80vh] object-cover"
//         autoPlay
//         muted
//         loop
//         src={video}
//       ></video>
//     </>
//   );
// }

// export default VideoPoster;
