import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CompanySidebar from './CompanySidebar';
import CompanyNavbar from './CompanyNavbar';

const CompanyLayout = () => {
  // State to handle sidebar visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Mobile Overlay: Closes sidebar when clicking outside on small screens */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden" 
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-30 md:z-0 w-64 md:w-56 2xl:w-64 bg-white transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Pass closeSidebar to the sidebar so menu items can close it on mobile */}
        <CompanySidebar closeSidebar={closeSidebar} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Navbar: Pass toggleSidebar to handle the hamburger click */}
        <div className="sticky top-0 z-10 md:z-0 bg-white border-b border-gray-100">
          <CompanyNavbar onMenuClick={toggleSidebar} />
        </div>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-0 md:px-6 md:py-2 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default CompanyLayout;