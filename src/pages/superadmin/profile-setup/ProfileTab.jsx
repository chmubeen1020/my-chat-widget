import { Upload } from 'lucide-react';

const ProfileTab = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* Profile Picture Card */}
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center ">
      <h3 className="text-lg font-semibold w-full mb-1">Profile Picture</h3>
      <p className="text-slate-400 text-sm w-full mb-6">Update your avatar image</p>
      
      <div className="relative mb-4">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
          alt="Avatar" 
          className="w-32 h-32 rounded-full object-cover border-4 border-slate-50"
        />
      </div>
      <p className="font-semibold text-slate-800">Alex Johnson</p>
      <p className="text-slate-400 text-sm mb-6">Super Administrator</p>
      
      <button className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
        <Upload size={16} />
        Upload New
      </button>
    </div>

    {/* Basic Info Card */}
    <div className="lg:col-span-2 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
      <h3 className="text-lg font-semibold mb-1">Basic Information</h3>
      <p className="text-slate-400 text-sm mb-2">Update your personal details</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">First Name</label>
          <input type="text" defaultValue="Alex" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500/20" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Last Name</label>
          <input type="text" defaultValue="Johnson" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500/20" />
        </div>
        <div className="md:col-span-2 space-y-1">
          <label className="text-sm font-medium text-slate-700">Email Address</label>
          <input type="email" defaultValue="alex.johnson@techween.com" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Phone Number</label>
          <input type="text" defaultValue="+1 (555) 123-4567" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Location</label>
          <input type="text" defaultValue="San Francisco, CA" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg outline-none" />
        </div>
        <div className="md:col-span-2 space-y-1">
          <label className="text-sm font-medium text-slate-700">Bio</label>
          <textarea 
            rows="3" 
            defaultValue="Experienced platform administrator with 8+ years managing SaaS infrastructure and multi-tenant systems."
            className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg outline-none resize-none"
          />
        </div>
      </div>
    </div>
  </div>
);

export default ProfileTab;