import React from "react";
import "./map.css";
function Map() {
  return (
    <>
      <div className=" mb-3 ">
        <iframe
          className="border-map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.8342179143774!2d-114.06809927644036!3d51.03768257171029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371701c0e04a583%3A0xf697b9f2e30f60af!2zMzM3IDE3IEF2ZSBTVyAybmQgRmxvb3IsIENhbGdhcnksIEFCIFQyUyAwQTXYjCDZg9mG2K_Ypw!5e0!3m2!1sar!2seg!4v1734938656311!5m2!1sar!2seg"
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
