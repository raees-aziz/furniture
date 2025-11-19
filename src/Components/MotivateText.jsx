import React, { useEffect } from "react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(SplitText, ScrollTrigger);

const MotivateText = () => {
  useEffect(() => {
    // Wait until fonts load
    document.fonts.ready.then(() => {
      const split = new SplitText(".animate-text", { type: "words" });
     const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".motivate",
        markers: true,
        start: "top 80%",
        end: "top 40%",
      },
    });

      tl.from(split.words, {
        opacity: 0,
        y: 200,
        stagger: { amount: 0.5, from: "random" },
        duration: 0.8,
        ease: "power2.out", 
        
      });
    });
  }, []);

  return (
    <div className="motivate max-w-7xl mx-auto px-5 overflow-x-hidden">
      <div className="px-4 py-10">
        <h3 className="animate-text text-6xl md:text-8xl font-bold font-bebas-neue text-main leading-tight">
          No Pain no gap{" "}
          <img
            className="inline rounded-full w-20 h-auto mx-2"
            src="/image/full-stop.jpg"
            alt="full stop"
          />{" "}
          try now result later{" "}
          <img
            className="inline rounded-full w-20 h-auto mx-2"
            src="/image/full-stop2.jpg"
            alt="full stop"
          />{" "}
          Be stronger than your excuses{" "}
          <img
            className="inline rounded-full w-20 h-auto mx-2"
            src="/image/full-stop3.jpg"
            alt="full stop"
          />{" "}
          Hustle for the Muscle.{" "}
          <img
            className="inline rounded-full w-20 h-auto mx-2"
            src="/image/full-stop4.jpg"
            alt="full stop"
          />{" "}
          Strong today, stronger tomorrow.{" "}
          <img
            className="inline rounded-full w-20 h-auto mx-2"
            src="/image/full-stop2.jpg"
            alt="full stop"
          />
        </h3>
      </div>
    </div>
  );
};

export default MotivateText;
