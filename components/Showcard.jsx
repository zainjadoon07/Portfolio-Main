import React from "react";

const Showcard = ({ Heading, text ,font}) => {


  return (
    <div className=" hover:translate-x-10 transition-all ease-in-out duration-500 flex flex-col font-inter pb-6">
      {/* Heading */}
      <div className={`text-4xl text-${font} font-extrabold pb-4 relative`}>
        {Heading}
       
      </div>

      {/* Text */}
      <div className="text-xl font-extralight w-[700px] text-zinc-500">

        {text}
         {/* Bottom border */}
        <div className="border-b-2 border-zinc-500 w-[900px] mt-5 mb-8"></div>
      </div>
    </div>
  );
};

export default Showcard;
