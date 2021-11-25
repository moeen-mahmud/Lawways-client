import React from "react";
import "../../../../App.css";
const AddLawyer = () => {
  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold text-gray-800">
        Add a lawyer
      </h1>
      <div className="mt-6 md:w-1/3">
        <form>
          <div className="flex flex-col gap-4 mb-4">
            <input
              className="p-2 text-gray-600 border rounded"
              type="text"
              name="name"
              placeholder="Lawyer Name"
              required
            />
            <textarea
              className="p-2 text-gray-600 border rounded"
              name="details"
              placeholder="Lawyer About"
              rows="5"
              required
            />
            <input
              className="text-gray-600 border rounded"
              type="file"
              name="image"
              accept="image/*"
            />
          </div>
          <button className="py-3 text-gray-200 bg-gray-800 rounded px-14 active:bg-gray-600">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLawyer;
