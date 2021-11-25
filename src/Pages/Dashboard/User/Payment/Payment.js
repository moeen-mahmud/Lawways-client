import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Payment = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/orders/${orderId}`).then((res) => {
      console.log(res.data);
    });
  }, [orderId]);

  return (
    <div>
      <h1>This is user payment</h1>
    </div>
  );
};

export default Payment;
