import React from "react";

function ClientCard({ client }) {
  const { title, img, text } = client;
  return (
    <div className="bg-mainColor p-5">
      <div className="h-[6rem] w-full overflow-hidden flex items-center justify-center">
        <img
          className="object-contain w-full h-full rounded-md"
          src={img}
          alt={title}
        />
      </div>
      <p className="text-gold my-2 font-bold">{title}</p>
      <p className="text-white text-sm">{text}</p>
    </div>
  );
}

export default ClientCard;
