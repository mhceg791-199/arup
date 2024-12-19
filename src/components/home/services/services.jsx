import React, { useContext } from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import ServiceCard from "../../shared/serviceCard/serviceCard";
import { sericesContext } from "../../../context/servicesContext";

function Services() {
  // const { servicesDetails } = useContext(sericesContext);
  const servicesDetails = [
    {
      name: "MASTER & URBAN PLANNING",
      img: "/services/1.webp",
    },
    {
      name: "INTERIOR DESIGN",
      img: "/services/2.webp",
    },
    {
      name: "RESIDENTIAL",
      img: "/services/3.webp",
    },
    {
      name: "COMMERCIAL",
      img: "/services/4.webp",
    },
    {
      name: "ADMINISTRATIVE",
      img: "/services/5.webp",
    },
    {
      name: "HEALTH CARE",
      img: "/services/6.webp",
    },
    {
      name: "CULTURAL BUILDINGS",
      img: "/services/7.webp",
    },
    {
      name: "THEME PARK",
      img: "/services/8.webp",
    },
    {
      name: "SET DESIGNS",
      img: "/services/9.webp",
    },
    {
      name: "WATER FEATURES",
      img: "/services/10.webp",
    },
    {
      name: "BUILDING BOOKLET & PERMITS",
      img: "/services/11.webp",
    },
  ];
  return (
    <>
      <SectionHeader text="SERVICES" />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {servicesDetails.map((item, index) => (
          <React.Fragment key={index}>
            <ServiceCard name={item.name} img={item.img} link="/" />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Services;
