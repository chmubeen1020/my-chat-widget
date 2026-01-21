import React from "react";
import {
  Info,
  TrendingUp,
  Users,
  Star,
  Building2,
  DollarSign,
} from "lucide-react"; // Lucide icons
import PlatformGrowthGraph from "./PlatformGrowthGraph";

const PaltformReports = () => {
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
      title: "Monthly Revenue",
      Color: "text-purple-400",
      number: "$94k",
      desc: "+14.7% from last month",
      icon: <DollarSign size={18} className="text-purple-400" />,
      tooltipHeading: "Monthly Revenue",
      tooltipDesc:
        "Total revenue generated from all tenant subscriptions during the selected month.",
    },
    {
      title: "Active Users",
      Color: "text-amber-500",
      number: "28,900",
      desc: "Daily Active users",
      icon: <Users size={18} className="text-amber-500" />,
      tooltipHeading: "Active Users",
      tooltipDesc:
        "Total number of active paid subscriptions maintained by all tenants.",
    },
    {
      title: "Growth Rate",
      Color: "text-green-500",
      number: "12.5%",
      desc: "Monthly Growth",
      icon: <TrendingUp size={18} className="text-green-500" />,
      tooltipHeading: "Expiring Plans",
      tooltipDesc:
        "Number of active plans set to expire within the next 30 days.",
    },
  ];

  const tenants = [
    {
      name: "Acme Corp",
      email: "admin@acme.com",
      price: "$299/mon",
      agents: 25,
      chats: "1446",
      status: "Active",
    },
    {
      name: "TechStart Inc",
      email: "admin@techstart.com",
      price: "$99/mon",
      chats: "144",
      agents: 8,
      status: "Active",
    },
    {
      name: "Digital Solutions",
      email: "admin@digital.com",
      chats: "29",
      price: "$0/mon",
      agents: 3,
      status: "Trial",
    },
    {
      name: "Global Services",
      email: "admin@global.com",
      chats: "907",
      price: "$0/mon",
      agents: 2,
      status: "Active",
    },
  ];

  const data = [
    { name: "Free", value: 45, color: "#6D6EAB" }, // Purple
    { name: "Pro", value: 35, color: "#62A9B1" }, // Teal
    { name: "Enterprise", value: 20, color: "#4A6781" }, // Muted Blue
  ];

  return (
    <div className="space-y-4 pb-4 md:pb-0 mt-2">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Platform Reports</h2>
          <p className="text-sm text-[#4A5565]">
            Comprehensive analytics and insights
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <PlatformGrowthGraph />
        </div>
        <div className=" bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Plan Performance
              </h2>
              <p className="text-sm text-gray-400">
                Revenue and retention by plan
              </p>
            </div>
            <button className="flex items-center gap-1 text-xs font-semibold text-gray-500 border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors">
              Monthly
            </button>
          </div>
          <div className="space-y-2">
            <div className="p-2 border border-gray-200 rounded-lg flex items-center justify-between">
              <div>
                <p className="font-medium">Enterprise</p>
                <p className="text-sm text-gray-500">38 Tenants</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">$533,690</p>
                <p className="text-sm text-red-400">88% retentions</p>
              </div>
            </div>
            <div className="p-2 border border-gray-200 rounded-lg flex items-center justify-between">
              <div>
                <p className="font-medium">Enterprise</p>
                <p className="text-sm text-gray-500">38 Tenants</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">$533,690</p>
                <p className="text-sm text-red-400">88% retentions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recent Tenants Section */}
      <div className=" bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Tenants
            </h2>
            <p className="text-sm text-gray-400">
              Latest company registrations
            </p>
          </div>
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
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <p className="text-xs text-gray-500">
                      {tenant.chats} Chats
                    </p>{" "}
                    <span className="flex items-center gap-1 text-gray-500">
                      <Star size={12} className="fill-gray-500" />
                      4.5
                    </span>{" "}
                    {tenant.agents} agents
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <p className="text-xs text-gray-400">
                  <span className="font-medium text-gray-600">
                    {tenant.price}
                  </span>
                </p>
                <button className="flex items-center gap-1 text-xs font-semibold text-gray-500 border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaltformReports;

const CustomTooltip = ({ heading, description, isLast }) => {
  return (
    <div
      className={`absolute top-2 mt-3 z-50 w-[300px] sm:w-[330px] 
      ${
        isLast
          ? "xl:right-0 xl:left-auto left-[-100px] lg:left-[-160px]"
          : "left-[-100px] lg:left-[-160px]"
      }
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
