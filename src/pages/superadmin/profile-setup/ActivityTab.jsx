import { Clock, Globe, Laptop } from 'lucide-react';

const ActivityTab = () => {
  const activities = [
    { id: 1, action: 'Updated billing settings for Acme Corp', time: '2024-10-03 14:30', ip: '192.168.1.100', browser: 'Chrome 118.0.0.0' },
    { id: 2, action: 'Created new notification announcement', time: '2024-10-03 12:15', ip: '192.168.1.100', browser: 'Chrome 118.0.0.0' },
    { id: 3, action: 'Suspended tenant account: InnovateLab', time: '2024-10-02 16:45', ip: '192.168.1.100', browser: 'Chrome 118.0.0.0' },
    { id: 4, action: 'Updated platform security settings', time: '2024-10-02 11:20', ip: '192.168.1.100', browser: 'Chrome 118.0.0.0' },
    { id: 5, action: 'Generated new API key', time: '2024-10-01 09:30', ip: '192.168.1.100', browser: 'Chrome 118.0.0.0' },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-semibold ">Recent Activity</h3>
      <p className="text-slate-400 text-sm mb-4">Your recent actions on the platform</p>

      <div className="space-y-2">
        {activities.map((log) => (
          <div key={log.id} className="px-4 py-2 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
            <p className="text-slate-800 font-medium mb-1">{log.action}</p>
            <div className="flex flex-wrap gap-6 items-center text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock size={14} /> {log.time}
              </div>
              <div className="flex items-center gap-1.5">
                <Globe size={14} /> {log.ip}
              </div>
              <div className="flex items-center gap-1.5">
                <Laptop size={14} /> {log.browser}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTab;