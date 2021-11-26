import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

import { IoMdTrash } from "react-icons/io";
import { FcSynchronize } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";

const ManageUserService = () => {
  const [userServices, setUserServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://secret-plateau-62422.herokuapp.com/orders")
      .then((res) => {
        setUserServices(res.data);
      });
  }, []);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, then user won't be able to see his selected service",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://secret-plateau-62422.herokuapp.com/orders/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              swal("User order has been deleted successfully", {
                icon: "success",
              });
              const newUserServices = userServices.filter(
                (order) => order._id !== id
              );
              setUserServices(newUserServices);
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    swal({
      title: "Want to update?",
      text: "Status will be changed to approved",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willUpdate) => {
      if (willUpdate) {
        axios
          .put(`https://secret-plateau-62422.herokuapp.com/orders/${id}`, {
            orderStatus: "Approved",
          })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              swal({
                title: "Nice!",
                text: "Service status updated successfully",
                icon: "success",
              }).then((okay) => {
                if (okay || !okay) {
                  window.location.reload();
                }
              });
            } else {
              swal("Service status already updated!", {
                icon: "info",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold text-gray-800">
        Manage the users services
      </h1>
      <div className="hidden grid-cols-8 gap-4 p-4 pb-2 mt-6 mb-4 border-b-2 lg:grid place-items-center">
        <h2 className="font-semibold text-gray-800">Name</h2>
        <h2 className="font-semibold text-gray-800">Email</h2>
        <h2 className="font-semibold text-gray-800">Address</h2>
        <h2 className="font-semibold text-gray-800">Age</h2>
        <h2 className="font-semibold text-gray-800">Service</h2>
        <h2 className="font-semibold text-gray-800">Payment</h2>
        <h2 className="font-semibold text-gray-800">Charge</h2>
        <h2 className="font-semibold text-gray-800">Actions</h2>
      </div>
      {userServices.map((service) => (
        <div
          className="grid grid-cols-1 gap-4 p-4 my-4 text-center border rounded shadow-xl lg:border-b-2 lg:shadow-none lg:grid-cols-8 place-items-center"
          key={service._id}
        >
          <p className="text-xs font-medium">{service.name}</p>
          <p className="text-xs font-medium">{service.email}</p>
          <p className="text-xs font-medium">{service.address}</p>
          <p className="text-xs font-medium">{service.userAge}</p>
          <p className="text-xs font-medium">{service.orderItem}</p>
          <p className="text-xs font-medium">
            {service.payment ? "Paid" : "Not Paid"}
          </p>
          <p className="text-xs font-medium">${service.orderPrice}</p>
          <div className="flex flex-col items-center justify-between gap-2">
            <button
              onClick={() => handleUpdate(service._id)}
              className="flex items-center gap-3 px-4 py-2 transition-all border-2 rounded-full"
            >
              <span
                className={`text-xs ${
                  service.orderStatus === "Pending"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                {service.orderStatus}
              </span>
              {service.orderStatus === "Pending" ? (
                <FcSynchronize />
              ) : (
                <FaCheckCircle className="text-green-600" />
              )}
            </button>
            <button
              onClick={() => handleDelete(service._id)}
              className="flex items-center gap-3 px-4 py-2 text-red-500 transition-all border-2 rounded-full hover:text-red-700"
            >
              <span className="text-xs">Delete</span> <IoMdTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageUserService;
