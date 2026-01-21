"use client";

import {
  Info,
  Download,
  Star,
} from "lucide-react";
import GenerateReportModal from "./GenerateReportModal";
import { useState } from "react";

export default function Reports() {
    const [showGenerateReportModal, setGenerateReportModal] = useState(false);
  return (
    <div>
    <div className="space-y-8">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mt-2">
      <div className="w-2/3">
        <h2 className="text-xl font-semibold text-gray-900">Reports</h2>
        <p className="text-sm text-gray-500">
          Generate detailed reports and analyze your chat system performance.
        </p>
      </div>
      <div>
        <button className="text-sm bg-primary text-white px-2 sm:px-4 py-2 rounded-lg" onClick={() => setGenerateReportModal(true)}>Generate Report</button>
      </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <StatCard
        title="Total Chats"
        value="12,847"
        sub="+18% from last month"
        tooltip="Number of chat interactions handled by the system during the selected period."
      />
      <StatCard
        title="AI Accuracy"
        value="89.3%"
        sub="+2.1% from last month"
        tooltip="Percentage of chat responses correctly handled by the AI based on verified data."
      />
      <StatCard
        title="Avg Response Time"
        value="2.3m"
        sub="-0.4m from last month"
        tooltip="Average time taken to respond to a customer message across all chats."
      />
      <StatCard
        title="Customer Satisfaction"
        value="4.7/5"
        sub="+0.2 from last month"
        tooltip="Average satisfaction rating given by customers after their chat interactions."
      />
    </div>

      {/* ================= AGENT PERFORMANCE ================= */}
      <Card>
        <h3 className="font-medium text-gray-900">Agent Performance Summary</h3>
        <p className="text-sm text-gray-500 mb-4">
          Individual agent statistics and performance metrics.
        </p>

        <div className="overflow-x-auto lg:overflow-visible">
          <table className="min-w-[700px] w-full text-sm ">
            <thead className="border-b border-gray-200">
              <tr className="text-left text-gray-500 ">
                <th className="pb-3 font-medium">Agent</th>
                <th className="pb-3 font-medium">Chats Handled</th>
                <th className="pb-3 font-medium">Avg Rating</th>
                <th className="pb-3 font-medium">Response Time</th>
                <th className="pb-3 font-medium">Performance</th>
              </tr>
            </thead>
            <tbody>
              {AGENTS.map((a) => (
                <tr key={a.name} className="border-b border-gray-200 last:border-0">
                  <td className="py-3">{a.name}</td>
                  <td>{a.chats}</td>
                  <td>
                    <Rating value={a.rating} />
                  </td>
                  <td>{a.time}</td>
                  <td>
                    <Badge label={a.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* ================= REPORT HISTORY ================= */}
      <Card>
        <h3 className="font-medium text-gray-900">Report History</h3>
        <p className="text-sm text-gray-500 mb-4">
          Previously generated reports and exports.
        </p>

        <div className="overflow-x-auto lg:overflow-visible">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="border-b border-gray-200">
              <tr className="text-left text-gray-500 ">
                <th className="pb-3 font-medium">Report Name</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Generated</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Size</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {REPORTS.map((r) => (
                <tr key={r.name} className="border-b border-gray-200 last:border-0">
                  <td className="py-3">{r.name}</td>
                  <td>{r.type}</td>
                  <td>{r.date}</td>
                  <td>
                    <StatusBadge status={r.status} />
                  </td>
                  <td>{r.size}</td>
                  <td className="text-right">
                    <button className="p-1 font-normal">
                      <Download size={16} className="text-gray-600 "/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
    <GenerateReportModal open={showGenerateReportModal} onClose={() => setGenerateReportModal(false)}/>
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

function StatCard({ title, value, sub, tooltip }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-blue-50 rounded-xl p-4 space-y-2 relative shadow-sm border border-blue-100">
      {/* Title with Info Icon and Hover Trigger */}
      <div 
        className="flex items-center gap-2 text-sm xl:text-base text-gray-800 font-medium "
       
      >
        {title}
        <Info size={14} className="text-gray-400"  onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
        
        {/* Tooltip Modal */}
        {isHovered && (
          <div className="absolute top-[-70px]  right-0 max-w-[300px] z-50 bg-white border border-slate-300 p-3 rounded-xl shadow-xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-2 mb-1">
              <Info size={14} className="text-[#6B69B2]" />
              <span className="text-xs font-bold text-slate-900">{title}</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-500 font-normal">
              {tooltip}
            </p>
          </div>
        )}
      </div>

      {/* Value */}
      <div className="text-2xl font-bold text-gray-900 mt-1 tracking-tight">
        {value}
      </div>

      {/* Subtext */}
      <p className={`text-xs font-medium ${sub.includes('+') ? 'text-emerald-600' : 'text-slate-400'}`}>
        {sub}
      </p>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      {children}
    </div>
  );
}

function Badge({ label }) {
  return (
    <span className="px-3 py-1 rounded-lg bg-green-100 text-green-700 text-xs font-medium">
      {label}
    </span>
  );
}

function StatusBadge({ status }) {
  const map = {
    Completed: "bg-green-100 text-green-700",
    Generating: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-lg text-xs font-medium ${map[status]}`}
    >
      {status}
    </span>
  );
}

function Rating({ value }) {
  return (
    <div className="flex items-center gap-1">
      <span>{value}</span>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={
            i <= Math.round(value)
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

/* ================= DUMMY DATA ================= */

const AGENTS = [
  { name: "Sarah", chats: 245, rating: 4.8, time: "2.1m", status: "Excellent" },
  { name: "Mike", chats: 189, rating: 4.6, time: "2.5m", status: "Excellent" },
  { name: "Emma", chats: 156, rating: 4.7, time: "1.9m", status: "Excellent" },
  { name: "John", chats: 98, rating: 4.5, time: "3.2m", status: "Excellent" },
];

const REPORTS = [
  {
    name: "Chat Volume Report - January 2024",
    type: "Chat Analytics",
    date: "1/15/2024",
    status: "Completed",
    size: "2.4 MB",
  },
  {
    name: "Agent Performance Report - Q4 2023",
    type: "Agent Performance",
    date: "1/10/2024",
    status: "Completed",
    size: "1.8 MB",
  },
  {
    name: "AI Accuracy Report - December 2023",
    type: "AI Analytics",
    date: "1/5/2024",
    status: "Generating",
    size: "-",
  },
  {
    name: "Customer Satisfaction Report - 2023",
    type: "Customer Analytics",
    date: "1/1/2024",
    status: "Completed",
    size: "3.2 MB",
  },
];
