import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  Eye,
  FileDown,
  FileSpreadsheet,
  FileText,
  Star,
  User,
  Bot,
  ChevronsUpDown,
  MessageCircle,
} from "lucide-react";
import ReassignChatModal from "./ReAssignChatModal";
import ChatTranscriptModal from "./ChatTranscript";
import { createPortal } from "react-dom";
const DUMMY_DATA = [
  {
    id: 1,
    visitor: "Anonymous User #1847",
    tags: ["Support", "Technical"],
    agent: "Sarah Johnson",
    agentInitials: "SJ",
    status: "Open",
    handledBy: "Agent",
    duration: "5m 32s",
    rating: 5,
    started: "2024-01-16 14:30",
  },
  {
    id: 2,
    visitor: "John Doe",
    tags: ["FAQ", "Billing"],
    agent: "-",
    agentInitials: "",
    status: "Open",
    handledBy: "AI",
    duration: "2m 15s",
    rating: 4,
    started: "2024-01-16 14:25",
  },
  {
    id: 3,
    visitor: "Anonymous User #1849",
    tags: ["Sales", "Demo"],
    agent: "Mike Chen",
    agentInitials: "MC",
    status: "Open",
    handledBy: "Agent",
    duration: "8m 45s",
    rating: 3,
    started: "2024-01-16 14:40",
  },
  {
    id: 4,
    visitor: "Emma Wilson",
    tags: ["FAQ"],
    agent: "-",
    agentInitials: "",
    status: "Open",
    handledBy: "AI",
    duration: "1m 30s",
    rating: 1,
    started: "2024-01-16 14:20",
  },
];

