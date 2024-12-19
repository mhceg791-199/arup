import React from "react";
import "./map.css";
function Map() {
  return (
    <>
      <div className=" mb-3 ">
        <iframe
          className="border-map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.6814047877524!2d-114.06868087644057!3d51.04050477171092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371701da500ff39%3A0xeae3aa8bbbbe6e56!2zMTMwMiA0IFN0IFNXLCBDYWxnYXJ5LCBBQiBUMlIgMFg42Iwg2YPZhtiv2Kc!5e0!3m2!1sar!2seg!4v1732109465775!5m2!1sar!2seg"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
export default Map;
