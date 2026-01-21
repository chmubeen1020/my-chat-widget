import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Can I Integrate The Chat Widget On Any Website?",
    answer:
      "Yes! You can easily embed the Techween AI chat widget on any CMS or custom-built website using a single <script> tag.",
  },
  {
    id: 2,
    question: "Is My Customer Data Secure?",
    answer:
      "Absolutely. All customer conversations and data are encrypted and stored securely following industry best practices.",
  },
  {
    id: 3,
    question: "Can My Team Handle Chats Alongside The AI?",
    answer:
      "Yes. Techween supports seamless handoff between AI and human agents, allowing your team to take over conversations anytime.",
  },
  {
    id: 4,
    question: "Does Techween AI Support Multi-Company Or Team Management?",
    answer:
      "Yes. Our platform is built to support multiple companies, teams, and roles from a single unified dashboard.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="relative py-10 md:py-14 xl:py-20 overflow-hidden">

      {/* HERO GRADIENT (LEFT → RIGHT) */}
      <div className="absolute inset-0 " />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-xl smtext-2xl md:text-4xl xl:text-5xl font-semibold text-black mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-sm md:text-base text-neutral-600 md:max-w-xl mx-auto mb-4 sm:mb-6 md:mb-10">
          Got questions? We’ve got you covered—here are some quick answers to
          help you get the most out of Coinest.
        </p>

        {/* FAQ LIST */}
        <div className="space-y-2 md:space-y-4 text-left">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="
                  relative bg-white rounded-xl
                  border border-gray-200
                  overflow-hidden
                "
              >
                {/* SOFT CARD OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-herogradient/20 to-herogradient pointer-events-none" />

                {/* QUESTION */}
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="relative w-full px-2 py-2 md:px-6 md:py-5 flex justify-between items-center text-left"
                >
                  <span className="text-sm md:text-base font-semibold text-black">
                    {faq.question}
                  </span>

                  <span
                    className={`text-xl font-medium text-neutral-700 transition-transform duration-300 `}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* ANSWER (SMOOTH TRANSITION) */}
                <div
                  className={`
                    relative px-2 md:px-6
                    transition-all duration-300 ease-in-out
                    overflow-hidden
                    ${isOpen ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="text-neutral-600 text-xs md:text-sm md:leading-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
