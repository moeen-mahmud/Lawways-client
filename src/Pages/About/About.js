import React from "react";
import Navbar from "../../components/Navbar/Navbar";

// about images
import AboutMain from "../../assets/about-main.jpg";
import AboutHelp from "../../assets/about-help.jpg";
import Footer from "../../components/Footer/Footer";

// TODO: Will have to add FAQs

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col-reverse gap-8 px-4 mt-8 md:px-8 md:flex-row">
        <div className="md:w-1/2 md:mt-12">
          <h3 className="mb-4 font-serif text-5xl font-bold md:mb-12">
            How Lawways Can Help
          </h3>
          <p className="font-medium leading-relaxed text-justify text-gray-600">
            We partnered with law firms across the Bangladesh who have
            experience in nearly every area of law. You can consult with your
            Lawways provider law firm on many common legal topics and they will
            work diligently to find a resolution. Dive deeper into some of the
            most common practice areas that your Lawways law firm can help with.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            className="block ml-auto rounded"
            src={AboutHelp}
            alt="Helping hand try to find each other"
          />
        </div>
      </section>

      <section className="flex flex-col-reverse gap-8 px-4 my-32 md:px-8 md:flex-row">
        <div className="md:w-1/2">
          <img
            className="block mr-auto rounded"
            src={AboutMain}
            alt="Helping hand try to find each other"
          />
        </div>
        <div className="md:w-1/2 md:mt-12">
          <h3 className="mb-4 font-serif text-5xl font-bold md:mb-12">
            Who We Are
          </h3>
          <p className="font-medium leading-relaxed text-justify text-gray-600">
            Pioneer. Disruptor. Trailblazer. LegalShield, a consumer brand under
            PPLSI, is leading the quest to provide equal access to legal advice,
            protection, and representation to every human, everywhere. Serving
            4.5 million individuals and 140,000 businesses, we are the world's
            largest platform for legal, identity, and reputation management
            services across North America. Founded in 1972, we provide the tools
            and services needed to affordably live a just and secure life. We’re
            using technology and innovative products and partnerships to
            transform how and where people receive legal care by connecting
            members to our expansive network of trusted, qualified lawyers and
            law firms right at the palm of your hands.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
