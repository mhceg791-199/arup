import React, { useContext } from "react";
import "./serviceCard.css";
import { useNavigate } from "react-router-dom";
import { projectContext } from "../../../context/projectsContext";
function ServiceCard({ img, name, text, link }) {
  const { term, setTerm } = useContext(projectContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="col-span-1">
        <div className="relative flex  flex-col animation  justify-end h-[50vh]">
          {/* Image container */}
          <div
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
              backgroundSize: "cover", // Ensures the image covers the container
              backgroundRepeat: "no-repeat",
            }}
            className="absolute  w-full h-full"
          ></div>

          {/* Overlay content */}
          <div className="relative p-5  translate-y-1  changeBg text-white w-full">
            <p className="text-lg mb-2 font-bold">{name}</p>
            <p
              onClick={() => {
                setTerm({
                  ...term,
                  industry: { text: "commercial" },
                });
                navigate("/projects");
              }}
              className="text-base cursor-pointer text-gold"
            >
              LEARN MORE
            </p>
            <p className="mt-3 text-base">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
