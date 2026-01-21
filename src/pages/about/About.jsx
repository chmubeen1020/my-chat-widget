import FaqSection from "../home/HomeFaq";
import StatsSection from "../home/StatusSection";
import AboutSupportSection from "./AboutSupport";
import CoreValues from "./CoreValues";
import CustomerExperience from "./CustomerExperience";
import OurMission from "./OurMission";

export default function About() {
  return (
    <>
      <div
        className="relative overflow-hidden pt-14 xl:pt-28 bg-heroGradient
  "
      >
        {/* HERO CONTENT */}
        <div className="relative w-full px-4 md:px-0 max-w-4xl xl:max-w-5xl flex flex-col items-center mx-auto py-10 text-center">
          <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold ">
            The Journey Behind Techween
          </h2>

          <div className="text-sm xl:text-base w-full max-w-2xl mt-2 sm:mt-4 md:mt-7">
            <p>
              Techween was built to transform how businesses connect with their
              customers — blending AI precision with a human touch. Our platform
              unifies chat, automation, and analytics to help teams deliver
              faster, smarter, and more personal experiences. Because every
              great conversation starts with understanding.
            </p>
          </div>
        </div>
      </div>
      <OurMission />
      <AboutSupportSection />
      <CustomerExperience />
      <CoreValues />
      <StatsSection />
      <div className="bg-gradient-to-b from-white via-white to-herogradient">
        <FaqSection />
      </div>
    </>
  );
}
