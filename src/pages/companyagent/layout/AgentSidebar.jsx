import {
  Settings,
  Bell, 
  LayoutDashboard,
  MessageSquare,
  MessageCircle
} from "lucide-react"; // Importing Lucide icons
import { images } from "../../../assets";
import { NavLink} from "react-router-dom";

const AgentSidebar = () => {

  return (
    <div className="w-64 md:w-56 2xl:w-64 h-full bg-white border-r border-gray-200 flex flex-col justify-between p-4 md:p-2 lg:p-4">
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
         to="/company-agent/dashboard"
        />
          <SidebarItem
            name="Chat Monitoring"
            icon={<MessageSquare size={20}/>}
            to="/company-agent/chat-monitoring"
          />
          <SidebarItem
            name="Chat History"
            icon={<MessageCircle size={20}/>}
            to="/company-agent/chat-history"
          />
        <SidebarItem
          name="Profile & Setting"
          icon={<Settings size={20}/>}
          to="/company-agent/profile-setting"
        />
          <SidebarItem
            name="Notifications"
            icon={<Bell size={20}/>}
            to="/company-agent/notification"
          />
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
export default AgentSidebar;