
import LearningStyle from "./LearningStyle";

const InstallationGuide = () => {
  return (
  
  <>
  <div className="relative overflow-hidden pt-24 bg-gradient-to-r
  from-herogradient/60
  via-herogradient/40
  to-white
  ">
  
        {/* HERO CONTENT */}
        <div className="relative max-w-3xl flex flex-col items-center mx-auto py-20 text-center">
          
  
          <h2 className="text-5xl font-semibold ">
          Quick Start Installation Guide for Techween
          </h2>
  
          <div className="text-lg mt-7">
            <p>
             Get up and running with Techween quickly and easily. Our comprehensive guide offers text, video, and photo instructions tailored to your learning style.

            </p>
          </div>
            <button
      className={`px-4 py-3 rounded-md font-semibold transition text-primary bg-primary/20 mt-10`}
    >
      Start Guide
    </button>
      </div>
      </div>
  <div className="bg-gradient-to-b from-white via-herogradient/20 to-herogradient ">
  <LearningStyle/>
  </div>
  </>
  );
}


export default InstallationGuide