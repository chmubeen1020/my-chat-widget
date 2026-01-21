import React from 'react';

const CustomerExperience = () => {
  return (
    <div className="bg-[#F8F8FF] py-6 sm:py-10 md:py-14 xl:py-20 text-center flex flex-col items-center">
      <h2 className="text-xl sm:text-2xl lg:text-4xl  font-semibold  max-w-4xl">
        Ready to Elevate Your Customer Experience?
      </h2>
      <p className="text-sm md:text-base mt-2 xl:mt-4 max-w-xs sm:max-w-xl xl:max-w-3xl">
        Join hundreds of businesses that trust Techween to handle their customer conversations with speed,
        intelligence, and care.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        {/* Get Started Now Button */}
        <button className="bg-primary text-white px-4 py-2 xl:px-6 text-sm xl:text-base rounded-md hover:bg-primary/80 transition">
          Get Started Now
        </button>
        {/* Book a Demo Button */}
        <button className="border border-primary bg-white/90 text-primary px-4 py-2 xl:px-6 text-sm xl:text-base rounded-md hover:bg-white  overflow-hidden">
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default CustomerExperience;
