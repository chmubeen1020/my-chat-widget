import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Settings } from "lucide-react";
import { createPortal } from "react-dom";


const GeneralSettings = ({ config, setConfig , updateConfig , onToggleWidget }) => {
   const toggleSwitch = (key) => updateConfig(key, !config[key]);   


  return (
    <div className="bg-white px-6 py-2 rounded-3xl border border-slate-200 shadow-sm space-y-2">
      {/* Section Title */}
      <div className="flex items-center gap-3 border-b border-slate-50 pb-2">
        <Settings className="text-primary" size={20} />
        <div>
          <h3 className="font-medium text-slate-800">General Settings</h3>
          <p className="text-xs text-slate-500">
            Basic widget configuration and behavior
          </p>
        </div>
      </div>

      {/* Enable Toggle */}
      <div className="bg-slate-50/50 px-4 py-2 rounded-2xl border border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-800">Enable Widget</p>
          <p className="text-xs text-slate-500">
            Show the chat widget on your website
          </p>
        </div>
        <button
          onClick={onToggleWidget}
          className={`w-12 h-6 rounded-full transition-all relative ${
            config.enabled ? "bg-[#6B69B2]" : "bg-slate-300"
          }`}
        >
          <div
            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
              config.enabled ? "left-7" : "left-1"
            }`}
          />
        </button>
      </div>

      {/* Position & Size Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 outline-none">
        <CustomSelect
          label="Widget Position"
          value={config.position}
          onChange={(val) => updateConfig("position", val)}
          options={[
            { label: "Bottom Right", value: "bottom-right" },
            { label: "Bottom Left", value: "bottom-left" },
            { label: "Top Right", value: "top-right" },
            { label: "Top Left", value: "top-left" },
          ]}
        />

        <CustomSelect
          label="Widget Size"
          value={config.size}
          onChange={(val) => updateConfig("size", val)}
          options={[
            { label: "Small (28px)", value: "28px" },
            { label: "Medium (32px)", value: "32px" },
            { label: "Large (48px)", value: "48px" },
          ]}
        />
      </div>

      {/* Radius Slider */}
      <div className="space-y-4">
  <div className="flex justify-between items-center">
    <label className="text-sm font-bold text-slate-700">
      Border Radius
    </label>
    <span className="px-3 py-1 bg-indigo-50 text-primary text-[10px] font-bold rounded-lg border border-indigo-100">
      {config.borderRadius}px
    </span>
  </div>

  <div className="relative flex items-center">
    <input
      type="range"
      min="0"
      max="32"
      value={config.borderRadius}
      onChange={(e) => updateConfig("borderRadius", e.target.value)}
      className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#6B69B2] outline-none transition-all"
      style={{
        /* Dynamic background fill logic */
        background: `linear-gradient(to right, #6B69B2 0%, #6B69B2 ${
          (config.borderRadius / 32) * 100
        }%, #f1f5f9 ${(config.borderRadius / 32) * 100}%, #f1f5f9 100%)`,
      }}
    />
  </div>

  <div className="flex justify-between text-[10px] text-slate-400 font-bold px-0.5">
    <span>0</span>
    <span>32</span>
  </div>
</div>

      {/* Feature Toggles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {[
          { label: "Company Logo", key: "showLogo", sub: "Display your brand" },
          {
            label: "Agent Avatars",
            key: "showAvatars",
            sub: "Show agent photos",
          },
          {
            label: "File Upload",
            key: "fileUpload",
            sub: "Allow file sharing",
          },
          {
            label: "Emoji Support",
            key: "emojiSupport",
            sub: "Enable emoji picker",
          },
        ].map((item) => (
          <div
            key={item.key}
            className="px-4 py-2 border border-slate-100 rounded-2xl flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-slate-800">{item.label}</p>
              <p className="text-[11px] text-slate-400">{item.sub}</p>
            </div>
            <button
              onClick={() => toggleSwitch(item.key)}
              className={`w-10 h-5 rounded-full transition-all relative ${
                config[item.key] ? "bg-[#6B69B2]" : "bg-slate-200"
              }`}
            >
              <div
                className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                  config[item.key] ? "left-5" : "left-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-1">
        <button className="bg-[#6B69B2] text-white px-8 py-2 rounded-lg text-sm font-bold hover:bg-[#5a58a0] transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
};
export default GeneralSettings;

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
