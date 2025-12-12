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
    <div className='flex flex-col md:flex-row font-inter relative border-b-2 border-b-gray-200 mt-10 md:mt-20 hover:translate-x-2 md:hover:translate-x-5 transition-all ease-in-out duration-500'>

      <div className='flex flex-col md:flex-[40%] p-3 text-neutral-600'>
        <p className='font-bold mb-2 text-sm sm:text-base'>{date}</p>
        {current && (
          <p className='animateabout bg-green-400 rounded-2xl w-fit p-1 pl-4 pr-4 md:pl-5 md:pr-5 font-black text-white text-sm'>Current</p>
        )}
        {achievement && (
          <p className='animateabout mt-3 md:mt-4 pl-2 text-xs sm:text-sm border-l-2 flex w-fit border-l-gray-400'>{achievement}</p>
        )}
      </div>

      <div className='animateabout flex flex-col w-full p-3 md:p-5'>
        <p className='animateabout text-2xl sm:text-3xl md:text-4xl font-medium'>{title}</p>
        {company && <p className='animateabout text-neutral-500 pt-2 md:pt-3 pl-0 md:pl-2 text-sm sm:text-base'>{company}</p>}
        {description && (
          <p className='animateabout text-base sm:text-lg w-full md:w-[600px] lg:w-[700px] text-black pl-0 md:pl-2 pt-4 md:pt-7'>{description}</p>
        )}

        {technologies.length > 0 && (
          <div className='animateabout flex flex-row flex-wrap pt-6 md:pt-10 gap-2'>
            {technologies.map((tech, i) => (
              <p key={i} className='text-gray-700 text-xs sm:text-sm bg-gray-200 p-1 px-2 md:px-3 rounded-xl'>
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
