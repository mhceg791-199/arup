import React from "react";
import { Link } from "react-router-dom";

function SustainabilityCard({ sustainable }) {
  const { img, link, title, text, brief, slug } = sustainable;
  return (
    <>
      <div className="bg-mainColor p-5">
        <img className="mb-3" src={img} alt="" />
        <p className="text-white my-1 font-bold">{title}</p>
        <Link to={`/sustainability/${slug}`} className="text-gold mb-5 my-1 ">
          LEARN MORE
        </Link>
        <p className="text-white">{brief}</p>
      </div>
    </>
  );
}

export default SustainabilityCard;
