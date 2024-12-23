import React, { useEffect } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { TopNavbar } from "./topNavbar";
import RightNavbar from "./rightNavbar";
import { Link } from "react-router-dom";

export function DrawerPlacement() {
  const [openTop, setOpenTop] = React.useState(false);
  const [listOfNavbar, setListOfNavbar] = React.useState([
    {
      name: "About US",
      link: "/about",
    },
    {
      name: "Our founders",
      link: "/founders",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Global recognition",
      link: "/globalRecognations",
    },
    {
      name: "Sustainability",
      link: "/sustainability",
    },
    {
      name: "Client centred collaboration",
      link: "/client",
    },
    {
      name: "Careers",
      link: "/careers",
    },
    {
      name: "Contact us",
      link: "/contactUs",
    },
  ]);
  const [openRight, setOpenRight] = React.useState(false);
  const [isScreenMobil, setIsScreenMobil] = React.useState(false);
  const [dispalyFromTop, setDisplayFromTop] = React.useState(false);
  const [isTabletScreen, setIsTabletScreen] = React.useState(false);
  useEffect(() => {
    if (window.screen.width < 960) {
      setDisplayFromTop(false);
    } else {
      setDisplayFromTop(true);
    }
  }, [window.screen.width]);

  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <React.Fragment>
      <div className="flex justify-between p-5 z-50 bg-transparent absolute top-0 left-0 right-0">
        <Link className="lg:w-[12%] md:w-[15%] w-[25%] " to="/">
          <img className=" object-contain" src="/images/logo2.png" alt="" />
        </Link>
        <img
          className="lg:w-[3%] md:w-[5%] w-[10%] object-contain cursor-pointer"
          onClick={dispalyFromTop ? openDrawerTop : openDrawerRight}
          src="/images/burgerIcon.png"
          alt=""
        />
      </div>
      <Drawer
        placement="top"
        open={openTop}
        onClose={closeDrawerTop}
        className="  !h-0"
      >
        <TopNavbar
          listOfNavbar={listOfNavbar}
          closeDrawerTop={closeDrawerTop}
        />
      </Drawer>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className={`p-4  ${openRight ? "!max-w-sm !min-w-xsm " : ""}`}
      >
        <RightNavbar
          listOfNavbar={listOfNavbar}
          closeDrawerRight={closeDrawerRight}
        />
      </Drawer>
    </React.Fragment>
  );
}
