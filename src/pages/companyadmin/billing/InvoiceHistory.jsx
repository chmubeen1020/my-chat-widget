import { useState } from "react";
import { createPortal } from "react-dom";
import {
  MoreHorizontal,
  CreditCard,
  FileText,
  ExternalLink,
  Download,
  FileSpreadsheet,
  Search,
  Filter
} from "lucide-react";
const invoices = [
    {
      id: "inv-001",
      date: "1/15/2024",
      description: "Professional Plan - January 2024",
      amount: "$49.00",
      status: "Paid",
    },
    {
      id: "inv-002",
      date: "12/15/2023",
      description: "Professional Plan - December 2023",
      amount: "$49.00",
      status: "Failed",
    },
    {
      id: "inv-003",
      date: "11/15/2023",
      description: "Professional Plan - November 2023",
      amount: "$49.00",
      status: "Paid",
    },
    {
      id: "inv-004",
      date: "10/15/2023",
      description: "Starter Plan - October 2023",
      amount: "$19.00",
      status: "Paid",
    },
  ];

const ACTIONS = [
  { label: "Retry Payment", icon: CreditCard },
  { label: "Update Card", icon: FileText },
  { label: "View Details", icon: ExternalLink },
  { label: "Download PDF", icon: Download },
  { label: "Export as Excel", icon: FileSpreadsheet },
  { label: "Export as CSV", icon: FileSpreadsheet },
];

export default function InvoiceHistory() {
  const [menu, setMenu] = useState({
    id: null,
    top: 0,
    left: 0,
  });

  const openMenu = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMenu({
      id,
      top: rect.bottom + 6,
      left: rect.right - 192, // dropdown width
    });
  };

  const closeMenu = () => {
    setMenu({ id: null, top: 0, left: 0 });
  };

  return (
    <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div className="w-full lg:w-2/3">
          <h2 className="text-lg font-medium text-slate-900">Invoice History</h2>
          <p className="text-sm text-slate-500 mt-1">Download and manage your billing invoices.</p>
        </div>

        <div className="w-full lg:w-1/3 flex items-center gap-3">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Invoices Id..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B69B2]/10 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all">
            <Filter size={18} />
            Filters
          </button>
        </div>
      </div>
    <div className="overflow-x-auto -mx-6 sm:mx-0">
      <div className="inline-block min-w-full align-middle px-6 sm:px-0">
        <table className="min-w-full border-separate border-spacing-y-0">
          <thead>
            <tr className="text-left">
              <th className="pb-4 border-b border-slate-100 text-sm font-medium text-slate-500 px-4">
                Invoice
              </th>
              <th className="pb-4 border-b border-slate-100 text-sm font-medium text-slate-500 px-4">
                Date
              </th>
              <th className="pb-4 border-b border-slate-100 text-sm font-medium text-slate-500 px-4">
                Description
              </th>
              <th className="pb-4 border-b border-slate-100 text-sm font-medium text-slate-500 px-4">
                Amount
              </th>
              <th className="pb-4 border-b border-slate-100 text-sm font-medium text-slate-500 px-4">
                Status
              </th>
              <th className="pb-4 border-b border-slate-100 text-sm font-medium text-slate-500 px-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">
            {invoices.map((inv) => (
              <tr
                key={inv.id}
                className="group hover:bg-slate-50/50 transition-colors"
              >
                <td className="py-3 border-b border-slate-100 px-4 text-sm  text-slate-600">
                  {inv.id}
                </td>
                <td className="py-3 border-b border-slate-100 px-4 text-sm text-slate-500">
                  {inv.date}
                </td>
                <td className="py-3 border-b border-slate-100 px-4 text-sm text-slate-700">
                  {inv.description}
                </td>
                <td className="py-3 border-b border-slate-100 px-4 text-sm  text-slate-700">
                  {inv.amount}
                </td>
                <td className="py-3 border-b border-slate-100 px-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-lg text-sm font-medium  ${
                      inv.status === "Paid"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {inv.status}
                  </span>
                </td>
                <td className="py-3 border-b border-slate-100 px-4 text-right">
                  <button
                    onClick={(e) => openMenu(e, inv.id)}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600"
                  >
                    <MoreHorizontal size={18} />
                  </button>

                  {/* ACTION MENU (PORTAL) */}
                  {menu.id === inv.id &&
                    createPortal(
                      <>
                        {/* backdrop */}
                        <div
                          className="fixed inset-0 z-40"
                          onClick={closeMenu}
                        />

                        {/* dropdown */}
                        <div
                          style={{ top: menu.top, left: menu.left }}
                          className="fixed z-50 w-48 bg-white border border-slate-200 rounded-xl
                                     animate-in fade-in zoom-in-95 duration-100"
                        >
                          {ACTIONS.map((a) => (
                            <button
                              key={a.label}
                              className="w-full flex items-center gap-3 px-4 py-2 text-[13px]
                                         font-medium text-slate-600 hover:bg-slate-50 transition-colors"
                            >
                              <a.icon size={16} className="text-slate-400" />
                              {a.label}
                            </button>
                          ))}
                        </div>
                      </>,
                      document.body
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}