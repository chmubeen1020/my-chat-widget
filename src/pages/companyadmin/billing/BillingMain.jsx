



import React, { useState } from "react";
import { CreditCard, Star, FileText } from "lucide-react";
import CurrentPlan from "./CurrentPlan";
import AddPaymentModal from "./AddPaymentModal";
import UpgradePlans from "./UpgradePlans";
import InvoiceHistory from "./InvoiceHistory";

const BillingMain = () => {
  const [activeTab, setActiveTab] = useState("Current Plan");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    { name: "Current Plan", icon: <Star size={16} /> },
    { name: "Upgrade Plans", icon: <Star size={16} /> },
    { name: "Invoices", icon: <FileText size={16} /> },
  ];

  return (
    <div className="pb-20">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mt-2 mb-4 gap-4">
        <div className="w-2/3">
          <h1 className="text-xl font-semibold text-slate-900">Billing & Subscriptions</h1>
          <p className="text-slate-500 text-sm">
            Manage your subscription, billing information, and payment history.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#6B69B2] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#5a58a0] transition-all">
          <CreditCard size={16} /> Upgrade Plan
        </button>
      </div>

      {/* Inner Navigation Tabs */}
      <div className="w-fit flex p-1 bg-white rounded-lg border border-slate-200 gap-2 mb-8 shadow-sm mx-auto md:mx-0">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 px-2 sm:px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
              activeTab === tab.name
                ? "bg-[#6B69B2] text-white shadow-md"
                : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            {tab.icon} {tab.name}
          </button>
        ))}
      </div>

      {/* Dynamic Content Area */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === "Current Plan" && (
          <CurrentPlan onAddPayment={() => setIsModalOpen(true)} />
        )}
        {activeTab === "Upgrade Plans" && (
          <UpgradePlans onAddPayment={() => setIsModalOpen(true)} />
        )}
        {activeTab === "Invoices" && (
          <InvoiceHistory onAddPayment={() => setIsModalOpen(true)} />
        )}
      </div>

      {/* Add Payment Modal */}
      <AddPaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default BillingMain;