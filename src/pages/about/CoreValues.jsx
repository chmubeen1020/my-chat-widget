import React from 'react';
import { CoreValueIcon } from '../../assets';

const CoreValues = () => {
  // Dummy data object
  const values = [
    {
      title: "Innovation",
      description:
        "We innovate relentlessly — turning ideas into intelligent experiences that redefine support.",
      icon: CoreValueIcon.CoreIcon1
    },
    {
      title: "Transparency",
      description:
        "We build trust through openness, clarity, and honest communication in everything we do.",
      icon: CoreValueIcon.CoreIcon2
    },
    {
      title: "Empathy",
      description:
        "We design AI that listens, understands, and connects — because every conversation matters.",
      icon: CoreValueIcon.CoreIcon3
    },
    {
      title: "Collaboration",
      description:
        "We grow together, empowering our clients and teams to achieve more, side by side.",
      icon: CoreValueIcon.CoreIcon4
    },
    {
      title: "Trust & Integrity",
      description:
        "We stand by our word — delivering on promises with consistency and care.",
      icon: CoreValueIcon.CoreIcon5
    },
    {
      title: "Excellence",
      description:
        "We aim higher every day — setting new standards for quality, precision, and impact.",
      icon: CoreValueIcon.CoreIcon6
    },
  ];

  return (
    <div className="py-6 sm:py-10 md:py-14 px-4 bg-white flex flex-col items-center">
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-center mb-2">Techween’s Core Values</h2>
      <p className="text-sm md:text-base xl:text-lg text-center mb-4 sm:mb-8 md:mb-10 text-[#677489]">
        At Techween, our values shape everything we design, build, and deliver.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:gap-6 max-w-4xl xl:max-w-7xl">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-herogradient/80 via-herogradient/60 to-white border border-gray-200 p-4 md:p-6 rounded-xl flex flex-col items-start"
          >
            <div
              className={`inline-flex items-center justify-center mb-4 md:mb-8 w-8 h-8 md:w-12 md:h-12 rounded-lg   ${index === 0 ? 'bg-primary text-white':'text-primary bg-[#6B69B21A]'}`}
            >
              <img
                src={value.icon}
                alt={value.title}
                className="w-6 h-6 object-contain"
              />
            </div>
            <h3 className="font-semibold text-lg mb-1 md:mb-2 text-black">{value.title}</h3>
            <p className="text-sm text-gray-700 font-medium">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
