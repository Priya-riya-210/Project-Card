import React from 'react'

import backgroundImg from '../assets/Background_video.mp4';

const Contact = () => {

return (
  <div
    className="flex items-center justify-center min-h-screen bg-cover bg-center px-4 sm:px-6 md:px-8">

  <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dspucsmpo/video/upload/v1750171589/Background_video_euhhlu.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

    <div className="w-full max-w-md backdrop-blur-md rounded-lg shadow-lg p-6 sm:p-8 transition duration-500 ease-in-out hover:shadow-2xl text-white ">
      <h1 className="text-4xl font-bold text-primary-dark mb-4 text-center">Contact:</h1>
      <h2 className="text-2xl font-semibold mb-2 text-center">PRIYA K</h2>
      <h3 className="text-xl font-medium mb-2 text-center">Full Stack Developer</h3>
      <h4 className="text-lg text-center break-words">{`dhanapriya210@gmail.com`}</h4>
    </div>
  </div>
);

}

export default Contact
