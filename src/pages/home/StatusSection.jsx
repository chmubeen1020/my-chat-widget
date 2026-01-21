import React from "react";

const stats = [
  {
    id: 1,
    value: "10K+",
    label: "Chats Managed",
    subLabel: "Monthly",
  },
  {
    id: 2,
    value: "95%",
    label: "Customer Satisfaction",
    subLabel: "Rate",
  },
  {
    id: 3,
    value: "4x Faster",
    label: "Response Times",
    subLabel: "",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-10 md:py-14 xl:py-24 overflow-hidden">

      {/* HERO GRADIENT (LEFT → RIGHT) */}

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* HEADING */}
        <h2 className="text-xl sm:text-2xl md:text-4xl xl:text-5xl max-w-3xl font-semibold text-black mb-2 md:mb-4 mx-auto">
          Empowering Businesses to Scale with Confidence
        </h2>

        <p className="text-sm md:text-base text-neutral-500 max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-10">
          With Techween, companies worldwide are transforming their support
          systems and achieving measurable results.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="
              bg-gradient-to-br from-[#FAFAFA85]/50 via-herogradient/30 to-herogradient/80
                rounded-xl border border-herogradient/80 shadow-sm
                px-10 py-8
                text-center
                overflow-hidden
                relative
              "
            >
              {/* SOFT CARD OVERLAY */}
              {/* <div className="absolute inset-0  pointer-events-none border border-transparent" /> */}

              <div className="relative">
                <div className="text-3xl font-bold text-black mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 leading-tight">
                  {stat.label}
                  {stat.subLabel && (
                    <div className="text-neutral-500">{stat.subLabel}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
