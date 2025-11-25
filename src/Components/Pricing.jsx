import React, { useEffect, useRef } from "react";
import gsap from "gsap";

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
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      const pointsBox = card.querySelector(".points-box");
      const pointsItems = card.querySelectorAll(".points-box li");

      gsap.set(pointsBox, { height: 0, opacity: 0 });
      gsap.set(pointsItems, { y: 20, opacity: 0 });

      card.addEventListener("mouseenter", () => {
        gsap.to(pointsBox, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(pointsItems, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.4,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(pointsBox, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });

        gsap.to(pointsItems, {
          y: 20,
          opacity: 0,
          duration: 0.3,
          stagger: -0.03,
        });
      });
    });
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-10">
      <section className="h-auto w-full font-bebas-neue ">
        <div className="rounded-3xl gap-4 flex flex-col">
          {gymPlans.map(({ name, points }, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="bg-primary text-white p-6 rounded-xl "
            >
              <h1 className={`text-6xl text-center`}>{name}</h1>

              <ul className={`points-box overflow-hidden bg-[url(/image/full-stop2.jpg)] bg-cover object-cover rounded-3xl  bg-no-repeat`}>
                {points.map((item, index) => (
                  <li
                    className="text-center  text-main text-2xl mt-2"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Pricing;
