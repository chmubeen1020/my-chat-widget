import React, { useState } from 'react';
import { Shield, Users, ScrollText } from 'lucide-react';
import SecuritySettings from './SecuritySettings';
import AccessControl from './AccessControl';
import AuditLogs from './AuditLogs';

const SecurityPage = () => {
  const [activeTab, setActiveTab] = useState('security');

  return (
    <div>
      {/* Page Header */}
      <div className="mb-4 mt-2">
        <h1 className="text-xl font-semibold text-slate-900">Security & Settings</h1>
        <p className="text-sm text-slate-500 mt-1">Manage security policies, access controls, and audit logs for your organization.</p>
      </div>

      {/* Security Score Card */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 mb-2 ">
        <div className="flex items-center justify-between mb-4">
            <div>
          <div className="flex items-center gap-2 text-slate-700">
            <Shield size={18} />
            <span className="text-sm md:text-base xl:text-lg font-medium">Security Score</span>
          </div>
            <p className='text-xs lg:text-sm text-gray-500 mt-1'>Overall security posture of your system</p>
          </div>
          <span className="px-3 py-1 bg-emerald-50 text-green-700 text-[11px] font-medium rounded-lg uppercase tracking-wider">Excellent</span>
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-semibold text-slate-900">86%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[86%] rounded-full" />
        </div>
        <p className='text-xs lg:text-sm text-gray-500 mt-1'>Your security settings are well configured.</p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex flex-wrap gap-2 p-1 rounded-xl border border-slate-200 w-fit mb-6">
        <button
          onClick={() => setActiveTab('security')}
          className={`flex items-center gap-2 px-2 md:px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'security' ? 'bg-[#6B69B2] text-white shadow-md' : 'text-slate-500 hover:bg-white'
          }`}
        >
          <Shield size={18} />
          Security Settings
        </button>
        <button
          onClick={() => setActiveTab('access')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'access' ? 'bg-[#6B69B2] text-white shadow-md' : 'text-slate-500 hover:bg-white'
          }`}
        >
          <Users size={18} />
          Access Control
        </button>
        <button
          onClick={() => setActiveTab('audit')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'audit' ? 'bg-[#6B69B2] text-white shadow-md' : 'text-slate-500 hover:bg-white'
          }`}
        >
          <ScrollText size={18} />
          Audit Logs
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'security' &&( <SecuritySettings /> )}
      {activeTab === 'access' &&( <AccessControl /> )}
      {activeTab === 'audit' &&( <AuditLogs /> )}
    </div>
  );
};

export default SecurityPage;