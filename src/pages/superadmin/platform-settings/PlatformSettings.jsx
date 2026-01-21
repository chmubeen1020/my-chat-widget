import React, { useState } from "react";
import { Save } from "lucide-react";
import Branding from "./Branding";
import EmailTemplates from "./EmailTemplates";
import Security from "./Security";

const PlatformSettings = () => {
  const [activeTab, setActiveTab] = useState("Branding");

  const tabs = ["Branding", "Email Templates", "Security"];

  return (
    <div className="pt-2">
      <div>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Platform Settings</h1>
            <p className="text-gray-500 text-sm">Configure global platform settings and preferences</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all shadow-sm w-full md:w-auto">
            <Save size={18} />
            <span>Save All Changes</span>
          </button>
        </div>

        {/* Custom Tabs */}
        <div className="flex p-1 bg-white border border-gray-200 rounded-xl w-fit mb-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm  transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Render Components */}
        <div className="animate-in fade-in duration-500">
          {activeTab === "Branding" && <Branding />}
          {activeTab === "Email Templates" && <EmailTemplates />}
          {activeTab === "Security" && <Security />}
        </div>
      </div>
    </div>
  );
};

export default PlatformSettings;