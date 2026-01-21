import React from "react";
import {
  XCircle,
  AlertTriangle,
  RotateCw,
  Download,
  Eye,
  CircleCheckBig,
} from "lucide-react";

const AuditLogs = () => {
  // Dummy Data
  const logs = [
    {
      id: 1,
      action: "Login",
      user: "admin@company.com",
      resource: "Dashboard",
      ip: "192.168.1.100",
      status: "Success",
      timestamp: "2024-01-16 14:35:22",
      details: "Successful login from Chrome browser",
    },
    {
      id: 2,
      action: "Agent Created",
      user: "admin@company.com",
      resource: "Agent Management",
      ip: "192.168.1.100",
      status: "Success",
      timestamp: "2024-01-16 14:30:15",
      details: "Created new agent: john@company.com",
    },
    {
      id: 3,
      action: "Failed Login",
      user: "unknown@example.com",
      resource: "Login Page",
      ip: "203.45.67.89",
      status: "Failed",
      timestamp: "2024-01-16 13:45:33",
      details: "Invalid credentials - 3rd attempt",
    },
    {
      id: 4,
      action: "Settings Updated",
      user: "admin@company.com",
      resource: "Widget Settings",
      ip: "192.168.1.100",
      status: "Success",
      timestamp: "2024-01-16 12:20:11",
      details: "Updated widget color scheme",
    },
    {
      id: 5,
      action: "Data Export",
      user: "admin@company.com",
      resource: "Chat Data",
      ip: "192.168.1.100",
      status: "Warning",
      timestamp: "2024-01-16 11:15:44",
      details: "Exported 500 chat records",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Events" value="5" sub="Last 24 hours" />
        <StatCard
          title="Success Rate"
          value="60%"
          sub="Successful actions"
          color="text-emerald-500"
        />
        <StatCard
          title="Failed Attempts"
          value="1"
          sub="Security incidents"
          color="text-red-500"
        />
        <StatCard title="Unique IPs" value="2" sub="Different locations" />
      </div>

      {/* Main Logs Table Container */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        {/* Header Section - Responsive Flex */}
        <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1 text-slate-900">
              <Eye size={18} />
              <h3 className="text-lg font-medium ">Audit Logs</h3>
            </div>
            <p className="text-sm text-slate-500">
              Complete log of all user actions and system events.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-2 md:px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs  text-slate-700 hover:bg-slate-50 transition-colors">
              <RotateCw size={14} />
              Refresh
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-2 md:px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs  text-slate-700 hover:bg-slate-50 transition-colors">
              <Download size={14} />
              Export
            </button>
          </div>
        </div>

        {/* Table Area with Overflow */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-6 py-2 text-xs lg:text-sm font-medium text-slate-500 tracking-wider">
                  Action
                </th>
                <th className="px-6 py-2 text-xs lg:text-sm font-medium text-slate-500 tracking-wider">
                  User
                </th>
                <th className="px-6 py-2 text-xs lg:text-sm font-medium text-slate-500 tracking-wider">
                  Resource
                </th>
                <th className="px-6 py-2 text-xs lg:text-sm font-medium text-slate-500 tracking-wider">
                  IP Address
                </th>
                <th className="px-6 py-2 text-xs lg:text-sm font-medium text-slate-500 tracking-wider">
                  Status
                </th>
                <th className="px-6 py-2 text-xs lg:text-sm font-medium text-slate-500 tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-2 text-xs lg:text-sm font-medium text-slate-500 tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {logs.map((log) => (
                <tr
                  key={log.id}
                  className="font-normal text-slate-500 transition-colors"
                >
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <StatusIcon status={log.status} />
                      <span className="text-xs md:text-sm ">{log.action}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs md:text-sm  whitespace-nowrap ">
                    {log.user}
                  </td>
                  <td className="px-4 py-3 text-xs md:text-sm  whitespace-nowrap">
                    {log.resource}
                  </td>
                  <td className="px-4 py-3 text-xs md:text-sm  whitespace-nowrap font-mono">
                    {log.ip}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <StatusBadge status={log.status} />
                  </td>
                  <td className="px-4 py-3 text-xs md:text-sm  whitespace-nowrap">
                    {log.timestamp}
                  </td>
                  <td className="px-2 py-3 text-xs md:text-sm  min-w-[280px]">
                    {log.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Internal Helper Components
const StatCard = ({ title, value, sub, color = "text-slate-900" }) => (
  <div className="bg-white p-4 rounded-xl border border-slate-100 ">
    <p className="text-xs md:text-sm lg:text-base  mb-2">{title}</p>
    <div className="flex flex-col">
      <span className={`text-2xl 2xl:text-3xl font-semibold ${color}`}>
        {value}
      </span>
      <span className="text-xs text-slate-600 mt-1">{sub}</span>
    </div>
  </div>
);

const StatusIcon = ({ status }) => {
  if (status === "Success")
    return <CircleCheckBig size={16} className="text-green-500" />;
  if (status === "Failed")
    return <XCircle size={16} className="text-red-600" />;
  return <AlertTriangle size={16} className="text-amber-500" />;
};

const StatusBadge = ({ status }) => {
  const styles = {
    Success: "bg-emerald-50 text-emerald-600",
    Failed: "bg-red-50 text-red-600",
    Warning: "bg-amber-50 text-amber-600",
  };
  return (
    <span
      className={`px-2 py-0.5 rounded text-[11px] font-bold ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default AuditLogs;
