import React from "react";
import BriefOfFounder from "../../components/foundersDetails/briefOfFounder/briefOfFounder";
import LineWithSentence from "../../components/foundersDetails/lineWithSentence/lineWithSentence";
import LineWithParagraph from "../../components/foundersDetails/lineWithParagraph/lineWithParagraph";

function Christopher() {
  const data = {
    icon: "/founders/iconFounder3.png",
    name: "CHRISTOPHER SAGSAGAT ",
    poster: "/founders/CCHRISTOPHER-poster.webp",
    link: "/brian",
    text: "With over 20 years of experience, Chris has contributed to numerous award-winning projects at ADAL. He collaborates with the Principal and Senior Architect on space programs and high-standard conceptual designs. Chris oversees all design stages and plays a key role in ensuring well-documented construction drawings during the Building Permit stage. His coordination ensures smooth project execution while maintaining top-tier quality across all deliverables.",
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
              words={["EXTENSIVE DESIGN", "EXPERIENCE   "]}
              lineFirst={false}
            />
          </div>
          <img className="w-full" src="christopher/1.webp" alt="Christopher" />
        </div>
        <LineWithParagraph
          paragraph="With over 20 years of experience, Chris has contributed to numerous award-winning projects at ADAL. His design and graphic skills have been instrumental in creating innovative and visually striking solutions across 
a variety of projects."
        />
        {/* ================================================================ */}
        <div className=" mt-20 gap-10 m-auto flex justify-center  items-center">
          <div className=" m  ">
            <LineWithSentence
              words={["COLLABORATION & CREATIVITY"]}
              lineFirst={true}
            />
          </div>
        </div>
        <LineWithParagraph
          paragraph="Chris works closely with the Principal and Senior Architect to develop space 
programs, as well as conceptual and schematic designs of the highest standards. His recent experience includes active involvement in all stages of design, from concept development to final presentations."
        />
        {/* ================================================================ */}
        <div className="grid grid-cols-2 mt-20 gap-10   items-center">
          <img className="w-full" src="christopher/2.webp" alt="Christopher ADAL" />
          <div className="text-start me-auto">
            <LineWithSentence
              words={["TECHNICAL & ", "PRODUCTION EXPERTISE"]}
              lineFirst={true}
            />
          </div>
        </div>
        <LineWithParagraph
          paragraph="Chris is integral to the architectural Building Permit stage, ensuring seamless and well-documented construction drawing packages. By coordinating 
effectively, he guarantees a smooth progression from design development 
to execution while maintaining exceptional quality in project deliverables."
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

export default Christopher;
