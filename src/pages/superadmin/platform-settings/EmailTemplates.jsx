import React, { useState } from "react";
import { Mail, Eye } from "lucide-react";

const EmailTemplates = () => {
  const templates = [
    { id: "welcome", name: "Welcome Email", subject: "Welcome to Techween!", content: "Hi {{name}},\n\nWelcome to Techween! Your account has been created successfully.\n\nBest regards,\nTechween Team" },
    { id: "renewal", name: "Renewal Reminder", subject: "Your subscription renewal is coming up", content: "Hi {{name}},\n\nYour subscription for {{company}} is expiring on {{expiry_date}}." },
    { id: "failure", name: "Payment Failure", subject: "Action Required: Payment Failed", content: "Hi {{name}},\n\nWe were unable to process your payment for {{company}}." },
  ];

  const [selectedId, setSelectedId] = useState("welcome");
  const selected = templates.find((t) => t.id === selectedId);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* List Card */}
      <div className="lg:col-span-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Mail size={20} className="text-gray-600" />
          <h2 className="text-lg font-medium text-gray-900">Email Templates</h2>
        </div>
        <div className="space-y-2">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedId(t.id)}
              className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedId === t.id
                  ? "bg-primary/10 text-primary border border-indigo-100"
                  : "bg-white text-gray-600 border border-gray-100 hover:border-gray-200"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      {/* Editor Card */}
      <div className="lg:col-span-2 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">{selected.name}</h2>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            <Eye size={16} />
            <span>Preview</span>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject Line</label>
            <input
              type="text"
              defaultValue={selected.subject}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Content</label>
            <textarea
              rows={8}
              defaultValue={selected.content}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
            />
            <p className="mt-2 text-xs text-gray-400 italic">Available variables: {"{name}"}, {"{email}"}, {"{company}"}, {"{expiry_date}"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplates;