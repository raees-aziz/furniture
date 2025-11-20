import React, { useRef ,useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const Builder = () => {
const containerRef=useRef()
const maskRef=useRef()
const bgRef=useRef()

    useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 40%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
  });

  // Foreground mask scale
  tl.to(maskRef.current, {
    scale: 1.5,
    ease: "power2.out",
  }, 0);

  // Background image adjust to fit square
  tl.to(bgRef.current, {
    scale: 1,
    width: "100%",
    height: "100%",
    ease: "power2.out",
  }, 0);

}, []);

  return (
    <section className="max-w-6xl mx-auto px-5">
      <div className="h-screen w-full ">
        {/* masked image */}
        <div 
  ref={containerRef}
  className="relative w-[400px] h-[400px] mx-auto mt-[200px] overflow-hidden"
>
  {/* Background Image */}
  <img
    ref={bgRef}
    src="/image/builder-2.jpg"
    className="absolute top-0 left-0 w-[120%] h-[120%] object-cover"
  />

  {/* Mask Image */}
  <img
    ref={maskRef}
    src="/image/builder-1.png"
    className="absolute inset-0 w-full h-full object-contain mask-custom"
  />
</div>

      </div>
    </section>
  );
};

export default Builder;
