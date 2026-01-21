import React from "react";
import { Edit} from "lucide-react";
import UserModal from "./UserModal";

const UserManagement = ({isUserModalOpen, setIsUserModalOpen , usermodalMode, setUserModalMode , selectedUser , setSelectedUser , handleAction}) => {


  const users = [
    { id: 1, name: "John Admin", email: "john@techween.com", role: "Super Administrator", status: "active", lastLogin: "2024-10-10 14:30", initials: "JA", color: "bg-indigo-100 text-indigo-700" },
    { id: 2, name: "Sarah Manager", email: "sarah@techween.com", role: "Platform Manager", status: "active", lastLogin: "2024-10-10 12:15", initials: "SM", color: "bg-cyan-100 text-cyan-700" },
    { id: 3, name: "Mike Billing", email: "mike@techween.com", role: "Billing Administrator", status: "active", lastLogin: "2024-10-09 16:45", initials: "MB", color: "bg-emerald-100 text-emerald-700" },
    { id: 4, name: "Lisa Support", email: "lisa@techween.com", role: "Support Administrator", status: "active", lastLogin: "2024-10-10 09:20", initials: "LS", color: "bg-orange-100 text-orange-700" },
    { id: 5, name: "Tom Wilson", email: "tom@techween.com", role: "Platform Manager", status: "active", lastLogin: "2024-10-08 11:30", initials: "TW", color: "bg-cyan-100 text-cyan-700" },
    { id: 6, name: "Emma Davis", email: "emma@techween.com", role: "Support Administrator", status: "inactive", lastLogin: "2024-09-28 14:10", initials: "ED", color: "bg-orange-100 text-orange-700" },
  ];

//   const handleAction = (mode, user = null) => {
//     setUserModalMode(mode);
//     setSelectedUser(user);
//     setIsUserModalOpen(true);
//   };

  return (
    <div>
      {/* Top Search/Action Bar for Main Component Integration */}
      {/* (This part usually lives in your main layout, but here is the Add Button logic) */}
      
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-50 text-sm font-medium text-gray-600 ">
                <th className="px-6 py-2 font-medium">User</th>
                <th className="px-6 py-2 font-medium">Email</th>
                <th className="px-6 py-2 font-medium">Role</th>
                <th className="px-6 py-2 font-medium">Status</th>
                <th className="px-6 py-2 font-medium">Last Login</th>
                <th className="px-6 py-2 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${user.color.split(' ')[0]} ${user.color.split(' ')[1]}`}>
                        {user.initials}
                      </div>
                      <span className="text-sm font-medium text-gray-800">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-medium  ${user.color}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-medium capitalize ${user.status === 'active' ? 'bg-teal-50 text-teal-600' : 'bg-gray-100 text-gray-400'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400 ">{user.lastLogin}</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => handleAction("edit", user)}
                      className="p-2 text-gray-600 "
                    >
                      <Edit size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isUserModalOpen && (
        <UserModal 
          mode={usermodalMode} 
          user={selectedUser} 
          onClose={() => setIsUserModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default UserManagement;