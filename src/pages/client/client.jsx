import React from "react";
import ClientCard from "../../components/shared/clientCard/clientCard";

function Client() {
  const clientDetails = [
    {
      img: "/clients/1.webp",
      title: "OUR APPROACH TO CLIENT COLLABORATION",
      text: "At ADAL, we are unwavering in our commitment to a design process that prioritizes the client as the cornerstone of every project. By taking the time to deeply understand our clients’ aspirations, we ensure that each project not only embodies their vision but also addresses the distinct needs of the communities it serves. Through clear communication and mutual understanding, we craft outcomes that are both impactful and enduring.",
    },
    {
      img: "/clients/22.webp",
      title: "TEAMWORK AND CLIENT ENGAGEMENT",
      text: "Innovation thrives when exceptional minds collaborate. At ADAL, we champion a synergistic, client-inclusive approach, fostering continuous dialogue with clients and stakeholders. This collaborative process allows us to refine concepts, overcome challenges, and co-create transformative solutions. By integrating creativity with practicality, we deliver projects that are not only visionary but also tailored for long-term success.",
    },
    {
      img: "/clients/3.webp",
      title: "COMMITMENT TO EXCELLENCE",
      text: "Exceeding expectations is at the core of our ethos. We combine meticulous attention to detail with a relentless pursuit of quality to deliver projects that stand as benchmarks of excellence. Our dedication to delivering superior outcomes drives every decision, ensuring each project exemplifies innovation, precision, and craftsmanship.",
    },
    {
      img: "/clients/4.webp",
      title: "SUSTAINABLE AND ADAPTIVE SOLUTIONS",
      text: "ADAL is committed to designing for the future. By embracing sustainable practices and integrating adaptive strategies, we ensure our projects are environmentally responsible and resilient. Our designs harmonize with their surroundings, contributing positively to the built environment while meeting the evolving demands of our clients and their communities.",
    },
  ];
  return (
    <>
      <div className="bg-mainColor py-20 md:px-10">
        <h1 className="text-xxl text-gold font-bold text-center mb-5">
          CLIENT-CENTRED COLLABORATION
        </h1>
        <p className="font-bold text-center md:w-3/4 m-auto">
          At ADAL, collaboration is the foundation of everything we do. Our
          approach is built on fostering open communication, understanding
          client objectives, and delivering outcomes that align seamlessly with
          their vision. We believe in creating strong partnerships, engaging all
          stakeholders throughout the project lifecycle, and tailoring solutions
          to meet unique needs. By prioritizing this level of collaboration, we
          consistently exceed expectations and deliver innovative, impactful
          designs that add lasting value to communities and businesses alike.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:px-20 px-5 py-10 bg-white gap-6">
        {clientDetails.map((client, index) => (
          <React.Fragment key={index}>
            <ClientCard client={client} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Client;
