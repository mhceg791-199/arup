import React from "react";
import { Link } from "react-router-dom";

function OurFounders() {
  return (
    <>
      <div className="py-20 bg-gray md:px-20">
        <p className="text-mainColor text-center text-xxxl font-bold mb-5">
          OUR FOUNDERS
        </p>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-1 ">
            <Link to="/arup">
              <img
                className="w-3/4 m-auto "
                src="/founders/founder1.webp"
                alt=""
              />
            </Link>
          </div>
          <div className="col-span-1 ">
            <Link to="/brian">
              <img
                className="w-3/4 m-auto "
                src="/founders/founder2.webp"
                alt=""
              />
            </Link>
          </div>
          <div className="col-span-1 ">
            <Link to="/christopher">
              <img
                className="w-3/4 m-auto "
                src="/founders/founder3.webp"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurFounders;
