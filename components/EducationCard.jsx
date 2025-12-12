import React from "react";

const EducationCard = ({
  degree,
  university,
  location,
  dates,
  highlights = [], // array of bullet points
}) => {
  return (
    <div className="hover:translate-x-3 md:hover:translate-x-5 lg:hover:translate-x-7 transition-all ease-in-out duration-500 flex flex-col border rounded-2xl p-6 sm:p-8 md:p-10 bg-gray-950 font-inter mt-6 md:mt-8 lg:mt-10 hover:shadow-xl border-gray-800">

      {/* Degree and Dates */}
      <div className="animateabout flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-medium">{degree}</h1>
        <p className="text-zinc-400 text-sm md:text-md">{dates}</p>
      </div>

      {/* University and Location */}
      <h2 className="animateabout text-white text-bold text-lg sm:text-xl mt-2">{university}</h2>
      <h2 className="animateabout text-zinc-300 text-bold text-base sm:text-lg mt-2 mb-5 md:mb-7">{location}</h2>

      {/* Highlights */}
      {highlights.map((item, i) => (
        <p key={i} className="animateabout text-zinc-300 text-bold text-sm sm:text-base md:text-lg mt-2">
          🔹 {item}
        </p>
      ))}
    </div>
  );
};

export default EducationCard;
