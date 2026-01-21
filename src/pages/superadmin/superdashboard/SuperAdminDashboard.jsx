import React from "react";
import {
  Info,
  Users,
  Building2,
  AlertTriangle,
  DollarSign,
  ChartColumnDecreasing,
  CreditCard,
} from "lucide-react"; // Lucide icons
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import MontlyGrowth from "./MontlyGrowth";
import { ExternalLink } from "lucide-react";

const SuperAdminDashboard = () => {
  const performanceData = [
    {
      title: "Total Tenants",
      Color: "text-primary",
      desc: "+12 from last month",
      number: 247,
      icon: <Building2 size={18} className="text-primary" />,
      tooltipHeading: "Total Tenants",
      tooltipDesc:
        "Number of organizations or businesses currently using the platform.",
    },
    {
      title: "Active Subscriptions",
      Color: "text-primary",
      number: 234,
      desc: "95.1% retention rate",
      icon: <Users size={18} className="text-purple-300" />,
      tooltipHeading: "Active Subscriptions",
      tooltipDesc:
        "Total number of active paid subscriptions maintained by all tenants.",
    },
    {
      title: "Expiring Plans",
      Color: "text-primary",
      number: 24,
      desc: "Expiring in 30 days",
      icon: <AlertTriangle size={18} className="text-amber-500" />,
      tooltipHeading: "Expiring Plans",
      tooltipDesc:
        "Number of active plans set to expire within the next 30 days.",
    },
    {
      title: "Monthly Revenue",
      Color: "text-red-500",
      number: "$94k",
      desc: "+14.7% from last month",
      icon: <DollarSign size={18} className="text-[#10B981]" />,
      tooltipHeading: "Monthly Revenue",
      tooltipDesc:
        "Total revenue generated from all tenant subscriptions during the selected month.",
    },
  ];
 

  const tenants = [
    {
      name: "Acme Corp",
      email: "admin@acme.com",
      price: "$299/mo",
      agents: 25,
      status: "Active",
    },
    {
      name: "TechStart Inc",
      email: "admin@techstart.com",
      price: "$99/mo",
      agents: 8,
      status: "Active",
    },
    {
      name: "Digital Solutions",
      email: "admin@digital.com",
      price: "$0/mo",
      agents: 3,
      status: "Trial",
    },
    {
      name: "Global Services",
      email: "admin@global.com",
      price: "$0/mo",
      agents: 2,
      status: "Active",
    },
  ];

  const data = [
    { name: "Free", value: 45, color: "#6D6EAB" }, // Purple
    { name: "Pro", value: 35, color: "#62A9B1" }, // Teal
    { name: "Enterprise", value: 20, color: "#4A6781" }, // Muted Blue
  ];
  const alerts = [
    {
      id: 1,
      type: "subscription",
      title: "18 subscriptions expiring soon",
      desc: "Require renewal within 30 days",
    },
    {
      id: 2,
      type: "payment",
      title: "5 failed payment attempts",
      desc: "Contact tenants for payment update",
    },
  ];

  const events = [
    {
      id: 1,
      status: "upcoming",
      title: "Scheduled maintenance",
      time: "Tomorrow 2:00 AM - 4:00 AM UTC",
    },
    {
      id: 2,
      status: "done",
      title: "Feature release v2.4",
      time: "Next week - enhanced AI capabilities",
    },
  ];

  return (
    <div className="space-y-4 pb-4 md:pb-0 pt-2">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Agent Dashboard</h2>
          <p className="text-sm text-[#4A5565]">
            Monitor your chat performance and manage customer interactions
          </p>
        </div>
        <div className=""></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-4">
        {performanceData.map((data, index) => {
          // Check if it's the 4th, 8th, etc. element (the right-most in 4-col grid)
          const isLastInRow = (index + 1) % 4 === 0;

          return (
            <div
              key={index}
              className="bg-primary/10 p-6 rounded-2xl shadow-md flex flex-col border-l-[6px] border-primary text-sm lg:text-base"
            >
              <div className="relative flex justify-between">
                <div className="flex items-center justify-start gap-2">
                  <h3 className="lg:text-lg font-semibold text-gray-700 max-w-[180px] truncate">
                    {data.title}
                  </h3>

                  <div className="group relative">
                    {" "}
                    {/* Added relative here */}
                    <Info size={16} className="text-primary " />
                    <div className="hidden absolute z-50 group-hover:block">
                      <CustomTooltip
                        heading={data.tooltipHeading}
                        description={data.tooltipDesc}
                        isLast={isLastInRow} // Pass the detection here
                      />
                    </div>
                  </div>
                </div>

                <div className="h-6 w-6 lg:h-8 lg:w-8 flex justify-center items-center rounded-md p-1">
                  {data.icon}
                </div>
              </div>

              {/* ... rest of your card ... */}
              <div className="space-y-2 mt-1">
                <p className={`text-2xl font-medium ${data.Color}`}>
                  {data.number}
                </p>
                <p className="text-gray-500 text-sm">{data.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-4">
        <div className="w-full border border-gray-200 px-2 xl:px-4 py-2 rounded-xl flex justify-between items-center text-sm xl:text-base">
          <div className="w-full flex justify-start items-center gap-4">
            <span className="h-6 w-6 lg:h-8 lg:w-8 p-1 flex justify-center items-center rounded-full bg-primary/10 text-primary">
              <Building2 size={18} />
            </span>
            <div className="text-left">
              <p>Start New Chat</p>
              <p className="text-sm md:text-xs xl:text-base text-[#717182]">
                Invite and manage team members
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border border-gray-200 px-2 xl:px-4 py-2 rounded-xl flex justify-between items-center text-sm xl:text-base">
          <div className="w-full flex justify-start items-center gap-4">
            <span className="h-6 w-6 lg:h-8 lg:w-8 p-1 flex justify-center items-center rounded-full bg-[#F0FDF4] text-[#00A63E]">
              <ChartColumnDecreasing size={20} />
            </span>
            <div className="text-left">
              <p>View Queue</p>
              <p className="text-sm md:text-xs  xl:text-base text-[#717182]">
                Monitor and manage active chats
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border border-gray-200 px-2 xl:px-4 py-2 rounded-xl flex justify-between items-center text-sm xl:text-base">
          <div className="w-full flex justify-start items-center gap-4">
            <span className="h-6 w-6 lg:h-8 lg:w-8 p-1 flex justify-center items-center rounded-full bg-[#FAF5FF] text-primary">
              <CreditCard size={20} />
            </span>
            <div className="text-left">
              <p className="text-black">Break Time</p>
              <p className="text-sm md:text-xs xl:text-base text-[#717182]">
                Set and track break schedules
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MontlyGrowth />
      </div>
      <div>
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Tenants Section */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Recent Tenants
                </h2>
                <p className="text-sm text-gray-400">
                  Latest company registrations
                </p>
              </div>
              <button className="flex items-center gap-1 text-xs font-medium text-gray-500 border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors">
                View All <ExternalLink size={14} />
              </button>
            </div>

            <div className="space-y-3">
              {tenants.map((tenant, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      {tenant.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">
                        {tenant.name}
                      </h3>
                      <p className="text-xs text-gray-400">{tenant.email}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider ${
                        tenant.status === "Trial"
                          ? "bg-blue-50 text-blue-500"
                          : "bg-teal-50 text-teal-500"
                      }`}
                    >
                      {tenant.status}
                    </span>
                    <p className="text-xs text-gray-400">
                      <span className="font-medium text-gray-600">
                        {tenant.price}
                      </span>{" "}
                      • {tenant.agents} agents
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Plan Distribution Section */}
          <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col w-full">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-medium text-slate-900">
                Plan Distribution
              </h3>
              <p className="text-sm text-slate-400">
                Current subscription breakdown
              </p>
            </div>

            {/* Chart Section */}
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={0}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="white"
                    strokeWidth={2}
                    startAngle={90}
                    endAngle={450}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend Section */}
            <div className="space-y-4 mt-2">
              {data.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-slate-600 font-medium">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-slate-900 font-semibold">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        {/* Critical Alerts Container */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6">
            Critical Alerts
          </h3>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50/30 border border-blue-50"
              >
                <div>
                  <p className="text-[15px] font-medium text-slate-700">
                    {alert.title}
                  </p>
                  <p className="text-sm text-slate-400 mt-0.5">{alert.desc}</p>
                </div>
                <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-50 transition-colors">
                  {alert.type === "subscription" ? "View" : "Review"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Container */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6">
            Upcoming Events
          </h3>
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50/30 border border-blue-50"
              >
                <div>
                  <p className="text-[15px] font-medium text-slate-700">
                    {event.title}
                  </p>
                  <p className="text-sm text-slate-400 mt-0.5">{event.time}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${
                    event.status === "upcoming"
                      ? "bg-white text-slate-500 border-slate-200"
                      : "bg-indigo-100 text-indigo-600 border-indigo-200"
                  }`}
                >
                  {event.status === "upcoming" ? "Scheduled" : "Release"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;

const CustomTooltip = ({ heading, description, isLast }) => {
  return (
    <div
      className={`absolute top-2 mt-3 z-50 w-[300px] sm:w-[330px] 
      ${isLast ? "xl:right-0 xl:left-auto left-[-100px] lg:left-[-160px]" : "left-[-100px] lg:left-[-160px]"}
    `}
    >
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 px-2 py-2">
        <div className="flex items-center gap-4">
          <div>
            <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs font-bold">
              i
            </div>
          </div>
          <div>
            <h4 className=" font-semibold text-gray-900">{heading}</h4>
            <p className="text-gray-600 leading-relaxed text-[14px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
