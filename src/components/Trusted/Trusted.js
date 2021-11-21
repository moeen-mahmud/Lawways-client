import React from "react";

// Images
import forbesLogo from "../../assets/forbes.png";
import huffpostLogo from "../../assets/huffpost.png";
import fastCompanyLogo from "../../assets/fast-company.png";
import fitbitLogo from "../../assets/fitbit.png";

const Trusted = () => {
  return (
    <section className="my-32">
      <h2 className="font-serif text-2xl font-bold text-center text-gray-800 md:text-4xl">
        Top company trusts us
      </h2>
      <div className="flex flex-col items-center gap-4 mt-16 md:flex-row">
        <img
          className="block w-1/2 mx-auto h-1/4 md:w-1/5 md:h-1/5"
          src={forbesLogo}
          alt="Forbes"
        />
        <img
          className="block w-1/2 mx-auto h-1/4 md:w-1/5 md:h-1/5"
          src={huffpostLogo}
          alt="Huffpost"
        />
        <img
          className="block w-1/2 mx-auto h-1/4 md:w-1/5 md:h-1/5"
          src={fastCompanyLogo}
          alt="Fast Company"
        />
        <img
          className="block w-1/2 mx-auto h-1/4 md:w-1/5 md:h-1/5"
          src={fitbitLogo}
          alt="Fit Bit"
        />
      </div>
    </section>
  );
};

export default Trusted;
