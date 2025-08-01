import React from "react";
import LineWithSentence from "../../components/foundersDetails/lineWithSentence/lineWithSentence";
import LineWithParagraph from "../../components/foundersDetails/lineWithParagraph/lineWithParagraph";
import FounderCard from "../../components/shared/founderCard/founderCard";

function Arup() {
  const data = {
    icon: "/founders/iconFounder1.png",
    name: "ARUP DATTA",
    details:
      "Architect MAAA Life Member, FRAIC, MOAA, MAIBC, MSAA, FIIA, Project Management (Harvard)",
    poster: "/founders/arupPoster.webp",
    link: "/brian",
    text: " Arup Datta, MAA Life Member, FRAIC, MOAA, MAIBC, MSAA, FIIA, is an internationally acclaimed architect and the founder of Arup Datta Architect Ltd. (ADAL). A graduate of IIT Kharagpur, he brought his expertise to Canada in 1974, excelling in senior roles with leading firms before establishing ADAL in 1988. Under his leadership, ADAL has delivered award-winning projects across Canada and internationally, earning recognition for innovation and excellence in architecture, master planning, and interior design. Mr. Datta’s visionary approach continues to shape the global architectural landscape.",
    dispalyLearnMore: false,
  };
  return (
    <>
      <div className="bg-white mt-24 text-mainColor pb-28">
        <FounderCard founder={data} />

        <div className="grid md:grid-cols-2 mt-20 gap-10 m-auto  items-center">
          <div className="text-end">
            <LineWithSentence
              words={["1968"]}
              lineFirst={false}
              fontSize="text-[90px]"
            />
          </div>
          <div className="bg-blue-gray-500">
            <img className="  object-scale-down" src="arup/1.webp" alt="" />
          </div>
        </div>
        <LineWithParagraph
          paragraph="Arup Datta graduated with distinction from the prestigious Indian Institute 
of Technology (IIT), Kharagpur, one of India’s foremost academic institutions known for its rigorous architectural training. His time at IIT provided him 
with a strong foundation in design principles, technical expertise, and a global perspective on architecture, preparing him for a future that would 
transcend borders."
        />
        {/* ================================================================ */}
        <div className=" mt-20 gap-10 m-auto flex justify-center items-center">
          <div className="text-center offest-1">
            <LineWithSentence
              words={["1974"]}
              lineFirst={true}
              fontSize="text-[90px]"
            />
          </div>
        </div>
        <LineWithParagraph
          paragraph="After honing his skills with prominent architectural firms in India, Mr. Datta immigrated to Canada in 1974. This transition marked a significant turning point in his career, as he embraced the challenges and opportunities of a 
new professional landscape. With a focus on innovation and adaptability, 
he quickly secured employment with leading firms in Alberta, contributing 
to the design of modern and complex architectural projects."
        />
        {/* ================================================================ */}
        <div className="grid md:grid-cols-2 mt-20 gap-10 m-auto  items-center">
          <div className="text-end">
            <LineWithSentence
              words={["1978"]}
              lineFirst={false}
              fontSize="text-[90px]"
            />
          </div>
          <div className="">
            <img className="  object-scale-down" src="arup/2.webp" alt="" />
          </div>
        </div>
        <LineWithParagraph
          paragraph="Mr. Datta’s dedication to his craft culminated in becoming a fully 
licensed architect in 1978. He also became a registered member of 
the Royal Architectural Institute of Canada (RAIC), cementing his 
status as a respected professional in the field. This milestone not 
only validated his expertise but also positioned him as a leader 
capable of shaping the architectural discourse in Canada."
        />

        {/* ============================================================== */}
        <div className=" mt-20 gap-10 m-auto flex justify-center items-center">
          <div className="text-center offest-1">
            <LineWithSentence
              words={["1979"]}
              lineFirst={true}
              fontSize="text-[90px]"
            />
          </div>
        </div>
        <LineWithParagraph
          paragraph="To further his knowledge and refine his project management skills, Mr. Datta undertook advanced training at the Graduate School of Design, Harvard 
University, in Massachusetts, USA. This prestigious program enriched his 
understanding of large-scale project coordination and complex design 
challenges, skills that would become integral to his career. Harvard’s 
emphasis on innovation and interdisciplinary collaboration deeply 
influenced his approach, allowing him to tackle projects with a 
unique blend of creativity and practicality."
        />
        {/* ============================================================= */}
        <div className=" mt-20 gap-10 m-auto flex justify-center items-center">
          <div className="text-center md:flex   offest-1">
            <LineWithSentence
              words={["1974"]}
              lineFirst={false}
              fontSize="text-[90px]"
            />
            <br />
            <br />
            <LineWithSentence
              words={["1988"]}
              lineFirst={false}
              fontSize="text-[90px]"
            />
          </div>
        </div>
        <LineWithParagraph
          paragraph="Over the next 14 years, Mr. Datta held senior roles with some of Canada’s most renowned architectural firms, including Cohos Evamy & Partners and MSA 
Inc. In these capacities, he served as Senior Designer, Senior Project Architect, and Senior Associate, leading numerous high-profile projects. His work 
encompassed a wide array of complex and innovative designs, many of 
which gained national and international acclaim."
        />
        <p className="w-3/4 m-auto mt-5">
          As Senior Project Architect at Cohos Evamy & Partners, Mr. Datta
          managed intricate projects that pushed the boundaries of conventional
          design, demonstrating his ability to blend aesthetics with
          functionality. Later, as Senior Associate with MSA Inc., he continued
          to excel, applying his expertise to large-scale developments that set
          new benchmarks in the industry.
        </p>
      </div>
    </>
  );
}

export default Arup;
