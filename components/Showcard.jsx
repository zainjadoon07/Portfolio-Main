import React from "react";

const Showcard = ({ Heading, text, font }) => {


  return (
    <div className="hover:translate-x-4 md:hover:translate-x-6 lg:hover:translate-x-10 transition-all ease-in-out duration-500 flex flex-col font-inter pb-4 md:pb-6">
      {/* Heading */}
      <div className={`text-2xl sm:text-3xl md:text-4xl text-${font} font-extrabold pb-3 md:pb-4 relative`}>
        {Heading}

      </div>

      {/* Text */}
      <div className="text-base sm:text-lg md:text-xl font-extralight w-full md:w-[600px] lg:w-[700px] text-zinc-500">

        {text}
        {/* Bottom border */}
        <div className="border-b-2 border-zinc-500 w-full md:w-[800px] lg:w-[900px] mt-4 md:mt-5 mb-6 md:mb-8"></div>
      </div>
    </div>
  );
};

export default Showcard;
