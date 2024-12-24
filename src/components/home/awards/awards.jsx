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
      img: "/awards/1.webp",
      title: "CALLAGHAN RAVINES, Edmonton, AB",
      year: "2014 - 2015",
      link: `/projects/${slugify("CALLAGHAN RAVINES, Edmonton, AB")}`,
      description: "The Americas Property Awards ,Canada",
    },
    {
      img: "/awards/2.webp",
      title: "Lexus of Edmonton",
      link: `/projects/${slugify("Lexus of Edmonton")}`,
      year: "2014 - 2015",
      description: "The American Property Awards ,Canada ",
    },
    {
      img: "/awards/3.webp",
      title: "MACKINNON ESTATES, Edmonton, AB",
      link: `/projects/${slugify("CALLAGHAN RAVINES, Edmonton, AB")}`,
      year: "2012",
      description: "The SAM Awards 2011 Finalist Town House Category",
    },
    {
      img: "/awards/4.webp",
      title: "Mall of America ,Bloomington Minnesota",
      link: `/projects/${slugify("The Mall of America")}`,
      year: "2014 - 2015",
      description:
        "Rated #1 in the list of 10 best malls in world largest malls in USA",
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
    {
      img: "/awards/6.webp",
      title:
        "NIGERIAN INDUSTRIAL BANK HEADQUARTERS, CONVENTION CENTRE & SHOPPING COMPLEX, Abuja, Nigeria",
      year: "2014 - 2015",
      link: `/projects/${slugify("Nigerian Industrial Bank Headquarters")}`,
      description: "One of the largest projects in Nigeria.",
    },
    {
      img: "/awards/7.webp",
      title: "OSHEANA CONDOMINIUMS, Edmonton, AB",
      year: "2006",
      link: `/projects/${slugify("Osheana Condominiums")}`,
      description:
        "SAM Awards 2006 under 2 categories for Suite Design Types Finalist – SAM Awards 2006 as one of the 2 best Apartments.",
    },
    {
      img: "/awards/8.webp",
      title: "Olympic Center, Calgary, AB",
      year: "2014 - 2015",
      link: `/projects/${slugify("Olympic Center")}`,
      description:
        "Winning design of a limited competition of five local firms. ",
    },
    {
      img: "/awards/9.webp",
      title: "One Denver Place, Denver, Colorado, USA",
      year: "2014 - 2015",
      link: `/projects/${slugify("One Denver Place")}`,
      description:
        "Won a limited competition among five architectural firms in Calgary",
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
      img: "/awards/11.webp",
      title: "West Edmonton Mall , Edmonton, AB",
      year: "2013 - 2014",
      link: `/projects/${slugify("West Edmonton Mall")}`,
      description: "Rated #2 in the list of 10 – Best Malls in the World",
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
                    alt=""
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
