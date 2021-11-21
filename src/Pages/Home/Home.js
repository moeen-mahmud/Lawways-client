import React from "react";
import CallToAction from "../../components/CallToAction/CallToAction";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import LawyerContainer from "../../components/Lawyers/LawyerContainer";
import Navbar from "../../components/Navbar/Navbar";
import ReviewContainer from "../../components/Reviews/ReviewContainer";
import ServiceContainer from "../../components/Services/ServiceContainer";
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
        <ServiceContainer />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
