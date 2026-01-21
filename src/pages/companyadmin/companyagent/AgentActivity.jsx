import {
  ArrowLeft,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  MessageSquare,
  LogIn,
  Edit,
  Shield
} from "lucide-react";
import { useState } from "react";

const AgentActivity = () => {
      const [settings, setSettings] = useState({
    autoAssign: true,
    emailNotifications: true,
    weekendAvailability: false,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const agent = {
    name: "Sarah Johnson",
    role: "Support Lead",
    avatar: "https://i.pravatar.cc/150?img=47",
    status: "Active",
    email: "sarah@company.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    timezone: "PST (UTC-8)",
    joined: "Jan 2023",
    about:
      "Experienced support lead with 5+ years in customer service. Specializes in technical troubleshooting and team mentoring.",
    satisfaction: 4.8,
    totalChats: 247,
    currentLoad: "5/8",
    resolutionRate: "94%",
    workingHours: "9 AM – 6 PM PST",
    maxChats: "8 chats",
    responseTime: "Avg. 2.3 min",
    lastLogin: "2 hours ago",
    skills: [
      "Technical Support",
      "Team Management",
      "Training",
      "Customer Success"
    ],
    languages: ["English", "Spanish"],
    activity: [
      {
        icon: <CheckCircle className="text-green-500" size={18} />,
        text: "Resolved chat #1234",
        time: "2 hours ago"
      },
      {
        icon: <MessageSquare className="text-primary" size={18} />,
        text: "Started chat with John Doe",
        time: "3 hours ago"
      },
      {
        icon: <LogIn className="text-orange-500" size={18} />,
        text: "Logged in to system",
        time: "4 hours ago"
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="cursor-pointer" />
          <div>
            <h2 className="text-xl font-semibold">{agent.name}</h2>
            <p className="text-sm text-gray-500">{agent.role}</p>
          </div>
        </div>

        <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
          <Edit size={16} /> Edit Agent
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT PROFILE CARD */}
        <div className="bg-white rounded-xl p-6 space-y-4 border h-fit">
          <div className="flex flex-col items-center text-center gap-2">
            <img
              src={agent.avatar}
              alt=""
              className="w-20 h-20 rounded-full object-cover"
            />
            <h3 className="font-semibold">{agent.name}</h3>
            <p className="text-sm text-gray-500">{agent.role}</p>

            <div className="flex gap-2 text-xs">
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full">
                {agent.status}
              </span>
              <span className="px-2 py-1 flex items-center gap-1">
                <Shield size={16} />
                Admin
              </span>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-600 border-t py-2 font-medium">
            <div className="flex gap-2">
              <Mail size={16} /> {agent.email}
            </div>
            <div className="flex gap-2">
              <Phone size={16} /> {agent.phone}
            </div>
            <div className="flex gap-2">
              <MapPin size={16} /> {agent.location}
            </div>
            <div className="flex gap-2">
              <Clock size={16} /> {agent.timezone}
            </div>
            <div className="flex gap-2">
              <Calendar size={16} /> Joined {agent.joined}
            </div>
          </div>

          <div className="border-t py-2">
            <h4 className="font-medium text-sm mb-1">About</h4>
            <p className="text-sm text-gray-600">{agent.about}</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* STATS */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            <StatCard
              title="Satisfaction"
              value={agent.satisfaction}
              stars
            />
            <StatCard title="Total Chats" value={agent.totalChats} desc={"All Time"} />
            <StatCard title="Current Load" value={agent.currentLoad} progress />
            <StatCard
              title="Resolution Rate"
              value={agent.resolutionRate}
              desc={"This Month"}
            />
          </div>

          {/* WORK INFO */}
          <InfoCard title="Working Information">
            <InfoRow label="Working Hours" value={agent.workingHours} />
            <InfoRow label="Max Concurrent Chats" value={agent.maxChats} />
            <InfoRow label="Response Time" value={agent.responseTime} />
            <InfoRow label="Last Login" value={agent.lastLogin} />
          </InfoCard>

          {/* SKILLS & LANGUAGES */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <TagCard title="Skills" items={agent.skills} />
            <TagCard title="Languages" items={agent.languages} />
          </div>

          {/* ACTIVITY */}
          <ActivityCard title="Recent Activity">
            <div className="space-y-3">
              {agent.activity.map((a, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg"
                >
                  {a.icon}
                  <div>
                    <p className="text-sm font-medium">{a.text}</p>
                    <p className="text-xs text-gray-500">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </ActivityCard>
         <div className="bg-white border rounded-xl p-5 space-y-4  w-full">
      {/* Header */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900">
          Agent Settings
        </h3>
        <p className="text-xs text-gray-500">
          Manage agent permissions and preferences
        </p>
      </div>

      <div className="divide-y">
        <SettingRow
          title="Auto-assign chats"
          description="Automatically assign new chats to this agent"
          enabled={settings.autoAssign}
          onToggle={() => toggleSetting("autoAssign")}
        />

        <SettingRow
          title="Email notifications"
          description="Send email notifications for new chats"
          enabled={settings.emailNotifications}
          onToggle={() => toggleSetting("emailNotifications")}
        />

        <SettingRow
          title="Weekend availability"
          description="Available for weekend support"
          enabled={settings.weekendAvailability}
          onToggle={() => toggleSetting("weekendAvailability")}
        />
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Reusable UI Pieces ---------- */

const StatCard = ({ title, value, stars, progress , desc }) => (
  <div className="bg-white border rounded-xl p-4 space-y-1">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-lg font-semibold flex items-center gap-1">
      {value}
      {stars &&
        Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < Math.round(value) ? "text-yellow-400" : "text-gray-300"}
            fill={i < Math.round(value) ? "#FACC15" : "none"}
          />
        ))}
    </p>
     {desc && (
      <div className="overflow-hidden mt-2">
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    )}
    {progress && (
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
        <div className="h-full w-2/3 bg-primary rounded-full" />
      </div>
    )}
  </div>
);


const SettingRow = ({ title, description, enabled, onToggle }) => {
  return (
    <div className="flex items-center justify-between py-4 gap-4">
      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>

      {/* Toggle */}
      <button
        onClick={onToggle}
        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none
          ${enabled ? "bg-primary" : "bg-gray-300"}`}
        aria-pressed={enabled}
      >
        <span
          className={`inline-block mt-1 h-3 w-3 transform rounded-full bg-white transition-transform duration-200
            ${enabled ? "translate-x-5" : "translate-x-1"}`}
        />
      </button>
    </div>
  );
};


const InfoCard = ({ title, children }) => (
  <div className="bg-white border rounded-xl p-4 space-y-4">
    <h4 className="font-medium">{title}</h4>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    {children}
    </div>
  </div>
);

const ActivityCard = ({ title, children }) => (
  <div className="bg-white border rounded-xl p-4 space-y-4">
    <h4 className="font-medium">{title}</h4>
    {children}
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="flex flex-col justify-between text-sm">
    <span className="font-medium">{label}</span>
    <span className="text-gray-400">{value}</span>
  </div>
);

const TagCard = ({ title, items }) => (
  <InfoCard title={title}>
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span
          key={i}
          className="px-3 py-1 text-xs rounded-md font-medium bg-[#7CEEFD]/50 text-[#6B69B2]"
        >
          {item}
        </span>
      ))}
    </div>
  </InfoCard>
);

export default AgentActivity;
