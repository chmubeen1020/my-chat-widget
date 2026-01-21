import {
  Settings,
  Bell,
  Shield,
  LayoutDashboard,
  Building2,
  CreditCard,
  ChartColumn,
  User,
  Ticket,
} from "lucide-react"; // Importing Lucide icons
import { images } from "../../../assets";
import { NavLink } from "react-router-dom";

const SuperAdminSidebar = () => {
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
            to="/super-admin/dashboard"
          />
          <SidebarItem
            name="Tenant Management"
            icon={<Building2 size={20} />}
            to="/super-admin/tenant-management"
          />
          <SidebarItem
            name="Billing & Plans"
            icon={<CreditCard size={20} />}
            to="/super-admin/billings"
          />
          <SidebarItem
            name="Promo Codes"
            icon={<Ticket size={20} />}
            to="/super-admin/promo-codes" 
          />
          <SidebarItem
            name="Platform Reports"
            icon={<ChartColumn size={20} />}
            to="/super-admin/platform-reports"
          />
          <SidebarItem
            name="Platform Settings"
            icon={<Settings size={20} />}
            to="/super-admin/platform-settings"
          />
          <SidebarItem
            name="Role & Permissions"
            icon={<Shield size={20} />}
            to="/super-admin/roles-permission"
          />
          <SidebarItem
            name="Global Notifications"
            icon={<Bell size={20} />}
            to="/super-admin/notification"
          />
          <SidebarItem
            name="Super Admin Profile"
            icon={<User size={20} />}
            to="/super-admin/profile"
          />
        </div>
      </div>

      {/* Upgrade Section */}
      <div className="border-t border-gray-200">
        {/* Footer Section */}
        <div className=" pt-4 text-sm text-gray-600 flex items-center justify-between">
          <p>v2.1.0</p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500" />
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
      end
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
export default SuperAdminSidebar;
