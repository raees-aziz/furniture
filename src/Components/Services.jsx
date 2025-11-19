import React from 'react'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from 'gsap';

const Services = () => {

  gsap.registerPlugin(ScrollTrigger, SplitText);

  useGSAP(() => {

    // Ensure fonts are fully loaded before SplitText
    document.fonts.ready.then(() => {
      const split = SplitText.create('.fade-para', { type: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".benefit",
          start: 'top center',
          end: "80% 100%",
          scrub: 1,
        },
      });

      gsap.from('.fade-title', {
        y: 100,
        stagger: 0.3,
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
      });

      gsap.from(split.words, {
        y: 100,
        opacity: 0,
        autoAlpha: 0,
        stagger: {
          amount: 0.5,
          from: 'random',
        },
      });
    });

  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 cursor-none benefit">
      <div className="h-auto lg:h-screen w-full text-center pt-10 space-y-5">

        <h4 className="fade-title text-6xl text-white font-bebas-neue">
          Discover to <br /> Whats Sets Us Apart
        </h4>

        <p className="fade-para text-lg text-white font-bebas-neue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta
          ducimus ab vel, facere aspernatur officiis temporibus, perspiciatis
          quisquam sapiente dolorum earum veritatis. Cupiditate sed tenetur
          alias nihil? Qui, aperiam.
        </p>

      </div>
    </div>
  );
}

export default Services;
