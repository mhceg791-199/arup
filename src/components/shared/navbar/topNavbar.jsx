import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function TopNavbar({ listOfNavbar, closeDrawerTop }) {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-full !rounded-none  !mt-0 !bg-white shadow-none px-6 py-3">
      <div className="flex items-start flex-col justify-between text-blue-gray-900">
        <div className="flex justify-between w-full">
          <Link to="/" className="w-[20%] mb-5">
            <img className="w-3/4" src="/images/logo1.png" alt="ADAL TopNavbar" />
          </Link>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawerTop}>
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

        <div className="hidden lg:block">
          <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center md:gap-3 lg:gap-7">
            {listOfNavbar.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  to={item.link}
                  onClick={closeDrawerTop}
                  className="flex items-center  transition-colors text-mainColor font-semibold "
                >
                  {item.name}
                </Link>
              </React.Fragment>
            ))}
          </ul>{" "}
        </div>
      </div>
    </Navbar>
  );
}
