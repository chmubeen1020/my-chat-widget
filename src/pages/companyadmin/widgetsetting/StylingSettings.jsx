import React, {  useEffect, useRef, useState } from "react";
import { Palette, Upload, Check, ChevronDown } from "lucide-react";
import { createPortal } from "react-dom";

const StylingSettings = ({ config, setConfig }) => {
  const fileInputRef = useRef(null);

  const updateConfig = (key, value) =>
    setConfig((prev) => ({ ...prev, [key]: value }));

  const presetThemes = [
    { name: "Ocean Blue", primary: "#4285F4", secondary: "#E8F0FE" },
    { name: "Forest Green", primary: "#10b981", secondary: "#ECFDF5" },
    { name: "Cosmic Purple", primary: "#8b5cf6", secondary: "#F5F3FF" },
    { name: "Sunset Orange", primary: "#f97316", secondary: "#FFF7ED" },
    { name: "Rose Pink", primary: "#ec4899", secondary: "#FDF2F8" },
    { name: "Midnight", primary: "#1f2937", secondary: "#F3F4F6" },
  ];
const fontOptions = [
  { label: "Inter", value: "Inter" },
  { label: "Roboto", value: "Roboto" },
  { label: "Poppins", value: "Poppins" },
  { label: "Open Sans", value: "Open Sans" },
];
  return (
    <div className="bg-white px-6 py-2 rounded-3xl border border-slate-200 shadow-sm space-y-4">
      {/* Section Title */}
      <div className="flex items-center gap-3 border-b border-slate-50 pb-2">
        <Palette className="text-primary" size={20} />
        <div>
          <h3 className="font-medium text-slate-800">Visual Styling</h3>
          <p className="text-xs text-slate-500">Customize colors, themes and fonts.</p>
        </div>
      </div>

      {/* Font Selection */}
      <div className="space-y-2">
        <CustomSelect
  label="Select Font"
  value={config.font}
  options={fontOptions}
  onChange={(value) => updateConfig("font", value)}
/>
      </div>

      {/* Icon Upload Area */}
      <div 
        onClick={() => fileInputRef.current.click()}
        className="border-2 border-dashed border-slate-200 rounded-2xl py-8 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-all group"
      >
        <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            onChange={(e) => updateConfig("icon", URL.createObjectURL(e.target.files[0]))}
        />
        <div className="bg-slate-100 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
          <Upload size={20} className="text-slate-500" />
        </div>
        <p className="text-sm text-slate-600">Drag and drop icon here, or <span className="text-primary font-bold">click to browse</span></p>
      </div>

      {/* Color Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Primary Color</label>
            <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200">
                <input 
                    type="color" 
                    value={config.primaryColor} 
                    onChange={(e) => updateConfig("primaryColor", e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer border-none bg-transparent"
                />
                <input 
                    type="text" 
                    value={config.primaryColor.toUpperCase()} 
                    className="bg-transparent text-xs font-mono outline-none w-full"
                    readOnly
                />
            </div>
        </div>
        <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Secondary Color</label>
            <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200">
                <input 
                    type="color" 
                    value={config.secondaryColor} 
                    onChange={(e) => updateConfig("secondaryColor", e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer border-none bg-transparent"
                />
                <input 
                    type="text" 
                    value={config.secondaryColor.toUpperCase()} 
                    className="bg-transparent text-xs font-mono outline-none w-full"
                    readOnly
                />
            </div>
        </div>
      </div>

      {/* Preset Themes */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700">Preset Themes</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {presetThemes.map((theme) => (
                <button
                    key={theme.name}
                    onClick={() => {
                        updateConfig("primaryColor", theme.primary);
                        updateConfig("secondaryColor", theme.secondary);
                    }}
                    className="flex flex-col items-center p-3 rounded-xl border border-slate-100 hover:border-primary transition-all relative group"
                    style={{ background: theme.primary }}
                >
                    <span className="text-[10px] font-bold text-white mb-1">{theme.name}</span>
                    <span className="text-[9px] text-white/80 font-mono uppercase">{theme.primary}</span>
                    {config.primaryColor === theme.primary && (
                        <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-md">
                            <Check size={10} className="text-primary" />
                        </div>
                    )}
                </button>
            ))}
        </div>
      </div>

      <div className="flex justify-end pt-1">
        <button className="bg-[#6B69B2] text-white px-8 py-2 rounded-lg text-sm font-bold hover:bg-[#5a58a0] transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default StylingSettings;

const CustomSelect = ({ label, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close when clicking outside (works with portal)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  const openDropdown = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    setPosition({
      top: rect.bottom + window.scrollY + 8, // spacing
      left: rect.left + window.scrollX,
      width: rect.width,
    });

    setIsOpen((prev) => !prev);
  };

  return (
    <div className="space-y-2 flex-1">
      <label className="text-sm font-bold text-slate-700">{label}</label>

      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={openDropdown}
        className="
          w-full flex items-center justify-between
          px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl
          text-sm text-slate-700
          hover:border-slate-300 transition-all
          outline-none focus:outline-none focus:ring-0
        "
      >
        <span>{selectedOption?.label || "Select..."}</span>
        <ChevronDown
          size={16}
          className={`text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown (PORTAL) */}
      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            style={{
              top: position.top,
              left: position.left,
              width: position.width,
            }}
            className="
              fixed z-[999]
              bg-white border border-slate-200 rounded-xl shadow-xl
              py-1
              animate-in slide-in-from-top-2 duration-200
            "
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="
                  w-full flex items-center justify-between
                  px-4 py-2 text-sm text-slate-600
                  hover:bg-slate-50 transition-colors
                "
              >
                <span
                  className={
                    value === option.value
                      ? "text-primary font-semibold"
                      : ""
                  }
                >
                  {option.label}
                </span>

                {value === option.value && (
                  <Check size={14} className="text-primary" />
                )}
              </button>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
};
