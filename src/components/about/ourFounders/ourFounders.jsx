import React from "react";
import { Link } from "react-router-dom";

function OurFounders() {
  return (
    <>
      <div className="py-20 bg-gray md:px-20">
        <p className="text-mainColor text-center text-xxxl font-bold mb-5">
          OUR FOUNDERS
        </p>
        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-1 ">
            <Link to="/arup">
              <img
                className="w-1/2 m-auto "
                src="/founders/founder1.webp"
                alt=""
              />
            </Link>
          </div>
          <div className="col-span-1 flex items-center text-mainColor">
            <p>
              Arup Datta, MAA Life Member, FRAIC, MOAA, MAIBC, MSAA, FIIA, is an internationally acclaimed architect and the founder of Arup Datta Architect Ltd. (ADAL). A graduate of IIT Kharagpur, he brought his expertise to Canada in 1974, excelling in senior roles with leading firms before establishing ADAL in 1988. Under his leadership, ADAL has delivered award-winning projects across Canada and internationally, earning recognition for innovation and excellence in architecture, master planning, and interior design. Mr. Datta’s visionary approach continues to shape the global architectural landscape.</p>
              
          </div>
          {/* <div className="col-span-1 ">
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export default OurFounders;
