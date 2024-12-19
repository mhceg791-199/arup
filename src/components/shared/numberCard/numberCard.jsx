import React from "react";
import { useInView } from "react-intersection-observer";
import useCountUp from "../../../hooks/useCountUp";

function NumberCard({ text, number, icon, isHover = true, time }) {
  const { ref, inView } = useInView({ triggerOnce: true }); // Detects if in view once
  const myNumber = useCountUp(number, inView, time);

  return (
    <>
      {console.log(icon)}
      <div
        ref={ref}
        className={`flex flex-col col-span-1 justify-center md:p-16 p-10 border-2 border-blue-gray-300 duration-300 ${
          isHover && "hover:border-white"
        } rounded-sm items-center`}
      >
        <p className="text-base text-center ">{text}</p>
        <p className="text-xl font-bold text-center">
          {myNumber}  {icon && <span>{icon} </span>}
        </p>
      </div>
    </>
  );
}

export default NumberCard;
