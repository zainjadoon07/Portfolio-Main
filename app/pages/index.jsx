import { ThreeDCard } from "@/components/Card.jsx";
import { MapPin } from "lucide-react";

import { gsap } from "gsap"

import { SplitText } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(SplitText);
const Homepage = () => {

  useEffect(() => {

    const split = SplitText.create(".content", { type: "chars,words" })

    gsap.from(split.chars, {

      y: 30,
      autoAlpha: 0,
      delay: 0.5,
      ease: "power1.inOut",
      stagger: {

        amount: 1,

      }
    })

    gsap.fromTo(".card", {
      rotate: -5,
    }, {
      duration: 4,
      rotate: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"

    })


    // Twinkling stars
    gsap.to(".star", {
      opacity: () => gsap.utils.random(0.05, 0.4),
      duration: () => gsap.utils.random(1, 3),
      repeat: -1,
      yoyo: true,
      stagger: { amount: 4 },
      ease: "power1.inOut"
    });

    // Floating icons
    gsap.to(".icon", {
      y: () => gsap.utils.random(-40, 40),
      x: () => gsap.utils.random(-40, 40),
      rotate: () => gsap.utils.random(-15, 15),
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });


  }, [])


  return (
    <div className="bg-black min-h-screen text-neutral-100 flex flex-col pt-16 font-inter overflow-x-hidden relative">
      {/* BACKGROUND FLOATING EFFECTS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">

        {/* Stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="star absolute w-0.5 h-0.5 bg-white rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Floating Icons */}
        <div className="icon absolute text-white/20 text-4xl top-[20%] right-[20%]">★</div>
        <div className="icon absolute text-white/20 text-4xl bottom-[30%] left-[25%]">✦</div>
        <div className="icon absolute text-white/20 text-3xl top-[55%] left-[55%]">✧</div>

      </div>

      {/* Name */}
      <div className=" content text-[50px] sm:text-[80px] md:text-[110px] lg:text-[150px] flex justify-center font-bold leading-none ">
        <div className="flex relative ">
          <p>Zain Jadoon</p>
          <p className="flex absolute text-sm bottom-0 right-7">(@ZJ) </p>
        </div>

      </div>

      {/* Main Content */}
      <div className=" content flex flex-col lg:flex-row justify-around items-center h-full w-full gap-10 px-6 py-12">

        {/* Left Text */}
        <div className=" tracking-widest content w-full text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-neutral-300 text-center lg:text-left">
          <p>
            Software <br />
            <strong className="content text-7xl sm:text-6xl md:text-7xl">
              Engineer
            </strong>{" "}
            Based in{" "}
            <strong className="text-green-300 content inline-flex items-center gap-2">
              <MapPin size={48} className="inline" />
              Pakistan
            </strong>
          </p>
        </div>

        {/* 3D Card */}
        <div className="card w-full flex items-center justify-center">
          <div className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
            <ThreeDCard />
          </div>
        </div>

        {/* Right Paragraph */}
        <div className="w-full max-w-lg text-base sm:text-lg md:text-xl text-neutral-400 flex justify-center items-center text-center lg:text-left content ">
          <p>
            With a strong academic background in Computer Science, I provide
            solutions that not only help others but also create a positive real-world impact.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Homepage;
