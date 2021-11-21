import React from "react";
import { useNavigate } from "react-router";

const SingleService = ({ service }) => {
  const { _id, serviceName, serviceBrief, servicePrice } = service;

  const navigate = useNavigate();

  return (
    <div className="px-8 py-6 rounded shadow-lg">
      <section className="py-4 border-b-2 border-gray-300">
        <h2 className="font-serif text-3xl font-semibold text-gray-800">
          {serviceName}
        </h2>
      </section>
      <section className="h-40 p-4 mt-2 text-justify">
        <p className="font-medium leading-relaxed text-gray-500">
          {serviceBrief}
        </p>
      </section>
      <section className="px-4 text-justify">
        <h4 className="text-xl font-semibold text-center text-gray-800">
          Starting at $
          {servicePrice === "145" ? `${servicePrice}` : `${servicePrice}/month`}
        </h4>
      </section>
      <section className="mt-4">
        <button
          onClick={() => navigate(`/services/${_id}`)}
          className="px-6 py-2 text-gray-200 transition-all duration-500 bg-gray-800 rounded hover:bg-gray-600 active:bg-gray-400"
        >
          Learn More
        </button>
      </section>
    </div>
  );
};

export default SingleService;
