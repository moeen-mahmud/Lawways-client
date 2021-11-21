// React
import React from "react";

// Hero image
import HeroBG from "../../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-4 mb-12 text-gray-100 bg-gray-800 md:flex-row">
      <div className="md:w-1/2">
        <img src={HeroBG} alt="Hero Background" />
      </div>
      <div className="px-4 py-4 md:w-1/2 ">
        <h1 className="mb-6 font-serif text-4xl font-semibold leading-relaxed text-center md:leading-normal md:text-left">
          A Law Firm At Your Palm
        </h1>
        <p className="leading-relaxed text-justify md:pr-8">
          When you need legal help,{" "}
          <span className="font-bold text-gray-200">Lawways</span> is here. Our
          network of experienced lawyers can provide advice on legal issues for
          you, your family, or your business, all directly through our app. With
          no hourly fee or retainer, we help you worry less and live more. What
          are you waiting for? Join now and speak with a lawyer in as little as
          4 hours after initial contact.
        </p>
      </div>
    </section>
  );
};

export default Hero;
