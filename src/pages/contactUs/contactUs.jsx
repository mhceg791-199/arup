import React from "react";
import ContactUsDetails from "../../components/contactUs/contactUsDetails/contactUSDetails";
import Map from "../../components/contactUs/map/Map";
import Form from "../../components/contactUs/form/Form";

function ContactUs() {
  return (
    <>
      <img
        className="h-[80vh] object-cover w-full"
        src="/contactUs/contactUs.webp"
        alt=""
      />

      <div className="text-center mt-20">
        <h1>CONTACT US</h1>
        <p className="text-xxxl font-semibold">Get in touch!</p>
      </div>
      <Form />

      <div className="grid md:grid-cols-2 grid-cols-1 md:h-screen mt-10 md:mt- text-black items-center md:px-10">
        <div className="col-span-2">
          <Map />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
