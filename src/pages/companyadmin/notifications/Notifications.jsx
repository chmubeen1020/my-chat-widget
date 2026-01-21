import React, { useState } from 'react';
import { Settings, History } from 'lucide-react';
import NotificationSettings from './NotificationSettings';
import NotificationLogs from './NotificationLogs';

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState('settings');

  return (
    <div>
      {/* Page Header */}
      <div className="mb-4 mt-2">
        <h1 className="text-xl font-semibold text-slate-900">Notifications</h1>
        <p className="text-sm text-slate-500 mt-1">
          Configure how and when you receive notifications about your chat system.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex bg-white p-1 rounded-xl border border-slate-200 w-fit mb-4 mx-auto md:mx-0">
        <button
          onClick={() => setActiveTab('settings')}
          className={`flex items-center gap-2 px-2 md:px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'settings'
              ? 'bg-[#6B69B2] text-white shadow-sm'
              : 'text-slate-500 hover:bg-slate-50'
          }`}
        >
          <Settings size={18} />
          Notification Settings
        </button>
        <button
          onClick={() => setActiveTab('logs')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'logs'
              ? 'bg-[#6B69B2] text-white shadow-sm'
              : 'text-slate-500 hover:bg-slate-50'
          }`}
        >
          <History size={18} />
          Notification Logs
        </button>
      </div>

      {/* Content Area */}
      {activeTab === 'settings' && (
        <NotificationSettings />)}
      {activeTab === "logs" && (
           <NotificationLogs/>
        )}
    </div>
  );
};

export default NotificationPage;