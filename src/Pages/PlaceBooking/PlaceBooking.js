import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import BackButton from "../../components/BackButton/BackButton";
import useAuth from "../../hooks/useAuth";
import swal from "@sweetalert/with-react";
const PlaceBooking = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [service, setService] = useState({});
  const [orderData, setOrderData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://secret-plateau-62422.herokuapp.com/services/${id}`)
      .then((res) => {
        setService(res.data);
      });
  }, [id]);

  const handleCancelService = () => {
    swal({
      title: "Are you sure?",
      text: "You can always select the service later",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willCancel) => {
      if (willCancel) {
        navigate("/");
      }
    });
  };

  const handleOrderData = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newOrderData = { ...orderData };
    newOrderData[field] = value;
    setOrderData(newOrderData);
  };

  const handleConfirmService = (e) => {
    e.preventDefault();

    axios
      .post("https://secret-plateau-62422.herokuapp.com/orders", {
        name: user.displayName,
        email: user.email,
        address: orderData.address,
        userAge: orderData.age,
        userPhone: orderData.phone,
        orderItem: service.serviceName,
        orderPrice: service.servicePrice,
        orderImage: service.serviceImage,
        orderStatus: "Pending",
      })
      .then((res) => {
        if (res.data.insertedId) {
          swal({
            title: "Order has been submitted!",
            text: "Your order status will updated soon.",
            icon: "success",
          }).then(() => navigate("/"));
        }
      });
  };

  return (
    <div>
      <BackButton />
      <div className="flex flex-col-reverse gap-4 px-4 py-4 mt-4 md:gap-32 md:flex-row md:mt-8 md:px-20">
        <section className="mt-8 md:w-3/4 md:mt-0">
          <h2 className="font-serif text-3xl font-bold text-gray-800">
            Your Details
          </h2>
          <form
            onSubmit={handleConfirmService}
            className="flex flex-col gap-4 mt-4"
          >
            <div className="flex flex-col justify-between gap-4 md:gap-0 md:flex-row">
              <div className="flex flex-col gap-2">
                <label
                  className="px-2 text-lg font-semibold text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="p-2 text-gray-500 border rounded"
                  type="text"
                  name="name"
                  defaultValue={user.displayName}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="px-2 text-lg font-semibold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="p-2 text-gray-500 border rounded"
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  disabled
                />
              </div>
            </div>
            <label
              className="px-2 text-lg font-semibold text-gray-700"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              className="p-2 text-gray-500 border rounded"
              name="address"
              cols="20"
              rows="5"
              placeholder="171, Nikunja, Dhaka"
              required
              onBlur={handleOrderData}
            />
            <div className="flex flex-col justify-between gap-4 md:gap-0 md:flex-row">
              <div className="flex flex-col gap-2">
                <label
                  className="px-2 text-lg font-semibold text-gray-700"
                  htmlFor="age"
                >
                  Age
                </label>
                <input
                  className="p-2 text-gray-500 border rounded"
                  type="number"
                  name="age"
                  min="18"
                  placeholder="18"
                  required
                  onBlur={handleOrderData}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="px-2 text-lg font-semibold text-gray-700"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="p-2 text-gray-500 border rounded"
                  type="number"
                  name="phone"
                  min="10"
                  placeholder="11XXXXXXX"
                  required
                  onBlur={handleOrderData}
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 mt-4 md:gap-6">
              <button
                type="submit"
                className="px-6 py-2 text-gray-200 bg-gray-800 rounded"
              >
                Confirm
              </button>
            </div>
          </form>
          <div className="-mt-10 ml-28 md:ml-48">
            <button
              onClick={handleCancelService}
              className="px-6 py-2 transition-all duration-200 border border-gray-700 rounded active:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </section>
        <section>
          <h2 className="font-serif text-3xl font-bold text-center text-gray-800 md:text-left">
            Service Details
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 mt-4 md:flex-row">
            <div>
              <img
                className="block w-full mx-auto rounded"
                src={service.serviceImage}
                alt={service.serviceName}
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                {service.serviceName}
              </h3>
              <p className="text-gray-600">{service.serviceBrief}</p>
              <p className="mt-4 text-lg font-medium text-gray-800">
                Service charge ${service.servicePrice}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlaceBooking;
