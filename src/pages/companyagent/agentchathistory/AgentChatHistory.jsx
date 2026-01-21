import React, { useState } from "react";
import {
  Search,
  Star,
  ArrowLeft,
  Download,
  User,
  Bot,
  Hash,
  ChevronDown,
  Eye,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "../../../assets";

// --- Complex Dummy Data ---
const DUMMY_DATA = [
  {
    id: "VIS-001",
    name: "Sarah Wilson",
    duration: "15m",
    status: "completed",
    resolution: "Agent",
    rating: 5,
    page: "/pricing",
    handledBy: "You",
    date: "10/14/2024",
    metadata: {
      startTime: "10/14/2024, 2:30:00 PM",
      endTime: "10/14/2024, 2:45:00 PM",
      sessionId: "SES-ABC123",
      location: "New York, US",
      feedback: "Excellent support! Very helpful and quick response.",
    },
    transcript: [
      {
        role: "user",
        name: "Sarah Wilson",
        time: "02:30 PM",
        text: "Hi there! I'm interested in your enterprise plan.",
      },
      {
        role: "ai",
        name: "AI Assistant",
        time: "02:30 PM",
        text: "Hello! I'd be happy to help you learn about our enterprise plan. Let me connect you with one of our specialists.",
      },
      {
        role: "agent",
        name: "You (Agent)",
        time: "02:31 PM",
        text: "Hi Sarah! I'm here to help you with our enterprise plan. What specific features are you most interested in?",
      },
      {
        role: "user",
        name: "Sarah Wilson",
        time: "02:32 PM",
        text: "I need to understand the user limits and API access for our company of about 500 employees.",
      },
    ],
  },
  {
    id: "VIS-002",
    name: "Mike Johnson",
    duration: "15m",
    status: "transferred",
    resolution: "Escalated",
    rating: null,
    page: "/features",
    handledBy: "You → Emma Wilson",
    date: "10/14/2024",
    metadata: {
      startTime: "10/14/2024, 3:00 PM",
      location: "London, UK",
      sessionId: "SES-XYZ789",
      feedback: "",
    },
    transcript: [],
  },
  {
    id: "VIS-005",
    name: "Emma Davis",
    duration: "5m",
    status: "abandoned",
    resolution: "Ai",
    rating: null,
    page: "/support",
    handledBy: "AI Assistant",
    date: "10/13/2024",
    metadata: {
      startTime: "10/13/2024, 11:00 AM",
      location: "Berlin, DE",
      sessionId: "SES-LMN456",
      feedback: "",
    },
    transcript: [],
  },
];

// --- Custom Dropdown Component ---
const CustomDropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    /* Added dynamic z-index so the open dropdown is always on top */
    <div className={`relative w-full ${isOpen ? "z-50" : "z-10"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-center gap-4 items-center sm:gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-white hover:bg-gray-50 transition-colors whitespace-nowrap"
      >
        {label}{" "}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Invisible backdrop to close dropdown when clicking outside */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-xl z-20 py-2 origin-top-right"
            >
              {options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  {opt}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Application Component ---
export default function ChatDashboard() {
  const [view, setView] = useState("history"); // 'history' or 'details'
  const [activeChat, setActiveChat] = useState(null);

  const handleViewChat = (chat) => {
    setActiveChat(chat);
    setView("details");
  };

  return (
    <div className="mt-2">
      {view === "history" ? (
        <motion.div key="history">
          <header className="mb-6">
            <h1 className="text-xl font-semibold text-gray-900">
              Chat History
            </h1>
            <p className="text-sm text-gray-500">
              Review past conversations and performance metrics
            </p>
          </header>

          {/* Toolbar */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 justify-between mb-2">
              <div className="relative flex-grow max-w-md">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search by visitor name or tags..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              {/* Removed overflow-x-auto here to prevent clipping */}
              <div className="flex flex-col sm:flex-row items-center gap-2 pb-2 md:pb-0">
                <CustomDropdown
                  label="Last 7 days"
                  options={["Today", "Last 7 days", "Last 30 days"]}
                />
                <CustomDropdown
                  label="All Status"
                  options={["Completed", "Transferred", "Abandoned"]}
                />
                <CustomDropdown
                  label="All Types"
                  options={["Agent", "AI", "Escalated"]}
                />
              </div>
            </div>

            {/* Table (Desktop) / Cards (Mobile) */}
            <div className="overflow-hidden">
              {/* Desktop Table */}
              <table className="w-full hidden md:table">
                <thead className=" border-b border-gray-100">
                  <tr className="text-left text-xs xl:text-sm  text-gray-500 ">
                    <th className="px-6 py-4 font-medium">Visitor</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Resolution</th>
                    <th className="px-6 py-4 font-medium">Rating</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {DUMMY_DATA.map((chat) => (
                    <tr
                      key={chat.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm">
                        <div className="font-semibold text-gray-900">
                          {chat.name}
                        </div>
                        <div className="text-xs text-gray-400">{chat.id}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                            chat.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : chat.status === "transferred"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {chat.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm flex items-center gap-2 text-gray-600">
                        {chat.resolution === "Ai" ? (
                          <Bot size={14} />
                        ) : (
                          <User size={14} />
                        )}{" "}
                        {chat.resolution}
                      </td>
                      <td className="px-6 py-4">
                        {chat.rating ? (
                          <div className="flex text-yellow-400">
                            <Star size={14} fill="currentColor" />{" "}
                            <span className="text-gray-400 text-xs ml-1">
                              ({chat.rating})
                            </span>
                          </div>
                        ) : (
                          <span className="text-gray-300 text-xs">
                            No rating
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {chat.date}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleViewChat(chat)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-xs  hover:bg-gray-50"
                        >
                          <Eye size={14} /> View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile Cards */}
              <div className="md:hidden grid grid-cols-1 divide-y divide-gray-100">
                {DUMMY_DATA.map((chat) => (
                  <div key={chat.id} className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-gray-900">
                          {chat.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {chat.id} • {chat.date}
                        </div>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          chat.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {chat.status}
                      </span>
                    </div>
                    <button
                      onClick={() => handleViewChat(chat)}
                      className="w-full py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-semibold border border-gray-200"
                    >
                      View Conversation
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Summary Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {["Performance Summary", "Resolution Types", "Top Pages"].map(
              (title) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                >
                  <h3 className="font-medium text-gray-800 mb-4">{title}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Metric A</span>
                      <span className="font-semibold">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Metric B</span>
                      <span className="font-semibold">85%</span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="details"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setView("history")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <div className="text-left">
                <h1 className="text-xl font-semibold text-gray-900">
                  Chat Transcript
                </h1>
                <p className="text-xs text-gray-400">
                  Conversation with {activeChat.name}
                </p>
              </div>
            </button>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-bold hover:bg-gray-50">
                <Download size={14} /> Export PDF
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-bold hover:bg-gray-50">
                <Download size={14} /> Export CSV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Info */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center ">
                  <img src={images.Profile} alt="" />
                </div>
                <h2 className="font-medium text-lg">{activeChat.name}</h2>
                <p className="text-sm text-gray-500 mb-4">{activeChat.id}</p>
                <hr className="mb-4" />
                <div className="text-left space-y-2">
                  <DetailItem
                    label="Start Time"
                    value={activeChat.metadata.startTime}
                  />
                  <DetailItem
                    label="End Time"
                    value={activeChat.metadata.startTime}
                  />
                  <DetailItem
                    label="Duration"
                    value='15 m'
                  />
                  <DetailItem
                    label="Handeled By"
                    value='You'
                  />
                  <DetailItem
                    label="Location"
                    value={activeChat.metadata.location}
                  />
                  <DetailItem
                    icon={<Hash size={14} />}
                    label="Session ID"
                    value={activeChat.metadata.sessionId}
                  />
                  {activeChat.rating && (
                    <div className="space-y-1">
                      <p className="text-sm xl:text-base text-gray-600 font-medium">
                        Feedback
                      </p>
                      <p className="text-xs font-medium text-gray-500 ">
                        "{activeChat.metadata.feedback}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Chat Transcript Area */}
            <div className="lg:col-span-9 bg-white rounded-2xl p-6 space-y-4 border border-gray-100 shadow-sm flex flex-col h-[700px]">
              <div>
                <h3 className="font-medium text-gray-800 xl:text-xl">
                  Conversation Transcript
                </h3>
                <p className="text-xs text-gray-400">
                  Complete conversation log with timestamps
                </p>
              </div>
              <div className="flex-grow overflow-y-auto  space-y-2">
                {activeChat.transcript.map((msg, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        msg.role === "user"
                          ? "bg-gray-200"
                          : msg.role === "ai"
                          ? "bg-indigo-100 text-indigo-600"
                          : "bg-primary text-white"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <img src={images.Profile} alt="user pic" />
                      ) : msg.role === "ai" ? (
                        <Bot size={16} />
                      ) : (
                        <User size={16} />
                      )}
                    </div>
                    <div className="space-y-1 w-full">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-700">
                          {msg.name}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {msg.time}
                        </span>
                      </div>
                      <div
                        className={`px-4 py-2 rounded-2xl text-sm leading-relaxed max-w-3xl ${
                          msg.role === "user"
                            ? "bg-gray-50  text-gray-800"
                            : msg.role === "ai"
                            ? "bg-indigo-50/50 text-primary"
                            : "bg-blue-50/50 text-primary font-medium"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <div className="space-y-1">
      <p className="text-sm xl:text-base text-gray-600 font-medium">
        {label}
      </p>
      <div className="flex items-center text-xs font-medium text-gray-500"> {value}
      </div>
    </div>
  );
}
