import React, { useState } from "react";
import { Check, Crown, Info, SaudiRiyal, Star, Zap } from "lucide-react";
import ActionModal from "./ActionModal";

const UpgradePlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanAction = (plan) => {
    setSelectedPlan(plan);
  };

  const plans = [
    {
      name: "Starter",
      icon: <Star size={20} className="text-slate-700" />,
      price: isAnnual ? 150 : 19,
      features: [
        { text: "1,000 chats per month" },
        { text: "5 team members" },
        { text: "Basic AI training"},
        { text: "Email support" },
        { text: "2GB storage" },
      ],
      buttonText: "Downgrade to Starter",
      isCurrent: false,
    },
    {
      name: "Professional",
      icon: <Crown size={20} className="text-slate-700" />,
      price: isAnnual ? 390 : 49,
      features: [
        { text: "5,000 chats per month" },
        { text: "25 team members" },
        { 
          text: "Advanced AI training",
          tooltip: {
            title: "Advanced AI Training",
            desc: "Allows your AI to learn from past human agent conversations and lets you customize its content for accurate, on-brand responses."
          }
        },
        { text: "Priority support" },
        { text: "10GB storage" },
        { text: "Custom branding" },
        { 
          text: "Analytics dashboard",
          tooltip: {
            title: "Performance Analytics",
            desc: "Deep dive into chat volume, resolution rates, and customer satisfaction scores with real-time data."
          }
        },
      ],
      buttonText: "Current Plan",
      isCurrent: true,
      popular: true,
    },
    {
      name: "Enterprise",
      icon: <Zap size={20} className="text-slate-700" />,
      price: isAnnual ? 1190 : 149,
      features: [
        { text: "Unlimited chats" },
        { text: "Unlimited team members" },
        {text: "Full Custom AI training"},
        { text: "24/7 phone support" },
        { text: "100GB storage" },
        { text: "Advanced analytics" },
        { text: "API access" },
        { text: "Custom integrations" },
      ],
      buttonText: "Upgrade to Enterprise",
      isCurrent: false,
    },
  ];

  return (
    <div>
    <div className="space-y-8 ">
      {/* Monthly/Annual Toggle */}
      <div className="flex items-center justify-center gap-4 py-2">
        <span
          className={`text-sm  ${
            !isAnnual ? "text-slate-900" : "text-slate-500"
          }`}
        >
          Monthly
        </span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="w-12 h-6 rounded-full bg-primary p-1 relative transition-colors focus:outline-none"
        >
          <div
            className={`w-4 h-4  bg-white rounded-full transition-transform duration-300 ${
              isAnnual ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
        <span
          className={`text-sm  ${
            isAnnual ? "text-slate-900" : "text-slate-500"
          }`}
        >
          Annual{" "}
        </span>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch mt-2  mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col bg-gradient-to-r from-[#7CEEFD]/10 to-[#9FC1FF]/20 p-4 rounded-xl transition-all duration-300 `}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6B69B2] text-white text-[11px] font-bold px-4 py-1 rounded-md ">
                Most Popular
              </div>
            )}

            <div className="flex items-center gap-2 mb-2">
              {plan.icon}
              <h3 className=" text-slate-800 ">{plan.name}</h3>
            </div>

            <div className="mb-4">
              <span className="flex items-center text-4xl font-semibold text-slate-900">
                <SaudiRiyal size={28} className="mt-2" /> {plan.price}
              </span>
              <span className="text-slate-400 text-sm ml-1">/ month</span>
            </div>

           <div className="flex-1 space-y-4 mb-8">
              {plan.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3 relative group">
                  <div className="mt-0.5 p-0.5 bg-emerald-100 rounded-full shrink-0">
                    <Check size={12} className="text-emerald-600" />
                  </div>

                  <div className="flex items-center gap-1.5 cursor-default">
                    <span className="text-sm text-slate-600 font-medium">
                      {feature.text}
                    </span>
                    
                    {feature.tooltip && (
                      <div className="relative flex items-center">
                        <Info size={14} className="text-slate-400 group-hover:text-[#6B69B2] transition-colors" />
                        
                        {/* Responsive Tooltip Container */}
                        <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 
                                      absolute z-[200] bottom-full left-1/2 -translate-x-1/2 mb-3
                                      w-[260px] sm:w-[320px] pointer-events-none">
                          
                          <div className="bg-white border border-slate-100 shadow-2xl rounded-2xl p-4 flex  items-center  gap-3">
                            <div >
                              <Info size={16} className="text-slate-700" />
                            </div>
                            <div className="space-y-1 text-left">
                              <h4 className="text-[14px] font-bold text-slate-800 leading-tight">
                                {feature.tooltip.title}
                              </h4>
                              <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
                                {feature.tooltip.desc}
                              </p>
                            </div>
                          </div>
                          {/* Triangle Arrow */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
        onClick={() => handlePlanAction(plan)}
        disabled={plan.isCurrent}
        className={`w-full py-3 rounded-2xl text-sm font-bold transition-all ${
          plan.isCurrent ? "bg-primary text-white opacity-25" : "text-[#6B69B2] border border-primary active:scale-95"
        }`}
      >
        {plan.buttonText}
      </button>
          </div>
        ))}
      </div>
    </div>
      <ActionModal 
        isOpen={!!selectedPlan} 
        onClose={() => setSelectedPlan(null)} 
        plan={selectedPlan}
      />
    </div>
  );
};

export default UpgradePlans;
