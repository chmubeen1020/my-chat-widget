import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom"; // Import createPortal
import { X, ChevronDown, Check } from "lucide-react";

// Helper Component for Custom Dropdown
const CustomSelect = ({ label, options, value, onChange, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Initialize with null to prevent rendering at (0,0)
  const [coords, setCoords] = useState(null);
  const containerRef = useRef(null);

  // useLayoutEffect runs BEFORE the paint, preventing the "flicker"
  const updateCoords = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom,
        left: rect.left,
        width: rect.width,
      });
    }
  };

  useLayoutEffect(() => {
    if (isOpen) {
      updateCoords();
    } else {
      setCoords(null); // Reset when closed
    }
  }, [isOpen]);

  // Sync position on resize or scroll while open
  useEffect(() => {
    if (!isOpen) return;
    
    window.addEventListener("resize", updateCoords);
    window.addEventListener("scroll", updateCoords, true);
    return () => {
      window.removeEventListener("resize", updateCoords);
      window.removeEventListener("scroll", updateCoords, true);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        if (!e.target.closest(".select-portal-menu")) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none transition-all focus:ring-1 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-400"
      >
        <span className={!value ? "text-gray-400" : ""}>{value || "Select a role"}</span>
        <ChevronDown size={18} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* CRITICAL FIX: Only render createPortal if isOpen AND coords are calculated.
          This prevents the menu from appearing at the top-left (0,0).
      */}
      {isOpen && coords &&
        createPortal(
          <div
            className="select-portal-menu fixed z-[9999] bg-white border border-gray-100 shadow-2xl rounded-xl py-2 animate-in fade-in zoom-in-95 duration-150"
            style={{
              top: `${coords.top + 6}px`,
              left: `${coords.left}px`,
              width: `${coords.width}px`,
            }}
          >
            <div className="max-h-60 overflow-y-auto no-scrollbar">
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-left hover:bg-indigo-50 hover:text-primary transition-colors"
                >
                  <span className={value === opt ? "font-semibold" : ""}>{opt}</span>
                  {value === opt && <Check size={14} className="text-primary" />}
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

const UserModal = ({ mode, user, onClose }) => {
  const [role, setRole] = useState(user?.role || "");
  const roles = ["Super Administrator", "Platform Manager", "Billing Administrator", "Support Administrator"];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-2 border-b border-gray-50">
          <div>
            <h2 className="text-xl font-medium text-gray-900">
              {mode === "create" ? "Add New User" : "Edit User"}
            </h2>
            <p className="text-gray-600 text-xs mt-1">Update user information and role</p>
          </div>
          <button onClick={onClose} className="p-2">
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue={user?.name || ""}
              placeholder="e.g. John Doe"
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              defaultValue={user?.email || ""}
              placeholder="john@example.com"
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          <CustomSelect 
            label="Role" 
            options={roles} 
            value={role} 
            onChange={setRole} 
          />

          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-sm font-medium text-gray-800">Account Status</p>
              <p className="text-xs text-gray-400">Active users can log in</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked={user?.status === 'active'} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all">
            Cancel
          </button>
          <button className="px-8 py-2 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-medium transition-all shadow-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;