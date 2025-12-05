import React from 'react'

const projectcard = ({title,desc,heading,picture,tech}) => {



  return (
    <div className='flex border-gray-600 rounded-2xl border h-[700px] flex-row  overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-700'>
      <div className='flex w-[40%] bg-gray-200'>
        
        <div className=' flex flex-col p-5 '>
           <h1 className='animateabout flex text-neutral-600 mt-10 '>( {title} )</h1>
            <p className='text-2xl tracking-widest text-zinc-700 w-[250] mt-10 border-l items-center justify-center pl-2 italic animateabout'>"{desc}" </p>
          
          
          </div>     
        </div>
      <div className='flex w-full flex-col bg-gray-950'>
        
        <h1 className='animateabout flex text-5xl font-light tracking-tight justify-center text-gray-300 pt-5 pb-10'>{heading}</h1>

        <div className='flex h-[70%] border-2 border-gray-800 rounded-2xl relative 
        hover:scale-[1.02] transition-all duration-700 overflow-hidden w-[70%] self-center'>
            <img src={picture} className='object-fit w-full h-full'/>
        </div>

        <div className='animateabout flex flex-row justify-center text-neutral-300 gap-10 pt-10'>
          {tech&&tech.map((techno, index) => (
            <div key={index} className='flex px-4 py-2 border-2 border-gray-700 bg-gray-800 rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-105'>
              {techno}
            </div>
          ))}
        </div>
        
        </div>
      
      </div>
  )
}

export default projectcard