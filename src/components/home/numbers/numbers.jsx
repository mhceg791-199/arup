import React from "react";
import NumberCard from "../../shared/numberCard/numberCard";

function Numbers() {
  const numbersDetails = [
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
      <div className="grid md:grid-cols-2  grid-cols-1 py-16 gap-6">
        <div className="col-span-1 flex items-center">
          <p className="font-bold text-xl md:px-10">
            CREATING ARCHITECTURE IS A PROCESS OF STRIVING FOR EXCELLENCE, FOR
            THE PEOPLE, BY THE PEOPLE
          </p>
        </div>
        <div className="col-span-1 ">
          <div className="grid grid-cols-2 gap-3">
            {numbersDetails.map((item, index) => (
              <React.Fragment key={index}>
                <NumberCard
                  text={item.text}
                  number={item.number}
                  time={item.time}
                  icon={item.icon}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Numbers;
