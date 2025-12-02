import React from 'react';

const Workcard = ({
  date,
  current,
  achievement,
  title,
  company,
  description,
  technologies = [], // array of tech tags
  ...props
}) => {
  return (
    <div className=' flex flex-row font-inter relative border-b-2 border-b-gray-200 mt-20 hover:translate-x-5 transition-all ease-in-out duration-500'>
      
      <div className=' flex flex-col flex-[40%]  p-3 text-neutral-600 '>
        <p className='font-bold mb-2'>{date}</p>
        {current && (
          <p className='animateabout bg-green-400 rounded-2xl w-fit p-1 pl-5 pr-5 font-black text-white'>Current</p>
        )}
        {achievement && (
          <p className='animateabout mt-4 pl-2 text-sm border-l-2 flex w-fit border-l-gray-400'>{achievement}</p>
        )}
      </div>

      <div className='animateabout flex flex-col w-full p-5'>  
        <p className='animateabout text-4xl font-medium'>{title}</p>
        {company && <p className='animateabout  text-neutral-500 pt-3 pl-2'>{company}</p>}
        {description && (
          <p className='animateabout text-lg text-black w-[700px]  pl-2 pt-7'>{description}</p>
        )}
        
        {technologies.length > 0 && (
          <div className='animateabout flex flex-row  pt-10'>
            {technologies.map((tech, i) => (
              <p key={i} className='text-gray-700 text-sm bg-gray-200 p-1 m-2 rounded-xl pl-2 pr-2'>
                {tech}
              </p>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Workcard;
