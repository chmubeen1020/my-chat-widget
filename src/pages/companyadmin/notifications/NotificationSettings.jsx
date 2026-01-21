import React, { useState } from 'react';
import { Mail, MessageSquare, Bell, Settings } from 'lucide-react';

const NotificationSettings = () => {
  // Pre-set dummy data
  const [email] = useState('admin@company.com');
  const [phone] = useState('+1 (555) 123-4567');

  const toggleItems = ["New Chat", "Escalation", "Agent Offline", "Billing", "Security", "Weekly Report"];

  return (
    <div className="space-y-4">
      {/* Contact Information Card */}
      <div className="bg-white p-6 rounded-xl border border-slate-100 ">
        <h3 className="text-lg font-bold text-slate-900 mb-1">Contact Information</h3>
        <p className="text-sm text-slate-500 mb-6">Update your contact details for receiving notifications.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Email Address</label>
            <input 
              type="email" 
              value={email} 
              readOnly 
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-600 outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Phone Number</label>
            <input 
              type="text" 
              value={phone} 
              readOnly 
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-600 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Channels Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <NotificationChannelCard 
          icon={<Mail size={18} />} 
          title="Email Notifications" 
          description="Receive updates via email"
          items={toggleItems}
          btnText="Send Test Email"
        />
        
        <NotificationChannelCard 
          icon={<MessageSquare size={18}  />} 
          title="SMS Notifications" 
          description="Receive updates via SMS"
          items={toggleItems}
          btnText="Send Test SMS"
        />
        
        <NotificationChannelCard 
          icon={<Bell size={18}  />} 
          title="Push Notifications" 
          description="Browser notifications"
          items={toggleItems}
          btnText="Send Test Push"
        />
      </div>
      {/* Global Save Button */}
      <div className="mt-4 flex justify-end">
        <button className="flex items-center gap-2 px-6 py-2 bg-[#6B69B2] text-white rounded-lg hover:bg-[#5a58a0] ">
          <Settings size={18} />
          Save Settings
        </button>
      </div>
    </div>
  );
};

const NotificationChannelCard = ({ icon, title, description, items, btnText }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100  flex flex-col">
      <div className="flex items-center gap-3 mb-1">
        {icon}
        <h4 className="text-sm font-medium text-slate-900">{title}</h4>
      </div>
      <p className="text-xs text-slate-500 mb-6">{description}</p>

      <div className="space-y-4 mb-4 flex-1">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <span className="text-sm  text-slate-600">{item}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked={idx !== 2 && idx !== 4} />
              <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#6B69B2]"></div>
            </label>
          </div>
        ))}
      </div>

      <button className="w-full py-2 border border-slate-100 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
        {btnText}
      </button>
    </div>
  );
};

export default NotificationSettings;