import React from "react";
import { Link } from "react-router-dom";

function SectionHeader({ text, link }) {
  return (
    <>
      <div className="flex mb-3 items-center">
        <Link to={link} className="font-bold text-xl pe-3">
          {text}
        </Link>
        <img
          className="md:w-8 w-10 object-contain"
          src="/images/arrow.png"
          alt=""
        />
      </div>
    </>
  );
}

export default SectionHeader;
