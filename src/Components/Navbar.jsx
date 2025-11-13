import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useCursorStore, navLinks } from "../services.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const refOpen=useRef()
  const refClose=useRef()
  const [visible, setVisible] = useState(true);
  const { setScale,setRadius,setSize } = useCursorStore();
  

useGSAP(()=>{
  const tl=gsap.timeline({paused:true})
tl.to('.sideNav',{right:0, duration:0.7})
tl.from('#nav h4',{y:100,stagger:0.3,duration:0.3,opacity:0})


refOpen.current.addEventListener('click',function(){tl.play()})
refClose.current.addEventListener('click',function(){tl.reverse()})
},[])



  // hovering big size
  const handleLeave = () => {setScale(1); setRadius(10); setSize(15,15)};
  const handleHover = () => {setScale(6); setRadius(2); setSize(60,15)}
  // leaving small size

  return (
    <nav className="h-25 w-full bg-red-500 relative">
      <div className="size-full bg-yellow-400 px-4 flex items-center justify-between">
        <h4 className="text-6xl text-black font-extrabold">Vecna</h4>
        <IoMenu className="text-6xl" ref={refOpen}/>
      </div>
      {/* side navbar */}
      {/* {visible && ( */}
        <div  className="sideNav h-screen w-2/5 top-0 -right-[40%]  bg-blue-700 opacity absolute">
          <div className="flex flex-col items-center relative">
            {/* close icone */}
            {/* nav links */}
            <div
              id="nav"
              className="flex justify-center items-center pl-10 flex-col gap-8 w-full h-screen"
            >
              {navLinks.map(({ name, id }) => (
                <h4
                  key={id}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  className="text-7xl font-extrabold "
                >
                  {name}
                </h4>
              ))}
            </div>
            <IoClose
              className="text-6xl absolute  right-4 top-5"
              ref={refClose}
            />
          </div>
        </div>
      // {/* // )} */}
    </nav>
  );
};

export default Navbar;
