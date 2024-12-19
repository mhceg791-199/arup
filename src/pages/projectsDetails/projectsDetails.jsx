import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../context/data/projectsData";
import SliderOfImgsProject from "../../components/projectsDetails/sliderOfImgsProjects";

function ProjectsDetails() {
  const { slug } = useParams();
  const project = projectsData.filter((p) => p.slug == slug)[0];
  const {
    description,
    year,
    location,
    status,
    client,
    subIndustry,
    industry,
    imgs,
    name,
  } = project;
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="lg:col-span-1 col-span-3 mt-20 p-10">
          <h1 className="text-mainBrown font-bold custom-text-xl">{name}</h1>
          <p className="italic custom-text-xl font-berlin"> [{industry}]</p>
          <div className="p-14 ps-0">
            <p className="my-1">
              <span className="font-bold font-berlin:">SUB INDUSTRY/</span>{" "}
              {subIndustry}
            </p>
            <p className="my-1">
              <span className="font-bold font-berlin:">CLIENT/</span> {client}
            </p>
            <p className="my-1">
              <span className="font-bold font-berlin:">LOCATION/</span>{" "}
              {location}
            </p>
            <p className="my-1">
              <span className="font-bold font-berlin:">STATUS/</span> {status}
            </p>
            <p className="my-1">
              <span className="font-bold font-berlin:">YEAR/</span> {year}
            </p>
          </div>
          <p className="mb-3 font-semibold">[DESCRIPTION]</p>
          {description.map((d, index) => (
            <p className="my-3 " key={index}>
              {d}
            </p>
          ))}
          <p></p>
        </div>
        <div className="lg:col-span-1 col-span-3">
          <SliderOfImgsProject imgs={imgs} />
        </div>
      </div>
    </>
  );
}

export default ProjectsDetails;
