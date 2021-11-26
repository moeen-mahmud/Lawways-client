import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "@sweetalert/with-react";

import { IoMdTrash } from "react-icons/io";

const ManageService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://secret-plateau-62422.herokuapp.com/services")
      .then((res) => {
        setServices(res.data);
      });
  }, []);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, then the service will no longer available.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://secret-plateau-62422.herokuapp.com/services/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              swal("Service has been canceled", {
                icon: "success",
              });
              const newServices = services.filter((order) => order._id !== id);
              setServices(newServices);
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold text-gray-800">
        Manage all available services
      </h1>
      <div className="hidden grid-cols-4 gap-3 p-4 pb-2 mt-6 mb-4 border-b-2 lg:grid place-items-center">
        <h2 className="text-xl font-semibold text-gray-800">Service Image</h2>
        <h2 className="text-xl font-semibold text-gray-800">Service Name</h2>
        <h2 className="text-xl font-semibold text-gray-800">Service Charge</h2>
        <h2 className="text-xl font-semibold text-gray-800">Actions</h2>
      </div>
      {/* Loading users data */}
      {services.map((service) => (
        <div
          className="grid grid-cols-1 gap-3 p-4 my-4 text-center border shadow-xl lg:border-0 lg:shadow-none lg:grid-cols-4 place-items-center"
          key={service._id}
        >
          <img
            className="block w-1/2"
            src={service.serviceImage}
            alt={service.serviceName}
          />
          <p className="font-medium">{service.serviceName}</p>
          <p className="font-medium">${service.servicePrice}</p>
          <button
            onClick={() => handleDelete(service._id)}
            className="flex items-center gap-3 px-4 py-2 text-2xl text-red-500 transition-all border-2 rounded-full hover:text-red-700"
          >
            <span className="text-lg">Delete</span> <IoMdTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
