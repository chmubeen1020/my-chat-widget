import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Calendar as CalendarIcon, ChevronDown, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
        top: `${coords.top + 8}px`, 
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

// --- CUSTOM PRETTY SELECT WITH PORTAL ---
const CustomSelect = ({ options, value, onChange, label, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  return (
    <div className="flex-1 space-y-1">
      <label className="text-xs  text-slate-500 ">{label}</label>
      <button
        ref={anchorRef}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm transition-all outline-none hover:border-indigo-400 focus:border-indigo-500"
      >
        <span className={value ? "text-slate-700" : "text-slate-400"}>{value || placeholder}</span>
        <ChevronDown size={16} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <FloatingPortal anchorRef={anchorRef} isOpen={isOpen}>
        <motion.div
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-slate-100 rounded-xl shadow-2xl py-1 overflow-hidden"
        >
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setIsOpen(false); }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
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

// --- CUSTOM DATE PICKER WITH PORTAL ---
const CustomDatePicker = ({ label, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  return (
    <div className="flex-1 space-y-1">
      <label className="text-xs text-slate-500 ">{label}</label>
      <div 
        ref={anchorRef}
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer group"
      >
        <input 
          readOnly value={value} placeholder="mm/dd/yyyy"
          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm cursor-pointer outline-none group-hover:border-indigo-400"
        />
        <CalendarIcon className="absolute right-3 top-2.5 text-slate-400 group-hover:text-indigo-500" size={16} />
      </div>
      <FloatingPortal anchorRef={anchorRef} isOpen={isOpen}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-slate-100 rounded-2xl shadow-2xl p-4 min-w-[280px]"
        >
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-sm font-bold text-slate-800">January 2026</span>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-slate-100 rounded-lg"><ChevronLeft size={16}/></button>
              <button className="p-1 hover:bg-slate-100 rounded-lg"><ChevronRight size={16}/></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <span key={d} className="text-[10px] font-bold text-slate-400">{d}</span>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {[...Array(31)].map((_, i) => (
              <button
                key={i}
                onClick={() => { onChange(`01/${i+1}/2026`); setIsOpen(false); }}
                className={`h-8 w-8 text-xs rounded-lg flex items-center justify-center transition-all ${
                  (i+1) === 14 ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-50 text-slate-600'
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

// --- MAIN MODAL COMPONENT ---
export default function CreatePromoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    discountType: 'Percentage (%)',
    campaign: 'Instagram campaign',
    region: 'Saudi Arabia',
    duration: 'Monthly',
    global: true,
    active: true
  });

  const Toggle = ({ enabled, onChange, label, sublabel }) => (
    <div className="flex items-center justify-between ">
      <div>
        <p className="text-sm text-slate-700">{label}</p>
        <p className="text-[11px] text-slate-400">{sublabel}</p>
      </div>
      <button
        onClick={onChange}
        className={`relative inline-flex h-5 w-10 items-center rounded-full transition-all ${enabled ? 'bg-primary' : 'bg-slate-200'}`}
      >
        <motion.span animate={{ x: enabled ? 22 : 4 }} className="h-4 w-4 rounded-full bg-white shadow-sm" />
      </button>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div 
            className="bg-white rounded-xl w-full max-w-lg shadow-2xl flex flex-col max-h-[96vh] overflow-hidden"
          >
            {/* Header */}
            <div className="px-8 py-2 flex justify-between items-center bg-white sticky top-0 z-20">
              <div>
                <h2 className="text-xl font-medium text-slate-800 tracking-tight">Create Promo Code</h2>
                <p className="text-sm text-slate-500">Add a new discount rule to your system</p>
              </div>
              <button onClick={onClose} className=" text-slate-400 hover:text-slate-600 rounded-full transition-colors"><X size={20} /></button>
            </div>

            {/* Content Container */}
            <div className="px-8 py-2 space-y-1 overflow-y-auto custom-scrollbar flex-1">
              {/* Row 1 */}
              <div className="flex gap-4">
                <div className="flex-1 space-y-1">
                  <label className="text-xs text-slate-500 ">Code</label>
                  <input type="text" placeholder="WELCOME2024" className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm uppercase font-mono outline-none focus:border-indigo-500" />
                  <p className="text-[10px] text-slate-400">Uppercase letters and numbers only</p>
                </div>
                <CustomSelect 
                  label="Discount Type" value={formData.discountType}
                  options={['Percentage (%)', 'Fixed Amount']}
                  onChange={(v) => setFormData({...formData, discountType: v})}
                />
              </div>

              {/* Row 2 */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 ">Description</label>
                <textarea rows="2" placeholder="e.g., New customer welcome discount" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-indigo-500 resize-none" />
              </div>

              {/* Row 3 - Dates */}
              <div className="flex gap-4">
                <CustomDatePicker label="Valid From" value={formData.validFrom} onChange={(v) => setFormData({...formData, validFrom: v})} />
                <CustomDatePicker label="Valid Until" value={formData.validUntil} onChange={(v) => setFormData({...formData, validUntil: v})} />
              </div>

              {/* Row 4 */}
              <div className="flex gap-4">
                <div className="flex-1 space-y-1">
                  <label className="text-xs text-slate-500 ">Limit per user</label>
                  <input type="number" defaultValue="20" className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm outline-none" />
                </div>
                <CustomSelect 
                  label="Campaign Source" value={formData.campaign}
                  options={['Instagram campaign', 'Email Blast', 'Referral']}
                  onChange={(v) => setFormData({...formData, campaign: v})}
                />
              </div>

              {/* Row 5 - Advanced Filters */}
              <div className="flex gap-4">
                <div className="flex-1 space-y-1">
                  <label className="text-xs  text-slate-500 ">Min. Order (Optional)</label>
                  <input type="text" placeholder="0" className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm outline-none" />
                </div>
                <div className="flex-1 space-y-1">
                  <label className="text-xs text-slate-500 ">Max Discount Cap</label>
                  <input type="text" placeholder="150 SAR max" className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm outline-none" />
                </div>
              </div>

              {/* Row 6 - Regions & Duration */}
              <div className="flex gap-4">
                <CustomSelect 
                  label="Applicable Regions" value={formData.region}
                  options={['Saudi Arabia', 'United Arab Emirates', 'Global']}
                  onChange={(v) => setFormData({...formData, region: v})}
                />
                <CustomSelect 
                  label="Plan Duration Filter" value={formData.duration}
                  options={['Monthly', 'Yearly', 'All']}
                  onChange={(v) => setFormData({...formData, duration: v})}
                />
              </div>

              {/* Row 7 - Internal Notes */}
              <div className="space-y-1">
                <label className="text-xs text-slate-500 ">Internal Notes</label>
                <textarea rows="2" placeholder="e.g., LEAP 2025 campaign..." className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-indigo-500 resize-none bg-slate-50/50" />
              </div>

              {/* Toggles */}
              <div>
                <Toggle 
                  label="Global Code" sublabel="Available to all tenants" 
                  enabled={formData.global} onChange={() => setFormData({...formData, global: !formData.global})} 
                />
                <Toggle 
                  label="Active" sublabel="Code can be used immediately" 
                  enabled={formData.active} onChange={() => setFormData({...formData, active: !formData.active})} 
                />
              </div>

              {/* Plan Checkboxes */}
              <div className="space-y-1">
                <label className="text-xs text-slate-500 ">Applicable Plans</label>
                <div className="grid grid-cols-1 gap-1">
                  {['Starter', 'Professional', 'Enterprise'].map((plan) => (
                    <label key={plan} className="flex items-center gap-2.5 cursor-pointer hover:bg-indigo-50/50 transition-colors group">
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" defaultChecked className="peer appearance-none w-5 h-5 border border-slate-200 rounded-md bg-white checked:bg-primary checked:border-primary transition-all" />
                        <Check className="absolute text-white opacity-0 peer-checked:opacity-100" size={12} strokeWidth={4} />
                      </div>
                      <span className="text-sm font-semibold text-slate-600 group-hover:text-indigo-600">{plan}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-2 flex justify-end gap-3 sticky bottom-0 z-20">
              <button onClick={onClose} className="px-6 py-2 text-sm  text-slate-500 hover:text-slate-800">Cancel</button>
              <button className="px-8 py-2 text-sm  text-white bg-primary rounded-xl  hover:bg-primary/90 active:scale-95 transition-all">
                Create Promo Code
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}