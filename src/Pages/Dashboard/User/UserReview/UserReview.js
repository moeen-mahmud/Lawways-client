import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import swal from "@sweetalert/with-react";

const UserReview = () => {
  const { user } = useAuth();

  const [reviewInfo, setReviewInfo] = useState({});

  const handleReviewInfo = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newReviewInfo = { ...reviewInfo };
    newReviewInfo[field] = value;
    setReviewInfo(newReviewInfo);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://secret-plateau-62422.herokuapp.com/reviews", {
        reviewerName: user.displayName,
        reviewerDesignation: reviewInfo.designation,
        reviewerImage: user.photoURL ? user.photoURL : "",
        reviewerDetails: reviewInfo.message,
      })
      .then((res) => {
        if (res.data.insertedId) {
          swal({
            title: "Thanks!",
            text: "We appreciate your honest review.",
            icon: "success",
            button: false,
          }).then(() => {
            window.location.reload();
          });
        }
      });
  };

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold text-gray-800">
        Write a review!
      </h1>
      <div className="mt-4 md:w-1/2">
        <form onSubmit={handleReviewSubmit} className="flex flex-col gap-4">
          <input
            className="p-2 text-gray-600 border rounded"
            type="text"
            defaultValue={user.displayName}
          />
          <input
            className="p-2 text-gray-600 border rounded"
            type="email"
            defaultValue={user.email}
          />
          <input
            className="p-2 text-gray-600 border rounded"
            type="text"
            name="designation"
            placeholder="Designation"
            defaultValue=""
            required
            onBlur={handleReviewInfo}
          />
          <textarea
            className="p-2 text-gray-600 border rounded "
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            defaultValue=""
            required
            onBlur={handleReviewInfo}
          />
          <button
            type="submit"
            className="max-w-xs px-6 py-2 text-gray-200 bg-gray-800 rounded active:bg-gray-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserReview;
