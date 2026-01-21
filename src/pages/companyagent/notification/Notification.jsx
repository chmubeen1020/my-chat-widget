import React, { useState, useMemo } from 'react';
import { 
  MessageSquare, Star, Settings, CheckCircle, 
  MoreHorizontal, ExternalLink, ChevronLeft, 
  ChevronRight, Filter, 
  Clock
} from 'lucide-react';

// --- Dummy Data Generator ---
const INITIAL_NOTIFICATIONS = [
  { id: 1, type: 'chat', priority: 'Normal', title: 'New Chat Assigned', message: 'A new chat from Sarah Wilson has been assigned to you', timestamp: '10/14/2024', sender: 'Sarah Wilson', isRead: false },
  { id: 2, type: 'feedback', priority: 'Normal', title: 'Visitor Feedback Received', message: 'Mike Johnson rated your service 5 stars with positive feedback', timestamp: '10/14/2024', sender: 'Mike Johnson', rating: '5/5', isRead: false },
  { id: 3, type: 'chat', priority: 'High', title: 'Chat Reassigned to You', message: 'A chat from Lisa Chen has been transferred to you by Emma Wilson', timestamp: '10/14/2024', sender: 'Lisa Chen', isRead: true },
  { id: 4, type: 'system', priority: 'Low', title: 'System Update', message: 'New AI suggestions feature is now available in chat interface', timestamp: '10/14/2024', isRead: true },
  { id: 5, type: 'performance', priority: 'Normal', title: 'Daily Performance Summary', message: 'You handled 24 chats today with an average rating of 4.8/5', timestamp: '10/14/2024', isRead: true },
  { id: 6, type: 'feedback', priority: 'Normal', title: 'Visitor Feedback Received', message: 'David Miller left feedback: "Excellent support! Very professional."', timestamp: '10/14/2024', sender: 'David Miller', rating: '5/5', isRead: true },
  { id: 7, type: 'chat', priority: 'High', title: 'High Priority Chat Assigned', message: 'Urgent chat from Enterprise Client - ABC Corp needs immediate attention', timestamp: '10/14/2024', sender: 'ABC Corp', isRead: false },
  { id: 8, type: 'system', priority: 'Low', title: 'Break Reminder', message: "You've been active for 3 hours. Consider taking a break.", timestamp: '10/14/2024', isRead: true },
  // Adding extra items for pagination
  { id: 9, type: 'chat', priority: 'Normal', title: 'Follow-up Required', message: 'Customer John Doe is waiting for a response.', timestamp: '10/14/2024', sender: 'John Doe', isRead: false },
  { id: 10, type: 'performance', priority: 'Normal', title: 'Weekly Milestone', message: 'You reached 100 resolved tickets this week!', timestamp: '10/13/2024', isRead: true },
  { id: 11, type: 'system', priority: 'High', title: 'Security Alert', message: 'A new login was detected from a new device.', timestamp: '10/13/2024', isRead: false },
  { id: 12, type: 'feedback', priority: 'Normal', title: 'New Review', message: 'Anna Smith left a 4/5 star rating.', timestamp: '10/13/2024', sender: 'Anna Smith', rating: '4/5', isRead: true },
  { id: 13, type: 'chat', priority: 'Low', title: 'Inquiry', message: 'Pricing question from Guest_442.', timestamp: '10/13/2024', sender: 'Guest_442', isRead: true },
  { id: 14, type: 'system', priority: 'Low', title: 'Maintenance Notice', message: 'Server maintenance scheduled for midnight.', timestamp: '10/12/2024', isRead: true },
  { id: 15, type: 'performance', priority: 'Normal', title: 'CSAT Update', message: 'Your Customer Satisfaction score rose by 2%.', timestamp: '10/12/2024', isRead: false },
];

const ActivityFeed = () => {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [filterType, setFilterType] = useState('All Types');
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState(null);
  const itemsPerPage = 10;

  // --- Handlers ---
  const toggleRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: !n.isRead } : n));
    setOpenMenuId(null);
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  // --- Filtered & Paginated Data ---
  const filteredData = useMemo(() => {
    return notifications.filter(n => {
      const typeMatch = filterType === 'All Types' || n.type === filterType.toLowerCase();
      const readMatch = unreadOnly ? !n.isRead : true;
      return typeMatch && readMatch;
    });
  }, [notifications, filterType, unreadOnly]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // --- Styling Helpers ---
  const getPriorityStyles = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-400 text-white';
      case 'Normal': return 'bg-primary/10 text-blue-500';
      case 'Low': return 'bg-gray-100 text-gray-500';
      default: return 'bg-gray-100 text-gray-500';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'chat': return <MessageSquare size={18} className="text-primary" />;
      case 'feedback': return <Star size={18} className="text-yellow-500" />;
      case 'system': return <Settings size={18} className="text-gray-500" />;
      case 'performance': return <CheckCircle size={18} className="text-green-500" />;
      default: return <Settings size={18} />;
    }
  };

  const getBorderColor = (type) => {
    switch (type) {
      case 'chat': return 'border-l-primary';
      case 'feedback': return 'border-l-yellow-500';
      case 'system': return 'border-l-gray-300';
      case 'performance': return 'border-l-green-500';
      default: return 'border-l-gray-200';
    }
  };

  return (
    <div className="mt-2 ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Notifications</h1>
          <p className="text-sm text-gray-500">Stay updated with chat assignments and system alerts</p>
        </div>
        <button 
          onClick={markAllRead}
          className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          <CheckCircle size={16} />
          Mark All Read
        </button>
      </div>

      {/* Main Feed Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Activity Feed</h2>
            <p className="text-xs text-gray-400">All your notifications and alerts</p>
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative inline-block text-left w-full sm:w-40">
              <select 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="block w-full pl-3 pr-10 py-1.5 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
              >
                <option>All Types</option>
                <option>Chat</option>
                <option>Feedback</option>
                <option>System</option>
                <option>Performance</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <Filter size={14} />
              </div>
            </div>

            <button 
              onClick={() => setUnreadOnly(!unreadOnly)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm transition-all whitespace-nowrap ${unreadOnly ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              <Filter size={14} />
              Unread Only
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="px-2 space-y-1">
          {paginatedData.map((item) => (
            <div 
              key={item.id} 
              onClick={() => !item.isRead && toggleRead(item.id)}
              className={`relative group flex flex-col md:flex-row gap-2 md:gap-4 p-2 md:p-5 border-l-4 transition-all duration-200 hover:bg-gray-50 cursor-pointer rounded-xl ${getBorderColor(item.type)} ${!item.isRead ? 'bg-gray-50' : 'bg-white'}`}
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 md:mt-1">
                <div className="p-2 ">
                  {getTypeIcon(item.type)}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow md:space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-gray-900 leading-tight">{item.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] uppercase font-medium tracking-wider  px-2 py-0.5 rounded ${getPriorityStyles(item.priority)}`}>
                      {item.priority}
                    </span>
                    {!item.isRead && (
                      <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">{item.message}</p>
                
                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} /> {item.timestamp}
                  </span>
                  {item.sender && (
                    <span className="flex items-center gap-1.5  text-gray-500">
                      <MessageSquare size={12} /> {item.sender}
                    </span>
                  )}
                  {item.rating && (
                    <span className="flex items-center gap-1.5 text-yellow-400 ">
                      <Star size={14} fill="currentColor" /> <span className='text-gray-500'>{item.rating}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Action Side */}
              <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                {item.type === 'chat' && (
                  <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors 5">
                    View Chat
                    <ExternalLink size={12} />
                  </button>
                )}
                
                <div className="relative">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenuId(openMenuId === item.id ? null : item.id);
                    }}
                    className="p-1.5 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <MoreHorizontal size={20} />
                  </button>

                  {/* Dropdown Menu */}
                  {openMenuId === item.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50 py-1">
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleRead(item.id); }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                      >
                        {item.isRead ? 'Mark as Unread' : 'Mark as Read'}
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                        Delete Notification
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="p-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredData.length)}</span> of <span className="font-medium">{filteredData.length}</span> results
          </p>
          <div className="flex gap-2">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="p-2 rounded-md border border-gray-300 bg-white disabled:opacity-50 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="p-2 rounded-md border border-gray-300 bg-white disabled:opacity-50 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;