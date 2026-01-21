import React, { useState } from "react";
import {
  Info,
  Trash2,
  CreditCard,
  Crown,
  EditIcon,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CurrentPlan = ({ onAddPayment }) => {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [otherReason, setOtherReason] = useState("");
  const [cancelReason, setCancelReason] = useState(
    "I am not satisfied with service"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);

  // Function to handle the final cancellation
  const handleCancelSubscription = async () => {
    setIsCancelling(true);

    // Prepare final reason for your backend
    const finalReason = cancelReason === "Other" ? otherReason : cancelReason;

    try {
      // Replace with your actual API call
      console.log("Processing cancellation for:", finalReason);

      // Success flow
      setShowCancelModal(false); // Close the feedback modal
      setShowSuccessModal(true); // Open the success modal
    } catch (error) {
      console.error("Cancellation failed", error);
    } finally {
      setIsCancelling(false);
    }
  };

  const reasons = [
    "I am not satisfied with service",
    "I no longer need this service.",
    "The performance is too slow or unreliable.",
    "I am switching to another product.",
    "It's too complicated or difficult to use.",
    "Other",
  ];

  const usageData = [
    {
      label: "Monthly Chats",
      used: "2,847",
      total: "5,000",
      percentage: 57,
      tooltip:
        "If you exceed your 5,000 chat limit, your widget will be paused until the next billing cycle.",
    },
    { label: "Team Members", used: 12, total: 25, percentage: 48 },
    { label: "Storage", used: "1.2 GB", total: "10 GB", percentage: 12 },
  ];

  return (
    <div>
      <div className="space-y-6 ">
        {/* Usage Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 2xl:gap-6">
          {usageData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-slate-200 relative"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-base text-slate-700 font-medium">
                  {item.label}
                </span>

                {item.tooltip && (
                  /* Group for hover trigger */
                  <div className="hidden relative group lg:flex items-center">
                    <Info
                      size={18}
                      className="text-slate-500 transition-colors group-hover:text-[#6B69B2]"
                    />

                    {/* Hover Tooltip - Using your requested CSS */}
                    <div
                      className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 
                          absolute z-[200] bottom-full left-1/2 -translate-x-1/2 mb-3
                          w-[260px] sm:w-[350px] pointer-events-none"
                    >
                      <div className="bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl p-4 flex items-center gap-3">
                        {/* Tooltip Icon */}
                        <div>
                          <Info size={16} className="text-slate-500" />
                        </div>

                        {/* Tooltip Content */}
                        <div className="space-y-1">
                          <p className="text-xs text-slate-500 leading-relaxed font-medium">
                            {item.tooltip}
                          </p>
                        </div>
                      </div>

                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45" />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-end mb-2">
                <span className="text-xl font-bold text-slate-900">
                  {item.used}
                </span>
                <span className="text-sm font-medium text-slate-500">
                  {item.total}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6B69B2] rounded-full transition-all duration-1000"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <p className="mt-2 text-sm text-slate-500 font-medium">
                {item.percentage}% used
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 2xl:gap-6">
          {/* Subscription Info */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm ">
            <div className="flex items-center gap-2 text-slate-800  mb-4">
              <Crown size={18} className="text-gary-300" /> Current Plan
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <Crown size={18} className="text-amber-400 " />
                </div>
                <div>
                  <p className=" text-slate-900">
                    Professional $49/Month{" "}
                    <span className="ml-2 px-2 py-0.5 bg-indigo-50 text-primary font-medium text-xs rounded-md">
                      Active
                    </span>
                  </p>
                  <p className="text-xs text-slate-500">
                    Your subscription will renew on 2024-02-15
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50"
                  onClick={() => setShowCancelModal(true)}
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-[#6B69B2] text-white rounded-lg text-xs font-bold hover:bg-[#5a58a0]">
                  Upgrade
                </button>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm ">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-slate-800 ">
                <CreditCard size={18} className="text-slate-600" /> Payment
                Method
              </div>
              <button
                onClick={onAddPayment}
                className="text-[#6B69B2] text-xs font-bold hover:underline"
              >
                + Add New
              </button>
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-[10px] text-blue-800 shadow-sm">
                  MADA
                </div>
                <div>
                  <p className="font-bold text-slate-800">
                    **** **** **** 4242{" "}
                    <span className="ml-2 px-2 py-1 bg-[#DCFCE7] text-[#016630] text-xs rounded-lg font-normal">
                      Mada Secured
                    </span>
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Expires 12/25 • Al Rajhi Bank • Ahmed Al-Rashid
                  </p>
                </div>
              </div>
              <div className="flex gap-1 flex-normal text-gray-600">
                <button className="p-2 ">
                  <EditIcon size={16} />
                </button>
                <button className="p-2 ">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCancelModal && (
        /* Backdrop Container - Closing on click */
        <div
          onClick={() => setShowCancelModal(false)}
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
        >
          {/* Modal Box - Stopping propagation to prevent closing when clicking inside */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-[480px] rounded-xl overflow-visible p-6 sm:p-0 sm:px-8 sm:py-4 animate-in zoom-in-95 duration-200"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Are you sure?
            </h2>

            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              This will cancel your subscription at the end of the current
              billing period. You will lose access to all premium features.
            </p>

            <div className="space-y-3 mb-8">
              <label className="text-sm font-bold text-slate-700">
                Help us improve — why are you leaving?
              </label>

              {/* Custom Dropdown Trigger */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 bg-white border border-slate-200 rounded-lg text-[14px] text-slate-700 hover:border-slate-300 transition-all"
                >
                  <span>{cancelReason}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-100 shadow-xl rounded-lg z-[310] overflow-hidden">
                    {reasons.map((reason) => (
                      <button
                        key={reason}
                        onClick={() => {
                          setCancelReason(reason);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[14px] text-slate-600 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-none"
                      >
                        {reason}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dynamic Text Area - Only shows when 'Other' is selected */}
              {cancelReason === "Other" && (
                <div className="animate-in slide-in-from-top-2 duration-200">
                  <textarea
                    value={otherReason}
                    onChange={(e) => setOtherReason(e.target.value)}
                    placeholder="Share your reason..."
                    className="w-full min-h-[100px] p-4 bg-white border border-slate-200 rounded-xl text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500/50 transition-all resize-none"
                  />
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="w-full sm:w-auto px-4 py-1 bg-white border border-slate-200 rounded-lg text-sm  text-slate-600 hover:bg-slate-50 transition-all order-2 sm:order-1"
              >
                Keep Subscription
              </button>
              <button className="w-full sm:w-auto px-4 py-1 bg-[#CC0014] text-white rounded-lg text-smhover:bg-[#A30010] transition-all shadow-md order-1 sm:order-2" onClick={handleCancelSubscription}>
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>
      )}
      {showSuccessModal && (
        /* Backdrop - Closes on click */
        <div
          onClick={() => setShowSuccessModal(false)}
          className="fixed inset-0 z-[400] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
        >
          {/* Success Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-[520px] rounded-xl shadow-2xl  p-6 sm:p-0 sm:px-8 sm:py-4 animate-in zoom-in-95 duration-200"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Subscription Cancelled
            </h2>

            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Your subscription has been successfully cancelled. <br />
              You'll continue to have access to premium features until{" "}
              <span className="font-bold text-slate-800">2024-02-15</span>.
            </p>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => navigate("/pricing")}
                className="w-full sm:w-auto px-4 py-1 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-all"
              >
                Explore Plans
              </button>
              <button
                onClick={() => navigate("/company-admin")}
                className="w-full sm:w-auto px-4 py-1 bg-[#6B69B2] text-white rounded-lg text-sm  hover:bg-[#5a58a0] transition-all"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentPlan;
