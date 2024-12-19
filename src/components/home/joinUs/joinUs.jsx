import React from "react";

function JoinUs() {
  return (
    <>
      <div className="grid gap-10 md:grid-cols-2 grid-cols-1">
        <div className="col-span-1 p-8">
          <img src="/home/career.webp" alt="" />
        </div>
        <div className="col-span-1 flex justify-center flex-col">
          <p className="text-base">ARUP Careers</p>
          <p className="font-bold text-xl mt-2">JOIN US</p>
          <p className="my-3 md:w-3/4">
            At ARUP, we believe in nurturing talent, fostering innovation, and
            empowering individuals to make a meaningful impact.
          </p>
          <div>
            <button className=" px-3 py-2 text-base font-bold my-5 inline-flex w-auto bg-white text-mainColor ">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinUs;
