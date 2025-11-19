import React, { useRef } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import gsap from "gsap";
import { useCursorStore } from "../services";
import { useGSAP } from "@gsap/react";
const Navbar = () => {
  const { setRadius, setScale, setSize } = useCursorStore();
  const refOpen = useRef();
  const refClose = useRef();

  const navLink = [
    { id: 1, title: "Home", link: "home" },
    { id: 2, title: "Trainers", link: "trainers" },
    { id: 3, title: "Pricing", link: "pricing" },
    { id: 4, title: "About", link: "about" },
    { id: 5, title: "Contact", link: "contact" },
  ];

  useGSAP(() => {
    gsap.from('.navbar li',{
      y:-50,
      opacity:0,
      stagger:0.3,
      duration:0.2,
    })
    const tl = gsap.timeline({ paused: true });
    tl.to(".navSide", {
      right: 0,
      delay: 0.2,
      duration: 0.3,
    });
    tl.from(".h4", {
      x: 100,
      stagger: 0.4,
      duration: 0.4,
      opacity: 0,
    });

    refOpen.current.addEventListener("click", () => tl.play());
    refClose.current.addEventListener("click", () => tl.reverse());
  }, []);

  const handleLeave = () => {
    setScale(1);
    setRadius(10);
    setSize(10, 10);
  };

  const handleHover = () => {
    setScale(3);
    setRadius(2);
    setSize(25, 15);
  };

  const handleMobileLeave = () => {
    setScale(1);
    setRadius(10);
    setSize(10, 10);
  };

  const handleMobileHover = () => {
    setScale(3);
    setRadius(2);
    setSize(35, 15);
  };

  return (
    <nav className="h-20 w-full mx-auto mt-5 absolute top-0 rounded-full flex items-center justify-between px-6 ">
      {/* logo */}
      <div className="size-20">
        <img className="rounded-full" src="/image/logo.png" alt="" />
      </div>
      {/* mid section */}
      <div className="md:block hidden">
        <ul className="navbar flex justify-center items-center gap-5">
          {navLink.map(({ id, title, link }) => (
            <li
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              className="font-smibold font-bebas-neue text-2xl text-main"
              key={id}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
      {/* end section */}
      <div className=" h-15 mr-5 flex items-center justify-center">
        <button
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="bg-main text-primary font-bebas-neue font-bold px-10 py-2 rounded-3xl hidden md:block"
        >
          Join Now
        </button>
      </div>
      {/* mobile screen navbar */}
      <div className="block md:hidden">
        <IoMenu
          ref={refOpen}
          className="text-5xl text-main bg-primary rounded-2xl"
        />
        <div className="navSide h-screen w-full fixed z-100 top-0 right-[-100%] overflow-hidden">
          <ul className=" flex justify-center items-center flex-col gap-10 bg-primary h-screen">
            {navLink.map(({ title, id }) => (
              <h4
                onMouseEnter={handleMobileHover}
                onMouseLeave={handleMobileLeave}
                className="h4 text-3xl text-main font-bold font-bebas-neue"
                key={id}
              >
                {title}
              </h4>
            ))}
            <h4
              onMouseEnter={handleMobileHover}
              onMouseLeave={handleMobileLeave}
              className="h4 text-3xl text-main font-bold font-bebas-neue"
            >
              Join Now
            </h4>
            <IoClose
              ref={refClose}
              className="text-4xl bg-main absolute top-10 right-10 rounded-full"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
