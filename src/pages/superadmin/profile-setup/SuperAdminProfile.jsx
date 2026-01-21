import React, { useState } from 'react';
import ProfileTab from './ProfileTab';
import SecurityTab from './SecurityTab';
import NotificationsTab from './NotificationsTab';
import ActivityTab from './ActivityTab';
import { Save } from 'lucide-react';

const SuperAdminProfile = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  const tabs = ['Profile', 'Security', 'Notifications', 'Activity'];

  const renderContent = () => {
    switch (activeTab) {
      case 'Profile': return <ProfileTab />;
      case 'Security': return <SecurityTab />;
      case 'Notifications': return <NotificationsTab />;
      case 'Activity': return <ActivityTab />;
      default: return <ProfileTab />;
    }
  };

  return (
    <div className="pt-2 text-slate-900">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-xl font-semibold">Super Admin Profile</h1>
            <p className="text-slate-500">Manage your account settings and security preferences</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-primary/90 hover:bg-primary text-white px-6 py-2 rounded-lg transition-colors font-medium shadow-sm">
            <Save size={18} />
            Save All Changes
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-fit mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className="mt-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminProfile;