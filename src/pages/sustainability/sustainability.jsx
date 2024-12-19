import React, { useContext } from "react";
import SustainabilityCard from "../../components/shared/sustainabilityCard/sustainabilityCard";
import { sustainabilityContext } from "../../context/sustainabilityContext";

function Sustainability() {
    const {sustainabilityDetails} =useContext(sustainabilityContext)
//   const sustainabilityDetails = [
//     {
//       img: "/sustainability/1.webp",
//       title: "ENERGY-EFFICIENT SYSTEMS",
//       text: "We combine innovative technology and practical solutions to optimise energy efficiency, reduce environmental impact, and lower utility costs without compromising comfort or functionality.",
//       link: "/",
//     },
//     {
//       img: "/sustainability/2.webp",
//       title: "SUSTAINABLE LANDSCAPING",
//       text: "We design sustainable outdoor spaces that combine beauty, native plants, and waterefficient solutions for eco-conscious living.",
//       link: "/",
//     },
//     {
//       img: "/sustainability/3.webp",
//       title: "ECO-FRIENDLY MATERIALS",
//       text: "We prioritise sustainable materials and energy efficient designs to reduce environmental impact while maintaining comfort and practicality.",
//       link: "/",
//     },
//     {
//       img: "/sustainability/4.webp",
//       title: "INNOVATIVE WATER MANAGEMENT SOLUTIONS",
//       text: "We integrate innovative water management systems to maximise efficiency, reduce waste, and minimise environmental impact, ensuring sustainable solutions for current and future water challenges.",
//       link: "/",
//     },
//     {
//       img: "/sustainability/5.webp",
//       title: "CLIENT-CENTRED DESIGN",
//       text: "We craft client-focused, sustainable solutions that balance cost-effectiveness, ecological responsibility, and innovation.",
//       link: "/",
//     },
//     {
//       img: "/sustainability/6.webp",
//       title: "LEED-CERTIFIED STANDARDS",
//       text: "We demonstrate our commitment to sustainability through LEED-certified projects like South Pointe Toyota and Lexus Edmonton, exceeding energy efficiency and environmental standards.",
//       link: "/",
//     },
//   ];
  return (
    <>
      <div className="bg-white text-mainColor mt-20 ">
        <p className="text-center w-3/4 m-auto py-20 text-xl font-bold">
          "INNOVATING FOR A SUSTAINABLE FUTURE: TRANSFORMING IDEAS INTO
          ENVIRONMENTALLY RESPONSIBLE SOLUTIONS."
        </p>
        <div className="grid lg:grid-cols-3 md:mx-20 py-10  mx-10 gap-3">
          {sustainabilityDetails.map((sus, index) => (
            <React.Fragment key={index}>
              <SustainabilityCard sustainable={sus} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sustainability;
