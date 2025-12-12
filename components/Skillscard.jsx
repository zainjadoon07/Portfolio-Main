import React, { useState, useRef, useEffect } from "react";
import Skillcardextension from "./Skillcardextension";

const Skillscard = () => {
  const mapping = [
    {
      title: "Languages",
      name: ["⏺ JavaScript", "⏺ C++", "⏺ Python", "⏺ Java", "⏺ Alloy", "⏺ SQL"],
      level: ["Advanced", "Advanced", "Advanced", "Intermediate", "Beginner", "Intermediate"],
    },

    {
      title: "Frontend Development",
      name: ["⏺ React.js", "⏺ Next.js", "⏺ TailwindCSS", "⏺ Bootstrap", "⏺ GSAP", "⏺ Three.js"],
      level: ["Advanced", "Advanced", "Advanced", "Beginner", "Master", "Beginner"],
    },

    {
      title: "Backend Development",
      name: ["⏺ Node.js", "⏺ Nest.js", "⏺ Express.js", "⏺ Flask", "⏺ FastAPI", "⏺ RestAPI"],
      level: ["Advanced", "Beginner", "Advanced", "Beginner", "Beginner", "Advanced"],
    },

    {
      title: "Database",
      name: ["⏺ MongoDB", "⏺ SQL", "⏺ Postgre"],
      level: ["Intermediate", "Intermediate", "Beginner"],
    },

    {
      title: "AI & Machine Learning",
      name: ["⏺ PyTorch", "⏺ TensorFlow", "⏺ Keras", "⏺ Scikit-Learn", "⏺ Numpy", "⏺ Pandas"],
      level: ["Intermediate", "Intermediate", "Beginner", "Intermediate", "Advanced", "Advanced"],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // For click-outside close:
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpenIndex(null); // CLOSE
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col pl-0 md:pl-6 lg:pl-10 w-full md:w-[900px] lg:w-[1100px] pt-6 md:pt-8 lg:pt-10">
      {mapping.map((elem, index) => (
        <div key={index}>
          {/* TITLE */}
          <div
            onClick={() => toggle(index)}
            className="pb-4 md:pb-6 cursor-pointer hover:translate-x-4 md:hover:translate-x-6 lg:hover:translate-x-10 transition-all duration-500 flex flex-row items-center font-inter font-black text-2xl sm:text-3xl md:text-4xl"
          >
            <strong className="text-sm sm:text-base md:text-lg pr-3 md:pr-4 text-zinc-500">
              ({index + 1 < 10 ? `0${index + 1}` : index + 1})
            </strong>
            {elem.title}
          </div>

          {/* CONTENT WITH SMOOTH ANIMATION */}
          <div
            className={`overflow-hidden transition-all duration-700 ${openIndex === index
                ? "max-h-[1000px] opacity-100 py-3 md:py-5"
                : "max-h-0 opacity-0 py-0"
              }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pl-0 md:pl-3 pr-4 md:pr-10">
              {elem.name.map((skillName, i) => (
                <Skillcardextension
                  key={i}
                  name={skillName}
                  level={elem.level[i]}
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-b-2 border-zinc-700 w-full md:w-[900px] lg:w-[1100px] mt-4 md:mt-6 mb-6 md:mb-10"></div>
        </div>
      ))}
    </div>
  );
};

export default Skillscard;
