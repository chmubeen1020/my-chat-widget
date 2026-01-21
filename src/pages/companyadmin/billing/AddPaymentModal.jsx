import React from "react";
import { X, ChevronDown, ShieldCheck, CreditCard } from "lucide-react";

const AddPaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}>
      <div 
        className="bg-white w-full max-w-[500px] rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-2  border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div><CreditCard size={18} className="text-slate-800" /></div>
            <h2 className="font-medium text-slate-900 text-lg">Add Payment Method</h2>
          </div>
          <button onClick={onClose} className="p-2 text-slate-800 hover:text-slate-900 transition-colors"><X size={20} /></button>
        </div>

        <div className="px-6 py-2 space-y-2 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <p className="text-sm text-slate-500 leading-relaxed">
            Add a new payment method to your account. Mada is the preferred payment network in Saudi Arabia.
          </p>

          {/* Card Type Dropdown */}
          <div className="space-y-1.5">
            <label className="text-sm text-slate-700">Card Type</label>
            <div className="flex items-center justify-between px-4 py-2 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-indigo-300">
              <div className="flex items-center gap-2">
                <span className="w-6 h-4 bg-emerald-500 rounded-sm text-[8px] text-white flex items-center justify-center font-black italic">M</span>
                <span className="text-sm font-medium text-slate-700">Mada (Saudi Arabia)</span>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] rounded-full border border-emerald-100">Recommended</span>
              </div>
              <ChevronDown size={16} className="text-slate-400" />
            </div>
          </div>

          {/* Issuing Bank */}
          <div className="space-y-1">
            <label className="text-sm text-slate-700">Issuing Bank</label>
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50/50 border border-slate-100 rounded-xl text-slate-400 text-sm">
              Select your bank
              <ChevronDown size={16} />
            </div>
          </div>

          {/* Card Number */}
          <div className="space-y-1">
            <label className="text-sm text-slate-700">Card Number</label>
            <input 
              type="text" 
              placeholder="1234 5678 9012 3456" 
              className="w-full px-4 py-2.5 bg-slate-50/80 border border-slate-100 rounded-xl text-sm outline-none focus:border-indigo-500 transition-all"
            />
            <p className="text-xs text-slate-400 ">Mada cards provide enhanced security for local transactions</p>
          </div>

          {/* Expiry and CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm text-slate-700">Expiry Date</label>
              <input type="text" placeholder="MM/YY" className="w-full px-4 py-2.5 bg-slate-50/80 border border-slate-100 rounded-xl text-sm outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-slate-700">CVV</label>
              <input type="text" placeholder="123" className="w-full px-4 py-2.5 bg-slate-50/80 border border-slate-100 rounded-xl text-sm outline-none" />
            </div>
          </div>

          {/* Cardholder Name */}
          <div className="space-y-1">
            <label className="text-sm text-slate-700">Cardholder Name</label>
            <input type="text" placeholder="Ahmed Al-Rashid" className="w-full px-4 py-2.5 bg-slate-50/80 border border-slate-100 rounded-xl text-sm outline-none" />
          </div>

          {/* Security Notice */}
          <div className="p-4 bg-[#F0FDF4] border border-emerald-100 rounded-2xl flex gap-3">
             <ShieldCheck size={24} className="text-emerald-500 shrink-0" />
             <div>
                <p className="text-xs font-bold text-emerald-700 mb-1">Mada Secure Payment</p>
                <p className="text-xs text-emerald-600 leading-relaxed font-medium">
                  Your Mada card information is protected by advanced security measures and complies with Saudi Central Bank (SAMA) regulations. All transactions are processed through secure, encrypted channels.
                </p>
             </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6  flex items-center justify-end gap-3 ">
          <button onClick={onClose} className="px-6 py-2 bg-white border border-slate-200 rounded-lg text-sm  text-slate-600 hover:bg-slate-50 transition-all">Cancel</button>
          <button className="px-6 py-2 bg-[#6B69B2] text-white rounded-lg text-sm hover:bg-[#5a58a0] transition-all shadow-md">Add Payment Method</button>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentModal;