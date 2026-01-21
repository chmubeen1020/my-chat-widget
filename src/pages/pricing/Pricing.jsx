import FaqSection from "../home/HomeFaq"
import PricingSection from "../home/Pricinplan"


const Pricing = () => {
  return (
     <>
       <div className="pt-14">
        <div>
          <PricingSection />
          </div>
        </div>
       <div>
        <div className="bg-gradient-to-b from-white via-white to-herogradient ">
          <FaqSection/>
          </div>
       </div>
        </>
  )
}

export default Pricing