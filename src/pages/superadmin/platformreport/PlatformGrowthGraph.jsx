import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
} from 'recharts';
import { Settings } from 'lucide-react';
const PlatformGrowthGraph = () => {
    const lineData = [
  { name: 'Jan', activetenant: 80, totaltenant: 40 },
  { name: 'Feb', activetenant: 100, totaltenant: 55 },
  { name: 'Mar', activetenant: 120, totaltenant: 60 },
  { name: 'Apr', activetenant: 95, totaltenant: 70 },
  { name: 'May', activetenant: 130, totaltenant: 80 },
  { name: 'June', activetenant: 65, totaltenant: 30 },
  { name: 'July', activetenant: 50, totaltenant: 25 },
];
  return (
        <div>
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          
          <div>
            <h3 className="text-gray-800 font-semibold text-lg">Platform Growth</h3>
            <p className="text-gray-400 text-sm">Tenant acquisition and revenue growth</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#6D6EAF]" /> Active Tenant
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#5FB0B7]" /> Total Tenant
              </span>
            </div>
          </div>
          
        </div>

        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={lineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorAI" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6D6EAF" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#6D6EAF" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorAgent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5FB0B7" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#5FB0B7" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
              <XAxis dataKey = 'name' axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ width:'200px' , borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" name= "Active Tenants" dataKey="activetenant" stroke="#6D6EAF" strokeWidth={2} fillOpacity={1} fill="url(#colorAI)" />
              <Area type="monotone" name= "Total Tenants" dataKey="totaltenant" stroke="#5FB0B7" strokeWidth={2} fillOpacity={1} fill="url(#colorAgent)" stackId="1" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <button className="mt-4 w-full flex md:hidden items-center justify-center gap-1 px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">
              <Settings size={14} /> Customize
            </button>
      </div>
  )
}

export default PlatformGrowthGraph