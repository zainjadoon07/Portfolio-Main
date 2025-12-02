"use client";
import Homepage from "@/app/Homepage";
import About from "./About";
import Navbar from "@/components/Navbar"
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  // useEffect(()=>{
  //     const sections = document.querySelectorAll('.panel');
      
  //     sections.forEach((section) => {
  //       ScrollTrigger.create({
  //         trigger: section,
  //         start: "top top",
  //         pin: true,
  //         pinSpacing: false,
  //         markers: true,
  //       });
  //     });

  //   },[]);

  return (
      <main>
        <Navbar/>
        <Homepage/>
        <About/>
        <Skills/>
        <WorkExperience/>
      </main>
  );
}