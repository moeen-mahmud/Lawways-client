import React from "react";

const SingleLawyer = ({ lawyer }) => {
  const { lawyerName, lawyerImage, lawyerDetails } = lawyer;

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <section className="w-full">
        <img
          className="block w-full mx-auto rounded"
          src={lawyerImage}
          alt={lawyerName}
        />
      </section>
      <section>
        <h3 className="mb-8 font-serif text-3xl font-bold text-gray-800">
          {lawyerName}
        </h3>
        <p>{lawyerDetails}</p>
      </section>
    </div>
  );
};

export default SingleLawyer;
