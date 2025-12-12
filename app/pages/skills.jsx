
import Skillscard from "@/components/Skillscard"

const Skills = () => {


  return (
    <div className="pt-16 md:pt-20 lg:pt-30 flex flex-col bg-black font-inter text-neutral-100 p-6 sm:p-8 md:p-10 lg:p-12 lg:pl-20">

      <div className="animateabout flex text-xs pb-6 md:pb-8 lg:pb-10 font-semibold text-neutral-400">
        ( TECHNICAL SKILLS )
      </div>
      <div className="animateabout flex text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black pb-4 md:pb-5 leading-tight">
        WHAT I DO BEST
      </div>
      <div className="animateabout flex text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full md:w-[700px] lg:w-[850px] font-mono text-zinc-500 pb-6 md:pb-8 lg:pb-10">
        A comprehensive detail on what I do and what expertise I have
      </div>

      <div className="animateabout">       <Skillscard />
      </div>



    </div>
  )
}

export default Skills