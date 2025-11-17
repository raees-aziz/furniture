import React from "react";
import gsap from "gsap";
import CountUp from 'react-countup';
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".text-fade", {
      x: 200,
      opacity: 0,
      duration: 1,
      // scale:2,
    });
    //
    tl.from(".fade", {
      x: 100,
      opacity: 0,
      scale: 2,
    });
  }, []);

  return (
    <div className="h-screen w-full">
      <div className="flex justify-end  md:items-center items-end size-full ">
        <div className="text-fade w-100 mr-10 text-center mb-50 h-100 text-8xl font-bebas-neue font-bold rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-transparent">
          build your <br /> body
          {/* <h4 className="uppercase bg-main text-primary rounded-2xl">Start Today</h4> */}
          <p className="fade text-2xl bg-main text-primary mt-10 rounded-md">
            Fitness is not just about looking good, it's about feeling good from
            the inside out. Don't count the days, make the days count.
          </p>
        </div>
   
      </div>
    </div>
  );
};

export default Hero;
