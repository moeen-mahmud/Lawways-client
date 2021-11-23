import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import SingleOrder from "./SingleOrder";

const UserOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => {
        setOrders(res.data);
      });
  }, [user.email]);

  return (
    <div>
      <h1 className="mb-4 font-serif text-3xl font-semibold">My orders</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {orders.map((order) => (
          <SingleOrder key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default UserOrder;
