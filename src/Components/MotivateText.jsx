import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useCursorStore } from "../services";
gsap.registerPlugin(SplitText, ScrollTrigger);

const MotivateText = () => {
  const { setRadius, setScale, setSize } = useCursorStore();
  const animateRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    // Wait until fonts load
    document.fonts.ready.then(() => {
      const split = new SplitText(textRef.current, { type: "chars" });
      //
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animateRef.current,
          start: "top 50%",
          end: "top 20%",
          // markers:true
          // toggleActions: "onEnter onLeave onEnterBack onLeaveBack",
        },
      });

      tl.from(split.chars, {
        opacity: 0,
        y: 200,
        stagger: { amount: 0.6, from: "random" ,yoyo:true},
        duration: 0.8,
        ease: "power2.out",
      });
      

    });

    
  }, []);

  const handleMobileLeave = () => {
    setScale(1);
    setRadius(10);
    setSize(10, 10);
  };

  const handleMobileHover = () => {
    setScale(8);
    setRadius(100);
    setSize(20, 20);
  };

  return (
    <div ref={animateRef} className=" max-w-6xl mx-auto px-5 overflow-hidden">
      <div
        className="px-4 py-10"
        onMouseEnter={handleMobileHover}
        onMouseLeave={handleMobileLeave}
      >
        <h3 ref={textRef} className="text-3xl text-center md:text-8xl font-bold font-bebas-neue text-main leading-tight">
          No Pain no gain{" "}
          <img
            className="inline grayscale-50 rounded-full w-10 md:w-30 h-auto mx-2"
            src="/image/full-stop.jpg"
            alt="full stop"
          />{" "}
          try now result later{" "}
          <img
            className="inline  rounded-full w-10 md:w-30 h-auto mx-2"
            src="/image/full-stop2.jpg"
            alt="full stop"
          />{" "}
          Be stronger than your excuses{" "}
          <img
            className="inline  rounded-full w-10 md:w-30 h-auto mx-2"
            src="/image/full-stop3.jpg"
            alt="full stop"
          />{" "}
          Hustle for the Muscle.{" "}
          <img
            className="inline  rounded-full w-10 md:w-30 h-auto mx-2"
            src="/image/full-stop4.jpg"
            alt="full stop"
          />{" "}
          Strong today, stronger tomorrow.{" "}
          <img
            className="inline  rounded-full w-10 md:w-30 h-auto mx-2"
            src="/image/full-stop2.jpg"
            alt="full stop"
          />
        </h3>
      </div>
    </div>
  );
};

export default MotivateText;
