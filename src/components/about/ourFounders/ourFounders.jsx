import React from "react";

function OurFounders() {
  return (
    <>
      <div className="py-20 bg-gray md:px-20">
        <p className="text-mainColor text-center text-xxxl font-bold mb-5">
          OUR FOUNDERS
        </p>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-1 ">
            <img
              className="w-3/4 m-auto "
              src="/founders/founder1.webp"
              alt=""
            />
          </div>
          <div className="col-span-1 ">
            <img
              className="w-3/4 m-auto "
              src="/founders/founder2.webp"
              alt=""
            />
          </div>
          <div className="col-span-1 ">
            <img
              className="w-3/4 m-auto "
              src="/founders/founder3.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurFounders;
