import React from "react";
import gsap from "gsap";
// import { LiaNutritionix } from "react-icons/lia";
// import { MdTrackChanges } from "react-icons/md";
// import { MdOutlineFitnessCenter } from "react-icons/md";
// import { IoFitnessSharp } from "react-icons/io5";
// import { MdCardMembership } from "react-icons/md";
// import { HiUserGroup } from "react-icons/hi";
// import BulletPoint from "./BulletPoint";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger,SplitText } from "gsap/all";

const Benefits = () => {

gsap.registerPlugin(ScrollTrigger,SplitText)
useGSAP(()=>{
  
  const split=SplitText.create('.fade-para',{type:"words"})
const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefit",
        start: 'top center',
        end: "80% 100%",
        scrub:1,
        // scrub: 1.5,
        // pin: true,
        // markers:true

      },
    });

tl.from('.fade-title',{
  y:100,
  stagger:0.3,
  opacity:0,
  duration:0.3,
  delay:0.3
})
tl.from(split.words,{
  y:100,
  opacity:0,
  autoAlpha:0,
  stagger:{
    amount:0.5,
    from:'random'
  }})



},[])

  return (
    <div className="max-w-7xl mx-auto px-4 cursor-none benefit">
      <div className=" w-full text-center pt-10 space-y-5">
        {/*  */}
        <h4 className="fade-title text-6xl text-white font-bebas-neue">
          Inpired to <br /> Ispired Your best self
        </h4>

        <p className=" fade-para text-lg text-white   font-bebas-neue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta
          ducimus ab vel, facere aspernatur officiis temporibus, perspiciatis
          quisquam sapiente dolorum earum veritatis. Cupiditate sed tenetur
          alias nihil? Qui, aperiam.
        </p>

        <div className="lg:my-10 lg:p-4">
          <div className="mask-img bg-[url('/image/builder-3.jpg')] w-full h-full lg:h-80 bg-center bg-cover bg-no-repeat   rounded-3xl">
            <div className=" lg:h-full md:flex justify-start lg:justify-between lg:py-15 lg:px-20 w-full lg:w-2/3">
              <div className="bullet flex p-2 flex-col gap-6 text-main">
                <BulletPoint text={"Nutrition Guidance"} icon={<LiaNutritionix />}/>
                <BulletPoint text={"Progress Tracking"} icon={<MdTrackChanges />}/>
                <BulletPoint text={"Community Suports" } icon={<HiUserGroup />}/>
              </div>
              <div className="bullet flex p-2 flex-col gap-6 text-main">
                <BulletPoint text={"Expert Trainer"} icon={<MdOutlineFitnessCenter />}/>
                <BulletPoint text={"Premium Membership"} icon={<MdCardMembership />}/>
                <BulletPoint text={"Next-Level Fitness"} icon={<IoFitnessSharp />}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
