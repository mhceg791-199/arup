import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Slider from "react-slick";
import RightArrow from "./arrows/rightArrow";
import LeftArrow from "./arrows/leftArrow";

function Awards() {
  const awardsDetails = [
    {
      img: "/awards/1.webp",
      title: "CALLAGHAN RAVINES, Edmonton, AB",
      year: "2014 - 2015",
      description: "The Americas Property Awards ,Canada",
    },
    {
      img: "/awards/2.webp",
      title: "Lexus, Edmonton, AB",
      year: "2014 - 2015",
      description: "The American Property Awards ,Canada ",
    },
    {
      img: "/awards/3.webp",
      title: "MACKINNON ESTATES, Edmonton, AB",
      year: "2012",
      description: "The SAM Awards 2011 Finalist Town House Category",
    },
    {
      img: "/awards/4.webp",
      title: "Mall of America ,Bloomington Minnesota",
      year: "2014 - 2015",
      description:
        "Rated #1 in the list of 10 best malls in world largest malls in USA",
    },
    {
      img: "/awards/5.webp",
      title: "MULTI-GENERATIONAL HOUSING (M.G.H.), Calgary, AB",
      year: "2017 - 2018",
      description: "The Architect Multiple Residence Canada Award ",
    },
    {
      img: "/awards/6.webp",
      title:
        "NIGERIAN INDUSTRIAL BANK HEADQUARTERS, CONVENTION CENTRE & SHOPPING COMPLEX, Abuja, Nigeria",
      year: "2014 - 2015",
      description: "One of the largest projects in Nigeria.",
    },
    {
      img: "/awards/7.webp",
      title: "OSHEANA CONDOMINIUMS, Edmonton, AB",
      year: "2006",
      description:
        "SAM Awards 2006 under 2 categories for Suite Design Types Finalist – SAM Awards 2006 as one of the 2 best Apartments.",
    },
    {
      img: "/awards/8.webp",
      title: "Olympic Center, Calgary, AB",
      year: "2014 - 2015",
      description:
        "Winning design of a limited competition of five local firms. ",
    },
    {
      img: "/awards/9.webp",
      title: "One Denver Place, Denver, Colorado, USA",
      year: "2014 - 2015",
      description:
        "Won a limited competition among five architectural firms in Calgary",
    },
    {
      img: "/awards/10.webp",
      title: "WALDEN COMMUNITY – SENIOR’S RESIDENCE",
      year: "2015 - 2016",
      description:
        "The International Property Awards, in the Architecture Residence Canada ",
    },
    {
      img: "/awards/11.webp",
      title: "West Edmonton Mall , Edmonton, AB",
      year: "2013 - 2014",
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
          <SectionHeader text="AWARDS" />
        </div>
        <Slider {...settings}>
          {awardsDetails.map((item, index) => (
            <React.Fragment key={index}>
              <div className="p-2 ">
                <img
                  src={item.img}
                  className=" h-[40vh] object-cover  w-full"
                  alt=""
                />
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
