import React, { useState } from "react";
import { Upload, Eye } from "lucide-react";

const Branding = () => {
  const [logo, setLogo] = useState(null);
  const [colors, setColors] = useState({
    primary: "#8b5cf6",
    secondary: "#06b6d4",
    bg: "#ffffff",
    text: "#1f2937",
    accent: "#8b5cf6",
  });

  const handleColorChange = (key, value) => {
    setColors((prev) => ({ ...prev, [key]: value }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setLogo(URL.createObjectURL(file));
  };

  const ColorInput = ({ label, value, onChangeKey }) => (
    <div className="mb-4 last:mb-0">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-gray-200 shrink-0">
          <input
            type="color"
            value={colors[onChangeKey]}
            onChange={(e) => handleColorChange(onChangeKey, e.target.value)}
            className="absolute inset-[-50%] w-[200%] h-[200%] cursor-pointer"
          />
        </div>
        <input
          type="text"
          value={colors[onChangeKey]}
          onChange={(e) => handleColorChange(onChangeKey, e.target.value)}
          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-mono text-gray-600 focus:ring-1 focus:ring-primary outline-none"
        />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Branding & Colors Card */}
      <div className="bg-white p-4  rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Branding & Colors</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Platform Logo</label>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center overflow-hidden">
              {logo ? <img src={logo} alt="Logo" className="w-full h-full object-contain" /> : <span className="text-2xl font-bold text-slate-300">T</span>}
            </div>
            <label className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors">
              <Upload size={16} />
              <span>Upload Logo</span>
              <input type="file" className="hidden" onChange={handleLogoUpload} accept="image/*" />
            </label>
          </div>
          <p className="mt-2 text-xs text-gray-400">Recommended size: 200x200px, PNG or SVG format</p>
        </div>

        <div className="space-y-6">
          <ColorInput label="Primary Color" onChangeKey="primary" />
          <ColorInput label="Secondary Color" onChangeKey="secondary" />
        </div>
      </div>

      {/* Default Widget Colors Card */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col">
        <h2 className="text-lg font-medium text-gray-900 mb-1">Default Widget Colors</h2>
        <p className="text-sm text-gray-400 mb-4">Default colors for new tenant chat widgets</p>

        <div className="space-y-6 mb-4">
          <ColorInput label="Background Color" onChangeKey="bg" />
          <ColorInput label="Text Color" onChangeKey="text" />
          <ColorInput label="Accent Color" onChangeKey="accent" />
        </div>

        <button className="mt-auto flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
          <Eye size={18} />
          <span>Preview Widget</span>
        </button>
      </div>
    </div>
  );
};

export default Branding;