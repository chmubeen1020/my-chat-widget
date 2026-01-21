import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Filter,
  MoreHorizontal,
  Paperclip,
  Smile,
  Send,
  ChevronDown,
  Check,
  Plus,
  User,
  ArrowLeft,
  AlertTriangle,
  Bot,
  Zap,
  UserX,
  ArrowRight,
  CheckCircle,
  X,
} from "lucide-react";

const LiveChatComponent = () => {
  // --- Dummy Data ---
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Sarah Wilson",
      location: "New York, US",
      status: "active",
      session: "SES-ABC123",
      path: "/pricing",
      lastMessage: "Can you help me understand the enterprise p...",
      time: "15m",
      unread: 0,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      messages: [
        {
          sender: "Sarah Wilson",
          time: "02:30 PM",
          text: "Hi there! I'm interested in your enterprise plan.",
          type: "client",
        },
        {
          sender: "AI",
          time: "02:30 PM",
          text: "Hello! I'd be happy to help you learn about our enterprise plan. Let me connect you with one of our specialists.",
          type: "ai",
        },
        {
          sender: "You",
          time: "02:31 PM",
          text: "Hi Sarah! I'm here to help you with our enterprise plan. What specific features are you most interested in?",
          type: "agent",
        },
        {
          sender: "Sarah Wilson",
          time: "02:45 PM",
          text: "Can you help me understand the enterprise plan? I need to know about user limits and API access.",
          type: "client",
        },
      ],
    },
    {
      id: 12,
      name: "Sarah Wilson",
      location: "New York, US",
      status: "active",
      session: "SES-ABC123",
      path: "/pricing",
      lastMessage: "Can you help me understand the enterprise p...",
      time: "15m",
      unread: 0,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      messages: [
        {
          sender: "Sarah Wilson",
          time: "02:30 PM",
          text: "Hi there! I'm interested in your enterprise plan.",
          type: "client",
        },
        {
          sender: "AI",
          time: "02:30 PM",
          text: "Hello! I'd be happy to help you learn about our enterprise plan. Let me connect you with one of our specialists.",
          type: "ai",
        },
        {
          sender: "You",
          time: "02:31 PM",
          text: "Hi Sarah! I'm here to help you with our enterprise plan. What specific features are you most interested in?",
          type: "agent",
        },
        {
          sender: "Sarah Wilson",
          time: "02:45 PM",
          text: "Can you help me understand the enterprise plan? I need to know about user limits and API access.",
          type: "client",
        },
      ],
    },
    {
      id: 14,
      name: "Sarah Wilson",
      location: "New York, US",
      status: "active",
      session: "SES-ABC123",
      path: "/pricing",
      lastMessage: "Can you help me understand the enterprise p...",
      time: "15m",
      unread: 0,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      messages: [
        {
          sender: "Sarah Wilson",
          time: "02:30 PM",
          text: "Hi there! I'm interested in your enterprise plan.",
          type: "client",
        },
        {
          sender: "AI",
          time: "02:30 PM",
          text: "Hello! I'd be happy to help you learn about our enterprise plan. Let me connect you with one of our specialists.",
          type: "ai",
        },
        {
          sender: "You",
          time: "02:31 PM",
          text: "Hi Sarah! I'm here to help you with our enterprise plan. What specific features are you most interested in?",
          type: "agent",
        },
        {
          sender: "Sarah Wilson",
          time: "02:45 PM",
          text: "Can you help me understand the enterprise plan? I need to know about user limits and API access.",
          type: "client",
        },
      ],
    },
    {
      id: 2,
      name: "Mike Johnson",
      location: "London, UK",
      status: "pending",
      session: "SES-XYZ456",
      path: "/features",
      lastMessage: "I need help with API integration urgently",
      time: "12m",
      unread: 3,
      urgent: true,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      messages: [
        {
          sender: "Mike Johnson",
          time: "02:10 PM",
          text: "I need help with API integration urgently",
          type: "client",
        },
      ],
    },
    {
      id: 4,
      name: "Lisa Chen",
      location: "San Francisco, US",
      status: "active",
      session: "SES-LMN789",
      path: "/contact",
      lastMessage: "Thank you for your help!",
      time: "3m",
      unread: 1,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      messages: [
        {
          sender: "Lisa Chen",
          time: "03:10 PM",
          text: "Thank you for your help!",
          type: "client",
        },
      ],
    },
    {
      id: 8,
      name: "Mike Johnson",
      location: "London, UK",
      status: "pending",
      session: "SES-XYZ456",
      path: "/features",
      lastMessage: "I need help with API integration urgently",
      time: "12m",
      unread: 3,
      urgent: true,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      messages: [
        {
          sender: "Mike Johnson",
          time: "02:10 PM",
          text: "I need help with API integration urgently",
          type: "client",
        },
      ],
    },
  ]);

  const [activeId, setActiveId] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filter, setFilter] = useState("All Status");
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [showMobileList, setShowMobileList] = useState(true); // Enhanced for mobile
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([
    "I'd be happy to help you with that! Let me explain our enterprise features.",
    "That's a great question! Our enterprise plan includes unlimited API access.",
  ]);

  const addMessage = (newText) => {
    setMessages([...messages, newText]);
    setIsModalOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeChat = conversations.find((c) => c.id === activeId);

  // --- Custom Dropdown logic ---
  const filterOptions = ["All Status", "Active", "Pending", "Closed"];
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage = {
      sender: "You",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      text: messageInput,
      type: "agent",
    };

    const updated = conversations.map((conv) => {
      if (conv.id === activeId) {
        return { ...conv, messages: [...conv.messages, newMessage] };
      }
      return conv;
    });
    setConversations(updated);
    setMessageInput("");
  };

  const renderAvatar = (type, name = "User") => {
    // Common style for circle avatars (User/Agent)
    const circleBase =
      "w-7 h-7  rounded-full flex items-center justify-center text-xs ";

    switch (type) {
      case "ai":
        return (
          <span className={`${circleBase} bg-[#AD46FF]  text-white`}>
            <Bot size={14} />
          </span>
        );

      case "agent":
        return (
          <span className={`${circleBase} bg-primary/90 text-white`}>
            <User size={14} />
          </span>
        );

      default: // Standard User (Initials)
        const initials = name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase();

        return <span className={`${circleBase} bg-gray-300`}>{initials}</span>;
    }
  };
  return (
    <div className="flex flex-col overflow-hidden ">
      <div className="mb-4 px-4 md:px-0">
        <h1 className="text-xl font-semibold text-gray-900">Live Chats</h1>
        <p className="text-sm text-gray-500">
          Manage customer conversations in real-time
        </p>
      </div>

      <div className="flex flex-1 gap-6 lg:gap-2 xl:gap-6 overflow-hidden bg-white md:bg-transparent rounded-xl shadow-lg md:shadow-none h-full max-h-[80vh]">
        {/* --- LEFT SIDEBAR: Conversations List --- */}
        <div
          className={`${
            showMobileList ? "flex" : "hidden"
          } lg:flex flex-col w-full lg:w-1/2 xl:w-1/3 bg-white rounded-xl border border-gray-200 overflow-hidden`}
        >
          <div className="p-4 lg:p-2 xl:p-4">
            <div className="mb-2">
              <div className="flex justify-between items-center ">
                <h2 className="font-medium text-gray-800">Conversations</h2>
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded-md">
                  {conversations.length}
                </span>
              </div>
              <p className="text-gray-400 text-sm">Active and pending chats</p>
            </div>
            {/* Search */}
            <div className="relative mb-2">
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full bg-gray-100 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-purple-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Custom Dropdown Filter */}
            <div className="flex gap-2">
              <div className="relative flex-1" ref={dropdownRef}>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-all"
                >
                  {filter}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isFilterOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isFilterOpen && (
                  <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 py-1 animate-in fade-in slide-in-from-top-2">
                    {filterOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setFilter(opt);
                          setIsFilterOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 flex justify-between items-center"
                      >
                        {opt}
                        {filter === opt && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
                <Filter size={18} />
              </button>
            </div>
          </div>

          {/* List items */}
          <div className="flex-1 space-y-1 overflow-y-auto px-4 lg:px-2 xl:px-4 pb-4">
            {conversations
              .filter((c) =>
                c.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => {
                    setActiveId(conv.id);
                    setShowMobileList(false);
                  }}
                  className={`p-4 lg:p-2 xl:p-4  cursor-pointer transition-all rounded-xl ${
                    conv.status === "active"
                      ? "border-l-4  border-primary"
                      : "border-l-4  border-red-400"
                  } ${
                    activeId === conv.id
                      ? "bg-[#EFF6FF] "
                      : "bg-white hover:bg-gray-50 "
                  }`}
                >
                  <div className="w-full flex items-center gap-2">
                    <div className="relative">
                      <img
                        src={conv.avatar}
                        alt={conv.name}
                        className="w-8 h-8 rounded-full "
                      />
                    </div>
                    <div className="w-full flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-sm text-gray-900 truncate">
                          {conv.name}
                        </h4>
                        <p className="text-xs text-gray-500 truncate ">
                          {conv.location}
                        </p>
                      </div>
                      <div className="flex flex-col justify-end items-end gap-1">
                        <span
                          className={`text-xs px-2 py-1 rounded  ${
                            conv.status === "active"
                              ? "text-[#016630] bg-[#DCFCE7]"
                              : "text-[#894B00] bg-[#FEF9C2]"
                          }`}
                        >
                          {conv.status}
                        </span>
                        {conv.unread > 0 && (
                          <span className="bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 truncate mt-1">
                      {conv.lastMessage}
                    </p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-gray-500 font-medium">
                        {conv.path}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-400">
                          {conv.time}
                        </span>
                        {conv.urgent && (
                          <AlertTriangle size={14} className="text-red-500" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* --- RIGHT PANEL: Chat View --- */}
        <div
          className={`${
            !showMobileList ? "flex" : "hidden"
          } lg:flex flex-1 flex-col bg-white rounded-xl border border-gray-200 overflow-hidden`}
        >
          {/* Chat Header */}
          <div className="p-2 sm:p-4 lg:p-2 xl:p-4 border-b border-gray-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowMobileList(true)}
                className="lg:hidden p-1 text-gray-500"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="w-10 h-10 bg-primary/90 text-white rounded-full flex items-center justify-center font-bold">
                {activeChat?.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-900">
                    {activeChat?.name}
                  </h3>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-md">
                    online
                  </span>
                </div>
                <div className="flex items-center gap-1 xl:gap-2 text-[10px] xl:text-sm text-[#717182] ">
                  <span>Session: {activeChat?.session}</span>
                  <span>•</span>
                  <span>{activeChat?.path}</span>
                  <span>•</span>
                  <span>{activeChat?.location}</span>
                </div>
              </div>
            </div>
            <div
              className="flex items-center gap-3 lg:gap-1 xl:gap-3 relative"
              ref={menuRef}
            >
              <span className="hidden sm:inline text-xs bg-green-100 text-green-600 px-2 py-1 rounded-md">
                active
              </span>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-1.5 rounded-lg transition-colors ${
                  isOpen
                    ? "bg-slate-100 text-slate-900"
                    : "text-gray-500 hover:bg-slate-50"
                }`}
              >
                <MoreHorizontal size={18} />
              </button>

              {/* Action Menu Modal */}
              {isOpen && (
                <div className="absolute right-0 top-10 w-48 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 z-50 py-1 animate-in fade-in zoom-in-95 duration-100">
                  <MenuOption
                    icon={<CheckCircle size={16} />}
                    label="Mark as Resolved"
                    onClick={() => setIsOpen(false)}
                  />

                  <MenuOption
                    icon={<ArrowRight size={16} />}
                    label="Transfer Chat"
                    onClick={() => setIsOpen(false)}
                  />

                  <div className="my-1 border-t border-slate-50" />

                  <MenuOption
                    icon={<UserX size={16} />}
                    label="End Chat"
                    variant="danger"
                    onClick={() => setIsOpen(false)}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50/30">
            {activeChat?.messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.type === "agent" ? "items-end" : "items-start"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {renderAvatar(msg.type, activeChat?.name)}
                  <span className="text-xs text-gray-500">{msg.sender}</span>
                  <span className="text-[11px] text-gray-400">{msg.time}</span>
                </div>
                <div
                  className={`max-w-[85%] md:max-w-[70%] p-3 rounded-2xl text-sm ${
                    msg.type === "agent"
                      ? "bg-primary/90 text-white rounded-tr-none "
                      : msg.type === "ai"
                      ? "bg-purple-50 text-primary border border-purple-100 rounded-tl-none"
                      : "bg-gray-100 text-gray-800 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-100">
            {/* Suggested Replies */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-medium text-gray-500">
                  AI Suggested Replies:
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="border px-2 py-1 border-[#6B69B2]/50 font-bold text-[#6B69B2] flex items-center text-[11px] gap-2 rounded-md hover:bg-purple-50 transition-colors"
                >
                  <Plus size={14} /> Add Quick Message
                </button>
              </div>
              <div className="flex flex-wrap gap-2 overflow-y-auto max-h-[150px]">
                {messages.map((msg, idx) => (
                  <button
                    key={idx}
                    className="text-xs bg-white border border-gray-200 hover:border-[#6B69B2] hover:text-[#6B69B2] text-gray-800 py-2 px-3 rounded-lg flex items-center gap-2 transition-all shadow-sm active:scale-95 text-left "
                  >
                    <Zap size={14} className="text-[#6B69B2] shrink-0" />
                    {msg}
                  </button>
                ))}
                {isModalOpen && (
                  <AddMessageModal
                    onClose={() => setIsModalOpen(false)}
                    onAdd={addMessage}
                  />
                )}
              </div>
            </div>

            <form
              onSubmit={handleSendMessage}
              className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl"
            >
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 px-2"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <Paperclip size={20} />
              </button>
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <Smile size={20} />
              </button>
              <button
                type="submit"
                className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md shadow-purple-200"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
const MenuOption = ({ icon, label, onClick, variant = "default" }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors
      ${
        variant === "danger"
          ? "text-red-500 hover:bg-red-50"
          : "text-slate-700 hover:bg-slate-50"
      }`}
  >
    <span className={variant === "danger" ? "text-red-500" : "text-slate-400"}>
      {icon}
    </span>
    {label}
  </button>
);
const AddMessageModal = ({ onClose, onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  // Handle Backdrop Click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 pb-0 flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Add Quick Message
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Create a new AI Suggested Replies
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium  text-slate-700">
              Quick Message
            </label>
            <textarea
              autoFocus
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter Quick Message"
              className="w-full h-32 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 outline-none focus:border-slate-300 transition-all resize-none"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-2 pt-0 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-200 text-sm  text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onAdd(inputValue)}
            className="px-4 py-2 rounded-lg bg-[#6B69B2] text-white text-sm  hover:bg-[#5a58a0] flex items-center gap-2"
          >
            <Plus size={16} /> Add Quick Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChatComponent;
