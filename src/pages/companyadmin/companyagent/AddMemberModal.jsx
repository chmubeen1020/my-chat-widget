import React, { useEffect, useRef } from 'react';
import { X, UserPlus, Send } from 'lucide-react';

const AddTeamMemberModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    
    useEffect(() => {
    // 2. Function to handle the click
    const handleOutsideClick = (event) => {
        // If the ref exists and the clicked element is NOT inside the ref
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };
    
    // 3. Attach listener if the modal is open
    if (isOpen) {
        document.addEventListener('mousedown', handleOutsideClick);
    }
    
    // 4. Cleanup the listener when modal closes or component unmounts
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
}, [isOpen, onClose]);

if (!isOpen) return null;

return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      {/* Modal Container */}
      <div ref={modalRef} className="bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[70vh] lg:max-h-[96vh] animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="px-6 pt-3 border-slate-100 flex items-start justify-between">
          <div className="flex gap-3">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg h-fit">
              <UserPlus size={16} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800">Add New Team Member</h2>
              <p className="text-sm text-slate-500 mt-1">Create a new agent account and configure their permissions and settings.</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-2 space-y-4">
          
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="text-sm font-semibold text-slate-700">Full Name *</label>
              <input type="text" placeholder="Enter full name" className="w-full px-4 py-1 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
            </div>
            <div >
              <label className="text-sm font-semibold text-slate-700">Email Address *</label>
              <input type="email" placeholder="Enter email address" className="w-full px-4 py-1 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
            </div>
          </div>

          {/* Row 2: Phone & Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div >
              <label className="text-sm font-semibold text-slate-700">Phone Number</label>
              <input type="tel" placeholder="Enter phone number" className="w-full px-4 py-1 bg-slate-50 border border-slate-200 rounded-md text-sm" />
            </div>
            <div >
              <label className="text-sm font-semibold text-slate-700">Role *</label>
              <div className="relative">
                <select className="w-full px-4 py-1 bg-slate-50 border border-slate-200 rounded-md text-sm appearance-none focus:outline-none">
                  <option>Agent - Handle customers</option>
                  <option>Admin - Manage team</option>
                  <option>Viewer - View only</option>
                </select>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                   {/* Icon logic can go here */}
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Row 3: Department & Chats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div >
              <label className="text-sm font-semibold text-slate-700">Department *</label>
              <select className="w-full px-4 py-1 bg-slate-50 border border-slate-200 rounded-md text-sm">
                <option>Select department</option>
                <option>Support</option>
                <option>Sales</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Max Concurrent Chats</label>
              <input type="number" defaultValue={5} className="w-full px-4 py-1 bg-slate-50 border border-slate-200 rounded-md text-sm" />
            </div>
          </div>

          {/* Row 4: Timezone & Working Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div >
              <label className="text-sm font-semibold text-slate-700">Timezone</label>
              <select className="w-full px-4 py-1 bg-slate-50 border border-slate-200 rounded-md text-sm">
                <option>UTC</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
            <div >
              <label className="text-sm font-semibold text-slate-700">Working Hours</label>
              <input type="text" placeholder="9 AM - 5 PM" className="w-full px-4 py-1 bg-slate-50 border border-slate-200 rounded-md text-sm" />
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <label className="text-sm font-semibold text-slate-700">Skills</label>
            <p className="text-xs text-slate-400">Add relevant skills for this agent</p>
            <div className="flex gap-2">
              <select className="flex-1 px-4 py-1 bg-slate-50 border border-slate-200 rounded-md text-sm">
                <option>Select a skill</option>
                <option>Technical Support</option>
                <option>Billing</option>
              </select>
              <button className="p-1 bg-[#6B69B2] text-white rounded-md hover:bg-[#5a58a0] transition-colors">
                <X size={16} className="rotate-45" />
              </button>
            </div>
          </div>

          {/* Languages Section */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Languages</label>
            <p className="text-xs text-slate-400">Languages this agent can support</p>
            <select className="w-full px-4 py-1 bg-slate-50 border border-slate-200 rounded-md text-sm">
              <option>Add a language</option>
              <option>English</option>
              <option>Spanish</option>
            </select>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-lg border border-indigo-100">
                English
              </span>
            </div>
          </div>

          {/* Bio Section */}
          <div >
            <label className="text-sm font-semibold text-slate-700">Bio (Optional)</label>
            <textarea 
              rows={3} 
              placeholder="Brief description about the agent's background and expertise..." 
              className="w-full px-4 py-1 bg-slate-50 border border-slate-200 rounded-md text-sm resize-none focus:outline-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 flex items-center justify-end gap-3 rounded-b-2xl">
          <button 
            onClick={onClose}
            className="px-6 py-1 text-sm  text-slate-600 hover:bg-slate-100 rounded-md border border-slate-200 transition-colors bg-white"
          >
            Cancel
          </button>
          <button 
            className="px-6 py-1 text-sm  text-white bg-[#6B69B2] hover:bg-[#5a58a0] rounded-md flex items-center gap-2 transition-all active:scale-95"
          >
            <Send size={16} /> Send Invitation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTeamMemberModal;