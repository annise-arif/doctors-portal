import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass=" bg-gradient-to-r from-secondary to-primary"
        icon={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Our Locations"
        bgClass="bg-[#3A4256]"
        icon={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us"
        bgClass=" bg-gradient-to-r from-secondary to-primary"
        icon={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
