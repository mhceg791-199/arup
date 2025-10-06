import React from "react";

function ClientCard({ client }) {
  const { title, img, text } = client;
  return (
    <>
      <div className="bg-mainColor p-5">
        <div className="h-[6rem]">
<img className="mb-3 object-contain" src={img} alt="" />
        </div>
        <p className="text-gold my-1 font-bold">{title}</p>
        <p>{text}</p>
      </div>
    </>
  );
}

export default ClientCard;
