import React, { useRef, useEffect } from "react";
import { LiaNutritionix } from "react-icons/lia";
import { MdTrackChanges } from "react-icons/md";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { IoFitnessSharp } from "react-icons/io5";
import { MdCardMembership } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import BulletPoint from './mini components/BulletPoint.jsx'

const Builder = () => {
  const containerRef = useRef();
  const maskRef = useRef();
  const textRef = useRef();
  const pointRef = useRef();
  const scaleRef = useRef();

  
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Multiple bullet points
  const bullets = gsap.utils.toArray(".bullet-item");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scaleRef.current,
      start: "top 60%",
      end: "top 10%",
      scrub: 2,
      // markers: true
    }
  });

  tl.to(textRef.current, {
    opacity: 0,
    duration: 1.2,
    ease: "power1.inOut",
  });

  tl.to(maskRef.current, {
    scale: 1.3,
    borderRadius: 300,
    duration: 2,
    maskSize: "400%",
    ease: "power2.inOut",
  });

  // now stagger works (multiple elements)
  tl.from(bullets, {
    opacity: 0,
    y: 20,
    stagger: 0.2,
    ease: "power1.out",
  });

}, []);


  return (
    <section className="max-w-7xl mx-auto px-5 overflow-hidden ">
      <div className="h-screen w-full py-4 relative">
        {/* masked-1  */}
             <div ref={scaleRef} className=" flex justify-center items-center flex-col">
              {/* <div> */}
                <h2 ref={textRef} className="text-[8vw] text-white font-bold font-bebas-neue">Benefit of our gym</h2>
              {/* </div> */}
            <img ref={maskRef}
              className="masked-img w-full h-80 object-cover "
              src="/image/builder-2.jpg"
              alt="trainer"
            />
           <div ref={pointRef} className="absolute bullet flex bottom-70 gap-30 bg-black">
  <div className="flex p-2 flex-col gap-6 text-main">
    <BulletPoint text="Nutrition Guidance" icon={<LiaNutritionix />} extraClass="bullet-item" />
    <BulletPoint text="Progress Tracking" icon={<MdTrackChanges />} extraClass="bullet-item" />
    <BulletPoint text="Community Supports" icon={<HiUserGroup />} extraClass="bullet-item" />
  </div>
  <div className="flex p-2 flex-col gap-6 text-main">
    <BulletPoint text="Expert Trainer" icon={<MdOutlineFitnessCenter />} extraClass="bullet-item" />
    <BulletPoint text="Premium Membership" icon={<MdCardMembership />} extraClass="bullet-item" />
    <BulletPoint text="Next-Level Fitness" icon={<IoFitnessSharp />} extraClass="bullet-item" />
  </div>
</div>

          </div>
      </div>
    </section>
  );
};

export default Builder;
