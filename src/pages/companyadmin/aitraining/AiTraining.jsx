import React, { useMemo, useState ,useEffect, useRef } from "react";
import {
  Plus,
  Database,
  Upload,
  Settings,
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  FileText,
  RefreshCcw,
  Trash2,
  Globe,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldAlert,
  MessageSquare,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";
import UploadDataPanel from "./UploadDataPannel";

const AiTrainings = () => {
  const [tab, setTab] = useState("knowledge"); // knowledge | upload | settings
const menuRef = useRef(null);
  const [kbRows, setKbRows] = useState([
    {
      id: "1",
      source: "Product Documentation.pdf",
      subSource: null,
      type: "Pdf",
      status: "Completed",
      lastSynced: "1/15/2024",
      uploadDate: "1/15/2024",
      size: "2.4 MB",
    },
    {
      id: "2",
      source: "FAQ - Common Questions",
      subSource: null,
      type: "Faq",
      status: "Completed",
      lastSynced: "1/14/2024",
      uploadDate: "1/14/2024",
      size: "156 KB",
    },
    {
      id: "3",
      source: "https://company.com/help",
      subSource: "https://company.com/help",
      type: "Url",
      status: "Processing",
      lastSynced: "1/16/2024",
      uploadDate: "1/16/2024",
      size: "-",
    },
    {
      id: "4",
      source: "Support Guidelines.docx",
      subSource: null,
      type: "Pdf",
      status: "Failed",
      lastSynced: "-",
      uploadDate: "1/16/2024",
      size: "1.8 MB",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All"); // All | Completed | Processing | Failed
  const [openMenuId, setOpenMenuId] = useState(null);

  const filteredRows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return kbRows.filter((r) => {
      const matchQ =
        !q ||
        r.source.toLowerCase().includes(q) ||
        (r.subSource ? r.subSource.toLowerCase().includes(q) : false);
      const matchStatus = statusFilter === "All" ? true : r.status === statusFilter;
      return matchQ && matchStatus;
    });
  }, [kbRows, search, statusFilter]);

  const handleResync = (id) => {
    setKbRows((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: "Processing", lastSynced: new Date().toLocaleDateString() }
          : r
      )
    );
    setOpenMenuId(null);

    // simulate completion
    setTimeout(() => {
      setKbRows((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: "Completed" } : r))
      );
    }, 1200);
  };

  const handleDelete = (id) => {
    setKbRows((prev) => prev.filter((r) => r.id !== id));
    setOpenMenuId(null);
  };
  useEffect(() => {
  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenuId(null);
    }
  }

  if (openMenuId !== null) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [openMenuId]);

  // -------------------------
  // Dummy data (AI Settings)
  // -------------------------
  const [confidence, setConfidence] = useState(75);
  const [escalation, setEscalation] = useState({
    lowConfidence: true,
    askHuman: false,
    complex: false,
    negative: false,
    keywords: false,
  });

  const [testQuestion, setTestQuestion] = useState("");
  const example = {
    question: "What are your business hours?",
    answer:
      "Our business hours are Monday to Friday, 9:00 AM to 6:00 PM EST. We’re closed on weekends and major holidays.",
    confidence: 95,
  };

  const [persona, setPersona] = useState({
    aiName: "",
    tone: "Friendly",
  });

  // -------------------------
  // UI helpers
  // -------------------------
  const tabs = [
    { key: "knowledge", label: "Knowledge Base", icon: <Database size={16} /> },
    { key: "upload", label: "Upload Data", icon: <Upload size={16} /> },
    { key: "settings", label: "AI Settings", icon: <Settings size={16} /> },
  ];

  return (
    <div className="w-full">
      {/* Page header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mt-2 ">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">AI Training</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your AI knowledge base and training data to improve response accuracy.
          </p>

          {/* Tabs */}
          <div className="mt-2 inline-flex rounded-xl border border-gray-200 bg-white p-1">
            {tabs.map((t) => {
              const active = tab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={[
                    "flex items-center gap-2 px-3 py-1 2xl:py-2 text-sm rounded-lg transition",
                    active ? "bg-primary text-white shadow-sm" : "text-gray-600 hover:bg-gray-50",
                  ].join(" ")}
                >
                  <span className={active ? "text-white" : "text-gray-500"}>{t.icon}</span>
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95">
          <Plus size={16} />
          Add Data
        </button>
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {tab === "knowledge" && (
          <KnowledgeBasePanel
            rows={filteredRows}
            search={search}
            setSearch={setSearch}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            openMenuId={openMenuId}
            setOpenMenuId={setOpenMenuId}
            onResync={handleResync}
            onDelete={handleDelete}
            menuRef={menuRef}
          />
        )}

        {tab === "upload" && (
          <UploadDataPanel/>
        )}

        {tab === "settings" && (
          <AiSettingsPanel
            confidence={confidence}
            setConfidence={setConfidence}
            escalation={escalation}
            setEscalation={setEscalation}
            testQuestion={testQuestion}
            setTestQuestion={setTestQuestion}
            example={example}
            persona={persona}
            setPersona={setPersona}
          />
        )}
      </div>
    </div>
  );
};

/* ---------------------------------------
   Knowledge Base Panel
--------------------------------------- */
function KnowledgeBasePanel({
  rows,
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  openMenuId,
  setOpenMenuId,
  onResync,
  onDelete,
  menuRef
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      {/* Header row */}
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Training Data Sources</h2>
          <p className="text-xs text-gray-500 mt-1">
            Documents and URLs that power your AI responses.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          {/* Search */}
          <div className="relative w-full sm:w-[260px] xl:w-[400px]">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search agents..."
              className="w-full rounded-lg border-none bg-slate-100 pl-9 pr-3 py-2 text-sm outline-none focus:ring-none"
            />
          </div>

          {/* Filters */}
          <div className="relative">
            <button
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => {
                // mini-cycle demo filter
                const order = ["All", "Completed", "Processing", "Failed"];
                const i = order.indexOf(statusFilter);
                setStatusFilter(order[(i + 1) % order.length]);
              }}
              title="Cycle status filter"
            >
              <SlidersHorizontal size={16} className="text-gray-500" />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto px-4">
        <table className="min-w-[860px] w-full">
          <thead>
            <tr className="text-left text-xs text-gray-700 border-b border-gray-200 py-4">
              <th className="py-3 px-4 font-medium">Source</th>
              <th className="py-3 px-4 font-medium w-[120px]">Type</th>
              <th className="py-3 px-4 font-medium w-[140px]">Status</th>
              <th className="py-3 px-4 font-medium w-[120px]">Last Synced</th>
              <th className="py-3 px-4 font-medium w-[120px]">Upload Date</th>
              <th className="py-3 px-4 font-medium w-[90px]">Size</th>
              <th className="py-3 px-4 font-medium w-[80px] text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r , index) => (
              <tr key={r.id} className="border-b border-gray-200 last:border-b-0">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <StatusDot status={r.status} />
                    <div className="leading-tight">
                      <div className="text-sm text-gray-900 font-medium">{r.source}</div>
                      {r.subSource && (
                        <div className="text-xs text-gray-400">{r.subSource}</div>
                      )}
                    </div>
                  </div>
                </td>

                <td className="py-3 px-4">
                  <div className="flex items-center gap-2 text-sm text-gray-900">
                    {r.type === "Url" ? (
                      <Globe size={16} className="text-gray-600" />
                    ) : (
                      <FileText size={16} className="text-gray-600" />
                    )}
                    {r.type}
                  </div>
                </td>

                <td className="py-3 px-4">
                  <StatusPill status={r.status} />
                </td>

                <td className="py-3 px-4 text-sm text-gray-700">{r.lastSynced}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{r.uploadDate}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{r.size}</td>

                <td className="py-3 px-4 text-right relative">
                  <button
                    className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
                    onClick={() => setOpenMenuId(openMenuId === r.id ? null : r.id)}
                    aria-label="Row actions"
                  >
                    <MoreHorizontal size={16} className="text-gray-600" />
                  </button>

                  {openMenuId === r.id && (
                    <div ref={menuRef} className={` absolute right-4  z-30 w-[140px] rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden
                       
                    ${
            index >= rows.length - 2
              ? "bottom-0 mb-2"
              : "top-6 mt-[-10px]"
          }`}>
                      <button
                        onClick={() => onResync(r.id)}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50"
                      >
                        <RefreshCcw size={16} className="text-gray-600" />
                        Re-sync
                      </button>
                      <button
                        onClick={() => onDelete(r.id)}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 text-red-600"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}

            {!rows.length && (
              <tr>
                <td colSpan={7} className="py-10 text-center text-sm text-gray-500">
                  No matching sources.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


/* ---------------------------------------
   AI Settings Panel
--------------------------------------- */
function AiSettingsPanel({
  confidence,
  setConfidence,
  escalation,
  setEscalation,
  testQuestion,
  setTestQuestion,
  example,
  persona,
  setPersona,
}) {
  return (
    <div className="space-y-4">
      {/* Top row: Response Settings + Test */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Response settings */}
        <div className="space-y-2">
          <div className="rounded-xl border border-gray-200 bg-white p-4 ">
          <div className="flex items-start gap-2">
            <Settings size={16} className="text-gray-700 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Response Settings</h3>
              <p className="text-xs text-gray-500 mt-1">
                Configure how your AI responds to customer queries.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-gray-700">
                Confidence Threshold: <span className="font-semibold">{confidence}%</span>
              </p>
            </div>

            <div className="mt-3">
              <input
                type="range"
                min={0}
                max={100}
                value={confidence}
                onChange={(e) => setConfidence(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <p className="text-xs text-gray-500 mt-2">
                AI will only respond if confidence is above this threshold. Lower values mean more
                responses but potentially less accuracy.
              </p>
            </div>
          </div>
        </div>
          {/* Escalation rules */}
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex items-start gap-2">
          <ShieldAlert size={16} className="text-gray-700 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Escalation Rules</h3>
            <p className="text-xs text-gray-500 mt-1">
              When should conversations be escalated to human agents?
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <Rule
            checked={escalation.lowConfidence}
            onChange={() => setEscalation((p) => ({ ...p, lowConfidence: !p.lowConfidence }))}
            label="Low confidence responses (below threshold)"
          />
          <Rule
            checked={escalation.askHuman}
            onChange={() => setEscalation((p) => ({ ...p, askHuman: !p.askHuman }))}
            label="Escalate if user asks for a human 2 times"
          />
          <Rule
            checked={escalation.complex}
            onChange={() => setEscalation((p) => ({ ...p, complex: !p.complex }))}
            label="Complex technical issues detected"
          />
          <Rule
            checked={escalation.negative}
            onChange={() => setEscalation((p) => ({ ...p, negative: !p.negative }))}
            label="Negative sentiment detected"
          />
          <Rule
            checked={escalation.keywords}
            onChange={() => setEscalation((p) => ({ ...p, keywords: !p.keywords }))}
            label='Escalate if message contains keywords like: legal, complaint, refund.'
          />
        </div>
      </div>
        </div>
        

        {/* Test your AI */}
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-2">
            <MessageSquare size={16} className="text-gray-700 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900">Test your AI</h3>
              <p className="text-xs text-gray-500 mt-1">
                Ask your AI a question to see how it responds and test your confidence threshold
                settings.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <input
              value={testQuestion}
              onChange={(e) => setTestQuestion(e.target.value)}
              placeholder="Ask your AI a question..."
              className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none "
            />
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-95">
              <Send size={16} />
              Test
            </button>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            💡 Try questions like: "What are your business hours?", "How do I reset my password?",
            or "What is your refund policy?"
          </div>

          {/* Example response */}
          <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-700">Example Response</p>
              <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                {example.confidence}% confidence
              </span>
            </div>

            <div className="mt-3 text-sm text-gray-700">
              <p className="text-xs text-gray-500 mb-1">Question: "{example.question}"</p>
              <p>{example.answer}</p>
            </div>

            <div className="mt-3 rounded-lg bg-green-50 border border-green-100 p-2 text-xs text-green-700 flex items-center gap-2">
              <CheckCircle2 size={16} />
              High confidence response - would be sent directly to customer
            </div>
          </div>
        </div>
      </div>

      

      {/* Persona customization */}
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <div className="flex items-start gap-2">
          <AlertCircle size={16} className="text-gray-700 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900">AI Persona Customization</h3>
            <p className="text-xs text-gray-500 mt-1">Customize your assistant’s identity and tone</p>
          </div>

          <button className="ml-auto inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-95">
            Save Changes
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-700">AI Name</label>
            <input
              value={persona.aiName}
              onChange={(e) => setPersona((p) => ({ ...p, aiName: e.target.value }))}
              placeholder="e.g. Lina, Techween Assistant"
              className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-700">Persona Tone</label>
            <select
              value={persona.tone}
              onChange={(e) => setPersona((p) => ({ ...p, tone: e.target.value }))}
              className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 bg-white"
            >
              <option>Friendly</option>
              <option>Professional</option>
              <option>Concise</option>
              <option>Empathetic</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="text-xs font-medium text-gray-700">Profile Image / Avatar</label>
          <div className="mt-2 rounded-xl border border-gray-200 bg-gray-50 p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-12 w-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                <Loader2 className="animate-spin text-gray-400" size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-sm text-gray-900 truncate">e.g. Lina, Techween Assistant</div>
                <div className="text-xs text-gray-500">(Available for pro and enterprise plans only)</div>
              </div>
            </div>

            <button className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------
   Small UI helpers
--------------------------------------- */
function StatusDot({ status }) {
  if (status === "Completed") {
    return <CheckCircle size={16} className="text-green-500" />;
  }

  if (status === "Processing") {
    return <Clock size={16} className="text-primary" />;
  }

  return <XCircle size={16} className="text-red-500" />;
}

function StatusPill({ status }) {
  if (status === "Completed") {
    return (
      <span className="inline-flex items-center gap-2 rounded-md bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
        Completed
      </span>
    );
  }
  if (status === "Processing") {
    return (
      <span className="inline-flex items-center gap-2 rounded-md bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
        Processing
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-1 text-xs font-medium text-white">
      Failed <AlertCircle size={14} />
    </span>
  );
}

function Rule({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 accent-primary"
      />
      <span>{label}</span>
    </label>
  );
}

export default AiTrainings;
