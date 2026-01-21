import React, { useEffect, useRef, useState } from "react";
import {
  Plus,
  X,
  ChevronDown,
  Star,
  Crown,
  Zap,
  Bell,
  Clock,
  CreditCard,
  SaudiRiyal,
} from "lucide-react";
import PlanManagement from "./PlanManagement";
// import UpcomingRenewals from './UpcomingRenewals';

// --- Custom Components ---

const CustomDropdown = ({ label, options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-1.5 w-full" ref={dropdownRef}>
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm transition-all hover:border-slate-300 focus:border-[#6F75C1] outline-none"
        >
          {/* Style placeholder differently if no value is selected */}
          <span className={value ? "text-slate-700" : "text-slate-400"}>
            {value || placeholder}
          </span>
          <ChevronDown
            size={16}
            className={`text-slate-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-[120] w-full mt-1 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                className="w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-indigo-50 hover:text-[#6F75C1] transition-colors"
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main Layout ---

const BillingSubscriptions = () => {
  const [activeTab, setActiveTab] = useState("plan");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [formData, setFormData] = useState("");
  const [editData, setEditData] = useState(null);

  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Starter",
      price: 19,
      icon: <Star />,
      features: [
        "1,000 chats per month",
        "5 team members",
        "Basic AI training",
        "Email support",
        "2GB storage",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Professional",
      price: 49,
      icon: <Crown />,
      features: [
        "5,000 chats per month",
        "25 team members",
        "Advanced AI training",
        "Priority support",
        "10GB storage",
        "Custom branding",
        "Analytics dashboard",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: 149,
      icon: <Zap />,
      features: [
        "Unlimited chats",
        "Unlimited team members",
        "Advanced AI training",
        "24/7 phone support",
        "100GB storage",
        "Custom branding",
        "Advanced analytics",
        "API access",
      ],
      popular: false,
    },
  ]);

  return (
    <div className="mt-2">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-xl font-semibold text-[#111827]">
              Billing & Subscriptions
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Manage your subscription, billing information, and payment
              history.
            </p>
          </div>
          <button
            onClick={() => setIsAddOpen(true)}
            className="bg-primary/90 hover:bg-primary text-white w-full md:w-fit px-5 py-2 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <Plus size={18} /> Add Plan
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 md:w-fit mb-10">
          <button
            onClick={() => setActiveTab("plan")}
            className={`flex items-center gap-2 w-1/2 md:w-fit justify-center md:px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === "plan"
                ? "bg-primary/90 hover:bg-primary text-white "
                : "text-slate-500"
            }`}
          >
            <Star
              size={16}
              fill={activeTab === "plan" ? "white" : "transparent"}
            />{" "}
            Plan Management
          </button>
          <button
            onClick={() => setActiveTab("renewals")}
            className={`flex items-center gap-2 w-1/2 md:w-fit justify-center md:px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === "renewals"
                ? "bg-primary/90 hover:bg-primary text-white "
                : "text-slate-500"
            }`}
          >
            <Bell
              size={16}
              fill={activeTab === "renewals" ? "white" : "transparent"}
            />{" "}
            Upcoming Renewals
          </button>
        </div>

        {activeTab === "plan" ? (
          <PlanManagement plans={plans} onEdit={setEditData} />
        ) : (
          <UpcomingRenewals />
        )}

        {/* MODAL: ADD NEW PLAN (Exact UI from Image 2) */}
        {isAddOpen && (
          <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-[560px] rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
              {/* Header */}
              <div className="px-8 pt-8 pb-4 flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-medium text-[#111827]">
                    Add New Plan
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Create a new subscription plan with custom features and
                    limits
                  </p>
                </div>
                <button
                  onClick={() => setIsAddOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form className="px-8 pb-4 space-y-4 overflow-y-auto max-h-[75vh]">
                {/* Top Row: Plan Name & Monthly Price */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">
                      Plan Name
                    </label>
                    <input
                      className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm  outline-none transition-all"
                      placeholder="e.g., Starter, Professional, Enter"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      Monthly Price (¥)
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Second Row: Yearly Price & Most Popular */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 items-end">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">
                      Yearly Price (¥)
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none"
                      placeholder="0"
                    />
                  </div>
                  <div className="flex items-center gap-3 pb-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-xs font-medium text-slate-600">
                      Mark as "Most Popular"
                    </span>
                  </div>
                </div>

                {/* Core Features Section */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-slate-800 ">
                    Core Features
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-semibold text-slate-700">
                        Chats per Month
                      </label>
                      <input
                        className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm outline-none"
                        placeholder="e.g., 1,000 chats per month or U"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">
                        Team Members
                      </label>
                      <input
                        className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm outline-none"
                        placeholder="e.g., 5 team members or Unlimit"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                    <CustomDropdown
                      label="AI Training"
                      options={[
                        "Basic AI training",
                        "Advanced AI training",
                        "Full AI training",
                      ]}
                      value={formData.aiTraining} // Manage this in your parent state
                      onChange={(val) =>
                        setFormData({ ...formData, aiTraining: val })
                      }
                      placeholder="Select AI training level"
                    />

                    <CustomDropdown
                      label="Support Type"
                      options={[
                        "Email support",
                        "Priority support",
                        "24/7 Phone support",
                      ]}
                      value={formData.supportType} // Manage this in your parent state
                      onChange={(val) =>
                        setFormData({ ...formData, supportType: val })
                      }
                      placeholder="Select support type"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">
                      Storage
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm outline-none"
                      placeholder="e.g., 2GB storage, 10GB storage"
                    />
                  </div>
                </div>

                {/* Additional Features Checkbox Grid */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-slate-800 ">
                    Additional Features
                  </h3>
                  <div className="grid grid-cols-2 gap-y-4">
                    <Checkbox label="Custom branding" />
                    <Checkbox label="Analytics dashboard" defaultChecked />
                    <Checkbox label="Advanced analytics" defaultChecked />
                    <Checkbox label="API access" />
                    <Checkbox label="Custom integrations" />
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col md:flex-row gap-3 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsAddOpen(false)}
                    className="flex-1 py-2 px-4 border border-slate-200 rounded-xl font-medium text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 px-4 bg-[#6F75C1] text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#5D63AB] "
                  >
                    <Plus size={18} />
                    Create Plan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {editData && (
          <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-[640px] rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
              {/* Header */}
              <div className="px-8 pt-4 pb-2 flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-[#111827]">
                    Edit Plan
                  </h2>
                  <p className="text-sm text-slate-500 ">
                    Create a new subscription plan
                  </p>
                </div>
                <button
                  onClick={() => setEditData(null)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="px-8 pb-6 space-y-2 overflow-y-auto max-h-[85vh]">
                {/* Row 1: Plan Name & Price */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      Plan Name
                    </label>
                    <input
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm"
                      defaultValue="Professional Plan"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      Price
                    </label>
                    <input
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm"
                      defaultValue="₼49"
                    />
                  </div>
                </div>

                {/* Row 2: Agent Limit & Monthly Chats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      Agent Limit
                    </label>
                    <input
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm"
                      defaultValue="5"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      Monthly Chats
                    </label>
                    <input
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm"
                      defaultValue="3"
                    />
                  </div>
                </div>

                {/* Row 3: Storage & AI Credits */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      Storage (GB)
                    </label>
                    <input
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm"
                      defaultValue="10GB"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">
                      AI Credits
                    </label>
                    <input
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm"
                      defaultValue="10"
                    />
                  </div>
                </div>

                {/* Description & Internal Notes */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm min-h-[80px] resize-none"
                    placeholder="Plan description..."
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">
                    Internal Notes
                  </label>
                  <input
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm"
                    placeholder='e.g. "Ramadan offer – ends June 30"'
                  />
                </div>

                {/* Toggles Section */}
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        Featured Plan toggle
                      </p>
                      <p className="text-xs text-slate-400">
                        Mark as "Most Popular".
                      </p>
                    </div>
                    <div className="w-10 h-5 bg-[#7779C3] rounded-full flex items-center justify-end px-1 cursor-pointer">
                      <div className="w-3.5 h-3.5 bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        Show on Landing Page
                      </p>
                      <p className="text-xs text-slate-400">
                        Hide or display plans.
                      </p>
                    </div>
                    <div className="w-10 h-5 bg-[#7779C3] rounded-full flex items-center justify-end px-1 cursor-pointer">
                      <div className="w-3.5 h-3.5 bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        Apply Discount toggle
                      </p>
                      <p className="text-xs text-slate-400">
                        With fields for old price, discount %, and valid until
                      </p>
                    </div>
                    <div className="w-10 h-5 bg-[#7779C3] rounded-full flex items-center justify-end px-1 cursor-pointer">
                      <div className="w-3.5 h-3.5 bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                </div>

                {/* Billing Cycle Checkboxes */}
                <div className="space-y-3 pt-2">
                  <p className="text-sm font-bold text-slate-800">
                    Billing Cycle
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 rounded border-slate-300 text-[#7779C3] focus:ring-[#7779C3]"
                      />
                      Monthly
                    </label>
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 rounded border-slate-300 text-[#7779C3] focus:ring-[#7779C3]"
                      />
                      Yearly
                    </label>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col md:flex-row justify-end gap-3 pt-4">
                  <button
                    onClick={() => setEditData(null)}
                    className="px-6 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="px-6 py-2 bg-[#7779C3] text-white rounded-xl  hover:bg-[#6567AD] transition-all ">
                    Update Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Plan Management Grid (Image 1) ---

// --- Upcoming Renewals Table (Image 4) ---

const UpcomingRenewals = () => {
  const data = [
    {
      company: "TechCorp Solutions",
      plan: "Enterprise",
      amount: 49,
      date: "1/15/2024",
      status: "pending",
    },
    {
      company: "StartupXYZ",
      plan: "Pro",
      amount: 149,
      date: "1/16/2024",
      status: "overdue",
    },
    {
      company: "InnovateInc",
      plan: "Enterprise",
      amount: 49,
      date: "1/18/2024",
      status: "pending",
    },
    {
      company: "WebFlow Agency",
      plan: "Pro",
      amount: 199,
      date: "1/20/2024",
      status: "pending",
    },
    {
      company: "GreenTech Ltd",
      plan: "Pro",
      amount: 149,
      date: "1/22/2024",
      status: "failed",
    },
  ];

  return (
    <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden p-6">
      <div className="mb-8">
        <h3 className="text-[20px] font-medium text-[#111827]">
          Upcoming Renewals
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          Subscriptions requiring attention in the next 30 days
        </p>
      </div>

      <div className="overflow-x-auto ">
        <table className="w-[800px] lg:w-full ">
          <thead>
            <tr className="text-left text-sm 2xl:text-base font-medium text-slate-600 border-b border-slate-50">
              <th className="pb-4 font-normal">Company</th>
              <th className="pb-4 font-normal">Plan</th>
              <th className="pb-4 font-normal text-center">Amount</th>
              <th className="pb-4 font-normal text-center">Renewal Date</th>
              <th className="pb-4 font-normal text-right">Status</th>
              <th className="pb-4 font-normal text-end">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.map((row, i) => (
              <tr key={i} className="group transition-colors">
                <td className="py-5 text-sm font-normal text-[#111827]">
                  {row.company}
                </td>
                <td className="py-5">
                  <span className="px-3 py-1 bg-[#F1F5F9] text-[#475569] rounded-full text-xs font-semibold">
                    {row.plan}
                  </span>
                </td>
                <td className="py-5 flex items-center justify-center gap-2 text-center font-semibold text-[#111827]">
                  <SaudiRiyal size={16} /> {row.amount}
                </td>
                <td className="py-5 text-center text-sm font-medium text-slate-600">
                  {row.date}
                </td>
                <td className="py-5 text-right">
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-bold ${
                      row.status === "pending"
                        ? "bg-[#E2E8F0] text-[#64748B] opacity-70"
                        : row.status === "failed"
                        ? "bg-[#EF4444] text-white"
                        : "bg-[#F0F7FF] text-[#475569]" // overdue style
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-5 ">
                  <div className="flex items-center justify-end gap-4 pr-2">
                    {row.status === "overdue" && (
                      <button className="px-3 py-1.5 border border-slate-200 rounded-md text-xs  flex items-center gap-2 text-slate-700 hover:bg-slate-50">
                        <Clock size={14} className="text-slate-500" /> Remind
                      </button>
                    )}
                    {row.status === "failed" && (
                      <button className="px-3 py-1.5 border border-slate-200 rounded-md text-xs flex items-center gap-2 text-slate-700 hover:bg-slate-50">
                        <CreditCard size={14} className="text-slate-500" />{" "}
                        Retry
                      </button>
                    )}
                    <button className="text-sm font-medium text-slate-500 hover:text-slate-800">
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Checkbox = ({ label, defaultChecked = false }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div className="relative flex items-center justify-center">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="peer w-5 h-5 rounded border-slate-300 text-[#6F75C1] focus:ring-[#6F75C1] transition-all"
      />
    </div>
    <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
      {label}
    </span>
  </label>
);

export default BillingSubscriptions;
