import { useRef, useState } from "react";

export default function ProfilePage() {
  const fileRef = useRef(null);

  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Agent",
    email: "john.agent@company.com",
    phone: "+1 (555) 234-5678",
    employeeId: "AGT-001",
    department: "Customer Support",
    joinDate: "2024-01-15",
    status: "online",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, avatar: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <h3 className="xl:text-lg font-medium text-gray-900 mb-1">Profile Picture</h3>
        <p className="text-sm text-gray-500 mb-6">
          Update your avatar and status
        </p>

        <div className="flex flex-col items-center">
          <img
            src={profile.avatar}
            alt="avatar"
            className="w-36 h-36 rounded-full object-cover border border-gray-200"
          />

          <button
            onClick={() => fileRef.current.click()}
            className="mt-4 px-4 py-2 text-sm border border-gray-200 rounded-md hover:bg-gray-50"
          >
            Upload Photo
          </button>

          <input
            ref={fileRef}
            type="file"
            accept="image/png,image/jpeg"
            hidden
            onChange={handleImageUpload}
          />

          <p className="text-xs text-gray-400 mt-2">
            JPG, PNG up to 5MB
          </p>
        </div>

        {/* Status */}
        <div className="mt-8">
          <h4 className="font-medium text-gray-900 mb-2">Agent Status</h4>

          <div className="flex items-center justify-center gap-3">
            <span className="flex items-center gap-1 text-sm">
              <span
                className={`w-2 h-2 rounded-full ${
                  profile.status === "online"
                    ? "bg-green-500"
                    : "bg-gray-400"
                }`}
              />
              {profile.status === "online" ? "Online" : "Offline"}
            </span>

            <button
              onClick={() =>
                setProfile((p) => ({
                  ...p,
                  status: p.status === "online" ? "offline" : "online",
                }))
              }
              className={`px-3 py-1 text-xs rounded-md text-white ${
                profile.status === "online"
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
            >
              {profile.status === "online" ? "Go Offline" : "Go Online"}
            </button>
          </div>

          <p className="text-sm text-center text-gray-400 mt-2">
            Your status affects chat assignment and availability
          </p>
        </div>
      </div>

      {/* Right Card */}
      <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <h3 className="xl:text-lg font-medium text-gray-900 mb-1">
          Personal Information
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Your profile details and contact information
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Input label="First Name" value={profile.firstName} />
          <Input label="Last Name" value={profile.lastName} />
          <Input label="Email Address" value={profile.email} disabled />
          <Input label="Phone Number" value={profile.phone} />
        </div>

        <p className="text-xs text-gray-400 mt-2">
          Email is managed by your administrator
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <Input label="Employee ID" value={profile.employeeId} disabled />
          <Input label="Department" value={profile.department} disabled />
        </div>

        <div className="mt-2 max-w-sm">
          <Input label="Join Date" value={profile.joinDate} disabled />
        </div>

        <div className="mt-4">
          <button className="px-5 py-2 bg-primary/90 text-white text-sm rounded-md hover:bg-primary">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}

function Input({ label, value, disabled }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">
        {label}
      </label>
      <input
        disabled={disabled}
        value={value}
        className={`w-full rounded-md px-3 py-2 text-sm bg-gray-100 border border-gray-200 outline-none focus:border-gray-400 ${
          disabled ? "text-gray-400" : "text-gray-800"
        }`}
      />
    </div>
  );
}
