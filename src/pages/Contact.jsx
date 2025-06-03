import React from 'react'

import backgroundImg from '../assets/Login_Background.avif';

const Contact = () => {
  return (

<div  className="relative overflow-hidden min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}> 

    <div className="max-w-md mx-auto mt-50 ml-230 p-6 bg-primary-light rounded-lg shadow-lg border border-primary
                transition hover:shadow-xl ">
  <h1 className="text-4xl font-bold text-primary-dark mb-4">Contact:</h1>
  <h2 className="text-2xl font-semibold mb-2">PRIYA K</h2>
  <h3 className="text-xl font-medium mb-2">Full Stack Developer</h3>
  <h4 className="text-lg ">{`dhanapriya210@gmail.com`}</h4>
</div>
</div>
  )
}

export default Contact
