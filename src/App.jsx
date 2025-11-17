import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { useCursorStore } from "./services";


const App = () => {
  
  const {scale,radius,width,height}=useCursorStore()

  // console.log(typeof scale)

  useEffect(() => {
  gsap.to("#cursor", {
    scale,
    width:width,
    height:height,
    borderRadius:radius,
    duration: 0.2,
    ease: "power2.out",
  });
}, [scale,radius,width,height]);

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
    <div className="overflow-hidden cursor-none w-screen min-h-screen bg-[url('/image/builder-2.jpg')] bg-no-repeat bg-center bg-cover">
      <div id="cursor" className="size-5 bg-main fixed top-0 left-0 mix-blend-difference pointer-events-none z-[9999] will-change-transform" />
      <Navbar/>
     <Hero/>
    </div>
  );
};

export default App;
