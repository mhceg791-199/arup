import React from "react";

function ContactUsDetails() {
  const details = [
    // {
    //   icon: "fa-solid fa-phone",
    //   text: "Tel: 0222676674",
    // },
    {
      icon: "fa-solid fa-phone",
      text: "Tel: 0222676654",
    },
    // {
    //   icon: "fa-solid fa-earth-americas",
    //   text: "info@mosaicholding.com",
    // },
    {
      icon: "fa-solid fa-location-dot",
      text: "Calgary office #200, 1302 4th Street SW",
    },
    {
      icon: "fa-solid fa-location-dot opacity-0",
      text: "Calgary, AB  T2R-0X8",
    },
  ];
  return (
    <>
      <div className="mt-10 text-white">
        <>
          <h1 className="text-xl  font-berlin border-b-4 mb-14 border-mainBrown inline-flex">
            CONTACT US
          </h1>
          <div className="flex items-center my-3">
            <i
              class={` fa-solid fa-phone text-mainBrown me-2 custom-text-lg`}
            ></i>
            <p className={` sm:text-small md:text-xl `}>Tel: 0222676654</p>
          </div>
          <div className="flex items-center my-3 mt-10">
            <i
              class={` fa-solid fa-location-dot text-lg text-mainBrown me-2`}
            ></i>
            <p className={` sm:text-small md:text-xl `}>
              Calgary office #200, 1302 4th Street SW
            </p>
          </div>
          <div className="flex items-center my-3">
            <i
              class={`  fa-solid fa-location-dot opacity-0 text-lg text-mainBrown me-2`}
            ></i>
            <p className={` sm:text-small md:text-xl `}>Calgary, AB T2R-0X8</p>
          </div>
        </>
      </div>
    </>
  );
}

export default ContactUsDetails;
