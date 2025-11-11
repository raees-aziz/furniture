import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import Cursor from "./components/Cursor";

const App = () => {

  const scaleIn=()=>{
    gsap.to("#cursor",{
      background:'cyan',
      color:'#ff0000',
      scale:8,
      duration:0.3,
    })
    // h1 text
    gsap.to(".text",{
      color:'#ff0000',
    })
  }
  const scaleOut=()=>{
    gsap.to("#cursor",{
      background:'#05df72 ',
      color:'white',
      scale:1,
      duration:0.3,
    })
    // h1 text
    gsap.to(".text",{
      color:'white',
    })
  }

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
    <div className="h-screen w-full bg-black cursor-none flex items-center justify-center">
      <div
      id='cursor'
      className="size-5  rounded-full bg-green-400 fixed top-0 left-0 mix-blend-difference pointer-events-none z-[9]"
    />
      <h1 className="text-8xl text text-white z-100" onMouseLeave={scaleOut} onMouseEnter={scaleIn}>Hover Me!</h1>
    </div>
  );
};

export default App;
