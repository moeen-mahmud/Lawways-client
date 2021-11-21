import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";

const ServiceContainer = () => {
  // State
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/services").then((res) => {
      console.log(res.data);
      setServices(res.data);
    });
  }, []);

  return (
    <div className="my-32 text-center">
      <h2 className="mb-6 font-serif text-4xl font-bold text-gray-800">
        Learn More About Our Legal Plans
      </h2>
      <h3 className="text-lg font-semibold text-gray-500">
        We provide legal help for you, your family, or your business.
      </h3>
      <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-3 md:gap-10">
        {services.map((service) => (
          <SingleService key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceContainer;
