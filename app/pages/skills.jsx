
import Skillscard from "@/components/Skillscard"

const Skills = () => {


  return (
    <div className="pt-30 flex flex-col bg-black font-inter text-neutral-100 p-12 pl-20">

      <div className="animateabout flex text-xs pb-10 font-semibold text-neutral-400">
      ( TECHNICAL SKILLS )
      </div>
      <div className="animateabout flex text-9xl font-black pb-5">
        WHAT I DO BEST
      </div>
      <div className="animateabout flex text-5xl w-[850px] font-mono text-zinc-500 pb-10">
        A comprehensive detail on what I do and what expertise I have 
      </div>

        <div className="animateabout">       <Skillscard/>
</div>



    </div>
  )
}

export default Skills