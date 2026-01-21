import React from "react";

const ActionModal = ({ isOpen, onClose, plan }) => {
  if (!isOpen || !plan) return null;

  // Determine if it's an upgrade or downgrade based on button text or plan name
  const isUpgrade = plan.buttonText.toLowerCase().includes("upgrade");
  const title = isUpgrade ? `Upgrade to ${plan.name}` : `Downgrade to ${plan.name}`;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div 
      onClick={(e) => e.stopPropagation()}
      className="bg-white w-full max-w-[440px] rounded-xl shadow-2xl overflow-hidden px-8 py-4 animate-in zoom-in-95 duration-200">
        
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          {title}
        </h2>
        
        <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
          You will be charged an amount of <span className="font-bold text-slate-900">${plan.price}</span> immediately. 
        </p>

        <div className="flex items-center justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-white border border-slate-200 rounded-lg text-sm  text-slate-600 hover:bg-slate-50 transition-all"
          >
            Cancel
          </button>
          <button 
            className="px-6 py-2 bg-[#6B69B2] text-white rounded-lg text-sm  hover:bg-[#5a58a0] transition-all shadow-md"
          >
            {isUpgrade ? "Upgrade" : "Downgrade"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;