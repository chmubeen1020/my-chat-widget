import React from "react";
import { FeatureHeroIcon } from "../../assets";

const features = [
  {
    id: 1,
    title: "AI + Human Hybrid Chat",
    description: `Deliver instant, intelligent answers using your company’s knowledge base — trained from files, URLs, and FAQs.`,
    icon: FeatureHeroIcon.Icon1,
  },
  {
    id: 2,
    title: "Unified Dashboard",
    description: `Monitor AI performance, agent efficiency, and customer satisfaction — all from one intuitive console.`,
    bgColor: "bg-indigo-100",
    icon: FeatureHeroIcon.Icon2,
  },
  {
    id: 3,
    title: "Smart Knowledge Training",
    description: `Easily train your AI with company-specific documents, FAQs, and data — ensuring precise, context-aware responses.`,
    icon: FeatureHeroIcon.Icon3,
  },
  {
    id: 4,
    title: "Secure Data & Cloud Integration",
    description: `All your customer interactions, billing, and reports are securely stored and accessible from anywhere.`,
    icon: FeatureHeroIcon.Icon4,
  },
];

export default function AboutSupportSection() {
  return (
    <section
      className="w-full mx-auto px-6 py-6 md:py-14 text-center 
    "
    >
      <div className="w-full  text-center mx-auto mb-2 md:mb-6 flex flex-col items-center ">
        <h2 className="text-xl sm:text-2xl md:text-4xl xl:text-5xl font-semibold mb-1 md:mb-3 ">
          Smart Conversations, Seamless Support
        </h2>
        <p className="text-sm md:text-base xl:text-lg text-gray-600 max-w-2xl">
          With Techween, you get a powerful chat automation platform built to
          elevate your customer experience, empower your team, and scale your
          business effortlessly.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:gap-8 max-w-6xl mx-auto mt-10 md:mt-20">
        {features.map(({ id, title, description, bgColor, icon }) => (
          <div
            key={id}
            className="bg-gradient-to-br from-white via-herogradient/60 to-herogradient  rounded-xl p-6 text-center border border-gray-200"
          >
            <div
              className={`inline-flex items-center justify-center mb-4 w-10 h-10 rounded-md text-primary bg-primary/10`}
            >
              <img src={icon} alt={title} className="w-6 h-6 object-contain" />
            </div>
            <h3 className="font-semibold mb-2 text-black">{title}</h3>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
