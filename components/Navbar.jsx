"use client";
import Image from "next/image";
import Logo from "@/public/logo.png"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import {gsap} from "gsap"

import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Navbar = () => {

  useEffect(()=>{

    const split=SplitText.create(".nav",{type:"chars"})


    gsap.from(split.chars,{
        yPercent:"random([-30,30])",
        rotation:("30,30"),
        autoAlpha:0,
        ease:"back.out",
        duration:1,
        scale:0.5,
        stagger:{amount:0.7, 
          from:"random",        
        }


    })



  },[])


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Fixed Navbar Container */}
      <div className=" absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-4 pointer-events-none">
        <nav className="flex flex-row font-inter w-full max-w-7xl mx-auto border-neutral-900 border-2 shadow-md bg-neutral-950 justify-between items-center h-15 text-neutral-200 rounded-2xl px-4 md:px-6 lg:px-8 text-sm md:text-base pointer-events-auto">

          {/* Logo - Left with 3D Animation */}
          <div className="shrink-0 group cursor-pointer">
            <Image 
              className="w-15 h-15 transition-transform duration-500 ease-out hover:scale-150 hover:rotate-360 transform-gpu " 
              src={Logo} 
              alt="Logo" 
              width={50} 
              height={50} 
            />
          </div>

          {/* Hamburger Menu - Mobile Only */}
          <button 
            onClick={toggleMenu}
            className="md:hidden z-50 p-2 hover:bg-neutral-800 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-neutral-200 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-200 transition-transform duration-300" />
            )}
          </button>

          {/* Links - Center (Desktop) */}
          <div className="hidden md:flex gap-6 lg:gap-10 absolute left-1/2 -translate-x-1/2">
            <Link className="nav  hover:opacity-85 transition-opacity" href="/">Home</Link>
            <Link className="nav  hover:opacity-85 transition-opacity" href="/about">About</Link>
            <Link className="nav  hover:opacity-85 transition-opacity" href="/journey">Journey</Link>
            <Link className="nav  hover:opacity-85 transition-opacity" href="/projects">Projects</Link>
          </div>

          {/* Contact - Right (Desktop) */}
          <div className="hidden md:block shrink-0">
            <Link href="/contact">
              <button className="nav border rounded-2xl py-1 px-3 md:py-2 md:px-4 bg-white text-neutral-900 font-medium hover:cursor-pointer hover:bg-neutral-950 hover:text-neutral-200 transition-colors ease-in-out duration-500 text-sm md:text-base">
                Contact
              </button>
            </Link>
          </div>

        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={` fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-neutral-950 border-r-2 border-neutral-900 z-40 md:hidden transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 mt-16">
          <Link 
            href="/home" 
            className="text-neutral-200 text-lg hover:text-white hover:translate-x-2 transition-all duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-neutral-200 text-lg hover:text-white hover:translate-x-2 transition-all duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link 
            href="/journey" 
            className="text-neutral-200 text-lg hover:text-white hover:translate-x-2 transition-all duration-300"
            onClick={toggleMenu}
          >
            Journey
          </Link>
          <Link 
            href="/projects" 
            className="text-neutral-200 text-lg hover:text-white hover:translate-x-2 transition-all duration-300"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link 
            href="/contact"
            onClick={toggleMenu}
          >
            <button className="w-full border rounded-2xl py-2 px-4 bg-white text-neutral-900 font-medium hover:bg-neutral-950 hover:text-neutral-200 transition-all duration-500 hover:scale-105">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;