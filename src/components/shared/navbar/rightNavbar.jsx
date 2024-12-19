import { IconButton, Typography } from "@material-tailwind/react";
import React from "react";

function RightNavbar({ listOfNavbar, closeDrawerRight }) {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <p></p>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawerRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      {listOfNavbar.map((item, index) => (
        <React.Fragment key={index}>
          <Typography
            color="gray"
            className="mb-8 pr-4 text-start text-mainColor text-base font-bold"
          >
            {item.name}
          </Typography>
        </React.Fragment>
      ))}
    </>
  );
}

export default RightNavbar;
