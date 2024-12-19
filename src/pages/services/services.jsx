import React from "react";
import VideoPoster from "../../components/shared/videoPoster/videoPoster";
import SectionHeader from "../../components/shared/sectionHeader/sectionHeader";
import { useContext } from "react";
import { sericesContext } from "../../context/servicesContext";
import ServiceCard from "../../components/shared/serviceCard/serviceCard";

function Services() {
  const { servicesDetails } = useContext(sericesContext);
  console.log(servicesDetails);

  return (
    <>
      <VideoPoster video="/services/Services.mp4" />
      <div className="md:ps-10 ps-5 -translate-y-[110%]">
        <SectionHeader text="SERVICES" />
      </div>
      <p className="text-center font-bold text-xl my-10">
        {" "}
        "ENGINEERING EXCELLENCE, TAILORED TO YOUR NEEDS"{" "}
      </p>
      <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:px-20 px-5 my-20">
        {servicesDetails.map(({ name, img, text }, index) => (
          <React.Fragment key={index}>
            <ServiceCard name={name} img={img} text={text} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Services;
