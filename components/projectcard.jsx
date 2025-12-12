import React from 'react'

const projectcard = ({ title, desc, heading, picture, tech }) => {



  return (
    <div className='flex flex-col lg:flex-row border-gray-600 rounded-2xl border h-auto lg:h-[700px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-700'>
      <div className='flex w-full lg:w-[40%] bg-gray-200 order-2 lg:order-1'>

        <div className='flex flex-col p-4 sm:p-5'>
          <h1 className='animateabout flex text-neutral-600 mt-4 sm:mt-6 lg:mt-10 text-sm sm:text-base'>( {title} )</h1>
          <p className='text-lg sm:text-xl md:text-2xl tracking-widest text-zinc-700 w-full lg:w-[250px] mt-6 sm:mt-8 lg:mt-10 border-l items-center justify-center pl-2 italic animateabout'>"{desc}" </p>


        </div>
      </div>
      <div className='flex w-full flex-col bg-gray-950 order-1 lg:order-2'>

        <h1 className='animateabout flex text-3xl sm:text-4xl md:text-5xl font-light tracking-tight justify-center text-gray-300 pt-4 sm:pt-5 pb-6 sm:pb-8 lg:pb-10'>{heading}</h1>

        <div className='flex h-[300px] sm:h-[400px] lg:h-[70%] border-2 border-gray-800 rounded-2xl relative 
        hover:scale-[1.02] transition-all duration-700 overflow-hidden w-[90%] sm:w-[85%] lg:w-[70%] self-center mb-4 lg:mb-0'>
          <img src={picture} className='object-cover w-full h-full' />
        </div>

        <div className='animateabout flex flex-row flex-wrap justify-center text-neutral-300 gap-4 sm:gap-6 lg:gap-10 pt-6 sm:pt-8 lg:pt-10 pb-6 lg:pb-0 px-4'>
          {tech && tech.map((techno, index) => (
            <div key={index} className='flex px-3 py-2 sm:px-4 border-2 border-gray-700 bg-gray-800 rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base'>
              {techno}
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default projectcard