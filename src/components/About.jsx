import React from "react";

const about = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className=" text-xl mt-10">
          I'm passionate about crafting captivating user experiences through
          clean and efficient code. My expertise lies in HTML, CSS, and
          JavaScript, and I'm skilled in using modern frameworks like React.
        </p>

        <br />

        <p className=" text-xl">
          Throughout my career, I've collaborated with cross-functional teams to
          deliver visually appealing and user-centric designs. I constantly
          strive to stay updated with the latest trends and technologies in web
          development. On this portfolio, you'll find a collection of my
          projects showcasing my skills and dedication to frontend development.
          Let's connect and explore exciting opportunities together!
        </p>
      </div>
    </div>
  );
};

export default about;
