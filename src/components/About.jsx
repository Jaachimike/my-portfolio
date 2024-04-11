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

        <p className="text-md sm:text-xl mt-10">
          Welcome to my portfolio! I'm Jaachimike Okafor, a skilled full-stack
          developer specializing in frontend and backend development. With
          expertise in HTML5, CSS3, JavaScript (ES6+), React.js (Redux, React
          Router), Next.js, Node.js, Express.js, MySQL and MongoDB, I create
          immersive web experiences.
        </p>

        <br />

        <p className="text-md sm:text-xl ">
          In frontend development, I excel in crafting visually stunning and
          responsive web applications using React.js and its related
          technologies. On the backend, I leverage Node.js and Express.js to
          build scalable server-side solutions, integrating MongoDB or MySQL and
          RESTful APIs for seamless communication.
        </p>

        <br />

        <p className=" text-md sm:text-xl">
          I have experience customizing themes and extending functionalities in
          CMS platforms like WordPress and Squarespace. Proficient in version
          control with Git, I prioritize code integrity and collaboration.
        </p>

        <br />

        <p className=" text-md sm:text-xl">
          Additionally, I'm skilled in UI frameworks such as Bootstrap, Tailwind
          CSS, Material UI, Framer, and Chakra UI. I streamline workflows using
          tools like Postman, Chrome DevTools, and Figma, ensuring the delivery
          of high-quality solutions within project timelines.
        </p>

        <br />

        <p className=" text-md sm:text-xl">
          Driven by a passion for innovation and excellence, I am committed to
          pushing the boundaries of web development and delivering exceptional
          digital experiences.
        </p>
      </div>
    </div>
  );
};

export default about;
