import React from "react";
import portfolio from "../assets/portfolio/pf.png";
import webchat from "../assets/portfolio/webchat .png";
import carz from "../assets/portfolio/carz website.png";
import coalition from "../assets/portfolio/coalition.png";
import getlinked from "../assets/portfolio/getlinked.png";
import amadeus from "../assets/portfolio/Amadeus.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: carz,
      demo: "https://carz-website.netlify.app/",
      code: "https://github.com/Jaachimike/react-travel-website",
    },
    {
      id: 2,
      src: amadeus,
      demo: "https://amadeus.edu.ng/",
      code: "",
    },

    {
      id: 3,
      src: coalition,
      demo: "https://dashing-smakager-42ba57.netlify.app/",
      code: "https://github.com/Jaachimike/coalitionwebsite",
    },
    // {
    //   id: 4,
    //   src: webchat,
    //   demo: "https://react-webchat-app.netlify.app/",
    //   code: "https://github.com/Jaachimike/web-chat",
    // },
    {
      id: 5,
      src: portfolio,
      demo: "https://jaachi-portfolio.netlify.app/",
      code: "https://github.com/Jaachimike/my-portfolio",
    },
    // {
    //   id: 6,
    //   src: getlinked,
    //   demo: "https://adorable-pudding-9e35b3.netlify.app/",
    //   code: "https://github.com/Jaachimike/getlinked_website",
    // },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen  pb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className=" py-6">Checkout some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className=" shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                alt=""
                className=" h-44 w-full rounded-md duration-200 hover:scale-105"
              />
              <div className=" flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
