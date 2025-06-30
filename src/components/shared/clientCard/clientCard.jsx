import React from "react";

function ClientCard({ client }) {
  const { title, img, text } = client;
  return (
    <>
      <div className="bg-mainColor p-5">
        <img className="mb-3" src={img} alt="" />
        <p className="text-gold my-1 font-bold">{title}</p>
        <p>{text}</p>
      </div>
    </>
  );
}

export default ClientCard;
