import axios from "axios";
import React, { useEffect, useState } from "react";

import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate, useParams } from "react-router";

// Icons
import { BsPatchCheckFill } from "react-icons/bs";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/services/${id}`).then((res) => {
      console.log(res.data);
      setService(res.data);
    });
  }, [id]);

  return (
    <div>
      <div className="flex justify-start px-4 mt-6 md:m-6 md:px-12">
        <button
          onClick={() => navigate("/home")}
          className="px-6 py-2 text-gray-200 transition-all duration-200 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-500"
        >
          <MdKeyboardBackspace className="text-4xl" />
        </button>
      </div>
      <div className="px-4 py-12 md:px-20">
        <section className="flex flex-col-reverse items-center justify-around gap-8 md:flex-row md:gap-16">
          <div className="md:w-1/2">
            <h2 className="mb-8 font-serif text-3xl font-bold text-center text-gray-800 md:text-left md:text-5xl">
              {service.serviceName}
            </h2>
            <p className="text-justify text-gray-600">
              {service.serviceDetails}
            </p>
            <div className="mt-8">
              <h3 className="font-serif text-2xl font-semibold text-center text-gray-800 md:text-left md:text-3xl">
                Things you will get with us
              </h3>
              <div className="grid grid-cols-1 gap-2 mt-6 md:grid-cols-2">
                {service.serviceFeatures?.map((sf) => (
                  <div className="flex items-center gap-4 mb-2" key={sf}>
                    <p className="text-2xl text-green-500">
                      <BsPatchCheckFill />
                    </p>
                    <p className="text-gray-600">{sf}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6 md:flex-row">
              <button className="px-6 py-2 border border-gray-600 rounded">
                Starting at $
                {service.servicePrice === "145"
                  ? `${service.servicePrice}`
                  : `${service.servicePrice}/month`}
              </button>
              <button className="px-6 py-2 text-gray-200 transition-all duration-200 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-500">
                Book Now
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              className="block w-full mx-auto"
              src={service.serviceImage}
              alt={service.serviceName}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;
