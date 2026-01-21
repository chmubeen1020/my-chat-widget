import React from 'react';
import { Key, ShieldCheck, Lock } from 'lucide-react';

const SecuritySettings = () => {
  return (
    <div className="space-y-2">
      {/* Authentication & Access */}
      <div className="bg-white p-4 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2 mb-1 text-slate-900">
          <Key size={16} />
          <h3 className="text-sm md:text-base xl:text-lg font-medium">Authentication & Access</h3>
        </div>
        <p className="text-xs text-slate-500 mb-6">Configure login and session security settings.</p>

        <div className="space-y-4">
          <ToggleRow title="Two-Factor Authentication" desc="Require 2FA for all user accounts" active />
          <ToggleRow title="Auto Logout" desc="Automatically log out inactive users" active />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[13px]  font-medium text-slate-800">Session Timeout (minutes)</label>
              <input type="text" defaultValue="30" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[13px]  font-medium text-slate-800">Password Expiry (days)</label>
              <input type="text" defaultValue="90" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Security Rules */}
      <div className="bg-white p-4 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2 mb-1 text-slate-900">
          <ShieldCheck size={16} />
          <h3 className="text-sm md:text-base xl:text-lg font-medium">Security Rules</h3>
        </div>
        <p className="text-xs text-slate-500 mb-4">Configure automated security policies and rules.</p>

        <div className="space-y-2">
          <RuleRow title="Strong Password Policy" tag="High" tagColor="bg-red-500 text-white" desc="Require passwords with minimum 8 characters, uppercase, lowercase, and numbers" active />
          <RuleRow title="Account Lockout" tag="Medium" tagColor="bg-[#FEF9C2] text-[#894B00]" desc="Lock account after 5 failed login attempts for 30 minutes" active />
          <RuleRow title="IP Whitelist" tag="High" tagColor="bg-red-500 text-white" desc="Only allow access from approved IP addresses" />
          <RuleRow title="Session Management" tag="Medium" tagColor="bg-[#FEF9C2] text-[#894B00]" desc="Automatic logout after period of inactivity" active />
          <RuleRow title="Data Encryption" tag="High" tagColor="bg-red-500 text-white" desc="Encrypt all data at rest and in transit" active />
        </div>
      </div>

      {/* Data Protection */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 ">
        <div className="flex items-center gap-2 mb-1 text-slate-900">
          <Lock size={16}/>
          <h3 className="text-sm md:text-base xl:text-lg font-medium">Data Protection</h3>
        </div>
        <p className="text-xs text-slate-500 mb-4">Configure data encryption and protection settings.</p>
        <div className="space-y-2">
          <ToggleRow title="Data Encryption" desc="Encrypt all sensitive data at rest and in transit" active />
          <ToggleRow title="Audit Logging" desc="Log all user actions and system events" active />
        </div>
      </div>
    </div>
  );
};

const ToggleRow = ({ title, desc, active }) => (
  <div className="flex items-center justify-between">
    <div>
      <h4 className="text-[13px] md:text-sm  font-medium text-slate-800">{title}</h4>
      <p className="text-xs xl:text-sm text-[#717182]">{desc}</p>
    </div>
    <Switch defaultChecked={active} />
  </div>
);

const RuleRow = ({ title, tag, tagColor, desc, active }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between px-4 py-2 border border-slate-100 rounded-xl gap-4">
    <div>
      <div className="flex items-center gap-2">
        <span className="text-[13px] md:text-sm  font-medium text-slate-800">{title}</span>
        <span className={`${tagColor} text-xs px-2 py-0.5 rounded`}>{tag}</span>
      </div>
      <p className="text-xs xl:text-sm text-[#717182]">{desc}</p>
    </div>
    <Switch defaultChecked={active} />
  </div>
);

const Switch = ({ defaultChecked }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#6B69B2]"></div>
  </label>
);

export default SecuritySettings;