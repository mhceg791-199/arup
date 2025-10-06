import React from "react";
import VideoPoster from "../../components/shared/videoPoster/videoPoster";
import AboutSection from "../../components/about/aboutSection/aboutSection";
import AboutNumbers from "../../components/about/aboutNumbers/aboutNumbers";
import OurFounders from "../../components/about/ourFounders/ourFounders";
import ImagePoster from "../../components/shared/heroImage/heroImage";

function About() {
  return (
    <>
      {/* <VideoPoster video="/about/about1.webp" /> */}
       <ImagePoster image="/about/about1.webp" />
      <AboutSection />
      <AboutNumbers />
      <OurFounders />
    </>
  );
}

export default About;
