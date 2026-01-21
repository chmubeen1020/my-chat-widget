import React, { useState, useRef, useEffect } from 'react';
import { X,  ChevronDown, Send, User, Check, UserPlus } from 'lucide-react';
import { createPortal } from 'react-dom';

const ReassignChatModal = ({ isOpen, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);
  const [priorityPosition, setPriorityPosition] = useState({
  top: 0,
  left: 0,
  width: 0,
});
const [priority, setPriority] = useState("Normal Priority");

const priorityRef = useRef(null);
  const dropdownRef = useRef(null);

  // Dummy data for agents
  const agents = [
    { id: 1, name: 'Mike Chen', role: 'Support', status: 'Available' },
    { id: 2, name: 'Emma Davis', role: 'Technical', status: 'Available' },
    { id: 3, name: 'John Smith', role: 'Billing', status: 'Busy' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
          if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }

    if (
      priorityRef.current &&
      !priorityRef.current.contains(event.target)
    ) {
      setIsPriorityOpen(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      {/* Modal Container */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col max-h-[95vh] overflow-hidden"onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="p-5 flex items-start justify-between border-b border-slate-50">
          <div className="flex gap-3">
            <div className="p-1">
              <UserPlus size={20} className='text-primary'/>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800">Reassign Chat #1</h2>
              <p className="text-sm text-slate-500">Transfer this conversation from Sarah Johnson to another available agent.</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 overflow-y-auto">
          
          {/* User Info Card */}
          <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                A
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Anonymous User #1847</div>
                <div className="text-xs text-slate-400 font-medium">Support, Technical • 5m 32s</div>
              </div>
            </div>
            <p className="text-sm text-slate-500 italic">Last message: "Thank you for your help!"</p>
          </div>

          {/* Custom Agent Dropdown */}
          <div className="space-y-1.5" ref={dropdownRef}>
            <label className="text-sm font-bold text-slate-700">Select New Agent</label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-left flex items-center justify-between hover:border-indigo-300 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/10"
              >
                <span className={selectedAgent ? 'text-slate-800 font-medium' : 'text-slate-400'}>
                  {selectedAgent ? selectedAgent.name : 'Choose an available agent'}
                </span>
                <ChevronDown size={18} className={`text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-10 py-2 animate-in slide-in-from-top-2 duration-200">
                  {agents.map((agent) => (
                    <button
                      key={agent.id}
                      onClick={() => {
                        setSelectedAgent(agent);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-slate-50 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                          <User size={14} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-700">{agent.name}</div>
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">{agent.role}</div>
                        </div>
                      </div>
                      {selectedAgent?.id === agent.id && <Check size={16} className="text-indigo-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Transfer Note */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700">Transfer Note (Optional)</label>
            <textarea 
              placeholder="Add context for the new agent about this conversation..."
              rows={3}
              className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm resize-none focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all"
            />
          </div>

          {/* Priority Level */}
          <div className="space-y-1.5" ref={priorityRef}>
  <label className="text-sm font-bold text-slate-700">Priority Level</label>

  <div className="relative">
    <button
  onClick={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPriorityPosition({
      top: rect.bottom + window.scrollY + 8, // margin-top
      left: rect.left + window.scrollX,
      width: rect.width,
    });

    setIsPriorityOpen((p) => !p);
  }}
  className="
    w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl
    text-sm text-left flex items-center justify-between
    hover:border-indigo-300 transition-all
    focus:outline-none focus:ring-2 focus:ring-indigo-500/10
  "
>
      <span className="text-slate-800 font-medium">{priority}</span>
      <ChevronDown
        size={18}
        className={`text-slate-400 transition-transform ${
          isPriorityOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    {isPriorityOpen &&
  createPortal(
    <div
      style={{
        top: priorityPosition.top,
        left: priorityPosition.left,
        width: priorityPosition.width,
      }}
      className="
        fixed z-[999]
        bg-white border border-slate-200 rounded-xl shadow-xl
        py-2
        animate-in slide-in-from-top-2 duration-200
      "
    >
      {["Normal Priority", "High Priority", "Urgent"].map((level) => (
        <button
          key={level}
          onClick={() => {
            setPriority(level);
            setIsPriorityOpen(false);
          }}
          className="
            w-full px-4 py-2 text-left
            hover:bg-slate-50 flex items-center justify-between
          "
        >
          <span className="text-sm font-medium text-slate-700">
            {level}
          </span>

          {priority === level && (
            <Check size={16} className="text-indigo-600" />
          )}
        </button>
      ))}
    </div>,
    document.body
  )}

  </div>
</div>


          {/* Toggle Switch */}
          <div className="flex items-center gap-2 py-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#6B69B2]"></div>
            </label>
            <span className="text-sm font-medium text-slate-600">Notify customer about agent change</span>
            
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-50 flex items-center justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-2 text-sm font-bold text-slate-600 border border-gray-200 rounded-xl transition-all"
          >
            Cancel
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white text-sm font-bold rounded-xl  hover:bg-[#5a58a0] transition-all active:scale-95">
            <Send size={16} className="rotate-45" /> Reassign Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReassignChatModal;