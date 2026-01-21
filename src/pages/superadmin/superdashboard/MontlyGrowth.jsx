import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';


// Dummy Data for Monthly Growth Chart
const growthData = [
  { name: 'Jan', revenue: 45, acquisition: 38 },
  { name: 'Feb', revenue: 52, acquisition: 45 },
  { name: 'Mar', revenue: 48, acquisition: 42 },
  { name: 'Apr', revenue: 61, acquisition: 52 },
  { name: 'May', revenue: 55, acquisition: 48 },
  { name: 'Jun', revenue: 67, acquisition: 58 },
];

// Dummy Data for Recent Activity
const activityLogs = [
  { id: 1, company: 'TechCorp', action: 'signed up for Enterprise plan', time: '5 mins ago', status: 'new tenant', type: 'success' },
  { id: 2, company: 'Payment failed', action: 'for StartupXYZ', time: '12 mins ago', status: 'payment failed', type: 'danger' },
  { id: 3, company: 'GreenTech', action: 'subscription expired', time: '1 hour ago', status: 'subscription expired', type: 'danger-light' },
  { id: 4, company: 'WebFlow', action: 'upgraded to Pro plan', time: '2 hours ago', status: 'upgrade', type: 'primary' },
  { id: 5, company: 'Innovatinc', action: 'signed up for Pro plan', time: '3 hours ago', status: 'new tenant', type: 'success' },
];

const MontlyGrowth = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Monthly Growth Card */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div className="mb-6">
          <h3 className="text-xl font-medium text-slate-800">Monthly Growth</h3>
          <p className="text-sm text-slate-500">Revenue and tenant acquisition</p>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={growthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: 12}}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: 12}}
              />
              <Tooltip 
                cursor={{fill: '#f8fafc'}}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="revenue" fill="#5EACB1" radius={[4, 4, 0, 0]} barSize={16} />
              <Bar dataKey="acquisition" fill="#6B69B2" radius={[4, 4, 0, 0]} barSize={16} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity Card */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
        <div className="mb-8">
          <h3 className="text-xl font-medium text-slate-800">Recent Activity</h3>
          <p className="text-sm text-slate-500">Latest platform events and notifications</p>
        </div>

        <div className="space-y-6">
          {activityLogs.map((log) => (
            <div key={log.id} className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                {/* Status Dot */}
                <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${
                  log.type === 'success' ? 'bg-emerald-500' : 
                  log.type === 'danger' ? 'bg-amber-500' : 
                  log.type === 'danger-light' ? 'bg-red-500' : 'bg-emerald-500'
                }`} />
                
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    <span className="font-bold">{log.company}</span> {log.action}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{log.time}</p>
                </div>
              </div>

              {/* Responsive Badge */}
              <span className={`whitespace-nowrap px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                log.type === 'success' ? 'bg-emerald-50 text-emerald-600' :
                log.type === 'danger' ? 'bg-red-50 text-red-600' :
                log.type === 'danger-light' ? 'bg-red-50 text-red-600' :
                'bg-indigo-50 text-indigo-600'
              }`}>
                {log.status}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MontlyGrowth;