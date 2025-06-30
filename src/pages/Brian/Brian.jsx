import React from "react";
import FounderCard from "../../components/shared/founderCard/founderCard";
import BriefOfFounder from "../../components/foundersDetails/briefOfFounder/briefOfFounder";
import LineWithSentence from "../../components/foundersDetails/lineWithSentence/lineWithSentence";
import LineWithParagraph from "../../components/foundersDetails/lineWithParagraph/lineWithParagraph";

function Brian() {
  const data = {
    icon: "/founders/iconFounder2.png",
    name: "BRIAN DENNIS",
    poster: "/founders/brianPoster.webp",
    link: "/brian",
    text: "Brian Dennis, Senior Project Manager, brings over 25 years of experience in architectural technology and project management, specializing in renovations, alterations, and assessments. He has successfully delivered projects from small stores to multi-million-dollar developments, ensuring budgets and timelines are met. Brian excels in consultant coordination, quality control, and municipal permit approvals, aligning designs, costs, and schedules with client needs. ",
    dispalyLearnMore: false,
  };
  return (
    <>
      <div className="bg-white mt-24 text-mainColor pb-28">
        <BriefOfFounder founder={data} />

        {/* ======================================================= */}
        <div className="grid grid-cols-2 mt-20 gap-10 ms-auto  items-center">
          <div className="text-end">
            <LineWithSentence
              words={["EXTENSIVE", "EXPERIENCE"]}
              lineFirst={false}
            />
          </div>
          <img className="w-full" src="brian/1.webp" alt="" />
        </div>
        <LineWithParagraph
          paragraph="With over 25 years in architectural technology and project management, Brian Dennis has been instrumental in delivering successful building 
designs. His experience spans projects ranging from small retail stores 
to multi-million-dollar developments, always ensuring projects are 
completed within budget and on schedule"
        />
        {/* ================================================================ */}
        <div className=" mt-20 gap-10 m-auto flex justify-center  items-center">
          <div className=" m  ">
            <LineWithSentence
              words={["SPECIALIZED EXPERTISE"]}
              lineFirst={true}
            />
          </div>
        </div>
        <LineWithParagraph
          paragraph="Brian excels in renovations, alterations, and project assessments. His extensive knowledge positions him as a key contributor to complex projects like the
 Ranchmen’s Club, where his skills will support renovation, addition, and 
alteration efforts."
        />
        {/* ================================================================ */}
        <div className="grid grid-cols-2 mt-20 gap-10   items-center">
          <img className="w-full" src="brian/2.webp" alt="" />
          <div className="text-start me-auto">
            <LineWithSentence
              words={["LEADERSHIP & ", "COORDINATION"]}
              lineFirst={true}
            />
          </div>
        </div>
        <LineWithParagraph
          paragraph="As Senior Project Manager, Brian leads decision-making and coordinates 
consultants throughout all project phases. He manages quality control, 
repair recommendations, and ensures alignment of client requirements 
with technical documentation."
        />

        {/* ============================================================== */}
        <div className=" mt-20 gap-10 m-auto flex justify-center  items-center">
          <div className=" m  ">
            <LineWithSentence
              words={["PERMITS & CONSTRUCTION ", "COORDINATOR"]}
              lineFirst={true}
            />
          </div>
        </div>
        <LineWithParagraph
          paragraph="Brian oversees approvals for Development and Building Permits and handles 
construction stage administration. His leadership ensures that designs, costs, and schedules are meticulously aligned with client expectations."
        />
      </div>
    </>
  );
}

export default Brian;
