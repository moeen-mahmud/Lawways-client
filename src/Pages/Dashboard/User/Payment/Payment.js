import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Payment = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/orders/${orderId}`).then((res) => {
      setOrder(res.data);
    });
  }, [orderId]);

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold text-gray-800">
        Billing Details
      </h1>
      <div className="px-2 py-4 my-4 border rounded md:w-1/2">
        <img
          className="block w-1/3 mb-4 rounded"
          src={order.orderImage}
          alt={order.orderName}
        />
        <h2 className="my-2 text-xl font-semibold text-gray-600">
          Selected Service
        </h2>
        <p className="font-medium text-gray-800 uppercase">{order.orderItem}</p>
        <h2 className="my-2 text-xl font-semibold text-gray-600">
          Service Charge
        </h2>
        <p className="font-medium text-gray-800 uppercase">
          $
          {order.orderPrice === "145"
            ? order.orderPrice
            : `${order.orderPrice}/month`}
        </p>
      </div>
    </div>
  );
};

export default Payment;
