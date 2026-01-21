import React from "react";
import { MessageSquare, Monitor } from "lucide-react";

const LivePreview = ({ config }) => {
  // Mapping position string to CSS classes


  return (
    <div className="bg-white px-6 py-2 rounded-3xl border border-slate-200 shadow-sm flex flex-col ">
      <div className="flex items-center gap-2 mb-4">
        <div>
          <Monitor size={18} className="text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-800 ">Live Preview</h3>
          <p className="text-xs text-slate-600">
            Real-time preview of your widget
          </p>
        </div>
      </div>

      {/* Browser Mockup */}
      <div className="p-4 border border-gray-200 border-dashed rounded-2xl">
        <div className="relative  bg-slate-50 rounded-2xl border border-slate-100 h-auto overflow-hidden">
          {/* Browser Header */}
          <div className="h-10 bg-white border-b border-slate-100 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 max-w-[200px] h-5 bg-slate-50 rounded-md mx-auto flex items-center px-2">
              <div className="text-[8px] text-slate-300 font-mono">
                yourwebsite.com
              </div>
            </div>
          </div>

          {/* Browser Body Mock Content */}
          <div className="p-6 space-y-4">
            <div className="h-3 w-1/2 bg-white rounded-full border border-slate-100" />
            <div className="h-3 w-3/4 bg-white rounded-full border border-slate-100" />
            <div className="h-24 w-full bg-white rounded-xl border border-slate-100" />
          </div>

          {/* THE FLOATING WIDGET (Syncing Colors & Icon) */}
          {config.enabled && (
            <div
              className={`absolute transition-all duration-500 shadow-2xl flex items-center justify-center text-white overflow-hidden`}
              style={{
                width: config.size,
                height: config.size,
                borderRadius: `${config.borderRadius}px`,
                // Dynamic Background Color from Styling Tab
                backgroundColor: config.primaryColor,
                bottom: config.position.includes("bottom") ? "1.5rem" : "auto",
                top: config.position.includes("top") ? "3.5rem" : "auto",
                right: config.position.includes("right") ? "1.5rem" : "auto",
                left: config.position.includes("left") ? "1.5rem" : "auto",
                fontFamily: config.font, // Dynamic Font
              }}
            >
              {config.icon ? (
                <img
                  src={config.icon}
                  alt="widget icon"
                  className="w-full h-full object-cover"
                />
              ) : (
                <MessageSquare
                  size={parseInt(config.size) * 0.45}
                  fill="currentColor"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
