import React from "react";
import EducationCard from "@/components/EducationCard";

const Academia = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Software Engineering",
      university: "National University of Computer and Emerging Sciences",
      location: "Islamabad, Pakistan",
      dates: "2022 - 2026",
      highlights: [
        "Specialized in Software Engineering and AI/ML",
        "Gained hands-on industry experience through 2 amazing internships",
        "Transformed and applied theory into practical & real life",
      ],
    },
    {
      degree: "Faculty of Science",
      university: "Abbottabad Public School",
      location: "Abbottabad, Pakistan",
      dates: "2020 - 2022",
      highlights: [
        "Focus on Physics and Mathematics",
        "Participated in Co-curricular activities such as Football , Cricket and Swimming",
        "Graduated with distinction","Senior House Prefect","Captain Football team"
      ],
    },
    {
      degree: "Matriculations",
      university: "Abbottabad Public School",
      location: "Abbottabad",
      dates: "2018-2020",
      highlights: [
        "Focused on Laws of Physics that govern the Universe",
        "Built practical projects to apply Physics Concepts",
      ],
    },
  ];

  return (
    <div className="flex flex-col font-inter bg-black p-20">
      
      <div className="animateabout text-sm text-zinc-400 mb-5">
        (Education & Certificates)
      </div>

      <div className="animateabout text-9xl text-white w-[1000px] font-black mb-5">
        Academic Foundation
      </div>

      <div className="animateabout text-zinc-400 text-3xl w-[700px]">
        Strong Academic Background in CS with continuous learning and practical experience. 
        Always trying to solve problems that require critical thinking!
      </div>

      {/* Render multiple education cards */}
      {educationData.map((edu, i) => (
        <EducationCard
          key={i}
          degree={edu.degree}
          university={edu.university}
          location={edu.location}
          dates={edu.dates}
          highlights={edu.highlights}
        />
      ))}

      <div className=" animateabout text-5xl font-black text-white mt-20 ">
        Professional Certificates
      </div>

      <div className="animateabout grid-cols-2 grid text-white text-lg gap-7 p-8 mt-10 ">

      <p className="border border-gray-600 p-4 rounded-2xl bg-gray-900 hover:scale-105 transition-all ease-in duration-500 ">
        Supervised Machine Learning - (Stanford University)
      </p>

      <p className="border border-gray-600 p-4 rounded-2xl bg-gray-900 hover:scale-105 transition-all ease-in duration-500">Unsupervised Learning - (Stanford University)</p>

      <p className="border border-gray-600 p-4 rounded-2xl bg-gray-900 hover:scale-105 transition-all ease-in duration-500">Advanced Learning Algorithms - (Stanford University)</p>

      <p className="border border-gray-600 p-4 rounded-2xl bg-gray-900 hover:scale-105 transition-all ease-in duration-500">Frontend Development - (Javascript Mastery)</p>
      </div>

    </div>
  );
};

export default Academia;
