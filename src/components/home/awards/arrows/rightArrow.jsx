import React from "react";

function RightArrow(props) {
  const { className, style, onClick } = props;

  return (
    <>
      <img
        className="w-[3%] absolute right-0 bottom-[50%] -translate-y-[50%]"
        onClick={onClick}
        src="/awards/arrows/nextArrow.webp"
        alt=""
      />
    </>
  );
}

export default RightArrow;
