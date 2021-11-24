import React from "react";

const AddService = () => {
  return (
    <div className="mb-12">
      <h1 className="font-serif text-3xl font-semibold text-gray-800">
        Add A Service
      </h1>
      <div className="mt-4 md:w-1/2">
        <form className="flex flex-col gap-4">
          <input
            className="p-2 text-gray-700 border-2 rounded"
            type="text"
            name="serviceName"
            placeholder="Service Name"
            required
          />
          <input
            className="p-2 text-gray-700 border-2 rounded"
            type="url"
            name="serviceImage"
            placeholder="Image Link"
            required
          />
          <textarea
            className="p-2 text-gray-700 border-2 rounded"
            name="serviceBrief"
            placeholder="Brief Description"
            rows="3"
            required
          />
          <textarea
            className="p-2 text-gray-700 border-2 rounded"
            name="serviceDetails"
            placeholder="Details Description"
            rows="7"
            required
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              className="p-2 text-gray-700 border-2 rounded"
              type="text"
              name="feature1"
              placeholder="#1"
              required
            />
            <input
              className="p-2 text-gray-700 border-2 rounded"
              type="text"
              name="feature2"
              placeholder="#2"
              required
            />
            <input
              className="p-2 text-gray-700 border-2 rounded"
              type="text"
              name="feature3"
              placeholder="#3"
              required
            />
            <input
              className="p-2 text-gray-700 border-2 rounded"
              type="text"
              name="feature4"
              placeholder="#4"
              required
            />
            <input
              className="p-2 text-gray-700 border-2 rounded"
              type="text"
              name="feature5"
              placeholder="#5"
              required
            />
          </div>
          <input
            className="p-2 text-gray-700 border-2 rounded"
            type="number"
            name="servicePrice"
            placeholder="$Charge"
            required
          />
          <button className="px-6 py-2 text-gray-200 bg-gray-800 rounded md:w-1/3">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
