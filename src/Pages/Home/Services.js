import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import treatment from "../../assets/images/treatment.png";
import whitening from "../../assets/images/whitening.png";
import PrimaryButton from "../Shared/PrimaryButton";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "This the best treatment fluoride we all time given healthy treatment",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "This the best treatment fluoride we all time given healthy treatment",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "This the best treatment fluoride we all time given healthy treatment",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl font-bold mt-4"> Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-4 mt-16 justify-items-center">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div>
        <div className="hero min-h-screen bg-white">
          <div className="hero-content flex-col lg:flex-row grid gap-12 grid-cols-2">
            <img src={treatment} className=" rounded-lg shadow-2xl " />
            <div className="m-4">
              <h1 className="font-bold lg:text-5xl">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as 
              </p>
              <PrimaryButton>Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
