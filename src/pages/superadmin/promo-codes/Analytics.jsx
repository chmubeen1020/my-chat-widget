import React from "react";

const topPerformings = [
  {
    id: 1,
    CodeName: "Partner10",
    desc: "Partner referral discount",
    totalUsers: 234,
    utilization: "23%",
  },
  {
    id: 2,
    CodeName: "Black-Panther",
    desc: "Partner referral discount",
    totalUsers: 84,
    utilization: "63%",
  },
  {
    id: 3,
    CodeName: "DiscountPro",
    desc: "Partner referral discount",
    totalUsers: 564,
    utilization: "74%",
  },
  {
    id: 4,
    CodeName: "Black-Panther",
    desc: "Partner referral discount",
    totalUsers: 48,
    utilization: "43%",
  },
  {
    id: 5,
    CodeName: "Black-Panther",
    desc: "Partner referral discount",
    totalUsers: 54,
    utilization: "90%",
  },
];
const recentUsages = [
  {
    company: "Acme Corp",
    desc: "WELCOME2024",
    value: "-$50",
    date: "Oct 5, 2024",
  },
  {
    company: "TechStart Inc",
    desc: "ENTERPRISE50",
    value: "-$30",
    date: "Dec 18, 2024",
  },
  {
    company: "Enterprise Co",
    desc: "WELCOME2024",
    value: "-$500",
    date: "Nov 5, 2024",
  },
  {
    company: "Startup Labs",
    desc: "ENTERPRISE50",
    value: "$80",
    date: "Oct 5, 2024",
  },
];
const Analytics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-lg xl:text-xl font-semibold">
          Top Performing Codes
        </h2>
        <div className="space-y-2 mt-4">
          {topPerformings.map((data, index) => (
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="bg-gray-300 w-8 h-8 flex justify-center items-center font-medium rounded-full">
                  #{data.id}
                </div>
                <div>
                  <p className="uppercase font-medium">{data.CodeName}</p>
                  <p className="text-sm text-gray-400">{data.desc}</p>
                </div>
              </div>
              <div>
                <p className="text-black font-medium">
                  {data.totalUsers} users
                </p>
                <p className="text-gray-500 text-sm">
                  {data.utilization} utilized
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-lg xl:text-xl font-semibold">Recent Usage</h2>
        <div className="space-y-2 mt-4">
          {recentUsages.map((data, index) => (
            <div className="flex justify-between items-center">
                <div>
                  <p className="text-black">{data.company}</p>
                  <p className="text-sm text-gray-400">Used {data.desc}</p>
                </div>
              <div className="text-right">
                <p
                  className={`font-medium ${
                    parseFloat(data.value) >= 0
                      ? "text-emerald-500" // Green for plus or zero
                      : "text-rose-500" // Red for minus
                  }`}
                >
                  {data.value}
                </p>
                <p className="text-gray-500 text-sm">{data.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
