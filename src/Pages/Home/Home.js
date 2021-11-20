import React from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <div className="mt-8 px-8"></div> */}
    </div>
  );
};

export default Home;
