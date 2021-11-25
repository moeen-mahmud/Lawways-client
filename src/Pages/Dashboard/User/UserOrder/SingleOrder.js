import React from "react";
import { useNavigate } from "react-router";

const SingleOrder = ({ order, handleDeleteOrder }) => {
  const { _id, orderImage, orderItem, orderPrice, orderStatus, payment } =
    order;
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4 px-2 py-4 rounded shadow-lg">
      <div className="w-1/2">
        <img
          className="block mx-auto rounded-lg"
          src={orderImage}
          alt={orderItem}
        />
      </div>
      <div className="w-full">
        <h1 className="mb-2 text-lg font-semibold">{orderItem}</h1>
        <p className="mb-2 text-sm text-gray-700">
          Charge: ${orderPrice === "145" ? orderPrice : `${orderPrice}/month`}
        </p>
        <span
          className={
            orderStatus === "Pending"
              ? "border-2 border-yellow-600 py-1 px-2 rounded text-sm text-yellow-600"
              : "border-2 border-green-600 py-1 px-2 rounded text-sm text-green-600"
          }
        >
          {orderStatus}
        </span>
        <div className="flex gap-4 mt-4">
          {payment ? (
            <p className="px-2 py-1 text-sm text-green-600 border-2 border-green-600 rounded">
              Paid
            </p>
          ) : (
            <button
              onClick={() => navigate(`/dashboard/payment/${_id}`)}
              className="px-6 py-1 text-sm text-gray-100 bg-indigo-600 rounded active:bg-indigo-900"
            >
              Pay
            </button>
          )}

          <button
            onClick={() => handleDeleteOrder(_id)}
            className="px-4 py-1 text-sm text-gray-100 bg-yellow-600 rounded active:bg-yellow-900"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
