import React from 'react'

const about = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className=' text-xl mt-20'>
          I am an innovative Front-end Web developer well versed in HTML, CSS, Javascript and several frameworks and libraries such as React.js, Tailwind CSS, Wordpress, e.t.c. 
        </p>

        <br />

        <p className=' text-xl'>
        I specialize in the conversion of web designs into beautiful, functional code as well as creating stunning, reusable web applications with React and Tailwind.
        </p>
      </div>


    </div>
  )
}

export default about