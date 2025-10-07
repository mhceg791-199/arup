import React from "react";

function BriefOfFounder({ founder }) {
  const { name, details, poster, icon, text } = founder;
  return (
    <>
      <div className=" text-mainColor p-5 border-l-4 border-gold  m-auto w-1/2">
        <div className="flex items-center">
          <img className="w-24 me-5" src={icon} alt="Brief Of Founder ADAL" />
          <h2 className="text-xxxl font-bold my-5">{name}</h2>
          <div className="font-semibold text-xl">
            {details && <p>{details}</p>}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3 pb-10">
        <div className="col-span-3">
          <img src={poster} alt="Brief Of Founder ADAL" />
        </div>
        <div className="col-span-2 flex items-center pe-5">{text}</div>
      </div>
    </>
  );
}

export default BriefOfFounder;
