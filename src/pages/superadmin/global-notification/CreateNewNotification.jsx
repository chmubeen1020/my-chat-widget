import React, { useState, useRef, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  ChevronDown,
  Send,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CreateNotification = () => {
  const [formData, setFormData] = useState({
    type: "",
    priority: "",
    title: "",
    message: "",
    recipients: "",
    sendType: "Send Now",
    date: "",
    inApp: true,
    email: true,
    sms: false,
  });

  // --- Helper: Custom Dropdown ---
  const CustomDropdown = ({ label, options, value, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target))
          setIsOpen(false);
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div className="w-full" ref={dropdownRef}>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between bg-gray-50 border border-gray-200 py-2 px-4 rounded-lg focus:outline-none outline-none  transition-all"
          >
            <span className={value ? "text-gray-900" : "text-gray-400"}>
              {value || placeholder}
            </span>
            <ChevronDown
              className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
              size={18}
            />
          </button>

          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {options.map((opt) => (
                <div
                  key={opt}
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- Helper: Custom Date Picker ---
  const CustomDatePicker = ({ label, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [viewDate, setViewDate] = useState(new Date());
    const containerRef = useRef(null);

    const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Calendar Logic
    const startOfMonth = new Date(
      viewDate.getFullYear(),
      viewDate.getMonth(),
      1,
    );
    const endOfMonth = new Date(
      viewDate.getFullYear(),
      viewDate.getMonth() + 1,
      0,
    );
    const startDay = startOfMonth.getDay();
    const totalDays = endOfMonth.getDate();

    const prevMonth = () =>
      setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1));
    const nextMonth = () =>
      setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1));

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target))
          setIsOpen(false);
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isSelected = (day) => {
      return (
        value &&
        value.getDate() === day &&
        value.getMonth() === viewDate.getMonth() &&
        value.getFullYear() === viewDate.getFullYear()
      );
    };

    return (
      <div className="w-full relative" ref={containerRef}>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-gray-50 border border-gray-200 py-2 px-4 rounded-lg cursor-pointer focus-within:ring-1 focus-within:ring-[#6366F1]"
        >
          <span className={value ? "text-gray-900" : "text-gray-400"}>
            {value ? value.toLocaleDateString() : "mm/dd/yyyy"}
          </span>
          <CalendarIcon size={18} className="text-gray-400" />
        </div>

        {isOpen && (
          <div className="absolute z-30 mt-2 p-4 bg-white border border-gray-200 rounded-xl shadow-xl w-64 right-0 md:left-0">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevMonth}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="font-semibold text-sm">
                {months[viewDate.getMonth()]} {viewDate.getFullYear()}
              </span>
              <button
                onClick={nextMonth}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {daysOfWeek.map((d) => (
                <span
                  key={d}
                  className="text-[10px] font-bold text-gray-400 uppercase"
                >
                  {d}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {[...Array(startDay)].map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {[...Array(totalDays)].map((_, i) => {
                const day = i + 1;
                return (
                  <button
                    key={day}
                    onClick={() => {
                      onChange(
                        new Date(
                          viewDate.getFullYear(),
                          viewDate.getMonth(),
                          day,
                        ),
                      );
                      setIsOpen(false);
                    }}
                    className={`h-8 w-8 text-xs rounded-lg transition-colors flex items-center justify-center
                      ${isSelected(day) ? "bg-[#6366F1] text-white" : "hover:bg-indigo-50 text-gray-700"}`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  // --- Helper: Toggle Switch ---
  const Toggle = ({ active, onToggle, label, description }) => (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ${active ? "bg-primary" : "bg-gray-300"}`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${active ? "translate-x-5" : "translate-x-0"}`}
        />
      </button>
    </div>
  );

  return (
    <div className="pt-2">
        <div className="flex items-center gap-6 mb-4">
          <button>
            <ArrowLeft size={20} />
          </button>
          <div className="">
          <h1 className="text-xl font-medium text-gray-900 tracking-tight">
            Create System Notification
          </h1>
        <p className="text-sm text-gray-500">
          Send a notification to tenants across the platform
        </p>
          </div>
        </div>
      <div className=" bg-white rounded-xl border border-gray-100 shadow-sm py-4">
        {/* Header */}

        <div className="px-6 pb-6 space-y-4">
          <section>
            <h2 className="text-lg font-semibold text-gray-800">
              Notification Details
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Configure and send platform-wide notifications
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <CustomDropdown
                label="Notification Type"
                placeholder="Select type"
                options={["Alert", "Update", "Maintenance", "Billing"]}
                value={formData.type}
                onChange={(v) => setFormData({ ...formData, type: v })}
              />
              <CustomDropdown
                label="Priority"
                placeholder="Select priority"
                options={["Low", "Medium", "High", "Critical"]}
                value={formData.priority}
                onChange={(v) => setFormData({ ...formData, priority: v })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                placeholder="Notification title"
                className="w-full bg-gray-50 border border-gray-200 py-2 px-4 rounded-lg focus:outline-none  text-gray-900"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="3"
                placeholder="Notification message..."
                className="w-full bg-gray-50 border border-gray-200 py-2 px-4 rounded-lg focus:outline-none  text-gray-900"
              />
            </div>

            <div className="mb-4">
              <CustomDropdown
                label="Recipients"
                placeholder="Select recipients"
                options={[
                  "All Tenants",
                  "Admin Only",
                  "Trial Users",
                  "Pro Users",
                ]}
                value={formData.recipients}
                onChange={(v) => setFormData({ ...formData, recipients: v })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <CustomDropdown
                label="Send Type"
                placeholder="Select type"
                options={["Send Now", "Schedule for later"]}
                value={formData.sendType}
                onChange={(v) => setFormData({ ...formData, sendType: v })}
              />
              <CustomDatePicker
                label="Scheduled Date & Time"
                value={formData.date}
                onChange={(v) => setFormData({ ...formData, date: v })}
              />
            </div>

            {/* Delivery Channels Box */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white space-y-2 mb-4">
              <h3 className="text-md font-bold text-gray-900 mb-2">
                Delivery Channels
              </h3>
              <div className="divide-y divide-gray-50">
                <Toggle
                  label="In-App Notification"
                  description="Show in dashboard"
                  active={formData.inApp}
                  onToggle={() =>
                    setFormData({ ...formData, inApp: !formData.inApp })
                  }
                />
                <Toggle
                  label="Email Notification"
                  description="Send to tenant admin emails"
                  active={formData.email}
                  onToggle={() =>
                    setFormData({ ...formData, email: !formData.email })
                  }
                />
                <Toggle
                  label="SMS Notification"
                  description="Send SMS for critical alerts"
                  active={formData.sms}
                  onToggle={() =>
                    setFormData({ ...formData, sms: !formData.sms })
                  }
                />
              </div>
            </div>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-gray-200 flex flex-col md:flex-row justify-end gap-2 rounded-b-xl mx-4">
          <button className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Save as Draft
          </button>
          <button className="px-5 py-2 bg-primary/90 text-white rounded-lg text-sm font-medium hover:bg-primary transition-all flex items-center justify-center gap-2">
            <Send size={16} />
            Send Notification
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNotification;
