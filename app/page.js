"use client";
import Homepage from "@/app/pages/index";
import About from "@/app/pages/about";
import Navbar from "@/components/Navbar"
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Skills from "@/app/pages/skills";
import WorkExperience from "@/app/pages/experience";
import Academia from "@/app/pages/education";
import Callback from "./Callback";

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
        <div id="home"><Homepage/></div>
        <div id="about"><About /></div>
        <div  id="skills"><Skills/></div>
        <div id="experience"><WorkExperience /></div>
        <div id="education"><Academia /></div>
        <div><Callback /></div>
      </main>
  );
}