import React from 'react'
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


import Projectcard from '@/components/projectcard'
const projects = () => {

  useEffect(() => {
    const panels = document.querySelectorAll('.panel');

    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: false,

      });
    });
    return () => {
      triggers.forEach(trigger => trigger.kill());  // remove all ScrollTriggers
      ScrollTrigger.refresh();  // optional: refresh ScrollTrigger after killing
    };
  }, []);


  let data = [{ title: "Mikhail Tal", desc: "There are two types of Sacrifices: correct ones, and mine. ", heading: "Chess", picture: "/chess.png", tech: ["Next.js", "Node.js", "Express.js", "Stockfish API", "TailwindCSS"] },

  { title: "Jeff Bezos", desc: "Your brand is what other people say about you when you’re not in the room.", heading: "Brand Reputation Guard", picture: "/brandreputation.png", tech: ["Python", "Flask", "React", "TavilyAPI", "Langchain"] },

  { title: "Pat Flynn", desc: "Affiliate marketing is not about quick money. It’s about creating genuine value.", heading: "BeautyBliss Affiliates Site", picture: "/affiliate.png", tech: ["React.js", "TailwindCSS", "AmazonAPI"] },
  ]

  return (

    <div id='projects' className='flex relative flex-col'>
      <div className='flex font-inter flex-col p-20 relative'>
        <div className='animateabout text-md text-zinc-500 mb-5 uppercase'>( Projects ) </div>
        <div className='animateabout flex text-9xl text-neutral-950 font-black tracking-wide'>Build with Me </div>

        <div className='animateabout text-4xl w-[600px] tracking-wide text-zinc-500 pl-5 pt-5'>
          Build with me to make your ideas come to life. Explore my projects and see how we can collaborate to create something amazing together.
        </div>


      </div>

      {data.map((data, key) => (
        <section key={key} className="panel h-screen">
          <Projectcard
            title={data.title}
            desc={data.desc}
            heading={data.heading}
            picture={data.picture}
            tech={data.tech}
          />
        </section>
      ))}

      {/* Last card NOT pinned */}
      <div className="z-10 -mb-3">
        <Projectcard
          title={"JackMa - AliBaba"}
          desc={"Forget about your competitors. Just focus on your customers"}
          heading={"StyleSphere"}
          picture={"/stylesphere.png"}
          tech={["React.js", "TailwindCSS"]}
        />
      </div>


    </div>



  )
}

export default projects

