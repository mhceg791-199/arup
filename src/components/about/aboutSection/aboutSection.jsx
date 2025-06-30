import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";

function AboutSection() {
  return (
    <>
      <div className="bg-white py-10 text-mainColor md:px-20">
        <SectionHeader text="ABOUT US" />
        <p className="mt-5 text-justify">
          <span className="font-bold">Arup Datta Architect Ltd.</span> (ADAL), a
          major subsidiary of{" "}
          <a
            className="font-bold underline"
            target="_blank"
            href="https://www.mosaicholding.com/"
          >
            Mosaic Holding Corporation
          </a>
          , is a globally recognized multidisciplinary firm with over 40 years
          of expertise in delivering exceptional design solutions for
          architecture, Master Planning, Urban and Interior Design. Comprising a
          skilled team of architects, architectural technologists, project
          managers, interior designers, and dedicated support professionals,
          ADAL has established a stellar reputation for excellence across
          Residential, Commercial, Mixed-use and Institutional sectors. The firm
          specializes in a wide range of architectural categories which includes
          major Commercial, Mixed-Use, Multi Residential, Senior Housing and
          Institutional Building creating creative endeavors such as theme
          parks, set designs, and water features. Additionally, ADAL provides
          comprehensive regulatory and technical services, including building
          booklets and permit facilitation. Committed to innovation, quality,
          and functionality, ADAL continues to shape visionary and enduring
          spaces worldwide.
        </p>
      </div>
      <div
        style={{
          backgroundImage: "/about/about.webp",
        }}
        className=" py-10  md:px-20 w-full h-full bg-[url('/about/about.webp')] bg-cover bg-no-repeat"
      >
        <p className="mt-5 text-justify">
          At the heart of ADAL’s portfolio lies the visionary design philosophy
          of its founder, Arup Datta, whose conceptual expertise ensures each
          project achieves both budgetary alignment and aesthetic distinction.
          Since its establishment, ADAL has consistently delivered innovative,
          contextually sensitive designs that prioritise functionality,
          efficiency, and user-friendly. The firm is dedicated to crafting
          architecture that harmonises with its environment while addressing the
          distinct needs of clients and end users, resulting in dynamic spaces
          that stand the test of time.{" "}
        </p>
        <p className="mt-5 text-justify">
          ADAL’s architectural and urban design contributions span over more
          than 10 countries, including Canada, the USA, Europe, Africa, the
          Middle East, and Southeast Asia. Its projects are celebrated for their
          exceptional quality, cost-efficiency, and profound community impact.
          Arup Datta’s commitment to societal betterment extends beyond design,
          with active involvement in organisations such as Canadian Cancer
          Society, Royal Architecture Institute of Canada, and Chamber of
          Commerce
        </p>
        <p className="mt-5 text-justify">
          Registered in Alberta, British Columbia, Ontario, Saskatchewan and
          Washington, ADAL also undertakes projects in the USA, India, Malaysia,
          Qatar, Saudi Arabia, and Oman, continuing its legacy of transforming
          global landscapes through thoughtful and visionary design.
        </p>
      </div>
    </>
  );
}

export default AboutSection;
