import React from "react";
import { FileText, Save } from "lucide-react";

const ContentSettings = ({ config, setConfig }) => {
  const updateConfig = (key, value) =>
    setConfig((prev) => ({ ...prev, [key]: value }));

  // Character limit for the welcome message
  const charLimit = 200;

  return (
    <div className="bg-white px-6 py-2 rounded-3xl border border-slate-200 shadow-sm space-y-6">
      {/* Section Title */}
      <div className="flex items-center gap-3 border-b border-slate-50 pb-2">
        <FileText className="text-primary" size={20} />
        <div>
          <h3 className="font-medium text-slate-800">Custom Messages</h3>
          <p className="text-xs text-slate-500">
            Personalize the text content of your chat widget
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Welcome Message Section */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">
            Welcome Message
          </label>
          <div className="relative">
            <textarea
              value={config.welcomeMessage || "Hello! How can we help you today?"}
              onChange={(e) => {
                if (e.target.value.length <= charLimit) {
                  updateConfig("welcomeMessage", e.target.value);
                }
              }}
              rows={4}
              placeholder="Enter a welcome message..."
              className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl text-sm text-slate-700 focus:outline-none focus:border-indigo-500 transition-all resize-none"
            />
            <div className="flex justify-end mt-1">
              <span className="text-[11px] font-bold text-slate-400">
                {(config.welcomeMessage?.length || 33)}/{charLimit} characters
              </span>
            </div>
          </div>
        </div>

        {/* Input Placeholder Section */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">
            Input Placeholder
          </label>
          <input
            type="text"
            value={config.placeholderText || "Type your message..."}
            onChange={(e) => updateConfig("placeholderText", e.target.value)}
            placeholder="e.g. Type your message..."
            className="w-full h-12 bg-slate-50 border border-slate-100 px-4 rounded-xl text-sm text-slate-700 focus:outline-none focus:border-indigo-500 transition-all"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-2">
        <button className="flex items-center gap-2 bg-[#6B69B2] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#5a58a0] transition-all shadow-sm active:scale-95">
          <Save size={16} />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ContentSettings;