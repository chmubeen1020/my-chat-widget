import { useState } from "react";
import { Save } from "lucide-react";
import Switch from "./Switch";
import Dropdown from "./Dropdown";
import TimePicker from "./TimePicker";

export default function PreferencesPage() {
  const [prefs, setPrefs] = useState({
    sound: true,
    newChat: true,
    reassigned: true,
    feedback: true,
    systemAlerts: true,
    breaksReminder: true,

    autoAccept: false,
    maxChats: "3 chats",
    typingIndicator: true,
    readReceipts: true,
    aiSuggestions: true,

    startTime: "09:00 AM",
    endTime: "05:00 PM",
    breakDuration: "15 minutes",
    autoOffline: true,

    language: "English",
  });

  const update = (key, value) =>
    setPrefs((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-6">
        {/* Notifications */}
        <Card title="Notifications" desc="Configure how you receive alerts and updates">
          <Row label="Sound Notifications" desc="Play sounds for notifications">
            <Switch value={prefs.sound} onChange={(v) => update("sound", v)} />
          </Row>

          <Divider />

          <p className="text-sm font-medium text-gray-700 mb-3">
            Notification Types
          </p>

          <Toggle label="New Chat Assigned" value={prefs.newChat} onChange={(v) => update("newChat", v)} />
          <Toggle label="Chat Reassigned" value={prefs.reassigned} onChange={(v) => update("reassigned", v)} />
          <Toggle label="Visitor Feedback" value={prefs.feedback} onChange={(v) => update("feedback", v)} />
          <Toggle label="System Alerts" value={prefs.systemAlerts} onChange={(v) => update("systemAlerts", v)} />
          <Toggle label="Break Reminders" value={prefs.breaksReminder} onChange={(v) => update("breaksReminder", v)} />
        </Card>

        {/* Chat Settings */}
        <Card title="Chat Settings" desc="Configure your chat behavior and features">
          <Row label="Auto-Accept Chats" desc="Automatically accept assigned chats">
            <Switch value={prefs.autoAccept} onChange={(v) => update("autoAccept", v)} />
          </Row>

          <Dropdown
            label="Max Concurrent Chats"
            value={prefs.maxChats}
            options={["2 chats", "3 chats", "5 chats", "10 chats"]}
            onChange={(v) => update("maxChats", v)}
          />

          <Toggle label="Show Typing Indicator" value={prefs.typingIndicator} onChange={(v) => update("typingIndicator", v)} />
          <Toggle label="Read Receipts" value={prefs.readReceipts} onChange={(v) => update("readReceipts", v)} />
          <Toggle label="AI Suggestions" value={prefs.aiSuggestions} onChange={(v) => update("aiSuggestions", v)} />
        </Card>

        {/* Availability */}
        <Card title="Availability" desc="Set your working hours and break preferences">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TimePicker
              label="Work Start Time"
              value={prefs.startTime}
              onChange={(v) => update("startTime", v)}
            />
            <TimePicker
              label="Work End Time"
              value={prefs.endTime}
              onChange={(v) => update("endTime", v)}
            />
          </div>

          <Dropdown
            label="Break Duration (minutes)"
            value={prefs.breakDuration}
            options={["10 minutes", "15 minutes", "30 minutes", "45 minutes"]}
            onChange={(v) => update("breakDuration", v)}
          />

          <Row
            label="Auto Offline During Breaks"
            desc="Automatically set status to offline during breaks"
          >
            <Switch value={prefs.autoOffline} onChange={(v) => update("autoOffline", v)} />
          </Row>
        </Card>

        {/* Appearance */}
        <Card title="Appearance" desc="Customize the look and feel of your interface">
          <Dropdown
            label="Language"
            value={prefs.language}
            options={["English", "Arabic", "French"]}
            onChange={(v) => update("language", v)}
            icon="🌐"
          />
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-5 py-2 bg-primary text-white text-sm rounded-md hover:bg-primary/90">
          <Save size={16} />
          Save Preferences
        </button>
      </div>
    </div>
  );
}

/* ---------- Helpers ---------- */

function Card({ title, desc, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mb-1">{desc}</p>
      {children}
    </div>
  );
}

function Row({ label, desc, children }) {
  return (
    <div className="flex items-center justify-between py-1">
      <div>
        <p className="text-sm text-gray-700">{label}</p>
        {desc && <p className="text-xs text-gray-400">{desc}</p>}
      </div>
      {children}
    </div>
  );
}

function Toggle({ label, value, onChange }) {
  return (
    <Row label={label}>
      <Switch value={value} onChange={onChange} />
    </Row>
  );
}

function Divider() {
  return <div className="border-t border-gray-200 my-4" />;
}
