import React, { useState } from "react";
import {
  Settings,
  Palette,
  FileText,
  Eye,
  Code,
  Download,
  Zap,
} from "lucide-react";
import GeneralSettings from "./GeneralSetting";
import LivePreview from "./LivePreview";
import { Copy, Check } from "lucide-react";
import StylingSettings from "./StylingSettings";
import DisableWidgetModal from "./DisableWidgetModal";
import ContentSettings from "./ContentSetting";

const WidgetSettings = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [copied, setCopied] = useState(false);
  // 1. Add these states to your main component
  const [isDisableModalOpen, setIsDisableModalOpen] = useState(false);
  const updateConfig = (key, value) =>
    setConfig((prev) => ({ ...prev, [key]: value }));

  // 2. This is the function you can call from anywhere below
  const handleToggleWidget = () => {
    if (config.enabled) {
      // If it's currently on, open the confirmation modal to turn it off
      setIsDisableModalOpen(true);
    } else {
      // If it's currently off, just turn it on directly
      updateConfig("enabled", true);
    }
  };

  // 3. This is the confirm function for the modal
  const confirmDisableWidget = () => {
    updateConfig("enabled", false);
    setIsDisableModalOpen(false);
  };

  const codeSnippet = `<script>
  (function(w,d,s,o,f,js,fjs){
    w['ChatWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','https://cdn.chatwidget.com/widget.js'));
  cw('init', { key: 'your-widget-key' });
</script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    // Reset icon after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  // Central State for Live Preview Sync
  const [config, setConfig] = useState({
    enabled: true,
    position: "bottom-right",
    size: "48px",
    borderRadius: 8,
    showLogo: true,
    showAvatars: true,
    fileUpload: true,
    emojiSupport: true,
    font: "Inter",
    primaryColor: "#6B69B2",
    secondaryColor: "#f1f5f9",
    icon: null,
    welcomeMessage: "Hello! How can we help you today?",
    placeholderText: "Type your message...",
  });

  const tabs = [
    { name: "General", icon: <Settings size={16} /> },
    { name: "Styling", icon: <Palette size={16} /> },
    { name: "Content", icon: <FileText size={16} /> },
  ];

  return (
    <div className="mb-20">
      {/* Header */}
      <div className="w-full mx-auto flex flex-col md:flex-row md:items-center justify-between mt-2 mb-8 gap-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Widget Settings
          </h1>
          <p className="text-slate-500 text-sm">
            Customize your chat widget appearance and behavior
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#6B69B2] text-white px-4 py-2 rounded-lg text-sm  shadow-indigo-100 hover:bg-[#5a58a0] transition-all">
          <Eye size={16} /> Live Preview
        </button>
      </div>
      <DisableWidgetModal
        isOpen={isDisableModalOpen}
        onClose={() => setIsDisableModalOpen(false)}
        onConfirm={confirmDisableWidget}
      />
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12  gap-4 2xl:gap-8">
        {/* Left Column: Settings */}
        <div className="lg:col-span-7 space-y-6">
          {/* Custom Tab Switcher */}
          <div className="bg-white p-1 rounded-2xl border border-slate-200 flex gap-2 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.name
                    ? "bg-[#6B69B2] text-white shadow-md"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </div>

          {/* Conditional Rendering */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {activeTab === "General" && (
              <GeneralSettings
                config={config}
                setConfig={setConfig}
                updateConfig={updateConfig}
                onToggleWidget={handleToggleWidget}
              />
            )}
            {activeTab === "Styling" && (
              <StylingSettings config={config} setConfig={setConfig} />
            )}
            {activeTab === "Content" && (
              <ContentSettings config={config} setConfig={setConfig} />
            )}
          </div>
        </div>

        {/* Right Column: Live Preview & Installation */}
        <div className="lg:col-span-5 space-y-4">
          <LivePreview config={config} />

          {/* Installation Code Card */}
          <div className="bg-white px-6 py-2 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div>
                <Code size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">
                  Installation Code
                </h3>
                <p className="text-xs text-slate-500">
                  Copy and paste this code before the closing &lt;/body&gt; tag
                </p>
              </div>
            </div>

            <div className="relative group">
              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-lg bg-white border border-slate-200 text-primary hover:border-indigo-100 shadow-sm transition-all focus:opacity-100 outline-none"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check size={14} className="text-emerald-500" />
                ) : (
                  <Copy size={14} />
                )}
              </button>

              {/* Code Block */}
              <pre
                className=" p-4 pt-5 rounded-2xl text-xs text-primary font-medium font-mono overflow-x-auto border border-primary/20 leading-relaxed "
                style={{
                  background:
                    "linear-gradient(135deg, #EFF6FF 0%, #E0E7FF 100%)",
                }}
              >
                {codeSnippet}
              </pre>

              {/* Optional: "Copied" Tooltip/Label */}
              {copied && (
                <span className="absolute top-3 right-12 px-2 py-1 bg-slate-800 text-white text-[10px] rounded animate-in fade-in zoom-in duration-200">
                  Copied!
                </span>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                <span
                  className="flex items-center gap-1.5 px-3 py-1 text-white text-[11px] font-bold rounded-lg border-none "
                  style={{
                    background:
                      "linear-gradient(135deg, #00C950 0%, #009966 100%)",
                  }}
                >
                  <Zap size={12} className="text-white" />
                  Status: Active
                </span>
                <span
                  className="flex items-center gap-1.5 px-3 py-1 text-white text-[11px] font-bold rounded-lg border-none "
                  style={{
                    background:
                      "linear-gradient(135deg, #2B7FFF 0%, #9810FA 100%)",
                  }}
                >
                  Version: 2.1.0
                </span>
              </div>
              <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-bold text-xs border border-slate-300 px-4 py-2 rounded-lg transition-all">
                <Download size={14} /> Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetSettings;