export default function ChatMonitoring() {
  const [activeTab, setActiveTab] = useState("Inbox"); // 'Inbox' or 'History'
  const [openActionId, setOpenActionId] = useState(null);
  const [openFilterType, setOpenFilterType] = useState(null);
  const [openReassignModal, setReassignModal] = useState(false);
  const [openChatTranscriptModal, setChatTranscriptModal] = useState(false);
  const [filterDropdown, setFilterDropdown] = useState({
    type: null,
    top: 0,
    left: 0,
    width: 0,
  });

  const [actionMenu, setActionMenu] = useState({
    id: null,
    top: 0,
    left: 0,
    isLastTwo: false,
  });

  // Close modals when clicking outside
  useEffect(() => {
    const handleClick = () => {
      setOpenActionId(null);
      setOpenFilterType(null);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className=" text-gray-900 ">
      {/* Header */}
      <header className="my-2">
        <h1 className="text-xl font-semibold">Chat Monitoring</h1>
        <p className="text-gray-500 text-sm">
          Monitor and analyze customer conversations and support interactions.
        </p>
      </header>

      {/* Tab Navigation */}
      <div className="flex bg-white border border-gray-200 rounded-xl p-1 w-fit mb-4 shadow-sm mx-auto md:mx-0">
        <button
          onClick={() => setActiveTab("Inbox")}
          className={`px-4 py-1 rounded-lg text-sm font-medium transition-all ${
            activeTab === "Inbox"
              ? "bg-primary text-white"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Live Inbox
        </button>
        <button
          onClick={() => setActiveTab("History")}
          className={`px-4 py-1 rounded-lg text-sm font-medium transition-all ${
            activeTab === "History"
              ? "bg-primary text-white"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Conversation History
        </button>
      </div>

      {/* Main Table Container */}
      <div className="bg-white  border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-4 py-2  border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-semibold ">
              {activeTab === "Inbox" ? "Live Inbox" : "Conversation History"} (
              {DUMMY_DATA.length})
            </h2>
            <p className="text-xs text-gray-500">
              All customer conversations and support interactions.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative flex-1 md:w-64">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search Conversations..."
                className="w-full pl-10 pr-4 py-1 bg-gray-50 border border-gray-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-1 border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50">
              <SlidersHorizontal size={16} /> Filters
            </button>
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 text-xs tracking-wider border-b border-gray-200 bg-gray-50/50">
                <th className="px-4 py-2 text-xs">Visitor</th>
                <FilterHeader
                  label="Agent"
                  isOpen={openFilterType === "agent"}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenFilterType("agent");
                  }}
                />
                <FilterHeader
                  label="Status"
                  isOpen={openFilterType === "status"}
                  onClick={(e) => {
                    e.stopPropagation();

                    const rect = e.currentTarget.getBoundingClientRect();

                    setFilterDropdown({
                      type: "status",
                      top: rect.bottom + window.scrollY + 6, // margin-top
                      left: rect.left + window.scrollX,
                      width: rect.width,
                    });

                    setOpenFilterType("status");
                  }}
                />
                <FilterHeader
                  label="Handled By"
                  isOpen={openFilterType === "handled"}
                  onClick={(e) => {
                    e.stopPropagation();

                    const rect = e.currentTarget.getBoundingClientRect();

                    setFilterDropdown({
                      type: "handled",
                      top: rect.bottom + window.scrollY + 6, // margin-top
                      left: rect.left + window.scrollX,
                      width: rect.width,
                    });

                    setOpenFilterType("handled");
                  }}
                />
                <th className="px-4 py-4 font-medium text-xs">Duration</th>
                <FilterHeader
                  label="Rating"
                  isOpen={openFilterType === "rating"}
                  onClick={(e) => {
                    e.stopPropagation();

                    const rect = e.currentTarget.getBoundingClientRect();

                    setFilterDropdown({
                      type: "rating",
                      top: rect.bottom + window.scrollY + 6, // margin-top
                      left: rect.left + window.scrollX,
                      width: rect.width,
                    });

                    setOpenFilterType("rating");
                  }}
                />
                <th className="px-4 py-4 font-medium text-xs">Started</th>
                <th className="px-4 py-4 font-medium text-right text-xs">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-xs">
              {DUMMY_DATA.map((row, index) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50/80 transition-colors"
                >
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                        {row.visitor.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-xs">
                          {row.visitor}
                        </div>
                        <div className="flex gap-1 mt-1">
                          {row.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-1 py-0.5 border border-gray-200 rounded-md text-gray-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-gray-600 text-xs">
                    {row.agentInitials && (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-[10px] font-bold mr-2">
                        {row.agentInitials}
                      </span>
                    )}
                    {row.agent}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-xs font-medium ${
                        activeTab === "Inbox"
                          ? "bg-green-50 text-green-600"
                          : "bg-indigo-50 text-indigo-600"
                      }`}
                    >
                      {activeTab === "Inbox" ? "Open" : "Resolved"}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-xs">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      {row.handledBy === "Agent" ? (
                        <User size={14} />
                      ) : (
                        <Bot size={14} />
                      )}
                      {row.handledBy}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-600 text-xs">
                    {row.duration}
                  </td>
                  <td className="px-4 py-4 text-xs">
                    {activeTab === "Inbox" ? (
                      <span className="text-gray-400 italic">No rating</span>
                    ) : (
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < row.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-200"
                            }
                          />
                        ))}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4 text-gray-500 whitespace-nowrap text-xs">
                    {row.started}
                  </td>
                  <td className="px-4 py-4 text-right relative text-xs">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();

                        const rect = e.currentTarget.getBoundingClientRect();

                        setActionMenu((prev) =>
                          prev.id === row.id
                            ? { id: null, top: 0, left: 0, isLastTwo: false }
                            : {
                                id: row.id,
                                top: rect.top,
                                left: rect.left,
                                isLastTwo: index >= DUMMY_DATA.length - 2,
                              },
                        );
                      }}
                      className="p-1 hover:bg-gray-200 rounded-md transition-colors"
                    >
                      <MoreHorizontal size={18} className="text-gray-600" />
                    </button>

                    {actionMenu.id === row.id &&
                      createPortal(
                        <ActionModal
                          position={actionMenu}
                          onClose={() =>
                            setActionMenu({
                              id: null,
                              top: 0,
                              left: 0,
                              isLastTwo: false,
                            })
                          }
                          setReassignModal={setReassignModal}
                          setChatTranscriptModal={setChatTranscriptModal}
                        />,
                        document.body,
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Filter Dropdowns (Global positioning logic) */}
      {filterDropdown.type === "status" &&
        createPortal(
          <StatusFilter
            position={filterDropdown}
            onClose={() => setFilterDropdown({ type: null })}
          />,
          document.body,
        )}

      {filterDropdown.type === "handled" &&
        createPortal(
          <HandledByFilter
            position={filterDropdown}
            onClose={() => setFilterDropdown({ type: null })}
          />,
          document.body,
        )}

      {filterDropdown.type === "rating" &&
        createPortal(
          <RatingFilter
            position={filterDropdown}
            onClose={() => setFilterDropdown({ type: null })}
          />,
          document.body,
        )}

      <ReassignChatModal
        isOpen={openReassignModal}
        onClose={() => setReassignModal(false)}
      />
      <ChatTranscriptModal
        isOpen={openChatTranscriptModal}
        onClose={() => setChatTranscriptModal(false)}
      />
    </div>
  );
}

// --- Sub-components for Modals/Filters ---
function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

function FilterHeader({ label, isOpen, onClick }) {
  return (
    <th
      className="px-0 xl:px-4 py-2 font-medium cursor-pointer hover:text-gray-700 relative"
      onClick={onClick}
    >
      <div className="flex items-center gap-1 text-xs">
        {label} <ChevronsUpDown size={10} className="text-gray-500" />
      </div>
    </th>
  );
}

function ActionModal({
  position,
  onClose,
  setReassignModal,
  setChatTranscriptModal,
}) {
  const menuTop = position.isLastTwo ? position.top + 28 : position.top + 28;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Dropdown */}
      <div
        style={{
          top: menuTop,
          left: position.left - 170,
        }}
        className="
          fixed z-50 w-48 bg-white border border-gray-200  rounded-xl shadow-xl overflow-hidden
          animate-in fade-in zoom-in duration-150
        "
      >
        <ActionItem
          icon={<Eye size={16} />}
          label="View Transcript"
          onClick={() => {
            setChatTranscriptModal(true);
            onClose();
          }}
        />
        <ActionItem
          icon={<MessageCircle size={16} />}
          label="Re-Assign Chat"
          onClick={() => {
            setReassignModal(true);
            onClose();
          }}
        />
        <ActionItem icon={<FileDown size={16} />} label="Export PDF" />
        <ActionItem
          icon={<FileSpreadsheet size={16} />}
          label="Export as Excel"
        />
        <ActionItem icon={<FileText size={16} />} label="Export as CSV" />
        <ActionItem icon={<Star size={16} />} label="Request Rating" />
      </div>
    </>
  );
}

function ActionItem({ icon, label, onClick, href }) {
  const className =
    "flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors";

  // If href is provided, render as a link
  if (href) {
    return (
      <a href={href} className={className}>
        <span className="text-gray-400">{icon}</span>
        {label}
      </a>
    );
  }

  // Otherwise, render as a button
  return (
    <button className={className} onClick={onClick}>
      <span className="text-gray-400">{icon}</span>
      {label}
    </button>
  );
}

function StatusFilter({ position, onClose }) {
  const ref = useRef(null);

  useClickOutside(ref, onClose);

  return (
    <div
      ref={ref}
      style={{
        top: position.top,
        left: position.left,
        minWidth: position.width,
      }}
      className="fixed z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-2 space-y-1"
    >
      <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg">
        Open
      </button>
      <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg">
        Closed
      </button>
    </div>
  );
}

function HandledByFilter({ position, onClose }) {
  const ref = useRef(null);

  useClickOutside(ref, onClose);
  return (
    <div
      ref={ref}
      style={{
        top: position.top,
        left: position.left,
        minWidth: position.width,
      }}
      className="fixed z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-2 space-y-1"
    >
      <button className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 rounded-lg">
        Agent
      </button>
      <button className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 rounded-lg">
        AI
      </button>
    </div>
  );
}

function RatingFilter({ position, onClose }) {
  const ref = useRef(null);

  useClickOutside(ref, onClose);
  return (
    <div
      ref={ref}
      style={{
        top: position.top,
        left: position.left,
        minWidth: position.width + 20,
      }}
      className="fixed z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-2"
    >
      {[5, 4, 3, 2, 1].map((num) => (
        <button
          key={num}
          className="flex items-center justify-between w-full px-3 py-1.5 text-sm hover:bg-gray-50 rounded-lg"
        >
          <span>{num}</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={
                  i < num ? "fill-yellow-400 text-yellow-400" : "text-gray-200"
                }
              />
            ))}
          </div>
        </button>
      ))}
    </div>
  );
}
