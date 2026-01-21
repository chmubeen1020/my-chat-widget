import React from "react";
import { X, LayoutDashboard, Users, CreditCard, Settings} from "lucide-react";

const RoleModal = ({ mode, role, onClose }) => {
  const isView = mode === "view";
  
  const sections = [
    { title: "Dashboard", icon: <LayoutDashboard size={18} />, permissions: ["View Dashboard", "View Analytics", "Export Reports"] },
    { title: "Tenants", icon: <Users size={18} />, permissions: ["View Tenants", "Create Tenants", "Edit Tenants", "Delete Tenants", "Suspend Tenants"] },
    { title: "Billing", icon: <CreditCard size={18} />, permissions: ["View Billing", "Manage Billing", "Manage Plans"] },
    { title: "Settings", icon: <Settings size={18} />, permissions: ["View Settings", "Edit Settings", "Security Settings", "Branding Settings", "Email Templates", "AI Settings"] },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-2 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {mode === "create" ? "Create New Role" : mode === "edit" ? "Edit Role" : "View Role Details"}
            </h2>
            <p className="text-gray-500 text-xs mt-1">Define role permissions and access levels</p>
          </div>
          <button onClick={onClose}>
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto px-6 py-2 space-y-2 no-scrollbar">
          <div className="space-y-2">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Role Name</label>
              <input
                disabled={isView}
                defaultValue={role?.title || ""}
                placeholder="e.g., Content Manager"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary outline-none disabled:opacity-60"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
              <textarea
                disabled={isView}
                rows={3}
                placeholder="Describe the role responsibilities..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary outline-none resize-none disabled:opacity-60"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-2">Permissions</label>
            <div className="space-y-2 bg-white border border-gray-100 rounded-2xl px-4 py-2">
              {sections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    {section.icon}
                    <span className="font-bold text-sm">{section.title}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    {section.permissions.map((perm, pIdx) => (
                      <div key={pIdx} className="flex items-center justify-between group">
                        <span className="text-sm text-gray-600">{perm}</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" disabled={isView} className="sr-only peer" defaultChecked={pIdx === 0} />
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                  {idx !== sections.length - 1 && <div className="border-b border-gray-50 pt-1" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        {!isView && (
          <div className="px-6 py-2 flex items-center justify-end gap-2 ">
            <button onClick={onClose} className="px-6 py-2 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-white transition-all">
              Cancel
            </button>
            <button className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-semibold transition-all shadow-sm">
              {mode === "create" ? "Create Role" : "Update Role"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleModal;