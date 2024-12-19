import React from "react";

function LineWithParagraph({ paragraph }) {
  return (
    <>
      <div className="w-3/4 m-auto mt-10">
        <div className="w-1/4 h-1 mb-2 bg-gold"></div>
        <p className="">{paragraph}</p>
      </div>
    </>
  );
}

export default LineWithParagraph;
