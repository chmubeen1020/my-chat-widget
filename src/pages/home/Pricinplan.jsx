import React from "react";

const plans = [
  {
    id: 1,
    name: "Starter",
    price: 19,
    popular: false,
    features: [
      "7 day free trail",
      "1,000 chats per month",
      "5 team members",
      "Basic AI training",
      "Email support",
      "2GB storage",
    ],
  },
  {
    id: 2,
    name: "Professional",
    price: 49,
    popular: true,
    features: [
      "7 day free trail",
      "5,000 chats per month",
      "25 team members",
      "Advanced AI training",
      "Priority support",
      "10GB storage",
      "Custom branding",
      "Analytics dashboard",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: 149,
    popular: false,
    features: [
      "7 day free trail",
      "Unlimited chats",
      "Unlimited team members",
      "Advanced AI training",
      "24/7 phone support",
      "100GB storage",
      "Custom branding",
      "API access",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-10  xl:py-20 overflow-hidden">
      {/* BACKGROUND GRADIENT */}

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl 2xl:text-5xl font-semibold text-black mb-3">
          Choose the Best Plan for Your Business
        </h2>
        <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto mb-4 sm:mb-8 md:mb-10">
          Start free, upgrade anytime — scale your customer support with AI and
          human collaboration built for every stage of growth.
        </p>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="
                relative bg-gradient-to-tr
    from-herogradient/20
    via-herogradient
    to-white rounded-2xl py-12 px-8 text-left
                border border-gray-200
                transition-all duration-300
              "
            >
              {/* POPULAR BADGE */}
              {plan.popular && (
                <span
                  className="absolute -top-4 left-1/2 -translate-x-1/2
                                 bg-teal-500 text-white text-xs font-semibold
                                 px-4 py-1 rounded-full"
                >
                  Most Popular
                </span>
              )}

              {/* PLAN NAME */}
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                {plan.name}
              </h3>

              {/* PRICE */}
              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-bold text-black">
                  ₺{plan.price}
                </span>
                <span className=" font-bold text-black mb-1">/month</span>
              </div>

              {/* CTA */}
              <button
                className="
                  w-full py-1.5 rounded-md mb-6
                  border border-primary/20
                   font-semibold
                  hover:bg-indigo-50 transition
                "
              >
                Get Started
              </button>

              {/* FEATURES */}
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-neutral-700"
                  >
                    <span className="mt-1 w-4 h-4 flex items-center justify-center rounded-full bg-neutral-800 text-white text-xs">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
