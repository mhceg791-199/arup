import React from "react";

function LeftArrow(props) {
  const { className, style, onClick } = props;

  return (
    <>
      <img
        className="w-[3%] absolute left-0 z-30 bottom-[50%] -translate-y-[50%]"
        onClick={onClick}
        src="/awards/arrows/preArrow.webp"
        alt=""
      />
    </>
  );
}

export default LeftArrow;
