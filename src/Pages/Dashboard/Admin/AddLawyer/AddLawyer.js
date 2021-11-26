import axios from "axios";
import React, { useState } from "react";
import swal from "@sweetalert/with-react";
import "../../../../App.css";
const AddLawyer = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState(null);

  const handleAddLawyer = (e) => {
    e.preventDefault();

    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append("lawyerName", name);
    formData.append("lawyerImage", image);
    formData.append("lawyerDetails", details);

    axios
      .post("https://secret-plateau-62422.herokuapp.com/lawyers", formData)
      .then((res) => {
        if (res.data.insertedId) {
          swal({
            title: "Great!",
            text: "The lawyer added successfully",
            icon: "success",
          }).then((onClose) => {
            if (onClose) {
              window.location.reload();
            }
          });
        }
      });
  };

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold text-gray-800">
        Add a lawyer
      </h1>
      <div className="mt-6 md:w-1/3">
        <form onSubmit={handleAddLawyer}>
          <div className="flex flex-col gap-4 mb-4">
            <input
              className="p-2 text-gray-600 border rounded"
              type="text"
              name="name"
              placeholder="Lawyer Name"
              required
              onBlur={(e) => setName(e.target.value)}
            />
            <textarea
              className="p-2 text-gray-600 border rounded"
              name="details"
              placeholder="Lawyer About"
              rows="5"
              required
              onBlur={(e) => setDetails(e.target.value)}
            />
            <input
              className="text-gray-600 border rounded"
              type="file"
              name="image"
              accept="image/*"
              onBlur={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            className="py-3 text-gray-200 bg-gray-800 rounded px-14 active:bg-gray-600"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLawyer;
