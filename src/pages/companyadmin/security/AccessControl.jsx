import React, { useState } from 'react';
import { UserCog, ShieldCheck, User, AlertCircle } from 'lucide-react';

const AccessControl = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingChange, setPendingChange] = useState(null);

  // Initial dummy data for permissions
  const [roles, setRoles] = useState({
    Admin: {
      icon: <UserCog size={18} />,
      desc: "Configure permissions for admin users",
      permissions: { "View Dashboard": true, "Manage Agents": true, "Manage Training": true, "View Chats": true, "Manage Settings": true, "View Billing": true, "View Reports": true }
    },
    Agent: {
      icon: <ShieldCheck size={18} />,
      desc: "Configure permissions for agent users",
      permissions: { "View Dashboard": true, "Manage Agents": false, "Manage Training": false, "View Chats": true, "Manage Settings": false, "View Billing": false, "View Reports": false }
    },
    Viewer: {
      icon: <User size={18} />,
      desc: "Configure permissions for viewer users",
      permissions: { "View Dashboard": true, "Manage Agents": false, "Manage Training": false, "View Chats": true, "Manage Settings": false, "View Billing": false, "View Reports": true }
    }
  });

  const handleToggleAttempt = (roleName, permission, currentValue) => {
    setPendingChange({ roleName, permission, newValue: !currentValue });
    setIsModalOpen(true);
  };

  const confirmChange = async () => {
    const { roleName, permission, newValue } = pendingChange;
    
    // Simulating API Call
    console.log(`Running API: Update ${roleName} - ${permission} to ${newValue}`);
    
    setRoles(prev => ({
      ...prev,
      [roleName]: {
        ...prev[roleName],
        permissions: { ...prev[roleName].permissions, [permission]: newValue }
      }
    }));
    
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {Object.entries(roles).map(([roleName, data]) => (
          <div key={roleName} className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 text-slate-900">
              <div>{data.icon}</div>
              <h4 className="text-sm md:text-base">{roleName}</h4>
            </div>
            <p className="text-xs md:text-sm text-slate-600 mb-6">{data.desc}</p>

            <div className="space-y-3">
              {Object.entries(data.permissions).map(([perm, isActive]) => (
                <div key={perm} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">{perm}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={isActive} 
                      onChange={() => handleToggleAttempt(roleName, perm, isActive)}
                    />
                    <div className="w-9 h-5 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#6B69B2]"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white w-full max-w-md rounded-2xl p-4  animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-2 text-slate-900">
              <AlertCircle size={20} />
              <h3 className="text-lg font-medium ">Confirm Access Change</h3>
            </div>
            
            <p className="text-sm text-slate-900 leading-relaxed mb-6">
              Are you sure you want to <span className="font-medium ">{pendingChange?.newValue ? 'enable' : 'disable'}</span> the 
              <span className="font-medium "> "{pendingChange?.permission}"</span> right for the 
              <span className="font-medium "> {pendingChange?.roleName}</span> role?
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-1.5 rounded-xl border border-slate-300 text-sm  text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmChange}
                className="px-4 py-1.5 rounded-xl bg-primary/90 text-white text-sm  hover:bg-primary "
              >
                Confirm Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessControl;