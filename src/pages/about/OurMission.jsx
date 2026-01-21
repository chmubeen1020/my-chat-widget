import React from 'react'
import { images } from '../../assets';

const OurMission = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-50  py-4 xl:py-4 justify-center gap-6 md:gap-14 px-4 md:px-1">
      {/* Left Side Panel */}
<div className='w-full sm:w-1/2 flex justify-end'>
<img
                src={images.AiDashboardFull}
                alt="Techween Dashboard"
                className="w-fit md:h-[320px] xl:h-[450px] object-contain "
              />
</div>

      {/* Right Side Text Section */}
      <div className="w-full sm:w-1/2  md:ml-4 rounded-lg md:py-4">
        <h2 className="text-2xl md:text-4xl xl:text-5xl max-w-lg font-semibold text-gray-800">Fueling Techween’s Mission</h2>
        <p className="mt-2 md:mt-4 md:text-lg text-gray-600 font-bold">
          We believe technology should feel human.
        </p>
        <p className="mt-1 max-w-lg text-sm md:text-base xl:text-lg text-gray-600">
        Techween empowers teams to respond instantly,
          personalize every interaction, and scale effortlessly — all in one intelligent platform.
        </p>
        <p className="mt-1 md:mt-2 text-sm md:text-base xl:text-lg text-gray-600">
          Turning conversations into trust, and support into growth.
        </p>
      </div>
    </div>
  );
};


export default OurMission