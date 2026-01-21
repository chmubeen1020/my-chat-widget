import React, { useState } from "react";
import {
  Copy,
  BarChart2,
  Edit3,
  Trash2,
  Globe,
  X,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EditPromoModal from "./EditPromoCode";

const ExpiredInActive = () => {
  // 1. Corrected the setter name to setPromos (plural) for clarity
  const [promos, setPromos] = useState([
    {
      id: 1, // Added IDs for better list management
      code: "PARTNER10",
      description: "Partner referral discount",
      discount: "10% OFF",
      usage: 234,
      limit: 1000,
      validUntil: "Dec 31, 2025",
      type: "Global",
      status: "Expired",
    },
    {
      id: 2,
      code: "WELCOME20",
      description: "New user welcome discount",
      discount: "20% OFF",
      usage: 50,
      limit: 500,
      validUntil: "Nov 15, 2025",
      type: "Regional",
      status: "Inactive",
    },
    {
      id: 3,
      code: "BLACKFRIDAY",
      description: "Holiday season sale",
      discount: "50% OFF",
      usage: 800,
      limit: 1000,
      validUntil: "Dec 01, 2025",
      type: "Global",
      status: "Inactive",
    },
  ]);

  const [modal, setModal] = useState({ type: null, data: null });

  const closeModal = () => setModal({ type: null, data: null });

  // Logic to update the promo in the main list
  const handleUpdatePromo = (updatedData) => {
    setPromos(prev => prev.map(p => p.id === updatedData.id ? updatedData : p));
    closeModal();
  };

  // Logic to delete the promo
  const handleDeletePromo = (id) => {
    setPromos(prev => prev.filter(p => p.id !== id));
    closeModal();
  };

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-100">
      <table className="w-full text-left border-collapse min-w-[800px]">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100">
            <th className="px-6 py-4 text-xs font-medium text-slate-600 uppercase">Code</th>
            <th className="px-6 py-4 text-xs font-medium text-slate-600 uppercase">Description</th>
            <th className="px-6 py-4 text-xs font-medium text-slate-600 uppercase">Discount</th>
            <th className="px-6 py-4 text-xs font-medium text-slate-600 uppercase">Usage</th>
            <th className="px-6 py-4 text-xs font-medium text-slate-600 uppercase">Valid Until</th>
            <th className="px-6 py-4 text-xs font-medium text-slate-600 uppercase">Type</th>
            <th className="px-6 py-4 text-xs font-medium text-slate-600 uppercase">Status</th>
            <th className="px-6 py-4 text-xs font-medium text-slate-600 uppercase text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {promos.map((promo) => (
            <tr key={promo.id} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm px-2 py-1 bg-slate-100 rounded-lg text-slate-700 font-medium">{promo.code}</span>
                  <Copy size={14} className="text-slate-400 cursor-pointer hover:text-slate-600" onClick={() => navigator.clipboard.writeText(promo.code)} />
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">{promo.description}</td>
               <td className="px-2 md:px-6 py-4 min-w-[150px] lg:w-auto">
              <span className="text-xs  px-2.5 py-1 border border-slate-200 rounded-full text-slate-600">
                {promo.discount}
              </span>
            </td>
              <td className="px-2 md:px-6 py-4">
                <div className="w-full min-w-[70px]">
                  <div className="flex justify-between text-xs mb-1">
                    <span className=" text-slate-700">{promo.usage} / {promo.limit}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${(promo.usage / promo.limit) * 100}%` }}></div>
                  </div>
                </div>
              </td>
              <td className="px-2 md:px-6 py-4 text-sm text-slate-500 min-w-[150px] lg:w-auto">
              {promo.validUntil}
            </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full w-fit">
                  <Globe size={12} /> {promo.type}
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${promo.status === "Active" ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100'}`}>
                  {promo.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-center gap-3 text-slate-400">
                  <button onClick={() => setModal({ type: "view", data: promo })} className="hover:text-primary transition-colors p-1"><BarChart2 size={18} /></button>
                  <button onClick={() => setModal({ type: "edit", data: promo })} className="hover:text-primary transition-colors p-1"><Edit3 size={18} /></button>
                  <button onClick={() => setModal({ type: "delete", data: promo })} className="hover:text-rose-600 transition-colors p-1"><Trash2 size={18} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modals Management */}
      <AnimatePresence>
        {modal.type && modal.data && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
              {/* VIEW HISTORY MODAL */}
              {modal.type === "view" && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="font-medium">Usage History: {modal.data.code}</h2>
                    <X className="cursor-pointer text-slate-500" onClick={closeModal} />
                  </div>
                  <p className="mb-6 text-gray-500 text-sm">View analytics for this promo code</p>
                  
                  <div className="grid grid-cols-3 bg-slate-50 gap-4 mb-8 rounded-xl p-4">
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Total Uses</p>
                      <p className="text-lg font-medium">{modal.data.usage} / {modal.data.limit}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Discount</p>
                      <p className="text-lg font-medium">{modal.data.discount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Savings</p>
                      <p className="text-lg font-medium">$1,240</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-bold text-slate-400 uppercase">Recent Activity</p>
                    <div className="flex justify-between text-xs py-2 border-b border-slate-50 text-slate-500">
                      <span>Startup Labs</span>
                      <span className="text-emerald-500 font-bold">-$15.00</span>
                      <span>Oct 10, 2024</span>
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <button onClick={closeModal} className="px-6 py-2 bg-primary text-white rounded-xl text-sm font-medium">Close</button>
                  </div>
                </div>
              )}

              {/* EDIT MODAL */}
              {modal.type === "edit" && (
                <EditPromoModal
                  isOpen={true}
                  closeModal={closeModal}
                  promo={modal.data}
                  setPromo={handleUpdatePromo} // Uses the handler to update the list
                />
              )}

              {/* DELETE MODAL */}
              {modal.type === "delete" && (
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-red-50 text-red-500 rounded-2xl">
                      <AlertTriangle size={28} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-800">Delete Promo Code</h2>
                      <p className="text-sm text-slate-500">This action cannot be undone.</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                    Are you sure you want to delete <span className="font-bold text-slate-800">"{modal.data.code}"</span>? All history associated with this code will be archived.
                  </p>
                  <div className="flex justify-end gap-3">
                    <button onClick={closeModal} className="px-6 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50">Cancel</button>
                    <button onClick={() => handleDeletePromo(modal.data.id)} className="px-6 py-2.5 bg-red-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-red-100 hover:bg-red-600">Delete Promo Code</button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpiredInActive;