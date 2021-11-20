import React from "react";
import Hero from "../../components/Hero/Hero";
import LawyerContainer from "../../components/Lawyers/LawyerContainer";
import Navbar from "../../components/Navbar/Navbar";
import ReviewContainer from "../../components/Reviews/ReviewContainer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="px-8 mt-8">
        <LawyerContainer />
        <ReviewContainer />
      </div>
    </div>
  );
};

export default Home;
