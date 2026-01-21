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

const ActiveCodesTab = () => {
  const [promo, setPromo] = useState({
    code: "PARTNER10",
    description: "Partner referral discount",
    discount: "10% OFF",
    usage: 234,
    limit: 1000,
    validUntil: "Dec 31, 2025",
    type: "Global",
    status: "Active",
  });

  const [modal, setModal] = useState({ type: null, data: null });

  const closeModal = () => setModal({ type: null, data: null });

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-100">
      <table className="w-full text-left border-collapse min-w-[800px]">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100">
            <th className="px-2 md:px-6 py-4 text-xs 2xl:text-sm font-medium text-slate-600 ">
              Code
            </th>
            <th className="px-2 md:px-6 py-4 text-xs 2xl:text-sm font-medium text-slate-600 ">
              Description
            </th>
            <th className="px-2 md:px-6 py-4 text-xs 2xl:text-sm font-medium text-slate-600 ">
              Discount
            </th>
            <th className="px-2 md:px-6 py-4 text-xs 2xl:text-sm font-medium text-slate-600 ">
              Usage
            </th>
            <th className="px-2 md:px-6 py-4 text-xs 2xl:text-sm font-medium text-slate-600 ">
              Valid Until
            </th>
            <th className="px-2 md:px-6 py-4 text-xs 2xl:text-sm font-medium text-slate-600 ">
              Type
            </th>
            <th className="px-2 md:px-6 py-4 text-xs 2xl:text-sm font-medium text-slate-600 ">
              Status
            </th>
            <th className="px-2 md:px-6 py-4 text-xs 2xl:text-sm font-medium text-slate-600  text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr className=" transition-colors">
            <td className="px-2 md:px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm px-2 py-1 bg-slate-100 rounded-lg text-slate-700">
                  {promo.code}
                </span>
                <Copy
                  size={14}
                  className="text-slate-400 cursor-pointer hover:text-slate-600"
                />
              </div>
            </td>
            <td className="px-2 md:px-6 py-4 text-sm text-slate-600">
              {promo.description}
            </td>
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
            <td className="px-2 md:px-6 py-4">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full w-fit">
                <Globe size={12} /> {promo.type}
              </div>
            </td>
            <td className="px-6 py-4">
              <span className="text-xs  px-2 py-0.5 bg-emerald-100 text-emerald-600 rounded-lg ">
                Active
              </span>
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-center gap-3 text-slate-600">
                <button
                  onClick={() => setModal({ type: "view" })}
                  className="hover:text-primary transition-colors"
                >
                  <BarChart2 size={18} />
                </button>
                <button
                  onClick={() => setModal({ type: "edit" })}
                  className="hover:text-primary transition-colors"
                >
                  <Edit3 size={18} />
                </button>
                <button
                  onClick={() => setModal({ type: "delete" })}
                  className="hover:text-primary transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Modals Management */}
      <AnimatePresence>
        {modal.type && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
              {/* VIEW HISTORY MODAL */}
              {modal.type === "view" && (
                <div className="p-6">
                  <div className="flex justify-between items-center ">
                    <h2 className=" font-medium">
                      Usage History: {promo.code}
                    </h2>
                    <X
                      className="cursor-pointer text-slate-500"
                      onClick={closeModal}
                    />
                  </div>
                  <p className="mb-2 text-gray-500 text-sm">
                    View all usage for this promo code
                  </p>
                  <div className="grid grid-cols-3 bg-slate-50 gap-4 mb-8 rounded-xl">
                    <div className="p-4  ">
                      <p className="text-xs text-slate-600  mb-1">Total Uses</p>
                      <p className="text-lg font-medium">
                        {promo.usage} / {promo.limit}
                      </p>
                    </div>
                    <div className="p-4 ">
                      <p className="text-xs text-slate-600  mb-1">
                        Discount Given
                      </p>
                      <p className="text-lg font-medium">10% OFF</p>
                    </div>
                    <div className="p-4 ">
                      <p className="text-xs text-slate-600  mb-1">
                        Total Savings
                      </p>
                      <p className="text-lg  font-medium">$15</p>
                    </div>
                  </div>

                  <div className="flex justify-between text-xs py-2 border-b border-gray-200">
                    <span className="text-xs">Tenant</span>
                    <span className="text-xs">Plan</span>
                    <span className="text-xs">Order Amount</span>
                    <span className="text-xs">Discount</span>
                    <span className="text-xs">Date</span>
                  </div>
                  <div className="flex justify-between text-xs py-2">
                    <span className="text-xs">Startup Labs</span>
                    <span className="text-xs">Starter</span>
                    <span className="text-xs">$150</span>
                    <span className="text-emerald-500 font-bold">-$15</span>
                    <span className="text-slate-400">Oct 10, 2024</span>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={closeModal}
                      className="w-fit px-4 mt-6 bg-primary text-white py-2 rounded-lg font-medium"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              {/* EDIT MODAL */}
              {modal.type === "edit" && (
                <EditPromoModal
                  isOpen={true}
                  closeModal={closeModal}
                  promo={promo}
                  setPromo={setPromo}
                />
              )}

              {/* DELETE MODAL */}
              {modal.type === "delete" && (
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-50 text-red-500 rounded-full">
                      <AlertTriangle size={24} />
                    </div>
                    <h2 className="text-xl font-bold">Delete Promo Code</h2>
                  </div>
                  <p className="text-sm text-slate-500 mb-6">
                    Are you sure you want to delete the promo code{" "}
                    <span className="font-bold">"{promo.code}"</span>? This
                    action cannot be undone.
                  </p>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 border rounded-lg text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm"
                    >
                      Delete Promo Code
                    </button>
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

export default ActiveCodesTab;
