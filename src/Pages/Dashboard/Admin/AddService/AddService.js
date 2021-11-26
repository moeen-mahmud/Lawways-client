import axios from "axios";
import React, { useState } from "react";

import swal from "@sweetalert/with-react";

const AddService = () => {
  const [serviceData, setServiceData] = useState({});
  const [featuresData, setFeaturesData] = useState({});

  const handleServiceData = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newServiceData = { ...serviceData };
    newServiceData[field] = value;
    setServiceData(newServiceData);
  };

  const handleFeatureData = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newFeaturesData = { ...featuresData };
    newFeaturesData[field] = value;
    setFeaturesData(newFeaturesData);
  };

  const handleAddService = (e) => {
    e.preventDefault();

    axios
      .post("https://secret-plateau-62422.herokuapp.com/services", {
        serviceName: serviceData.serviceName,
        serviceImage: serviceData.serviceImage,
        serviceBrief: serviceData.serviceBrief,
        serviceDetails: serviceData.serviceDetails,
        serviceFeatures: featuresData,
        servicePrice: serviceData.servicePrice,
      })
      .then((res) => {
        if (res.data.insertedId) {
          swal({
            title: "Nice!",
            text: "Service added successfully",
            icon: "success",
          }).then((okay) => {
            if (okay) {
              window.location.reload();
            }
          });
        }
      });
  };

  return (
    <div className="mb-12">
      <h1 className="font-serif text-3xl font-semibold text-gray-800">
        Add A Service
      </h1>
      <div className="mt-4 md:w-1/2">
        <form onSubmit={handleAddService} className="flex flex-col gap-4">
          <input
            className="p-2 text-gray-700 border-2 rounded"
            type="text"
            name="serviceName"
            placeholder="Service Name"
            required
            onBlur={handleServiceData}
          />
          <input
            className="p-2 text-gray-700 border-2 rounded"
            type="url"
            name="serviceImage"
            placeholder="Image Link"
            required
            onBlur={handleServiceData}
          />
          <textarea
            className="p-2 text-gray-700 border-2 rounded"
            name="serviceBrief"
            placeholder="Brief Description"
            rows="3"
            required
            onBlur={handleServiceData}
          />
          <textarea
            className="p-2 text-gray-700 border-2 rounded"
            name="serviceDetails"
            placeholder="Details Description"
            rows="7"
            required
            onBlur={handleServiceData}
          />
          <span className="font-semibold text-gray-500">Feature list</span>
          <div className="grid grid-cols-2 gap-2">
            <input
              className="p-2 text-gray-700 border-2 rounded"
              type="text"
              name="feature1"
              placeholder="#1"
              required
              onBlur={handleFeatureData}
            />
            <input
              className="p-2 text-gray-700 border-2 rounded"
              type="text"
              name="feature2"
              placeholder="#2"
              required
              onBlur={handleFeatureData}
            />
            <input
              className="p-2 text-gray-700 border-2 rounded"
              type="text"
              name="feature3"
              placeholder="#3"
              required
              onBlur={handleFeatureData}
            />
            <input
              className="p-2 text-gray-700 border-2 rounded"
              type="text"
              name="feature4"
              placeholder="#4"
              required
              onBlur={handleFeatureData}
            />
            <input
              className="p-2 text-gray-700 border-2 rounded"
              type="text"
              name="feature5"
              placeholder="#5"
              required
              onBlur={handleFeatureData}
            />
          </div>
          <input
            className="p-2 text-gray-700 border-2 rounded"
            type="number"
            name="servicePrice"
            placeholder="$Charge"
            required
            onBlur={handleServiceData}
          />
          <button
            type="submit"
            className="px-6 py-2 text-gray-200 bg-gray-800 rounded md:w-1/3"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
