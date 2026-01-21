import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  MoreHorizontal,
  Search,
  ChevronDown,
  UserPlus,
  Shield,
  User,
  Clock,
} from "lucide-react";
import AddTeamMemberModal from "./AddMemberModal";
import { useNavigate } from "react-router-dom";


const CompanyAgent = () => {
  const [showAddMember, setshowAddMember] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All"); // 'All', 'Active', 'Inactive', 'Pending'
  const [isHeaderFilterOpen, setIsHeaderFilterOpen] = useState(false);
  const [activeActionMenu, setActiveActionMenu] = useState(null);
  const [roleFilter, setRoleFilter] = useState("All");
  const [isRoleFilterOpen, setIsRoleFilterOpen] = useState(false);
  const roleFilterRef = useRef(null); // Add this for click-outside logic
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Refs for closing on outside click
  const statusFilterRef = useRef(null);
  const actionMenuRef = useRef(null);
  const navigate = useNavigate();

  const [agents, setAgents] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@company.com",
      status: "Active",
      role: "Admin",
      chats: 15,
      lastLogin: "2 hours ago",
      image: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike@company.com",
      status: "Active",
      role: "Agent",
      chats: 8,
      lastLogin: "1 hour ago",
      image: "https://i.pravatar.cc/150?u=mike",
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma@company.com",
      status: "Inactive",
      role: "Agent",
      chats: 0,
      lastLogin: "2 days ago",
      image: "https://i.pravatar.cc/150?u=emma",
    },
    {
      id: 4,
      name: "John Smith",
      email: "john@company.com",
      status: "Pending",
      role: "Viewer",
      chats: 0,
      lastLogin: "Never",
      image: "https://i.pravatar.cc/150?u=john",
    },
  ]);

  // Effect to close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        statusFilterRef.current &&
        !statusFilterRef.current.contains(event.target)
      ) {
        setIsHeaderFilterOpen(false);
      }
      // New check for Role filter
      if (
        roleFilterRef.current &&
        !roleFilterRef.current.contains(event.target)
      ) {
        setIsRoleFilterOpen(false);
      }
      if (
        actionMenuRef.current &&
        !actionMenuRef.current.contains(event.target)
      ) {
        setActiveActionMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  // Filter Logic: Both Search and Status
  const filteredAgents = useMemo(() => {
    return agents.filter((agent) => {
      const matchesSearch =
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || agent.status === statusFilter;
      const matchesRole = roleFilter === "All" || agent.role === roleFilter; // New Role filter check

      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [searchTerm, statusFilter, roleFilter, agents]);

  const deleteAgent = (id) => {
    setAgents((prev) => prev.filter((a) => a.id !== id));
    setActiveActionMenu(null);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "Active":
        return "bg-[#DCFCE7] text-[#008236] ";
      case "Inactive":
        return "bg-[#F3F4F6] text-[#364153] ";
      case "Pending":
        return "bg-[#FEF9C2] text-[#A65F00] ";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const getRoleIcon = (role) => {
    if (role === "Admin") return <Shield size={14} />;
    if (role === "Viewer") return <Clock size={14} />;
    return <User size={14} />;
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className=" text-slate-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 mt-2">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Agents</h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage your support team and permissions
          </p>
        </div>
        <button
          className="w-full md:w-fit justify-center flex items-center gap-2 bg-[#6B69B2] hover:bg-[#5957a1] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          onClick={() => setshowAddMember(true)}
        >
          <UserPlus size={18} />
          Add Agent
        </button>
      </div>
      {/* Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Table Toolbar */}
        <div className="w-full px-4 py-2 border-b border-slate-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h2 className="text-base font-semibold text-slate-800">
              Team Members ({agents.length})
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Manage your team members and their access levels.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-3 w-full lg:w-auto">
            <div className="relative w-full lg:w-auto inline-block text-left" ref={dropdownRef}>
              {/* Trigger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full lg:w-fit flex items-center justify-between lg:justify-start gap-2 px-4 py-2 border rounded-xl text-sm font-medium transition-colors ${isOpen ? 'bg-slate-50 border-slate-300 text-slate-800' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
              >
                Deactivate <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute left-0 lg:right-0 mt-2 z-[110] w-48 bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden animate-in fade-in zoom-in duration-150 origin-top-left lg:origin-top-right">
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Deactivated Users
                  </button>

                  <button
                    className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Deleted Users
                  </button>
                </div>
              )}
            </div>

            <div className="relative flex-1 w-full lg:w-60 xl:w-80">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search agents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6B69B2]/20 focus:border-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Scroll Container - Note: Removed overflow-hidden to allow dropdowns to pop out */}
        <div className="overflow-x-auto relative">
          <table className="w-full text-left border-collapse ">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-4 w-10">
                  <input
                    type="checkbox"
                    className="rounded border-slate-300 text-[#6B69B2]"
                  />
                </th>
                <th className="px-6 py-4 text-[13px] font-semibold text-slate-500 tracking-wider">
                  Agent
                </th>

                {/* STATUS FILTER HEADER */}
                <th
                  className="px-6 py-4 text-[13px] font-semibold text-slate-500 tracking-wider relative"
                  ref={statusFilterRef}
                >
                  <button
                    onClick={() => setIsHeaderFilterOpen(!isHeaderFilterOpen)}
                    className="flex items-center gap-1 hover:text-[#6B69B2] transition-colors"
                  >
                    Status{" "}
                    <ChevronDown
                      size={14}
                      className={statusFilter !== "All" ? "text-[#6B69B2]" : ""}
                    />
                  </button>

                  {isHeaderFilterOpen && (
                    <div className="absolute left-24 top-1 z-50 w-40 bg-white border border-slate-200 overflow-hidden shadow-xl rounded-xl animate-in fade-in zoom-in duration-150">
                      {["All", "Active", "Inactive", "Pending"].map((s) => (
                        <button
                          key={s}
                          onClick={() => {
                            setStatusFilter(s);
                            setIsHeaderFilterOpen(false);
                          }}
                          className={`w-full text-left px-4 py-1 text-sm hover:bg-slate-50 ${statusFilter === s
                              ? "text-[#6B69B2] font-bold"
                              : "text-slate-600"
                            }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </th>

                <th
                  className="px-6 py-4 text-[13px] font-semibold text-slate-500 tracking-wider relative"
                  ref={roleFilterRef}
                >
                  <button
                    onClick={() => setIsRoleFilterOpen(!isRoleFilterOpen)}
                    className="flex items-center gap-1 hover:text-[#6B69B2] transition-colors"
                  >
                    Role{" "}
                    <ChevronDown
                      size={14}
                      className={roleFilter !== "All" ? "text-[#6B69B2]" : ""}
                    />
                  </button>

                  {isRoleFilterOpen && (
                    <div className="absolute left-24 top-1 z-[100] w-40 bg-white border border-slate-200 overflow-hidden shadow-xl rounded-xl animate-in fade-in zoom-in duration-150">
                      {["All", "Admin", "Agent", "Viewer"].map((r) => (
                        <button
                          key={r}
                          onClick={() => {
                            setRoleFilter(r);
                            setIsRoleFilterOpen(false);
                          }}
                          className={`w-full text-left px-4 py-1 text-sm hover:bg-slate-50 ${roleFilter === r
                              ? "text-[#6B69B2] font-bold"
                              : "text-slate-600"
                            }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  )}
                </th>
                <th className="px-6 py-4 text-[13px] font-semibold text-slate-500 tracking-wider text-center">
                  Chats
                </th>
                <th className="px-6 py-4 text-[13px] font-semibold text-slate-500 tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-4 text-[13px] font-semibold text-slate-500 tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredAgents.length > 0 ? (
                filteredAgents.map((agent, index) => (
                  <tr
                    key={agent.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        className="rounded border-slate-300 text-[#6B69B2]"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={agent.image}
                          alt=""
                          className="w-9 h-9 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-bold text-slate-800">
                            {agent.name}
                          </div>
                          <div className="text-xs text-slate-400">
                            {agent.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-0.5 rounded-md text-[12px] ${getStatusStyles(
                          agent.status
                        )}`}
                      >
                        {agent.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm ">
                        {getRoleIcon(agent.role)} {agent.role}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-2 py-0.5 bg-slate-100 rounded text-xs font-bold">
                        {agent.chats}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {agent.lastLogin}
                    </td>

                    {/* ACTIONS MENU */}
                    <td
                      className="px-6 py-4 text-right relative"
                      ref={activeActionMenu === agent.id ? actionMenuRef : null}
                    >
                      <button
                        onClick={() =>
                          setActiveActionMenu(
                            activeActionMenu === agent.id ? null : agent.id
                          )
                        }
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <MoreHorizontal size={18} />
                      </button>

                      {activeActionMenu === agent.id && (
                        <div
                          className={`
          absolute right-16 z-[100] w-48 bg-white border border-slate-200 rounded-xl overflow-hidden 
          animate-in fade-in duration-200 origin-right
          ${index >= filteredAgents.length - 2
                              ? "bottom-0 mb-2"
                              : "top-6 mt-[-10px]"
                            }
        `}
                        >
                          <button className="w-full text-left px-4 py-1 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2">
                            Edit Permission
                          </button>
                          <button className="w-full text-left px-4 py-1 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2">
                            Deactivate User
                          </button>
                          <button className="w-full text-left px-4 py-1 text-sm text-slate-600 hover:bg-slate-50 flex items-center gap-2"
                            onClick={() => navigate('/company-admin/agent/agent-activity')}>
                            View Activity
                          </button>
                          <button
                            onClick={() => deleteAgent(agent.id)}
                            className="w-full text-left px-4 py-1 text-sm  text-slate-600 hover:bg-slate-50 flex items-center gap-2"
                          > Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-slate-50 p-4 rounded-full mb-3">
                        <Search size={24} className="text-slate-300" />
                      </div>
                      <p className="text-slate-800 font-bold text-sm">
                        No items to show
                      </p>
                      <p className="text-slate-400 text-xs mt-1">
                        Try adjusting your filters or search terms to find what
                        you're looking for.
                      </p>
                      {(searchTerm ||
                        statusFilter !== "All" ||
                        roleFilter !== "All") && (
                          <button
                            onClick={() => {
                              setSearchTerm("");
                              setStatusFilter("All");
                              setRoleFilter("All");
                            }}
                            className="mt-4 text-[#6B69B2] text-xs font-bold hover:underline"
                          >
                            Clear all filters
                          </button>
                        )}
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <AddTeamMemberModal
          isOpen={showAddMember}
          onClose={() => setshowAddMember(false)}
        />
      </div>
    </div>
  );
};

export default CompanyAgent;
