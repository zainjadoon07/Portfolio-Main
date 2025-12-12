import Workcard from "@/components/Workcard";

const WorkExperience = () => {
  const workData = [
    {
      date: "Dec 2025 - Present",
      current: true,
      achievement: "Developing advanced LangChain agents and AI workflows",
      title: "LangChain & AI Agent Development",
      company: "Self-Driven Learning",
      description: "Currently working on building sophisticated LangChain-based AI agents for automating workflows, integrating with APIs, and enhancing task efficiency.",
      technologies: ["LangChain", "Python", "OpenAI API", "Workflow Automation"],
    },
    {
      date: "Jun 2025 - Aug 2025",
      current: false,
      achievement: "Worked on AI/ML research projects",
      title: "AI/ML Intern",
      company: "DTC",
      description: "Completed an internship focusing on machine learning models, data analysis, and AI-based solutions for business applications.",
      technologies: ["Python", "PyTorch", "OpenCV", "Pandas"],
    },
    {
      date: "May 2025 - Aug 2025",
      current: false,
      achievement: "AI Development for Snap Projects (Remote)",
      title: "AI Intern",
      company: "APP in Snap",
      description: "Remote internship in Snap's AI department, contributing to AI model development, experimentation, and implementation of AI-powered features.",
      technologies: ["Python", "AI Modeling", "Machine Learning", "Remote Collaboration"],
    },
    {
      date: "Aug 2024 - Dec 2024",
      current: false,
      achievement: "Lab Demonstrator for DSA",
      title: "Lab Demonstrator",
      company: "University Labs",
      description: "Assisted students in understanding Data Structures & Algorithms, conducting lab sessions, and guiding practical implementations.",
      technologies: ["C++", "Algorithms", "DSA Concepts", "Problem Solving"],
    },
    {
      date: "Jan 2024 - Jun 2024",
      current: false,
      achievement: "Teaching Assistant for OOP",
      title: "Teaching Assistant",
      company: "University Labs",
      description: "Supported OOP courses by helping students with assignments, code reviews, and clarifying theoretical concepts in object-oriented programming.",
      technologies: ["C++", "OOP Principles", "Debugging", "Student Mentorship"],
    },
    {
      date: "Academic Note",
      current: false,
      achievement: "Potential 5x Gold Medalist (unawarded due to frozen semester)",
      title: "Academic Excellence",
      company: "University Achievements",
      description: "Achieved top performance in multiple semesters. Official gold medals were not awarded due to a semester freeze, despite exceptional academic excellence.",
      technologies: [],
    }
  ];

  return (
    <div className="flex flex-col bg-white font-inter p-6 sm:p-10 md:p-12 lg:p-20">

      <div className="animateabout flex text-xs sm:text-sm font-semibold text-neutral-950 pb-6 md:pb-8 lg:pb-10 uppercase">
        ( Professional Experience )
      </div>

      <div className="animateabout flex text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-neutral-950 font-extrabold leading-tight">
        Work Experience
      </div>

      <div className="text-neutral-500 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full md:w-[700px] lg:w-[800px] pl-0 md:pl-6 lg:pl-10 pt-6 md:pt-8 lg:pt-10">
        Gained hands-on experience building and improving applications while learning industry-standard practices.
      </div>

      {/* Map over workData array */}
      {workData.map((work, i) => (
        <Workcard
          key={i}
          date={work.date}
          current={work.current}
          achievement={work.achievement}
          title={work.title}
          company={work.company}
          description={work.description}
          technologies={work.technologies}
        />
      ))}

    </div>
  );
};

export default WorkExperience;
