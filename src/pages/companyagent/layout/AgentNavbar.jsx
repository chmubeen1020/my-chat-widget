import React from 'react';
import { Search, Bell, Menu} from 'lucide-react'; // Importing Lucide icons
import { images } from '../../../assets';


const AgentNavbar = ({onMenuClick}) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
      <div className='md:hidden'>
        <Menu size={20} onClick={onMenuClick}/>
      </div>
      {/* Search Bar */}
      <div className="flex items-center border border-gray-200 bg-[#F9FAFB] rounded-lg p-2 w-1/2">
        <Search className="text-gray-500 mr-2" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full border-none bg-[#F9FAFB] focus:outline-none placeholder:text-gray-400" 
        />
      </div>

      {/* User Profile Section */}
      <div className="flex items-center space-x-4">
        {/* Notifications Icon */}
        <div className="relative">
          <Bell className="text-gray-500" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">1</span>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img 
            src={images.Profile}
            alt="User" 
            className="w-8 h-8 rounded-full object-cover" 
          />
          <div className="hidden md:block text-sm">
            <p className="font-semibold">John Doe</p>
            <p className="text-gray-500">Company Admin</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentNavbar