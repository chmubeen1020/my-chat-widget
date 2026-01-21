const NotificationsTab = () => {
  const notifications = [
    { id: 1, title: 'Email Alerts', desc: 'Receive notifications via email', enabled: true },
    { id: 2, title: 'SMS Alerts', desc: 'Receive critical alerts via SMS', enabled: true },
    { id: 3, title: 'System Maintenance', desc: 'Notifications about system updates', enabled: true },
    { id: 4, title: 'Payment Failures', desc: 'Alerts when tenant payments fail', enabled: true },
    { id: 5, title: 'Security Alerts', desc: 'Critical security notifications', enabled: true },
    { id: 6, title: 'New Tenant Signups', desc: 'Notifications for new registrations', enabled: false },
    { id: 7, title: 'Weekly Reports', desc: 'Weekly platform summary reports', enabled: true },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-semibold ">Notification Preferences</h3>
      <p className="text-slate-400 text-sm mb-4">Choose how you want to be notified</p>

      <div className="space-y-2">
        {notifications.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-sm font-semibold text-slate-800">{item.title}</p>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </div>
            <button 
              className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                item.enabled ? 'bg-primary' : 'bg-slate-200'
              }`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform ${
                item.enabled ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsTab;