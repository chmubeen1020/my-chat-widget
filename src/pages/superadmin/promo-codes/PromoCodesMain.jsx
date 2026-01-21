import React, { useState } from "react";
import {
  Plus,
  Info,
  Clock,
  Zap,
  TrendingUp,
  Search,
  CheckCircle,
} from "lucide-react";
import ActiveCodesTab from "./ActiveCodesTab";
import CreatePromoModal from "./CreatePromoModals";
import ExpiredInActive from "./ExpiredInActive";
import AllCodes from "./AllCodes";
import Analytics from "./Analytics";

const PromoCodesMain = () => {
  const [activeTab, setActiveTab] = useState("Active Codes");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = ["Active Codes", "Expired/Inactive", "All Codes", "Analytics"];

  const stats = [
    {
      label: "Active Codes",
      value: "1",
      icon: <CheckCircle size={18} className="text-primary" />,
      color: "border-blue-500",
      bgColor: "bg-blue-50/50",
      tooltipHeading: "Active Codes",
      tooltipDesc:
        "Number of currently active discount codes available to customers.",
    },
    {
      label: "Expired/Inactive",
      value: "5",
      icon: <Clock size={18} className="text-purple-400" />,
      color: "border-cyan-500",
      bgColor: "bg-cyan-50/50",
      tooltipHeading: "Expired/Inactive",
      tooltipDesc:
        "Total number of discount codes that have expired or been deactivated.",
    },
    {
      label: "Total Uses",
      value: "516",
      icon: <Zap size={18} className="text-amber-400" />,
      color: "border-purple-500",
      bgColor: "bg-purple-50/50",
      tooltipHeading: "Total Uses",
      tooltipDesc:
        "Cumulative count of all times discount codes have been redeemed.",
    },
    {
      label: "Total Discounts",
      value: "$595",
      icon: <TrendingUp size={18} className="text-red-600" />,
      color: "border-emerald-500",
      bgColor: "bg-emerald-50/50",
      tooltipHeading: "Total Discounts",
      tooltipDesc:
        "Total dollar value of all discounts applied through promo codes.",
    },
  ];

  return (
    <div className="mt-2">
      <div>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-xl font-semibold">Promo Codes</h1>
            <p className="text-sm text-slate-500">
              Create and manage discount codes for tenants
            </p>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
          >
            <Plus size={18} />
            Create Promo Code
          </button>
        </div>

        {/* Stats Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            // Detect if item is on the right for different screen sizes
            const isRightSM = (index + 1) % 2 === 0; // Every 2nd item
            const isRightXL = (index + 1) % 4 === 0; // Every 4th item

            return (
              <div
                key={index}
                className="bg-primary/10 p-6 rounded-2xl shadow-md flex flex-col border-l-[6px] border-primary text-sm lg:text-base"
              >
                <div className="relative flex justify-between">
                  <div className="flex items-center justify-start gap-2">
                    <h3 className="lg:text-lg font-semibold text-gray-700 max-w-[180px] truncate">
                      {stat.label}
                    </h3>
                    <div className="relative group">
                      <Info size={16} className="text-primary cursor-help" />
                      <div className="hidden absolute z-50 group-hover:block transition-all">
                        <CustomTooltip
                          heading={stat.tooltipHeading}
                          description={stat.tooltipDesc}
                          // Pass both states to the tooltip
                          isRightSM={isRightSM}
                          isRightXL={isRightXL}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-6 w-6 lg:h-8 lg:w-8 flex justify-center items-center rounded-md p-1">
                    {stat.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-medium text-primary">
                    {stat.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div className="flex bg-white border border-gray-200 p-1 rounded-lg w-full md:w-auto overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-1/4 md:w-fit text-center px-2 md:px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all truncate ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search promo codes..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Nested Content Rendering */}
        <div>
          {activeTab === "Active Codes" && (
            <ActiveCodesTab searchQuery={searchQuery} />
          )}
          {activeTab === "Expired/Inactive" && (
            <ExpiredInActive searchQuery={searchQuery} />
          )}
          {activeTab === "All Codes" && <AllCodes searchQuery={searchQuery} />}
          {activeTab === "Analytics" && <Analytics searchQuery={searchQuery} />}
        </div>
      </div>
      <CreatePromoModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
};

export default PromoCodesMain;

const CustomTooltip = ({ heading, description, isRightSM, isRightXL }) => {
  return (
    <div
      className={`absolute top-2 mt-3 z-50 w-[280px] sm:w-[320px] transition-all
        /* Default: Shifted slightly left */
        left-[-120px] 
        
        /* Tablet (sm): If it's the 2nd item, align to right */
        ${isRightSM ? "sm:left-auto sm:right-0" : ""}
        
        /* Desktop (xl): If it's the 4th item, align to right. 
           If it's the 2nd/6th (which was RightSM), reset to left if not RightXL */
        ${isRightXL ? "xl:left-auto xl:right-0" : "xl:right-auto"}
      `}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4">
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-[10px] font-black">
              i
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">{heading}</h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              {description}
            </p>
          </div>
        </div>

        {/* Optional: Add a little arrow pointer */}
      </div>
    </div>
  );
};
