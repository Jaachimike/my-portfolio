import React from "react";
import HeroImage from "../assets/profileImage.jpg";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full pt-4 pb-4 md:flex-row">
        <div className="flex flex-col justify-center h-fit mx-3">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have experience in building and desgining websites and web
            applications. Currently, I love to work on web application using
            technologies like React.js, Node.js, Express.js, MongoDB, MySQL and
            Wordpress.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className=" group-hover:rotate-90 duration-300">
                <HiArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profiles"
            className=" rounded-2xl mx-auto w-2/3 md:w-full max-h-screen mb-16 sm:mb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
