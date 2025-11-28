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
      const heading = card.querySelector(".plan-heading");
      const container = card.querySelector(".expand-container");
      const pointsItems = card.querySelectorAll(".points-box li");

      // Initial collapsed
      gsap.set(container, { height: 0, opacity: 0 });
      gsap.set(pointsItems, { y: 20, opacity: 0 });

      // Heading hover → expand
      heading.addEventListener("mouseenter", () => {
        gsap.to(container, {
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

      // Container hover leave → collapse
      container.addEventListener("mouseleave", () => {
        gsap.to(container, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });

        gsap.to(pointsItems, {
          y: 20,
          opacity: 0,
          stagger: -0.03,
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-10">
      <section className="h-auto w-full font-bebas-neue">
        <div className="rounded-3xl h-full gap-4 flex flex-col">
          {gymPlans.map(({ name, points }, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="bg-black text-white p-6 rounded-3xl border border-main/40
                 shadow-[0_0_25px_rgba(0,255,100,0.5)]
                 transition-all duration-300"
            >
              {/* Heading */}
              <h1 className="plan-heading text-6xl text-center mb-4 text-main font-bold cursor-pointer">
                {name}
              </h1>

              {/* Container wrapping points + image */}
              <div className="expand-container overflow-hidden">
                <div className="flex justify-between items-start gap-6">
                  <ul className="points-box w-1/2 p-4 bg-main/10 rounded-xl">
                    {points.map((item, index) => (
                      <li className="text-xl mt-2 text-main" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <img
                    src="/image/full-stop2.jpg"
                    className={`${i==gymPlans.length-1?'h-[600px]':'h-full'} w-[45%] rounded-xl object-cover shadow-[0_0_25px_rgba(0,255,100,0.5)]`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Pricing;
