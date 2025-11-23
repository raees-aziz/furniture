import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger)
const BigText = () => {
    const textRef=useRef()

useGSAP(()=>{
    // console.log(textRef.current)
    gsap.to(textRef.current,{
        x:textRef.current.offsetHeight,
    scrollTrigger:{
        trigger:'h4',
        markers:true,
        start:'top top',
        end:"bottom bottom",
        screenX:100,
        pin:true,
        scrub:2,
    }
})
},[])

  return (
    <div className="max-w-7xl mx-auto px-5">
      <div ref={textRef}  className="h-screen w-full border-2">
        <h4 className="text-[30vw] text-main font-bebas-neue text-start font-extrabold text-nowrap">
          Our Professional trainers
        </h4>
      </div>
    </div>
  );
};

export default BigText;
