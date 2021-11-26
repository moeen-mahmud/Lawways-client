import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SingleLawyer from "./SingleLawyer";
import BeatLoader from "react-spinners/BeatLoader";
const LawyerContainer = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    axios
      .get("https://secret-plateau-62422.herokuapp.com/lawyers")
      .then((res) => {
        setLawyers(res.data);
      });
  }, []);

  // Slider properties
  const settings = {
    dots: true,
    // lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col justify-between my-32 md:flex-row">
      <div className="md:w-2/5">
        <h2 className="mb-10 font-serif text-4xl font-bold text-gray-800">
          Our Lawyers Are Here To Help
        </h2>
        <p className="mb-8 leading-relaxed text-justify text-gray-700 md:mb-0">
          For the last 49 years we’ve worked to build long-standing partnerships
          with high-quality law firms across the U.S. and Canada. Whether you
          have a personal legal issue, you need help starting your business, or
          you just want some expert advice, our network of lawyers are here to
          help. No hourly fees. No retainers. Just legal answers when you need
          them most.
        </p>
      </div>
      {lawyers.length === 0 ? (
        <div className="mx-auto">
          <BeatLoader color="#232832" size={20} margin={2} />
        </div>
      ) : (
        <div className="md:w-1/2">
          <Slider {...settings}>
            {lawyers.map((lawyer) => (
              <div key={lawyer._id}>
                <SingleLawyer lawyer={lawyer} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
};

export default LawyerContainer;
