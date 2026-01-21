import {
  Settings,
  FileText, 
  Bell, 
  Shield, 
  Zap,
  Users,
  LayoutDashboard,
  Building2,
  Brain,
  MessageSquare,
  CreditCard
} from "lucide-react"; // Importing Lucide icons
import { images } from "../../../assets";
import { NavLink} from "react-router-dom";

const CompanySidebar = () => {

  return (
    <div className="w-64 md:w-56 2xl:w-64 h-full bg-white border-r flex flex-col justify-between p-4 md:p-2 lg:p-4 border-gray-200">
      {/* Logo Section */}
      <div>
      <div className="flex items-center justify-center py-4">
        <img src={images.Logo} alt="Logo" className="w-36 md:w-28 2xl:w-36" />
      </div>

      {/* Sidebar Items */}
      <div className=" space-y-2 md:space-y-1 2xl:space-y-2 pt-4">
        <SidebarItem
         name="Dashboard"
         icon={<LayoutDashboard size={20} />}
         to="/company-admin/dashboard"
        />
        <SidebarItem
          name="Company Profile"
          icon={<Building2 size={20}/>}
          to="/company-admin/profile"
        />
        <SidebarItem
          name="Agents"
          icon={<Users size={20}/>}
          to="/company-admin/agent"
        />
        <SidebarItem
          name="AI Training"
          icon={<Brain size={20}/>}
          to="/company-admin/ai-training"
        />
        <SidebarItem
          name="Chat Monitoring"
          icon={<MessageSquare size={20}/>}
          to="/company-admin/chat-monitoring"
        />
        <SidebarItem
          name="Widget Settings"
          icon={<Settings size={20}/>}
          to="/company-admin/widget-settings"
        />
        <SidebarItem
          name="Billing"
          icon={<CreditCard size={20}/>}
          to="/company-admin/billing"
        />
        <SidebarItem
          name="Reports"
          icon={<FileText size={20}/>}
          to="/company-admin/reports"
        />
        <SidebarItem
          name="Notifications"
          icon={<Bell size={20}/>}
          to="/company-admin/notification"
        />
        <SidebarItem
          name="Security"
          icon={<Shield size={20}/>}
          to="/company-admin/security"
        />
      </div>
      </div>

      {/* Upgrade Section */}
      <div className="border-t border-gray-200 pt-4">
      <div>
      <div className="px-4 py-4 md:py-2 md:mt-2 2xl:py-4 rounded-xl bg-[#7CEEFD]/30 space-y-4">
        <p className="text-primary flex items-center gap-2"> <Zap size={18} />Upgrade to Pro</p>
        <button className="w-full py-1 bg-primary text-white rounded-lg">
          Upgrade
        </button>
      </div>
      </div>

      {/* Footer Section */}
      <div className=" pt-4 text-sm text-gray-600 flex items-center justify-between">
        <p>v2.1.0</p>
        <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500"/>
        <p>Online</p>
      </div>
      </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ name, icon, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-4 p-2 rounded-md  transition-all
        ${
          isActive
            ? "bg-[#7CEEFD]/30 text-primary"
            : "text-gray-600 hover:bg-[#7CEEFD]/30"
        }`
      }
    >
      {icon}
      <span className="text-sm">{name}</span>
    </NavLink>
  );
};
export default CompanySidebar;