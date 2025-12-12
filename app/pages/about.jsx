
import Showcard from "@/components/Showcard";
import { useEffect } from "react";

import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useEffect(() => {

    const all = document.querySelectorAll(".animateabout");
    all.forEach((elem) => {

      gsap.from(elem, {
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 0.5
        },

        scrollTrigger: {
          trigger: elem,
          start: "top 80%",
          toggleActions: "play none none none",

        }

      })

    });



  }, [])

  return (

    <div className="pt-16 md:pt-20 lg:pt-30 flex flex-col bg-neutral-950 font-inter text-neutral-100 p-6 sm:p-8 md:p-10 lg:p-12 lg:pl-20">

      <div className="animateabout flex text-xs pb-6 md:pb-8 lg:pb-10 font-semibold text-neutral-400">
        ( ABOUT )
      </div>
      <div className="animateabout flex text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black pb-4 md:pb-5 leading-tight">
        Software <br /> Engineering
      </div>
      <div className="animateabout flex text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full md:w-[700px] lg:w-[850px] font-black tracking-wider font-mono text-zinc-500">
        A passionate software engineer creating scalable, innovative applications that drive meaningful business outcomes.
      </div>

      <div className="animateabout pt-8 md:pt-10 lg:pt-15 pl-0 md:pl-8 lg:pl-15">
        <Showcard
          Heading="Frontend Development"
          text=" A unique developer specializing in GSAP-powered 3D applications and interactive Full stack websites."
        />

        <Showcard Heading="Work-flow Automation"
          text="Automating workflows with LangChain agents to intelligently chain tasks and tools."
        />


        <Showcard Heading="MachineLearning & AI"
          text=" Designing AI and Machine Learning solutions to solve complex problems efficiently."
        />

        <div className="animateabout flex flex-col sm:flex-row justify-around gap-8 sm:gap-4 pt-16 md:pt-20 lg:pt-30 ml-0 lg:-ml-20 text-neutral-400">
          <div className="flex flex-col items-center">
            <strong className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex justify-center font-extrabold text-neutral-100">2+</strong> <br /> Years Experience
          </div>

          <div className="flex flex-col items-center">
            <strong className="flex justify-center font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-neutral-100">10+</strong><br />Technologies
          </div>

          <div className="flex flex-col items-center">
            <strong className="flex justify-center text-neutral-100 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">10+</strong> <br /> Projects Completed
          </div>
        </div>


      </div>

    </div>
  )
}

export default About;