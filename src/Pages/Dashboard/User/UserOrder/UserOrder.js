import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import SingleOrder from "./SingleOrder";
import swal from "@sweetalert/with-react";

const UserOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(
        `https://secret-plateau-62422.herokuapp.com/orders?email=${user.email}`
      )
      .then((res) => {
        setOrders(res.data);
      });
  }, [user.email]);

  const handleDeleteOrder = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once canceled you may select this service again from service page.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://secret-plateau-62422.herokuapp.com/orders/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              swal("Service has been canceled", {
                icon: "success",
              });
              const newOrders = orders.filter((order) => order._id !== id);
              setOrders(newOrders);
            }
          });
      }
    });
  };

  return (
    <div>
      {orders.length > 0 && (
        <h1 className="mb-4 font-serif text-3xl font-semibold">
          Selected {orders.length > 1 ? "services" : "service"}
        </h1>
      )}
      {orders.length === 0 ? (
        <div className="mt-8">
          <h1 className="text-3xl">Currently, you have no selected service!</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {orders.map((order) => (
            <SingleOrder
              key={order._id}
              order={order}
              handleDeleteOrder={handleDeleteOrder}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserOrder;
