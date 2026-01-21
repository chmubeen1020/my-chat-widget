import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Dropdown({ label, value, options, onChange, icon }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 relative">
      <label className="text-sm text-gray-600 mb-1 block">
        {label}
      </label>

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 bg-gray-100 rounded-md text-sm"
      >
        <span className="flex items-center gap-2">
          {icon && <span>{icon}</span>}
          {value}
        </span>
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
