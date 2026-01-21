import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { 
  Plus, Search,  MoreHorizontal, 
  ChevronDown, X 
} from 'lucide-react';

// --- Constants & Dummy Data ---
const INITIAL_TENANTS = [
  { id: 1, company: 'Acme Corporation', industry: 'Technology', adminName: 'John Smith', adminEmail: 'john.smith@acme.com', plan: 'Enterprise', status: 'Active', amount: 299, agents: 25, lastActive: '10/3/2024' },
  { id: 2, company: 'TechStart Inc', industry: 'Startup', adminName: 'Sarah Johnson', adminEmail: 'sarah@techstart.com', plan: 'Pro', status: 'Active', amount: 99, agents: 8, lastActive: '10/3/2024' },
  { id: 3, company: 'Digital Solutions Ltd', industry: 'Consulting', adminName: 'Mike Wilson', adminEmail: 'mike@digitalsolutions.com', plan: 'Pro', status: 'Trial', amount: 0, agents: 3, lastActive: '10/2/2024' },
  { id: 4, company: 'Global Services Corp', industry: 'Services', adminName: 'Emma Davis', adminEmail: 'emma@globalservices.com', plan: 'Free', status: 'Active', amount: 0, agents: 2, lastActive: '10/1/2024' },
  { id: 5, company: 'InnovateLab', industry: 'Research', adminName: 'David Chen', adminEmail: 'david@innovatelab.com', plan: 'Enterprise', status: 'Suspended', amount: 299, agents: 15, lastActive: '9/15/2024' },
];

const PLAN_OPTIONS = [
  { label: 'Free - $0/month', value: 'Free', price: 0 },
  { label: 'Professional - $49/month', value: 'Pro', price: 49 },
  { label: 'Enterprise - $299/month', value: 'Enterprise', price: 299 },
];

const STATUS_OPTIONS = [
  { label: 'All Status', value: 'All' },
  { label: 'Active', value: 'Active' },
  { label: 'Trial', value: 'Trial' },
  { label: 'Suspended', value: 'Suspended' },
];

// --- Components ---

const Portal = ({ children }) => ReactDOM.createPortal(children, document.body);

const CustomDropdown = ({ options, value, onChange, placeholder = "Select", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 hover:border-indigo-300 transition-all shadow-sm"
      >
        <span className="truncate">{options.find(o => o.value === value)?.label || placeholder}</span>
        <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-[100] w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-xl py-1 animate-in fade-in zoom-in duration-150">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setIsOpen(false); }}
              className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
const FilterDropdown = ({ options, value, onChange, placeholder, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef(null);

  const toggleDropdown = () => {
    if (!isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      // Calculate position relative to the viewport
      setCoords({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX,
        width: rect.width
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`relative ${className}`} ref={triggerRef}>
        <button
          type="button"
          onClick={toggleDropdown}
          className="w-full flex items-center justify-between px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 hover:border-indigo-300 transition-all shadow-sm"
        >
          <span className="truncate">{options.find(o => o.value === value)?.label || placeholder}</span>
          <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <Portal>
          {/* Overlay to close on outside click */}
          <div className="fixed inset-0 z-[9998]" onClick={() => setIsOpen(false)} />
          
          <div 
            className="fixed z-[9999] bg-white border border-slate-100 rounded-xl shadow-2xl py-1 animate-in fade-in zoom-in duration-150"
            style={{ 
              top: coords.top, 
              left: coords.left, 
              width: coords.width,
              minWidth: '160px' 
            }}
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => { onChange(opt.value); setIsOpen(false); }}
                className="w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </Portal>
      )}
    </>
  );
};
const TenantManagement = () => {
  const [tenants, setTenants] = useState(INITIAL_TENANTS);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [planFilter, setPlanFilter] = useState('All');
  
  // Modal & Action State
  const [modalMode, setModalMode] = useState(null); // 'add' | 'edit' | null
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [actionMenu, setActionMenu] = useState({ visible: false, x: 0, y: 0, tenantId: null });

  // Filtered Logic
  const filteredTenants = tenants.filter(t => {
    const matchesSearch = t.company.toLowerCase().includes(search.toLowerCase()) || t.adminName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || t.status === statusFilter;
    const matchesPlan = planFilter === 'All' || t.plan === planFilter;
    return matchesSearch && matchesStatus && matchesPlan;
  });

  const handleOpenEdit = () => {
    const tenant = tenants.find(t => t.id === actionMenu.tenantId);
    setSelectedTenant({ ...tenant });
    setModalMode('edit');
    setActionMenu({ ...actionMenu, visible: false });
  };

  const handleSaveTenant = (e) => {
    e.preventDefault();
    const planData = PLAN_OPTIONS.find(p => p.value === selectedTenant.plan);
    
    if (modalMode === 'edit') {
      setTenants(tenants.map(t => t.id === selectedTenant.id ? { ...selectedTenant, amount: planData?.price || 0 } : t));
    } else {
      const newEntry = {
        ...selectedTenant,
        id: Date.now(),
        industry: 'Technology',
        status: 'Active',
        amount: planData?.price || 0,
        agents: 1,
        lastActive: new Date().toLocaleDateString(),
      };
      setTenants([newEntry, ...tenants]);
    }
    setModalMode(null);
  };

  const toggleSuspend = () => {
    setTenants(tenants.map(t => t.id === actionMenu.tenantId ? { ...t, status: t.status === 'Suspended' ? 'Active' : 'Suspended' } : t));
    setActionMenu({ ...actionMenu, visible: false });
  };

  return (
    <div className="mt-2 ">
      <div>
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-xl font-semibold">Tenant Management</h1>
            <p className="text-slate-500 text-sm">Manage all platform tenants and their subscriptions</p>
          </div>
          <button 
            onClick={() => { setSelectedTenant({ company: '', adminEmail: '', adminName: '', plan: 'Free' }); setModalMode('add'); }}
            className="flex items-center justify-center gap-2 bg-primary/90 text-white px-5 py-2 rounded-xl font-medium  hover:bg-primary transition-all"
          >
            <Plus size={18} /> Add Tenant
          </button>
        </div>

        {/* Table/Filters Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-6">
          <div className="p-4  flex flex-col lg:flex-row gap-4 justify-between bg-white relative z-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {/* FIXED DROPDOWNS */}
              <FilterDropdown 
                options={STATUS_OPTIONS} 
                value={statusFilter} 
                onChange={setStatusFilter} 
                className="w-full sm:w-40"
              />
              <FilterDropdown 
                options={[{label: 'All Plans', value: 'All'}, {label: 'Free', value: 'Free'}, {label: 'Pro', value: 'Pro'}]} 
                value={planFilter} 
                onChange={setPlanFilter} 
                className="w-full sm:w-40"
              />
            </div>
          </div>

          <div className="overflow-x-auto xl:px-4">
            <table className="w-full text-left border-none">
              <thead>
                <tr className="text-slate-700 text-[12px] xl:text-sm border-b border-slate-200">
                  <th className="px-6 py-4 font-normal">Company</th>
                  <th className="px-6 py-4 font-normal">Admin</th>
                  <th className="px-6 py-4 font-normal">Plan</th>
                  <th className="px-6 py-4 font-normal">Status</th>
                  <th className="px-6 py-4 font-normal">Amount</th>
                  <th className="px-6 py-4 font-normal">Agents</th>
                  <th className="px-6 py-4 font-normal text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredTenants.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-2">
                      <div className="flex items-center gap-3">
                        <div>
                        <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white text-xs font-bold">{t.company[0]}</div>
                        </div>
                        <div><p className="text-sm font-semibold text-slate-700">{t.company}</p><p className="text-xs text-slate-400">{t.industry}</p></div>
                      </div>
                    </td>
                    <td className="px-6 py-2">
                      <p className="text-sm font-medium text-slate-700">{t.adminName}</p>
                      <p className="text-xs text-slate-400">{t.adminEmail}</p>
                    </td>
                    <td className="px-6 py-2">
                      <span className={`px-2.5 py-1 rounded-lg text-[11px] xl:text-sm  ${t.plan === 'Enterprise' ? 'bg-purple-50 text-primary' : t.plan === 'Pro' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>{t.plan}</span>
                    </td>
                    <td className="px-6 py-2">
                      <span className={`px-2.5 py-1 rounded-lg text-[11px] xl:text-sm  ${t.status === 'Active' ? 'text-white bg-gray-500' : t.status === 'Suspended' ? 'bg-red-600 text-white' : 'bg-indigo-50 text-indigo-500'}`}>{t.status}</span>
                    </td>
                    <td className="px-6 py-2 text-sm font-bold text-slate-700">${t.amount}</td>
                    <td className="px-6 py-2 text-sm text-slate-500">{t.agents}</td>
                    <td className="px-6 py-2 text-center">
                      <button onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setActionMenu({ visible: true, x: rect.left - 130, y: rect.bottom + 8, tenantId: t.id });
                      }} className="p-1.5 text-slate-500 hover:bg-slate-100 rounded-lg"><MoreHorizontal size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Unified Add/Edit Modal */}
        {modalMode && (
          <Portal>
            <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4" onClick={() => setModalMode(null)}>
              <div className="bg-white w-full max-w-xl rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">{modalMode === 'edit' ? 'Edit Tenant' : 'Add New Tenant'}</h2>
                    <p className="text-sm text-slate-500">Update company details and admin settings</p>
                  </div>
                  <button onClick={() => setModalMode(null)} className="text-slate-400"><X size={20} /></button>
                </div>

                <form className="space-y-4" onSubmit={handleSaveTenant}>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Company Name</label>
                    <input required className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-100" value={selectedTenant.company} onChange={e => setSelectedTenant({...selectedTenant, company: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Admin Email</label>
                    <input required type="email" className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-100" value={selectedTenant.adminEmail} onChange={e => setSelectedTenant({...selectedTenant, adminEmail: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Admin Name</label>
                    <input required className="w-full px-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-100" value={selectedTenant.adminName} onChange={e => setSelectedTenant({...selectedTenant, adminName: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Plan</label>
                    <CustomDropdown options={PLAN_OPTIONS} value={selectedTenant.plan} onChange={val => setSelectedTenant({...selectedTenant, plan: val})} />
                  </div>
                  <div className="flex items-center justify-end gap-3 mt-6">
                    <button type="button" onClick={() => setModalMode(null)} className="md:w-fit px-4 py-2 border border-gray-200 rounded-xl  text-slate-500 hover:bg-slate-50">Cancel</button>
                    <button type="submit" className="md:w-fit px-4 py-2 bg-primary/90 text-white rounded-xl hover:bg-primary transition-all">
                      {modalMode === 'edit' ? 'Update Tenant' : 'Create Tenant'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Portal>
        )}

        {/* Action Menu */}
        {actionMenu.visible && (
          <Portal>
            <div className="fixed inset-0 z-20" onClick={() => setActionMenu({ ...actionMenu, visible: false })} />
            <div className="fixed z-30 bg-white border border-gray-200 rounded-xl shadow-xl py-1 min-w-[150px]" style={{ left: actionMenu.x, top: actionMenu.y }}>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50" onClick={handleOpenEdit}>Edit Tenant</button>
              <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 border-t border-gray-200" onClick={toggleSuspend}>
                {tenants.find(t => t.id === actionMenu.tenantId)?.status === 'Suspended' ? 'Activate' : 'Suspend'}
              </button>
            </div>
          </Portal>
        )}

      </div>
    </div>
  );
};

export default TenantManagement;