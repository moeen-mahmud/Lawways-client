import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JvvdnDU0PgBwZxqYuJcsCKEAUkKTTkLF0ZcQCXP1KEVLXmBvm6VjsZqwNCNyUujniFE7DiTAgClkWvn7cQmMmqO00IwWt9S1i"
);

const Payment = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    axios
      .get(`https://secret-plateau-62422.herokuapp.com/orders/${orderId}`)
      .then((res) => {
        setOrder(res.data);
      });
  }, [orderId]);

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold text-gray-800">
        Billing Details
      </h1>
      <div className="flex gap-4 px-2 py-4 my-4 border rounded md:w-1/2">
        <div className="md:w-1/3">
          <img
            className="block rounded"
            src={order.orderImage}
            alt={order.orderName}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Selected Service
          </h2>
          <p className="font-medium text-gray-600 uppercase">
            {order.orderItem}
          </p>
          <h2 className="my-2 text-xl font-semibold text-gray-800">
            Service Charge
          </h2>
          <p className="font-medium text-gray-600 uppercase">
            $
            {order.orderPrice === "145"
              ? order.orderPrice
              : `${order.orderPrice}/month`}
          </p>
        </div>
      </div>
      {order?.orderPrice && (
        <div className="px-2 py-4 border rounded md:w-2/4">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      )}
    </div>
  );
};

export default Payment;
