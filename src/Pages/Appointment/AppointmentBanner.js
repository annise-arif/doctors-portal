import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bannerBg from "../../assets/images/bg.png";

const AppointmentBanner = ({date, setDate}) => {
  return (
    <div
    style={{
        background: `url(${bannerBg})`,
      }} className="hero min-h-screen">
      <div className="gap-20 hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:max-w-xl rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          />
          
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
