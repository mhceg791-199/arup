import React from "react";
import ContactUsDetails from "../../components/contactUs/contactUsDetails/contactUSDetails";
import Map from "../../components/contactUs/map/Map";

function ContactUs() {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 h-screen mt-10 md:mt- text-black items-center px-10">
        <div className="col-span-1">
          <ContactUsDetails />
        </div>
        <div className="col-span-1">
          <Map />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
