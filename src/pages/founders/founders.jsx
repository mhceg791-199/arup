import React from "react";
import FounderCard from "../../components/shared/founderCard/founderCard";

function Founders() {
  const foundersData = [
    {
      icon: "/founders/iconFounder1.png",
      name: "ARUP DATTA",
      details:
        "Architect MAAA Life Member, FRAIC, MOAA, MAIBC, MSAA, FIIA, Project Management (Harvard)",
      poster: "/founders/arupPoster.webp",
      link: "/arup",
      text: "Arup Datta, MAA Life Member, FRAIC, MOAA, MAIBC, MSAA, FIIA, is an internationally acclaimed architect and the founder of Arup Datta Architect Ltd. (ADAL). A graduate of IIT Kharagpur, he brought his expertise to Canada in 1974, excelling in senior roles with leading firms before establishing ADAL in 1988. Under his leadership, ADAL has delivered award-winning projects across Canada and internationally, earning recognition for innovation and excellence in architecture, master planning, and interior design. Mr. Datta’s visionary approach continues to shape the global architectural landscape.",
    },
    {
      icon: "/founders/iconFounder2.png",
      name: "BRIAN DENNIS",
      poster: "/founders/brianPoster.webp",
      link: "/brian",
      text: "Brian Dennis, Senior Project Manager, brings over 25 years of experience in architectural technology and project management, specializing in renovations, alterations, and assessments. He has successfully delivered projects from small stores to multi-million-dollar developments, ensuring budgets and timelines are met. Brian excels in consultant coordination, quality control, and municipal permit approvals, aligning designs, costs, and schedules with client needs. ",
    },
    {
      icon: "/founders/iconFounder3.png",
      name: "CHRISTOPHER SAGSAGAT",
      poster: "/founders/CCHRISTOPHER-poster.webp",
      link: "/christopher",
      text: "With over 20 years of experience, Chris has contributed to numerous award-winning projects at ADAL. He collaborates with the Principal and Senior Architect on space programs and high-standard conceptual designs. Chris oversees all design stages and plays a key role in ensuring well-documented construction drawings during the Building Permit stage. His coordination ensures smooth project execution while maintaining top-tier quality across all deliverables.",
    },
  ];
  return (
    <>
      <div className="bg-white mt-20  text-mainColor ">
        {foundersData.map((founder, index) => (
          <React.Fragment key={index}>
            <FounderCard founder={founder} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Founders;
