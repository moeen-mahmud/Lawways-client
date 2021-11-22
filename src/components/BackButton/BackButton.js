import React from "react";

import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-start mt-6 md:px-12">
      <button
        onClick={() => navigate("/home")}
        className="px-6 py-2 text-2xl text-gray-800"
      >
        <MdKeyboardBackspace className="text-4xl" />
      </button>
    </div>
  );
};

export default BackButton;
