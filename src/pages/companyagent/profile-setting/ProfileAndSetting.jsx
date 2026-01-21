import { useState } from "react";
import ProfilePage from "./ProfliePage";
import PreferencesPage from "./PreferencesPage";

const ProfileAndSetting = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="mt-2">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Profile & Settings
        </h1>
        <p className="text-sm text-gray-500">
          Manage your profile and notification preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full md:max-w-lg inline-flex rounded-lg bg-white mb-6 px-2 py-1 border border-gray-200 gap-1">
        <button
          onClick={() => setActiveTab("profile")}
          className={`w-1/2 py-1 text-sm font-medium rounded-lg transition ${
            activeTab === "profile"
              ? "bg-primary text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("preferences")}
          className={`w-1/2 py-1 text-sm font-medium rounded-lg transition ${
            activeTab === "preferences"
              ? "bg-primary text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Preferences
        </button>
      </div>

      {/* Content */}
      {activeTab === "profile" ? <ProfilePage /> : <PreferencesPage/>}
    </div>
  );
}

export default ProfileAndSetting