import React from "react";
import { Shield, Eye, Edit2, Trash2 } from "lucide-react";

const RolesList = ({ onAction }) => {
  const roles = [
    { id: 1, title: "Super Administrator", tag: "System", users: 3, permissions: 26, color: "bg-primary/10 text-primary border-primary/20", iconColor: "text-primary" },
    { id: 2, title: "Platform Manager", tag: null, users: 5, permissions: 8, color: "bg-cyan-50 text-cyan-600 border-cyan-100", iconColor: "text-cyan-600" },
    { id: 3, title: "Billing Administrator", tag: null, users: 2, permissions: 6, color: "bg-emerald-50 text-emerald-600 border-emerald-100", iconColor: "text-emerald-600" },
    { id: 4, title: "Support Administrator", tag: null, users: 8, permissions: 5, color: "bg-orange-50 text-orange-600 border-orange-100", iconColor: "text-orange-600" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {roles.map((role) => (
        <div key={role.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm ">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${role.color} border`}>
                <Shield size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-900">{role.title}</h3>
                  {role.tag && (
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs font-semibold rounded ">
                      {role.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">Full access to platform features</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Users</span>
              <span className="font-semibold text-gray-700">{role.users}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Permissions</span>
              <span className="font-semibold text-gray-700">{role.permissions}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => onAction("view", role)}
              className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Eye size={14} /> View
            </button>
            <button 
              onClick={() => onAction("edit", role)}
              className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Edit2 size={14} /> Edit
            </button>
            {role.id !== 1 && (
              <button className="p-2 border border-gray-200 rounded-xl text-gray-500 hover:text-rose-500 hover:bg-rose-50 transition-all">
                <Trash2 size={16} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RolesList;