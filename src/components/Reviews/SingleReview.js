import React from "react";

import ReviewPlaceholderImage from "../../assets/review-placeholder.jpg";

const SingleReview = ({ review }) => {
  const { reviewerName, reviewerImage, reviewerDesignation, reviewerDetails } =
    review;

  return (
    <div
      style={{
        backgroundImage: `url("${
          reviewerImage ? reviewerImage : ReviewPlaceholderImage
        }")`,
        minWidth: "300px",
        minHeight: "500px",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        borderRadius: "5px",
      }}
    >
      <div className="absolute bottom-0 w-full p-3 bg-gray-800 rounded-b">
        <h5 className="text-xs leading-relaxed text-gray-200 md:text-base">
          "{reviewerDetails}"
        </h5>
        <p className="mt-4 text-sm italic leading-relaxed text-gray-400 md:text-base">
          - {reviewerName}, {reviewerDesignation}
        </p>
      </div>
    </div>
  );
};

export default SingleReview;
