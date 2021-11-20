import React from "react";
import Hero from "../../components/Hero/Hero";
import LawyerContainer from "../../components/Lawyers/LawyerContainer";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="px-8 mt-8">
        <LawyerContainer />
      </div>
    </div>
  );
};

export default Home;
