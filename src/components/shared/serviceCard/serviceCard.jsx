import React from "react";
import "./serviceCard.css";
function ServiceCard({ img, name, text, link }) {
  return (
    <>
      <div className="col-span-1">
        <div className="relative flex  flex-col animation  justify-end h-[50vh]">
          {/* Image container */}
          <div
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
              backgroundSize: "cover", // Ensures the image covers the container
              backgroundRepeat: "no-repeat",
            }}
            className="absolute  w-full h-full"
          ></div>

          {/* Overlay content */}
          <div className="relative p-5  translate-y-1  changeBg text-white w-full">
            <p className="text-lg mb-2 font-bold">{name}</p>
            <p className="text-base">LEARN MORE</p>
          </div>
        </div>
        <p className="mt-3">{text}</p>
      </div>
    </>
  );
}

export default ServiceCard;
