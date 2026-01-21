import ContactDetails from "./ContactDetails";
import Introduction from "./Introduction";


const PricingPolicy = () => {
  return (
    <>
      <div
        className="relative overflow-hidden pt-24 bg-heroGradient"
      >
        
        {/* HERO CONTENT */}
        <div className="relative max-w-3xl flex flex-col items-center mx-auto py-20 text-center">
          <h2 className="text-5xl font-semibold ">Privacy Policy</h2>

          <div className="text-lg mt-7">
            <p className="text-xl max-w-2xl">
              Techween Solutions Establishment, registered in Saudi Arabia under
             <strong> Commercial Registration No. 7051434517 and based in Riyadh ,</strong>
              collects, uses, and protects personal and corporate data. By using
              our platform, you acknowledge and agree to this policy.
            </p>
          </div>
          <div className="flex gap-2 items-center bg-[#6B69B21A] border border-[#B8C2CE] mt-10 p-2 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          <p>
           Last updated: October 2025
          </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white via-herogradient/20 to-herogradient/60 flex flex-col items-center">
      <div className="w-full max-w-6xl  flex flex-col items-center py-10 space-y-10">
      <Introduction/>
      <ContactDetails/>
      </div>
      </div>
    </>
  );
};

export default PricingPolicy;
