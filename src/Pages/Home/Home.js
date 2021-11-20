import React from "react";
import Hero from "../../components/Hero/Hero";
import LawyerContainer from "../../components/Lawyers/LawyerContainer";
import Navbar from "../../components/Navbar/Navbar";
import ReviewContainer from "../../components/Reviews/ReviewContainer";
import Trusted from "../../components/Trusted/Trusted";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="px-4 mt-8 md:px-16">
        <LawyerContainer />
        <ReviewContainer />
        <Trusted />
      </div>
    </div>
  );
};

export default Home;
