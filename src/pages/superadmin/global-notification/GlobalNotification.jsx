import React, { useState } from 'react';
import { Eye, Edit2, Trash2, Plus, Users, Send, BookOpen, Clock, X, Edit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GlobalNotification = () => {
  const [notifications] = useState([
    { id: 1, title: 'Server Maintenance Scheduled', type: 'system', priority: 'high', status: 'scheduled', message: 'Platform maintenance scheduled for Sunday 2AM-4AM UTC...', recipients: 'all tenants', sent: 0, read: 0, date: '2024-10-06 02:00' },
    { id: 2, title: 'Payment Processing Update', type: 'billing', priority: 'medium', status: 'sent', message: 'We have updated our payment processing system...', recipients: 'paid tenants', sent: 156, read: 134, date: '2024-10-02 10:15' },
    { id: 3, title: 'New AI Model Available', type: 'feature', priority: 'low', status: 'sent', message: 'GPT-4 Turbo is now available for all Pro and Enterprise...', recipients: 'pro enterprise', sent: 105, read: 98, date: '2024-10-01 16:00' },
    { id: 4, title: 'Security Update Required', type: 'security', priority: 'high', status: 'draft', message: 'A critical security update is available. Please update...', recipients: 'all tenants', sent: 0, read: 0, date: '2024-10-03 11:20' },
  ]);
const navigate = useNavigate();
  const getBadgeColor = (type) => {
    const colors = {
      system: 'bg-blue-100 text-blue-600',
      high: 'bg-red-500 text-white',
      medium: 'bg-blue-100 text-blue-600',
      low: 'bg-gray-100 text-gray-600',
      sent: 'bg-blue-500 text-white',
      scheduled: 'bg-blue-50 text-blue-400 border border-blue-100',
      billing: 'bg-green-100 text-green-700',
      feature: 'bg-purple-50 text-purple-600',
      security: 'bg-red-50 text-red-600',
      draft: 'bg-gray-100 text-gray-500'
    };
    return colors[type] || 'bg-gray-100';
  };

  return (
    <div className="pt-2">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Send Global Notifications</h1>
            <p className="text-gray-500 text-sm">Manage platform-wide communications</p>
          </div>
          <button 
            onClick={() => navigate('new')}
            className="bg-primary/90 hover:bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all w-full md:w-auto justify-center"
          >
            <Plus size={18} /> Create New Notification
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((n) => (
            <div key={n.id} className="bg-white border border-gray-100 rounded-xl p-5  transition-shadow">
              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-800 text-lg">{n.title}</h3>
                    <span className={`px-2 py-0.5 rounded text-xs ${getBadgeColor(n.type)}`}>{n.type}</span>
                    <span className={`px-2 py-0.5 rounded text-xs ${getBadgeColor(n.priority)}`}>{n.priority}</span>
                    <span className={`px-2 py-0.5 rounded text-xs ${getBadgeColor(n.status)}`}>{n.status}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-1">{n.message}</p>
                  
                  <div className="grid grid-cols-2 md:flex md:flex-wrap gap-y-2 md:gap-x-6 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5"><Users size={14}/> Recipients: {n.recipients}</div>
                    <div className="flex items-center gap-1.5"><Send size={14}/> Sent to: {n.sent}</div>
                    <div className="flex items-center gap-1.5"><BookOpen size={14}/> Read by: {n.read}</div>
                    <div className="flex items-center gap-1.5"><Clock size={14}/> {n.status === 'scheduled' ? 'Scheduled' : 'Sent'}: {n.date}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 justify-end border-t lg:border-t-0 pt-4 lg:pt-0">
                  <button  className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200"><Eye size={18}/></button>
                  <button  className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200"><Edit size={18}/></button>
                  <button className="p-2 text-gray-600 hover:bg-red-50 hover:text-red-500 rounded-lg border border-gray-200"><Trash2 size={18}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalNotification
