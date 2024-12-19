import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Slider from "react-slick";
import RightArrow from "./arrows/rightArrow";
import LeftArrow from "./arrows/leftArrow";

function Awards() {
  const awardsDetails = [
    {
      img: "/awards/1.webp",
      title: "OSHEANA CONDOMINIUMS, Edmonton, AB",
      year: "2006",
      description: "Won SAM Awards under 2 categories for Suite Design Types",
    },
    {
      img: "/awards/2.webp",
      title: "MACKINNON ESTATES, Edmonton, AB",
      year: "2011",
      description: "Won the SAM Awards Finalist Town House Category",
    },
    {
      img: "/awards/3.webp",
      title: "Lexus, Edmonton, AB",
      year: "2014 - 2015",
      description: "Won the American Property Awards Canada",
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
