import React from "react";
import { Shield, Lock } from "lucide-react";

const Security = () => {
  const Toggle = ({ label, sublabel }) => (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-sm font-medium text-gray-800">{label}</p>
        <p className="text-xs text-gray-400">{sublabel}</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
      </label>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Authentication & Access Card */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={20} className="text-gray-600" />
          <h2 className="text-lg font-medium text-gray-900">Authentication & Access</h2>
        </div>

        <div className="space-y-2">
          <Toggle label="Require Two-Factor Authentication" sublabel="Force 2FA for all users" />
          <Toggle label="IP Whitelist" sublabel="Restrict access by IP address" />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
            <input
              type="number"
              defaultValue={480}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Password Policy Card */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Lock size={20} className="text-gray-600" />
          <h2 className="text-lg font-medium text-gray-900">Password Policy</h2>
        </div>

        <div className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Length</label>
            <input
              type="number"
              defaultValue={8}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          <div className="space-y-2 pt-2">
            <Toggle label="Require Special Characters" />
            <Toggle label="Require Numbers" />
            <Toggle label="Require Uppercase" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;