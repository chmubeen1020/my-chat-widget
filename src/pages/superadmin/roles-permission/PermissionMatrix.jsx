import React from "react";
import {  XCircle, LayoutDashboard, Users, CreditCard, Settings, UserCircle, Terminal, CheckCircle } from "lucide-react";

const PermissionMatrix = () => {
  // Dummy Data for Roles and Permissions
  const roles = ["Super Administrator", "Platform Manager", "Billing Administrator", "Support Administrator"];

  const categories = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      items: [
        { label: "View Dashboard", desc: "Access to main dashboard", status: [true, true, true, true] },
        { label: "View Analytics", desc: "Access to analytics and reports", status: [true, true, true, true] },
        { label: "Export Reports", desc: "Export analytics and reports", status: [true, true, false, false] },
      ],
    },
    {
      name: "Tenants",
      icon: <Users size={18} />,
      items: [
        { label: "View Tenants", desc: "View tenant list", status: [true, true, true, true] },
        { label: "Create Tenants", desc: "Add new tenants", status: [true, false, false, false] },
        { label: "Edit Tenants", desc: "Modify tenant details", status: [true, true, false, false] },
        { label: "Delete Tenants", desc: "Remove tenants", status: [true, false, false, false] },
        { label: "Suspend Tenants", desc: "Suspend/activate tenants", status: [true, false, false, false] },
      ],
    },
    {
      name: "Billing",
      icon: <CreditCard size={18} />,
      items: [
        { label: "View Billing", desc: "Access billing information", status: [true, true, true, true] },
        { label: "Manage Billing", desc: "Manage subscriptions and payments", status: [true, false, true, false] },
        { label: "Manage Plans", desc: "Create and edit subscription plans", status: [true, false, true, false] },
      ],
    },
    {
      name: "Settings",
      icon: <Settings size={18} />,
      items: [
        { label: "View Settings", desc: "Access platform settings", status: [true, true, false, false] },
        { label: "Edit Settings", desc: "Modify platform settings", status: [true, false, false, false] },
        { label: "Security Settings", desc: "Manage security configurations", status: [true, false, false, false] },
        { label: "Branding Settings", desc: "Manage platform branding", status: [true, false, false, false] },
        { label: "Email Templates", desc: "Edit email templates", status: [true, false, false, false] },
        { label: "AI Settings", desc: "Configure AI settings", status: [true, false, false, false] },
      ],
    },
    {
        name: "Users",
        icon: <UserCircle size={18} />,
        items: [
          { label: "View Users", desc: "View user list", status: [true, true, false, true] },
          { label: "Create Users", desc: "Add new users", status: [true, false, false, false] },
          { label: "Edit Users", desc: "Modify user details", status: [true, false, false, false] },
          { label: "Delete Users", desc: "Remove users", status: [true, false, false, false] },
          { label: "View Roles", desc: "View roles and permissions", status: [true, false, false, false] },
          { label: "Manage Roles", desc: "Create and edit roles", status: [true, false, false, false] },
        ],
      },
      {
        name: "System",
        icon: <Terminal size={18} />,
        items: [
          { label: "View System Logs", desc: "Access system logs", status: [true, false, false, true] },
          { label: "System Backup", desc: "Manage backups", status: [true, false, false, false] },
          { label: "Maintenance Mode", desc: "Control maintenance mode", status: [true, false, false, false] },
        ],
      },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-2 border-b border-gray-50">
        <h2 className="text-xl font-medium text-gray-900">Permission Matrix</h2>
        <p className="text-gray-500 text-xs mt-1">View and compare permissions across all roles</p>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="min-w-[1000px]">
          {/* Header Row */}
          <div className="grid grid-cols-12 px-6 py-2 border-b border-gray-100 sticky top-0 z-10">
            <div className="col-span-4 text-sm font-semibold text-gray-500 ">
              Permission
            </div>
            {roles.map((role, i) => (
              <div key={i} className="col-span-2 px-2 text-center text-sm font-semibold text-gray-500 ">
                {role}
              </div>
            ))}
          </div>

          {/* Matrix Content */}
          <div className="divide-y divide-gray-50">
            {categories.map((cat, catIdx) => (
              <div key={catIdx}>
                {/* Category Group Header */}
                <div className="grid grid-cols-12 px-6 py-2 bg-indigo-50/30 items-center">
                  <div className="col-span-12 flex items-center gap-2 text-primary font-semibold text-sm">
                    {cat.icon}
                    {cat.name}
                  </div>
                </div>

                {/* Individual Permission Rows */}
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="grid grid-cols-12 py-1 items-center hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-0">
                    <div className="col-span-4 pl-6">
                      <p className="text-sm font-medium text-gray-700">{item.label}</p>
                      <p className="text-[10px] text-gray-400">{item.desc}</p>
                    </div>
                    {item.status.map((hasAccess, sIdx) => (
                      <div key={sIdx} className="col-span-2 p-2 flex justify-center">
                        {hasAccess ? (
                          <CheckCircle size={16} className="text-emerald-500" />
                        ) : (
                          <XCircle size={16} className="text-gray-200" />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionMatrix;