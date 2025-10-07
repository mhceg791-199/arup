import React from "react";
import { Link } from "react-router-dom";

function FounderCard({ founder }) {
  const {
    name,
    details,
    poster,
    icon,
    text,
    link,
    dispalyLearnMore = true,
  } = founder;
  return (
    <>
      <div className="  p-5 border-l-4 border-gold   m-auto lg:w-1/2 md:w-3/4 w-full">
        <h2 className="text-xxxl font-bold my-5">{name}</h2>
        <div className="flex items-center">
          <img className="w-24 me-5" src={icon} alt={`${name}`} />
          <div className="font-semibold text-xl">
            {details && <p>{details}</p>}
            {dispalyLearnMore && (
              <>
                <Link to={link} className="text-gold">
                  LEARN MORE
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3 pb-10">
        <div className="md:col-span-3 col-span-5">
          <img src={poster} alt={`${name}`} />
        </div>
        <div className="md:col-span-2 col-span-5 flex items-center text-justify px-5">
          {text}
        </div>
      </div>
    </>
  );
}

export default FounderCard;
