import React from "react";

function Footer() {
  const footerDetails = [
    {
      name: " About Us",
      link: "/",
    },
    {
      name: " Our Founder",
      link: "/",
    },
    {
      name: " Services portfolio",
      link: "/",
    },
    {
      name: " Global recognition & sustainability Careers",
      link: "/",
    },
    {
      name: " Contact Us",
      link: "/",
    },
  ];
  return (
    <>
      <div className="grid  gap-5 md:grid-cols-6 grid-cols-1 bg-white text-mainColor py-5">
        <div className="col-span-1 ps-5">
          <img
            className="p-2 md:me-auto md:w-full w-3/4 m-auto"
            src="/images/logo1.png"
            alt=""
          />
        </div>
        <div className="md:col-span-5 md:ps-0 px-5 col-span-1 flex items-start flex-col justify-center">
          <p>© 2024 ARUP DATTA ARCHITECT All Rights Reserved</p>
          <div className="flex md:flex-row flex-col ">
            {footerDetails.map((item, index) => (
              <React.Fragment key={index}>
                <p className=" pe-2 font-bold">
                  {`    ${item.name}  `}
                  {item.name != " Contact Us" && (
                    <span className="text-gold"> | </span>
                  )}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
