import React from "react";

// Icons
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="px-12 py-8 text-gray-200 bg-gray-800 md:px-32 md:py-16">
      <div className="flex flex-col justify-around gap-4 md:gap-16 md:flex-row">
        <div className="flex flex-col justify-between gap-6 border-gray-700 md:border-r-2 md:flex-row md:w-1/2 md:pr-8 md:mb-8">
          <section>
            <h6 className="mb-6 text-xl font-semibold text-center md:text-left">
              ABOUT US
            </h6>
            <ul className="text-center text-gray-400 md:text-left">
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                Bill of Rights
              </li>
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                Executive Team
              </li>
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                Blog
              </li>
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                Newsroom
              </li>
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                Associates
              </li>
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                Our Firms
              </li>
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                Carrer
              </li>
            </ul>
          </section>
          <section>
            <h6 className="mb-6 text-xl font-semibold text-center md:text-left">
              HELP & SUPPORT
            </h6>
            <ul className="text-center text-gray-400 md:text-left">
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                FAQ's
              </li>
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                Contact Us
              </li>
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                HR Professionals
              </li>
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                Lawways Economic Stress Index
              </li>
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                Reviews & Testimonials
              </li>
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                Join Lawyer Network
              </li>
              <li className="transition-all duration-500 cursor-pointer hover:text-gray-200">
                Ask Anything
              </li>
            </ul>
          </section>
        </div>
        <div className="mt-8 md:w-1/2 md:mt-0">
          <section>
            <h6 className="mb-8 text-3xl font-bold text-center">
              Subscribe to our legal newsletter
            </h6>
            <div className="flex justify-center">
              <form className="flex flex-col gap-6 md:flex-row">
                <input
                  className="px-4 py-4 text-gray-800 rounded"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <button className="px-6 py-4 transition-all duration-500 bg-red-700 rounded hover:bg-red-800 active:bg-red-900">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <p className="text-lg font-semibold">Find us on</p>
              <RiFacebookFill className="text-2xl transition-all duration-500 transform cursor-pointer hover:scale-105 active:bg-gray-600" />
              <RiInstagramFill className="text-2xl transition-all duration-500 transform cursor-pointer hover:scale-105 active:bg-gray-600" />
              <RiYoutubeFill className="text-2xl transition-all duration-500 transform cursor-pointer hover:scale-105 active:bg-gray-600" />
            </div>
          </section>
        </div>
      </div>
      <div className="pt-10 text-center border-t-2 border-gray-700">
        <h6>Copyright &copy; 2021, Lawways.</h6>
        <ul className="flex flex-col justify-center mt-4 text-g ray-500 md:flex-row md:gap-4">
          <li>Terms of Services</li>
          <li>Privacy Policy</li>
          <li>Code of Ethics</li>
          <li>Disclaimer</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
