import React from "react";
import sustainabilitiesData from "../../context/data/sustainabilitiesData";
import { useParams } from "react-router-dom";

function SustainabilityDetails() {
  const { slug } = useParams();
  const { text, brief, img, title } = sustainabilitiesData.filter(
    (p) => p.slug == slug
  )[0];

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 bg-white gap-6 md:px-10 pt-5 px-8 mt-20">
        <div className=" text-mainColor  flex flex-col justify-center">
          <h1 className="text-xxl text-mainColor ">{title}</h1>
          <p className="font-semibold my-5 text-justify">{brief}</p>
          <p className="text-justify">{text}</p>
        </div>
        <div className="flex ">
          <img
            className="md:p-10 w-full xl:h-[72vh] object-cover "
            src={img}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default SustainabilityDetails;
