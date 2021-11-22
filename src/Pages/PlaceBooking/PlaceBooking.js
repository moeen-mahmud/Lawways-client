import React from "react";
import { useParams } from "react-router";

const PlaceBooking = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>This is purchase page</h1>
    </div>
  );
};

export default PlaceBooking;
