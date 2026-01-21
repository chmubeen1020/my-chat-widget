import React from "react";
import FeaturesSection from "./FeaturesSection";
import { images } from "../../assets";
import PricingSection from "./Pricinplan";
import FaqSection from "./HomeFaq";
import StatsSection from "./StatusSection";

export default function HomePage() {
  return (
    <>
      <div
        className="relative pt-32 sm:pt-24 xl:pt-32 overflow-hidden bg-gradient-to-br
  from-herogradient
  via-herogradient/60
  to-white
"
      >
        {/* HERO CONTENT */}
        <div className="relative max-w-5xl flex flex-col items-center mx-auto py-4 text-center ">
          <div class="absolute left-20 bottom-4  size-14  rounded-[86.23px] border border-zinc-200/40"></div>
          <h1 className="md:text-lg xl:text-xl">AI that Talks. Humans that Care.</h1>

          <h2 className="text-xl md:text-4xl  2xl:text-5xl font-semibold mt-2 md:mt-4 max-w-xs sm:max-w-xl xl:max-w-3xl">
            Effortless Conversations that Start Smart — and Stay Human.
          </h2>

          <div className="max-w-xs sm:max-w-lg xl:max-w-2xl mt-2 md:mt-4 text-sm xl:text-base">
            <p>
              Techween’s hybrid chat system instantly answers, learns, and hands
              off to your team when needed — creating a perfect blend of
              automation and empathy.
            </p>
          </div>

          <button className="px-2 py-1 md:py-2 xl:px-4 2xl:py-3 bg-[#6B69B2] rounded-md  text-white text-sm xl:text-base font-semibold mt-6 md:mt-10">
              Get started now
            </button>
        </div>
      </div>
      {/* HERO IMAGE SECTION */}
      <div
        className="w-full pt-1 px-2 md:px-0 md:pt-0 md:h-[36vh] lg:h-[44vh] xl:h-[48vh] relative bg-contain bg-center bg-herogradient/20
             flex flex-col justify-end items-center"
        style={{ backgroundImage: `url(${images.HeroVector})` }}
      >
        <img
          src={images.HeroDashboard}
          alt="Dashboard"
          className=" w-full max-w-[750px] lg:max-w-[950px] 2xl:max-w-[1070px] "
        />
      </div>

      <div
        className="bg-gradient-to-r
    from-white
    via-herogradient/40
    to-white"
      >
        <div>
          <FeaturesSection />
        </div>
        <div>
          <PricingSection />
        </div>
      </div>
      <div>
        <FaqSection />
        <div className="bg-gradient-to-b from-white via-white to-herogradient">
          <StatsSection />
        </div>
      </div>
    </>
  );
}
