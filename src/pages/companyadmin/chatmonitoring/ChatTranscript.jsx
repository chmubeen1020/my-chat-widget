import React from 'react';
import { 
  X, MessageSquare, Download, FileText, Mail, 
  User, Globe, Star, ArrowRight 
} from 'lucide-react';

const ChatTranscriptModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    /* 1. Backdrop Overlay */
    <div 
      className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* 2. Modal Container */}
      <div 
        className="bg-white w-full max-w-5xl rounded-2xl shadow-xl flex flex-col max-h-[95vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between">
          <div className="flex gap-3">
            <div className="p-1 text-primary">
              <MessageSquare size={18} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Chat Transcript #1</h2>
              <p className="text-sm text-slate-500">
                Conversation with Anonymous User #1847 • 12 messages <br/> • Started 2024-01-16 14:30
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col lg:flex-row gap-6 bg-slate-50/30">
          
          {/* Left Column: Chat History */}
          <div className="flex-1 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[500px] flex flex-col space-y-4">
              
              {/* User Message */}
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] text-slate-400">14:30:05</span>
                  <span className="text-xs font-bold text-slate-700">Anonymous User #1847</span>
                </div>
                <div className="bg-indigo-50 text-slate-800 p-4 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
                  Hi, I need help with my account
                </div>
              </div>

              {/* AI Message */}
              <div className="flex flex-col items-start ">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#6B69B2] ">AI Assistant</span>
                  <span className="text-[11px] text-slate-400">14:30:08</span>
                </div>
                <div className="bg-[#DBEAFE] border border-indigo-100 text-[#6B69B2] p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm shadow-sm">
                  Hello! I'd be happy to help you with your account. What specific issue are you experiencing?
                </div>
              </div>

              {/* User Message */}
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] text-slate-400">14:30:15</span>
                  <span className="text-xs font-bold text-slate-700">Anonymous User #1847</span>
                </div>
                <div className="bg-indigo-50 text-slate-800 p-4 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
                  I can't access my dashboard
                </div>
              </div>

              {/* System/Transfer Message */}
              <div className="bg-blue-50/50 border border-blue-100 p-3 rounded-xl flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-2 text-[#6B69B2]  text-xs font-bold mb-1">
                  <ArrowRight size={14} /> Chat transferred to Sarah Johnson
                </div>
                <div className="text-[10px] text-[#6B69B2] ">14:31:15 • From AI Assistant to Sarah Johnson</div>
              </div>

              {/* Agent Message */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-700">Sarah Johnson</span>
                  <span className="text-[11px] text-slate-400">14:31:20</span>
                </div>
                <div className="bg-white text-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-100 max-w-[80%] text-sm">
                  Hi, I'm Sarah and I'll help you with this. Let me check your account status.
                </div>
              </div>
            </div>

            {/* Export Actions Footer */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
                <Download size={14} /> Export PDF
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
                <FileText size={14} /> Export TXT
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
                <Mail size={14} /> Email Transcript
              </button>
            </div>
          </div>

          {/* Right Column: Information Widgets */}
          <div className="w-full lg:w-80 space-y-4">
            
            {/* Visitor Information */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs font-medium  uppercase tracking-wider mb-4 flex items-center gap-2">
                <User size={14} /> Visitor Information
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">A</div>
                <div>
                  <div className="text-sm text-slate-800">Anonymous User #1847</div>
                  <div className="text-xs ">user1847@temp-mail.io</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm ">
                  <Globe size={14} className="text-slate-400" /> United States
                </div>
                <div className="flex items-center gap-2 text-sm ">
                  <MessageSquare size={14} className="text-slate-400" /> 12 messages
                </div>
              </div>
            </div>

            {/* Chat Details */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs font-medium uppercase tracking-wider mb-4">Chat Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="">Status</span>
                  <span className="px-2 py-0.5 bg-slate-100 rounded-md text-[10px] font-bold text-slate-600">Closed</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="">Rating</span>
                  <div className="flex text-amber-400"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="">Started</span>
                  <span className="text-slate-700 text-xs">2024-01-16 14:30</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-xs font-medium uppercase tracking-wider mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full py-2.5 px-4 text-sm border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">Reassign Chat</button>
                <button className="w-full py-2.5 px-4 text-sm border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">Send Message</button>
                <button className="w-full py-2.5 px-4 text-sm border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">Request Callback</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatTranscriptModal;