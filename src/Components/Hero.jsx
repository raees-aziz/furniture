import React, { useRef } from "react";
import gsap from "gsap";
import CountUp from "react-countup";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".title", {
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      tl.from(".subtitle", {
        x: 100,
        opacity: 0,
        scale: 1.2,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: heroRef }
  );

  return (
    <div ref={heroRef} className="w-full h-screen flex flex-col justify-evenly items-start p-4">

      {/* Heading Section */}
      <div className="flex flex-col items-center text-main text-center p-4
                      font-bebas-neue font-bold rounded-md bg-opacity-0 border-2 border-main
                      backdrop-blur-md ">
        <h4 className="title text-8xl leading-tight">
          Build Your Body
        </h4>

        <p className="subtitle mt-4 text-2xl p-2 bg-white text-primary rounded-md">
          Fitness is not just about looking good — it's about feeling good inside.
        </p>
      </div>

      {/* Counter Section */}
      <div className="md:w-2/3 w-full mx-auto flex justify-between items-center
                      p-4 mt-6 rounded-md border-2 border-white backdrop-blur-md
                      font-bebas-neue">

        {/* Clients */}
        <div className="flex flex-col items-center text-main text-5xl md:text-7xl">
          <p className="text-white text-sm md:text-xl mb-1">Happy Clients</p>
          <div className="flex items-center">
            <CountUp end={100} duration={5} />
            <span>+</span>
          </div>
        </div>

        {/* Trainers */}
        <div className="flex flex-col items-center text-main text-5xl md:text-7xl">
          <p className="text-white text-sm md:text-xl mb-1">Trainers</p>
          <div className="flex items-center">
            <CountUp end={10} duration={5} />
            <span>+</span>
          </div>
        </div>

        {/* Machines */}
        <div className="flex flex-col items-center text-main text-5xl md:text-7xl">
          <p className="text-white text-sm md:text-xl mb-1">Machines</p>
          <div className="flex items-center">
            <CountUp end={80} duration={5} />
            <span>+</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
