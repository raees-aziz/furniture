import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import Cursor from "./components/Cursor";

const Cursor = () => {

  

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
      <div
      id='cursor'
      className="size-3  rounded-full bg-black fixed top-0 left-0 mix-blend-difference pointer-events-none z-10"
    />
  );
};

export default Cursor;
