import React from "react";

import { MdWifiCalling } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center justify-around py-16 mt-32 text-gray-200 bg-gray-800 md:flex-row">
      <div className="flex items-center gap-4 transition-all duration-500 transform cursor-pointer hover:text-gray-400 hover:scale-95">
        <MdWifiCalling className="text-6xl" />
        <p className="text-lg font-semibold">Call Us!</p>
      </div>
      <div className="flex items-center gap-4 transition-all duration-500 transform cursor-pointer hover:text-gray-400 hover:scale-95">
        <MdChat className="text-6xl" />
        <p className="text-lg font-semibold">Chat With Us!</p>
      </div>
      <div className="flex items-center gap-4 transition-all duration-500 transform cursor-pointer hover:text-gray-400 hover:scale-95">
        <MdMarkEmailRead className="text-6xl" />
        <p className="text-lg font-semibold">Email Us!</p>
      </div>
    </div>
  );
};

export default CallToAction;
