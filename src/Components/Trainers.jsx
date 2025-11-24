import React from "react";
import Card from "./mini components/Card.jsx";

const Trainers = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 radial-gradient">
      <div className="w-full h-auto">
        {/*  */}
        <h3 className="text-8xl text-white font-bold font-bebas-neue text-center">Trainers</h3>
        <div className="flex flex-col h-auto md:flex-row justify-between md:gap-0 gap-10 items-center px-10 md:px-0 py-10">
          <Card name={"jacob"} src={'/image/trainer-1.jpg'} />
          <Card name={"andrew"} src={'/image/builder-2.jpg'} />
          <Card name={"elizabeth"} src={'/image/trainer-2.jpg'} />
         
        </div>
      </div>
    </section>
  );
};

export default Trainers;
