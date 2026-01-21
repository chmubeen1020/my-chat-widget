import { useState } from "react";
import { Clock } from "lucide-react";

const TIMES = [
  "08:00 AM", "09:00 AM", "10:00 AM",
  "12:00 PM", "01:00 PM", "03:00 PM",
  "05:00 PM", "07:00 PM",
];

export default function TimePicker({ label, value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <label className="text-sm text-gray-600 mb-1 block">
        {label}
      </label>

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 bg-gray-100 rounded-md text-sm"
      >
        <span className="flex items-center gap-2">
          <Clock size={14} />
          {value}
        </span>
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md">
          {TIMES.map((t) => (
            <button
              key={t}
              onClick={() => {
                onChange(t);
                setOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
            >
              {t}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
