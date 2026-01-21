import React from 'react';
import { Check, Info, SaudiRiyal } from 'lucide-react';

const PlanManagement = ({ plans, onEdit }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 2xl:gap-8">
    {plans.map((p) => (
      <div key={p.id} className={`relative flex flex-col bg-gradient-to-r from-[#7CEEFD]/10 to-[#9FC1FF]/20 p-4 rounded-xl transition-all duration-300`}>
        {p.popular && (
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#6B69B2] text-white text-[11px] font-bold px-4 py-1 rounded-md ">
                Most Popular
              </div>
        )}
        <div className="flex items-center gap-2 mb-2">
              {p.icon}
              <h3 className=" text-slate-800 ">{p.name}</h3>
            </div>
            <div className="mb-4">
              <span className="flex items-center text-4xl lg:text-5xl font-bold text-slate-900">
                <SaudiRiyal size={28} className="mt-2" /> {p.price}
              </span>
              <span className="text-slate-500 text-sm ml-1">per month</span>
            </div>
        <div className="flex-1 space-y-4 mb-8">
          {p.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-sm  font-bold text-slate-600">
              <Check size={18} className="text-[#34D399]" /> {f}
              {(f.includes('Analytics') || f.includes('training')) && <Info size={14} className="text-slate-500" />}
            </li>
          ))}
        </div>
        <button 
          onClick={() => onEdit(p)}
          className="w-full py-2 bg-gradient-to-r from-[#7CEEFD]/30 to-[#9FC1FF]/20 xl:text-lg text-primary font-semibold rounded-xl hover:bg-indigo-100 transition-colors"
        >
          Edit Plan
        </button>
      </div>
    ))}
  </div>
);
export default PlanManagement;





          
