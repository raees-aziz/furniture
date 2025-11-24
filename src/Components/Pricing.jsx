import React, { useEffect } from "react";
import { useRef } from "react";

const gymPlans = [
  {
    name: "Basic Plan",
    points: [
      "Personalized fitness assessment",
      "Access to gym equipment",
      "2 group fitness classes per week",
      "Basic nutrition guidance",
    ],
  },
  {
    name: "Basic Plus Plan",
    points: [
      "Initial body composition analysis",
      "Full access to cardio & strength equipment",
      "3 fitness classes per week",
      "Simple home workout tips",
      "Weekly progress check-ins",
      "Trainer guidance for correct form",
    ],
  },
  {
    name: "Advance Plan",
    points: [
      "Comprehensive fitness assessment",
      "Tailored workout plan",
      "Strength training & cardio program",
      "4 group classes per week",
      "Advanced nutrition guidance",
      "Body composition tracking",
      "Flexibility & mobility sessions",
      "Core strengthening program",
    ],
  },
  {
    name: "Premium Plan",
    points: [
      "Full fitness evaluation",
      "Customized training program",
      "Strength & cardio training",
      "6 group classes per week",
      "Personal trainer guidance",
      "Advanced nutrition plan",
      "Supplement guidance (if needed)",
      "Body composition analysis",
      "Flexibility & mobility training",
      "Posture correction sessions",
      "Core & functional training",
      "Fat loss & muscle gain tracking",
      "Monthly progress reports",
      "Weekly one-on-one trainer check-ins",
      "Endurance & stamina program",
      "Lifestyle & habit coaching",
    ],
  },
];

const Pricing = () => {
  const heigtRef = useRef(null);

  useEffect(() => {
    heigtRef.current.addEventListener("click", () => console.log("clik"));
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-10">
      <section className="h-auto w-full font-bebas-neue ">
        <div className="card h-full w-full">
          {/* heading content */}
          <div className="rounded-3xl gap-2 flex flex-col">
            {gymPlans.map(({ name, points }, i) => (
              <div ref={heigtRef} className={`bg-primary text-white ${i+2}00 rounded-lg hover:h-100 h-40 transition-all duration-500`}>
                <h1 className="text-8xl text-center pt-10">{name}</h1>
                <div className="overflow-hidden max-h-0 group-hover:max-h-100  transition-all duration-500">
                  {/* <p className="p-4">
               {points.map((i,index)=>(
                <li key={index}>{i}</li>
               ))}
              </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
