import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Slider from "react-slick";
import RightArrow from "./arrows/rightArrow";
import LeftArrow from "./arrows/leftArrow";
import { slugify } from "../../../context/data/projectsData";
import { Link } from "react-router-dom";

function Awards() {
  const awardsDetails = [
    {
      img: "/awards/7.webp",
      title: "OSHEANA CONDOMINIUMS, Edmonton, AB",
      year: "2006",
      link: `/projects/${slugify("Osheana Condominiums")}`,
      description:
        "SAM Awards 2006 under 2 categories for Suite Design Types Finalist – SAM Awards 2006 as one of the 2 best Apartments.",
    },
    {
      img: "/awards/3.webp",
      title: "MACKINNON ESTATES, Edmonton, AB",
      link: `/projects/${slugify("CALLAGHAN RAVINES, Edmonton, AB")}`,
      year: "2012",
      description: "The SAM Awards 2011 Finalist Town House Category",
    },
    {
      img: "/awards/2.webp",
      title: "Lexus of Edmonton",
      link: `/projects/${slugify("Lexus of Edmonton")}`,
      year: "2014 - 2015",
      description: "The American Property Awards ,Canada ",
    },
    {
      img: "/awards/1.webp",
      title: "CALLAGHAN RAVINES, Edmonton, AB",
      year: "2014 - 2015",
      link: `/projects/${slugify("CALLAGHAN RAVINES, Edmonton, AB")}`,
      description: "The Americas Property Awards ,Canada",
    },
    {
      img: "/awards/10.webp",
      title: "WALDEN COMMUNITY – SENIOR’S RESIDENCE",
      year: "2015 - 2016",
      link: `/projects/${slugify("The Walden Community – Senior's Residence")}`,
      description:
        "The International Property Awards, in the Architecture Residence Canada ",
    },
    {
      img: "/awards/5.webp",
      title: "MULTI-GENERATIONAL HOUSING (M.G.H.), Calgary, AB",
      link: `/projects/${slugify(
        "Multi-Generational Housing (M.G.H.), Calgary, AB"
      )}`,
      year: "2017 - 2018",
      description: "The Architect Multiple Residence Canada Award ",
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 1500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screens <= 480px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-10">
        <div className="ps-3">
          <SectionHeader link={"/globalRecognations"} text="AWARDS" />
        </div>
        <Slider {...settings}>
          {awardsDetails.map((item, index) => (
            <React.Fragment key={index}>
              <div className="p-2 ">
                <Link to={item.link}>
                  <img
                    src={item.img}
                    className=" h-[35vh] object-cover  w-full"
                    alt={`${item.title}`}
                  />
                </Link>
                <div className="mt-4 ps-1">
                  <p className="text-lg  font-bold my-1">{item.title}</p>
                  <p className="text-lg font-bold my-1">{item.year}</p>
                  <p className="text-base my-1">{item.description}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Awards;
