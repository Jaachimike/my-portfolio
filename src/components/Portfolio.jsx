import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
import portfolio from "../assets/portfolio/pf.png";
import contact_form from "../assets/portfolio/contact form.png";
import webchat from "../assets/portfolio/webchat .png";
import carz from "../assets/portfolio/carz website.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: webchat,
      demo: "https://react-webchat-app.netlify.app/",
      code: "https://github.com/Jaachimike/web-chat",
    },
    {
      id: 2,
      src: carz,
      demo: "https://carz-website.netlify.app/",
      code: "https://github.com/Jaachimike/react-travel-website",
    },
    {
      id: 3,
      src: contact_form,
      demo: "https://phenomenal-dieffenbachia-27ed03.netlify.app/",
      code: "https://github.com/Jaachimike/contact-form",
    },
    {
      id: 4,
      src: portfolio,
      demo: "https://jaachi-portfolio.netlify.app/",
      code: "https://github.com/Jaachimike/my-portfolio",
    },
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
                className=" rounded-md duration-200 hover:scale-105"
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
