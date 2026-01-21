"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Calendar } from "lucide-react";

export default function GenerateReportModal({ open, onClose }) {
  const [from, setFrom] = useState(new Date(2024, 0, 1));
  const [to, setTo] = useState(new Date(2025, 8, 22));

  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);

  if (!open) return null;

  return createPortal(
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
          {/* HEADER */}
          <h3 className="text-lg font-semibold text-gray-900">
            Generate New Report
          </h3>
          <p className="text-sm text-gray-500 mb-5">
            Create custom reports with specific metrics and date ranges.
          </p>

          {/* DATE RANGE */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-700">
              Date Range
            </label>

            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* FROM */}
              <DateInput
                label={from}
                open={openFrom}
                setOpen={setOpenFrom}
                onSelect={(date) => {
                  setFrom(date);
                  setOpenFrom(false);
                }}
              />

              {/* TO */}
              <DateInput
                label={to}
                open={openTo}
                setOpen={setOpenTo}
                onSelect={(date) => {
                  setTo(date);
                  setOpenTo(false);
                }}
              />
            </div>
          </div>

          {/* REPORT TYPE */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-700">
              Report Type
            </label>

            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Chat Volume",
                "Agent Performance",
                "AI Accuracy",
                "Customer Satisfaction",
              ].map((t) => (
                <button
                  key={t}
                  className="border border-gray-200 rounded-lg px-4 py-2 text-sm hover:bg-gray-50"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* METRICS */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700">
              Include Metrics
            </label>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <Check label="Chat Volume" checked />
              <Check label="Response Time" checked />
              <Check label="Satisfaction" checked />
              <Check label="AI Accuracy" />
              <Check label="Agent Performance" checked />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm"
            >
              Cancel
            </button>
            <button className="px-4 py-2 rounded-lg text-sm bg-primary/90 text-white hover:bg-primary">
              Generate New Report
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

/* ================= SUB COMPONENTS ================= */

function DateInput({ label, open, setOpen, onSelect }) {
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-left"
      >
        <Calendar size={16} className="text-gray-400" />
        {label.toDateString()}
      </button>

      {open && (
        <div className="absolute z-50 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-2">
          <DayPicker
            mode="single"
            selected={label}
            onSelect={onSelect}
          />
        </div>
      )}
    </div>
  );
}

function Check({ label, checked }) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        defaultChecked={checked}
        className="rounded text-primary"
      />
      {label}
    </label>
  );
}
