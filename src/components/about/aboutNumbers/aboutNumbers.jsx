import React from "react";
import NumberCard from "../../shared/numberCard/numberCard";

function AboutNumbers() {
  const numberDetails = [
    {
      text: "ESTABLISHED",
      number: "1988",
      time: "100000",
    },
    {
      text: "YEARS OF EXPERTISE",
      number: "40",
      icon: "+",
      time: "10000",
    },
    {
      text: "COUNTRIES",
      number: "10",
      icon: "+",
      time: "5000",
    },
    {
      text: "PROJECTS",
      number: "1000",
      icon: "+",
      time: "50000",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-4 bg-white text-mainColor gap-5 py-10 md:px-20">
        {numberDetails.map(({ text, number, icon, time }, index) => (
          <React.Fragment key={index}>
            <NumberCard
              text={text}
              number={number}
              icon={icon}
              time={time}
              isHover={false}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default AboutNumbers;
