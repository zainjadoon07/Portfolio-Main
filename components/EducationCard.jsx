import React from "react";

const EducationCard = ({
  degree,
  university,
  location,
  dates,
  highlights = [], // array of bullet points
}) => {
  return (
    <div className="hover:translate-x-7 transition-all ease-in-out duration-500 flex flex-col border rounded-2xl p-10 bg-gray-950 font-inter mt-10 hover:shadow-xl border-gray-800">
      
      {/* Degree and Dates */}
      <div className="animateabout flex flex-row justify-between items-center">
        <h1 className="text-3xl text-white font-medium">{degree}</h1>
        <p className="text-zinc-400 text-md">{dates}</p>
      </div>

      {/* University and Location */}
      <h2 className="animateabout text-white text-bold text-xl mt-2">{university}</h2>
      <h2 className="animateabout text-zinc-300 text-bold text-lg mt-2 mb-7">{location}</h2>

      {/* Highlights */}
      {highlights.map((item, i) => (
        <p key={i} className="animateabout text-zinc-300 text-bold text-lg mt-2">
          🔹 {item}
        </p>
      ))}
    </div>
  );
};

export default EducationCard;
