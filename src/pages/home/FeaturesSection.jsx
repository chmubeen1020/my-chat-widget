import React from 'react';
import {FeatureHeroIcon} from "../../assets";

const features = [
  {
    id: 1,
    title: 'AI-Powered Responses',
    description: `Deliver instant, intelligent answers using your company’s knowledge base — trained from files, URLs, and FAQs.`,
    icon: FeatureHeroIcon.Icon1,
  },
  {
    id: 2,
    title: 'Hybrid Chat Management',
    description: `Enable smooth handoffs between AI and human agents for complex or sensitive customer queries.`,
    bgColor: 'bg-indigo-100',
    icon: FeatureHeroIcon.Icon2,
  },
  {
    id: 3,
    title: 'Multi-Tenant Dashboard',
    description: `Monitor multiple companies, agents, and chat analytics from one intuitive admin console.`,
    icon: FeatureHeroIcon.Icon3,
  },
  {
    id: 4,
    title: 'Secure Data & Cloud Integration',
    description: `All your customer interactions, billing, and reports are securely stored and accessible from anywhere.`,
    icon: FeatureHeroIcon.Icon4,
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full mx-auto px-6 py-10 md:py-20 text-center 
    ">
      <div className='w-full  text-center mx-auto mb-4 lg:mb-6'>
      <h2 className="text-xl sm:text-2xl md:text-4xl  xl:text-5xl font-semibold mb-3 ">
        Manage, analyze, and grow your <br /> customer experience — effortlessly.
      </h2>
      <p className="xl:text-lg text-gray-600 ">
        Techween brings every AI and human interaction together in one seamless platform.
      </p>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-8 max-w-6xl mx-auto mt-6 lg:mt-10 2xl:mt-16">
        {features.map(({ id, title, description, bgColor, icon }) => (
          <div key={id} className="bg-gradient-to-br from-white to-herogradient border border-primary rounded-xl p-6 text-left hover: hover:border-gray-50 border-transparent hover:bg-gradient-to-br hover:from-white hover:to-cyan-70 hover:shadow-sm  transition-shadow">
            <div className={`inline-flex items-center justify-center mb-4 w-10 h-10 rounded-md text-primary bg-primary/10`}>
              <img
  src={icon}
  alt={title}
  className="w-6 h-6 object-contain"
/>
            </div>
            <h3 className="font-semibold mb-2 text-black">{title}</h3>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
