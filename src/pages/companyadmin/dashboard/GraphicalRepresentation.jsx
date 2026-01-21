import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { Settings } from 'lucide-react';

// Data based on your image
const lineData = [
  { name: 'Mon', ai: 80, agent: 40 },
  { name: 'Tue', ai: 100, agent: 55 },
  { name: 'Wed', ai: 120, agent: 60 },
  { name: 'Thu', ai: 95, agent: 70 },
  { name: 'Fri', ai: 130, agent: 80 },
  { name: 'Sat', ai: 65, agent: 30 },
  { name: 'Sun', ai: 50, agent: 25 },
];

const pieData = [
  { name: 'AI Handled', value: 65, color: '#6D6EAF' },
  { name: 'Agent Handled', value: 35, color: '#5FB0B7' },
];

const GraphicalRepresentation = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4">
      
      {/* Line Chart Section */}
      <div className="w-full xl:w-3/4 bg-white px-6 py-2 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          
          <div>
            <h3 className="text-gray-800 font-semibold text-lg">Chat Volume</h3>
            <p className="text-gray-400 text-sm">Daily conversation trends</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#6D6EAF]" /> AI Handled
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#5FB0B7]" /> Agent Handled
              </span>
            </div>
            <button className="hidden md:flex items-center gap-1 px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">
              <Settings size={14} /> Customize
            </button>
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
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ width:'200px' , borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="ai" stroke="#6D6EAF" strokeWidth={2} fillOpacity={1} fill="url(#colorAI)" />
              <Area type="monotone" dataKey="agent" stroke="#5FB0B7" strokeWidth={2} fillOpacity={1} fill="url(#colorAgent)" stackId="1" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <button className="mt-4 w-full flex md:hidden items-center justify-center gap-1 px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition">
              <Settings size={14} /> Customize
            </button>
      </div>

      {/* Pie Chart Section */}
      <div className="w-full xl:w-1/4 bg-white px-6 py-2 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-gray-800 font-semibold text-lg">Response Types</h3>
        <p className="text-gray-400 text-sm mb-4">AI vs Agent handling</p>
        
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 space-y-2">
          {pieData.map((item) => (
            <div key={item.name} className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                {item.name}
              </div>
              <span className="font-semibold text-gray-700">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicalRepresentation;