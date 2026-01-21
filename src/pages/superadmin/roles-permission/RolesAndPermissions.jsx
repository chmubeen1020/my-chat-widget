import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import RolesList from "./RolesList";
import RoleModal from "./RoleModal";
import PermissionMatrix from "./PermissionMatrix";
import UserManagement from "./UserManagement";

const RolesAndPermissions = () => {
  const [activeTab, setActiveTab] = useState("Roles");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create"); // 'create' | 'edit' | 'view'
  const [selectedRole, setSelectedRole] = useState(null);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [usermodalMode, setUserModalMode] = useState("create"); // 'create' | 'edit'
  const [selectedUser, setSelectedUser] = useState(null);

  const tabs = ["Roles", "Permissions Matrix", "User Management"];

  const handleOpenModal = (mode, role = null) => {
    setModalMode(mode);
    setSelectedRole(role);
    setIsModalOpen(true);
  };

    const handleAction = (mode, user = null) => {
    setUserModalMode(mode);
    setSelectedUser(user);
    setIsUserModalOpen(true);
  };
  return (
    <div >
      <div className="pt-2">
        <h1 className="text-xl font-semibold">Roles & Permissions</h1>
        <p className="text-gray-500 text-sm mb-8">Manage user roles, permissions, and access control</p>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          {/* Tabs */}
          <div className="flex p-1 bg-white border border-gray-200 rounded-xl w-fit overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Conditional Actions for Roles Tab */}
          {activeTab === "Roles" && (
            <div className="flex items-center gap-3">
              <div className="relative group flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search roles..."
                  className="pl-10 pr-4 py-2 w-full md:w-64 bg-white border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <button 
                onClick={() => handleOpenModal("create")}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm"
              >
                <Plus size={18} />
                <span className="hidden sm:inline">Create Role</span>
              </button>
            </div>
          )}

          {activeTab === "User Management" && (
            <div className="flex items-center gap-3">
              <div className="relative group flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="pl-10 pr-4 py-2 w-full md:w-64 bg-white border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
               <button 
               onClick={() => handleAction("create")}
               className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm"

               >
              <Plus size={18} />
              Add User
              </button>
              </div>
)}
        </div>

        {/* Tab Content */}
        <div className="animate-in fade-in duration-500">
          {activeTab === "Roles" && <RolesList onAction={handleOpenModal} />}
          {activeTab === "Permissions Matrix" && <div><PermissionMatrix /></div>}
          {activeTab === "User Management" && <div><UserManagement isUserModalOpen ={isUserModalOpen} setIsUserModalOpen={setIsUserModalOpen} usermodalMode={usermodalMode} setUserModalMode={setUserModalMode} selectedUser={selectedUser} setSelectedUser={setSelectedUser} handleAction={handleAction}/></div>}
        </div>
      </div>

      {/* Shared Modal */}
      {isModalOpen && (
        <RoleModal 
          mode={modalMode} 
          role={selectedRole} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default RolesAndPermissions;