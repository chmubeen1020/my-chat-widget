import { Eye } from 'lucide-react';

const SecurityTab = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* 2FA Card */}
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
      <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
      <p className="text-slate-400 text-sm mb-4">Secure your account with 2FA</p>
      
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm font-medium text-slate-700">Status</p>
          <p className="text-sm text-slate-400">Enabled</p>
        </div>
        <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-md text-xs">Active</span>
      </div>

      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-sm font-medium text-slate-700">Backup Codes</p>
          <p className="text-sm text-slate-400">8 codes remaining</p>
        </div>
        <button className="flex items-center gap-2 border border-slate-200 px-4 py-1.5 rounded-lg text-sm hover:bg-slate-50 transition-colors">
          <Eye size={16} />
          View Codes
        </button>
      </div>

      <button className="mt-auto w-full py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all">
        Disable 2FA
      </button>
    </div>

    {/* Password Card */}
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-semibold ">Password & Sessions</h3>
      <p className="text-slate-400 text-sm mb-4">Manage password and session settings</p>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-slate-700">Last Password Change</p>
        <p className="text-sm text-slate-400">2024-09-15</p>
      </div>

      <div className="mb-4 space-y-2">
        <label className="text-sm font-medium text-slate-700">Session Timeout (minutes)</label>
        <input type="number" defaultValue="480" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
      </div>

      <div className="space-y-1">
        <button className="w-full py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
          Change Password
        </button>
        <button className="w-full py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
          Sign Out All Sessions
        </button>
      </div>
    </div>
  </div>
);

export default SecurityTab;