import React from 'react';
import { Mail, MessageSquare, Bell, AlertTriangle, Shield, Clock, CreditCard } from 'lucide-react';

const NotificationLogs = () => {
  // Dummy Data for Logs
  const logs = [
    { id: 1, event: 'Chat Escalation', type: 'Email', recipient: 'admin@company.com', status: 'Delivered', timestamp: '2024-01-16 14:35', message: 'Chat escalated to human agent - Customer #4521', icon: <AlertTriangle size={16} className="text-orange-500" /> },
    { id: 2, event: 'New Chat', type: 'Push', recipient: 'Admin Dashboard', status: 'Delivered', timestamp: '2024-01-16 14:30', message: 'New chat started by Anonymous User #1847', icon: <MessageSquare size={16} className="text-indigo-500" /> },
    { id: 3, event: 'Security Alert', type: 'Sms', recipient: '+1 (555) 123-4567', status: 'Sent', timestamp: '2024-01-16 13:45', message: 'Failed login attempt detected from new location', icon: <Shield size={16} className="text-red-500" /> },
    { id: 4, event: 'Weekly Report', type: 'Email', recipient: 'admin@company.com', status: 'Delivered', timestamp: '2024-01-15 09:00', message: 'Your weekly chat analytics report is ready', icon: <Clock size={16} className="text-emerald-500" /> },
    { id: 5, event: 'Billing Reminder', type: 'Email', recipient: 'admin@company.com', status: 'Failed', timestamp: '2024-01-14 10:00', message: 'Payment due in 3 days - $49.00', icon: <CreditCard size={16} className="text-purple-500" /> },
  ];

  return (
    <div className="space-y-4">
      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        <StatCard title="Total Sent" value="5" sub="This month" />
        <StatCard title="Delivered" value="3" sub="Successfully delivered" color="text-emerald-500" />
        <StatCard title="Failed" value="1" sub="Delivery failed" color="text-red-500" />
        <StatCard title="Delivery Rate" value="60%" sub="Success rate" />
      </div>

      {/* Logs Table Section */}
      <div className="bg-white p-4 rounded-xl border border-slate-100 overflow-hidden">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-slate-900">Notification History</h3>
          <p className="text-sm text-slate-500">Timeline of all notifications sent from your system.</p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto -mx-6 md:mx-0">
          <div className="inline-block min-w-full align-middle px-6 md:px-0">
            <table className="min-w-full ">
              <thead>
                <tr className="text-left border-b border-slate-50">
                  <th className="pb-2  text-xs xl:text-sm font-medium text-slate-500 px-4">Event</th>
                  <th className="pb-2  text-xs xl:text-sm font-medium text-slate-500 px-4">Type</th>
                  <th className="pb-2 text-xs xl:text-sm font-medium text-slate-500 px-4">Recipient</th>
                  <th className="pb-2 text-xs xl:text-sm font-medium text-slate-500 px-4">Status</th>
                  <th className="pb-2  text-xs xl:text-sm font-medium text-slate-500 px-4">Timestamp</th>
                  <th className="pb-2  text-xs xl:text-sm font-medium text-slate-500 px-4">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {logs.map((log) => (
                  <tr key={log.id} className="group transition-colors">
                    <td className="py-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2">
                          {log.icon}
                        </div>
                        <span className="text-sm  whitespace-nowrap">{log.event}</span>
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex items-center gap-2 ">
                        {log.type === 'Email' && <Mail size={14} />}
                        {log.type === 'Push' && <Bell size={14} />}
                        {log.type === 'Sms' && <MessageSquare size={14} />}
                        <span className="text-sm">{log.type}</span>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-sm  whitespace-nowrap">{log.recipient}</td>
                    <td className="py-2 px-4">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                        log.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600' :
                        log.status === 'Sent' ? 'bg-indigo-50 text-indigo-600' :
                        'bg-red-500 text-white'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 text-sm text-slate-500 whitespace-nowrap">{log.timestamp}</td>
                    <td className="py-2 px-4 text-sm text-slate-600 min-w-[300px]">{log.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-component for the top stats
const StatCard = ({ title, value, sub, color = "text-slate-900" }) => (
  <div className="bg-white p-4 rounded-xl border border-slate-100 ">
    <p className="text-xs md:text-sm lg:text-base  mb-2">{title}</p>
    <div className="flex flex-col">
      <span className={`text-2xl 2xl:text-3xl font-semibold ${color}`}>{value}</span>
      <span className="text-xs text-slate-600 mt-1">{sub}</span>
    </div>
  </div>
);

export default NotificationLogs;