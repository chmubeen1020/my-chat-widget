import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Calendar as CalendarIcon, ChevronDown, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// --- PORTAL WRAPPER FOR FLOATING MENUS ---
const FloatingPortal = ({ children, anchorRef, isOpen }) => {
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    if (isOpen && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      });
    }
  }, [isOpen, anchorRef]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      style={{ 
        position: 'absolute', 
        top: `${coords.top + 6}px`, 
        left: `${coords.left}px`, 
        width: `${coords.width}px`,
        zIndex: 9999 
      }}
    >
      {children}
    </div>,
    document.body
  );
};

// --- CUSTOM PRETTY SELECT ---
const CustomSelect = ({ options, value, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  return (
    <div className="flex-1 space-y-1.5">
      <label className="text-xs text-slate-500 ">{label}</label>
      <button
        ref={anchorRef}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm transition-all hover:border-indigo-400 focus:ring-2 focus:ring-indigo-500/10"
      >
        <span className="text-slate-700">{value}</span>
        <ChevronDown size={14} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <FloatingPortal anchorRef={anchorRef} isOpen={isOpen}>
        <motion.div
          initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-slate-100 rounded-xl shadow-xl py-1 overflow-hidden"
        >
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setIsOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-2 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              {opt}
              {value === opt && <Check size={14} />}
            </button>
          ))}
        </motion.div>
      </FloatingPortal>
    </div>
  );
};

// --- CUSTOM DATE PICKER ---
const CustomDatePicker = ({ label, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  return (
    <div className="flex-1 space-y-1.5">
      <label className="text-xs text-slate-500 ">{label}</label>
      <div 
        ref={anchorRef}
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer group"
      >
        <input 
          readOnly value={value}
          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm cursor-pointer outline-none group-hover:border-indigo-400"
        />
        <CalendarIcon className="absolute right-3 top-2.5 text-slate-400" size={16} />
      </div>
      <FloatingPortal anchorRef={anchorRef} isOpen={isOpen}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-slate-100 rounded-2xl shadow-2xl p-4 min-w-[260px]"
        >
          <div className="flex items-center justify-between mb-4 px-1 font-bold text-sm text-slate-800">
            <span>January 2026</span>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-slate-50 rounded"><ChevronLeft size={14}/></button>
              <button className="p-1 hover:bg-slate-50 rounded"><ChevronRight size={14}/></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <span key={d} className="text-[10px] text-slate-400">{d}</span>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {[...Array(31)].map((_, i) => (
              <button
                key={i}
                onClick={() => { onChange(`01/${i+1}/2026`); setIsOpen(false); }}
                className={`h-7 w-7 text-xs rounded-lg flex items-center justify-center transition-all ${
                  (i+1) === 1 ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-50 text-slate-600'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </motion.div>
      </FloatingPortal>
    </div>
  );
};

// --- EDIT MODAL COMPONENT ---
export default function EditPromoModal({ isOpen, closeModal, promo, setPromo }) {
  if (!isOpen) return null;

  return (
      <div
        className="bg-white rounded-xl w-full max-w-lg shadow-2xl overflow-visible"
      >
        {/* Header */}
        <div className="px-6 py-2 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">Edit Promo Code</h2>
            <p className="text-xs text-slate-500 mt-0.5">Update promo code settings</p>
          </div>
          <button onClick={closeModal} className="p-1.5 hover:bg-slate-50 rounded-full transition-colors">
            <X size={20} className="text-slate-500 hover:text-slate-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-2">
          {/* Row 1: Code and Discount Type */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-slate-500 ">Code</label>
              <input 
                value={promo.code} 
                onChange={(e) => setPromo({...promo, code: e.target.value.toUpperCase()})} 
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm bg-slate-50/50 text-slate-500 font-medium focus:outline-none" 
              />
            </div>
            <CustomSelect 
              label="Discount Type" 
              value={promo.type || "Percentage (%)"}
              options={["Percentage (%)", "Fixed Amount"]}
              onChange={(val) => setPromo({...promo, type: val})}
            />
          </div>

          {/* Row 2: Description */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-500 ">Description</label>
            <textarea 
              rows="2"
              value={promo.description} 
              onChange={(e) => setPromo({...promo, description: e.target.value})} 
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 focus:outline-none resize-none" 
            />
          </div>

          {/* Row 3: Discount Value and Max Uses */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-slate-500 ">Discount Value</label>
              <input 
                type="number" 
                defaultValue="10" 
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 focus:outline-none" 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-slate-500 ">Maximum Uses</label>
              <input 
                type="number" 
                defaultValue="1000" 
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:border-indigo-500 focus:outline-none" 
              />
            </div>
          </div>

          {/* Row 4: Date Range */}
          <div className="grid grid-cols-2 gap-4">
            <CustomDatePicker 
              label="Valid From" 
              value={promo.validFrom || "01/01/2024"} 
              onChange={(val) => setPromo({...promo, validFrom: val})} 
            />
            <CustomDatePicker 
              label="Valid Until" 
              value={promo.validUntil || "12/31/2025"} 
              onChange={(val) => setPromo({...promo, validUntil: val})} 
            />
          </div>

          {/* Active Toggle */}
          <div className="flex items-center justify-between ">
            <div>
              <p className="text-sm  text-slate-700">Active</p>
              <p className="text-xs text-slate-600">Code can be used</p>
            </div>
            <button
              onClick={() => setPromo({...promo, active: !promo.active})}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all ${promo.active ? 'bg-primary' : 'bg-slate-200'}`}
            >
              <motion.span 
                animate={{ x: promo.active ? 22 : 4 }} 
                className="h-4 w-4 rounded-full bg-white shadow-sm" 
              />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-2 flex justify-end gap-3">
          <button 
            onClick={closeModal} 
            className="px-6 py-2 border border-slate-200 rounded-xl text-sm  text-slate-500 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={closeModal} 
            className="px-8 py-2 bg-primary text-white rounded-xl text-sm "
          >
            Save Changes
          </button>
        </div>
      </div>
  );
}