import React from "react";
import Services from "../../components/home/services/services";
import Numbers from "../../components/home/numbers/numbers";
import Awards from "../../components/home/awards/awards";
import JoinUs from "../../components/home/joinUs/joinUs";
import VideoPoster from "../../components/shared/videoPoster/videoPoster";

function Home() {
  return (
    <>
      <VideoPoster video="/home/home.mp4" />
      <div className="px-7">
        <Numbers />
        <Services />
        <Awards />
        <JoinUs />
      </div>
    </>
  );
}

export default Home;
