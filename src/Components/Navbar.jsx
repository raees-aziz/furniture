import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useCursorStore, navLinks } from "../services.js";
import gsap from "gsap";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  // store value

  const { setScale,setRadius,setSize } = useCursorStore();

  // navbar open
  const handleOpen = () => {
    console.log("open");
    setVisible(true);
  };

  // navbar close
  const handleClose = () => {
    console.log("close");
    setVisible(false);
  };

  // hovering big size
  const handleLeave = () => {setScale(1); setRadius(10); setSize(15,15)};
  const handleHover = () => {setScale(6); setRadius(2); setSize(60,15)}
  // leaving small size

  return (
    <nav className="h-25 w-full bg-red-500 relative">
      <div className="size-full bg-yellow-400 px-4 flex items-center justify-between">
        <h4 className="text-6xl text-black font-extrabold">Reyna</h4>
        <IoMenu className="text-6xl" onClick={handleOpen} />
      </div>
      {/* side navbar */}
      {visible && (
        <div className="h-screen w-2/5 top-0 right-0  bg-purple-700 opacity absolute">
          <div className="flex flex-col items-center relative">
            {/* close icone */}
            {/* nav links */}
            <div
              id="nav"
              className="flex justify-center items-start pl-10 flex-col gap-8 w-full h-screen bg-red-700"
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
              onClick={handleClose}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
