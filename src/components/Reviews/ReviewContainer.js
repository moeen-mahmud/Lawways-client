import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import SingleReview from "./SingleReview";
import BeatLoader from "react-spinners/BeatLoader";

const ReviewContainer = () => {
  const [reviews, setReviews] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://secret-plateau-62422.herokuapp.com/reviews")
      .then((res) => {
        setReviews(res.data);
      });
  }, []);

  // Slider style

  // Slider properties
  const settings = {
    dots: true,
    // lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <section className="flex flex-col justify-between gap-6 my-32 md:flex-row">
      {reviews.length === 0 ? (
        <div className="mx-auto">
          <BeatLoader color="#232832" size={20} margin={2} />
        </div>
      ) : (
        <div className="md:w-2/5">
          <Slider {...settings}>
            {reviews.map((review) => (
              <SingleReview key={review._id} review={review} />
            ))}
          </Slider>
        </div>
      )}

      <div className="md:w-1/2">
        <h2 className="mt-10 mb-10 font-serif text-3xl font-bold text-center text-gray-800 md:mt-16 md:text-4xl md:text-left">
          Everyone Deserves Legal Protection
        </h2>
        <p className="font-medium leading-relaxed text-justify text-gray-500">
          With <span className="font-semibold">Lawways</span>, finding solutions
          to your legal issues doesn’t have to be stressful, complicated, or
          expensive. Instead of paying a lawyer expensive hourly fees, you pay a
          small monthly fee and get access to experienced lawyers that can help
          you with your legal issue.
        </p>
        <button
          onClick={() => navigate("/about")}
          className="px-6 py-2 mt-8 text-gray-100 transition-all duration-500 bg-gray-800 rounded hover:bg-gray-600 active:bg-black"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default ReviewContainer;
