import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { IoFitnessSharp } from "react-icons/io5";
import { useCursorStore } from "./services";
import Benefits from "./Components/Benefits";
import Services from "./Components/Services";
import MotivateText from "./Components/MotivateText";
import Builder from "./Components/Builder";
import BigText from "./Components/BigText";
import PricingCard from "./Components/Trainers";
import Pricing from "./Components/Pricing";
import Video from "./Components/mini components/Video";

const App = () => {
  const { scale, radius, width, height } = useCursorStore();

  // console.log(typeof scale)

  useEffect(() => {
    gsap.to("#cursor", {
      scale,
      width: width,
      height: height,
      borderRadius: radius,
      duration: 0.2,
      ease: "power2.out",
    });
  }, [scale, radius, width, height]);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      gsap.to("#cursor", {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="cursor-none overflow-hidden">
       <div id="cursor" className="size-5 bg-main fixed top-0 left-0 mix-blend-difference pointer-events-none z-[9999] " />
    <div className="h-screen w-screen">

      <Video />
      <Navbar/>
    </div>
    <MotivateText/>
    <PricingCard/>
    <Pricing/>
    
    {/* <BigText/> */}
    {/* <Builder/> */}
    </div>
      
  );
};

export default App;
