import React, { createContext } from "react";

export const sericesContext = createContext(null);
function ServicesContextProvider({ children }) {
  const servicesDetails = [
    {
      name: "MASTER & URBAN PLANNING",
      img: "/services/1.webp",
      text: "Strategically shaping dynamic urban landscapes, our master and urban planning services focus on creating sustainable, functional, and aesthetically appealing environments that inspire community growth and connectivity.",
    },
    {
      name: "INTERIOR DESIGN",
      img: "/services/2.webp",
      text: "We transform interiors into sophisticated, functional spaces that seamlessly blend style and purpose, tailored to the unique vision and needs of our clients.",
    },
    {
      name: "RESIDENTIAL",
      img: "/services/3.webp",
      text: "From luxurious single-family homes to multifamily residential complexes, we deliver thoughtfully designed spaces that prioritize comfort, innovation, and livability.",
    },
    {
      name: "COMMERCIAL",
      img: "/services/4.webp",
      text: "Our commercial projects are crafted to elevate business environments, combining functionality and design excellence to create spaces that foster productivity and success.",
    },
    {
      name: "ADMINISTRATIVE",
      img: "/services/5.webp",
      text: "With a focus on efficiency and sophistication, our administrative designs deliver tailored solutions for offices and operational hubs, optimizing both aesthetics and performance. ",
    },
    {
      name: "HEALTH CARE",
      img: "/services/6.webp",
      text: "We design health care facilities that merge innovation with compassion, creating environments that prioritize patient care, functionality, and operational excellence.",
    },
    {
      name: "CULTURAL BUILDINGS",
      img: "/services/7.webp",
      text: "Our cultural building designs celebrate heritage and creativity, offering spaces that inspire, engage, and leave a lasting impact on communities.",
    },
    {
      name: "THEME PARK",
      img: "/services/8.webp",
      text: "We bring imagination to life with innovative and immersive theme park designs, crafting experiences that captivate visitors of all ages.",
    },
    {
      name: "SET DESIGNS",
      img: "/services/9.webp",
      text: "Our set design services provide dynamic and visually striking environments for productions, blending artistry and technical expertise to bring stories to life.",
    },
    {
      name: "WATER FEATURES",
      img: "/services/10.webp",
      text: "We design captivating water features that harmonize with their surroundings, adding elegance, tranquility, and sensory appeal to any space.",
    },
    {
      name: "BUILDING BOOKLET & PERMITS",
      img: "/services/11.webp",
      text: "Our team provides comprehensive building booklets and facilitates the permitting process, ensuring seamless navigation of regulatory requirements while maintaining project integrity and excellence. ",
    },
  ];
  return (
    <sericesContext.Provider value={{ servicesDetails }}>
      {children}
    </sericesContext.Provider>
  );
}

export default ServicesContextProvider;
