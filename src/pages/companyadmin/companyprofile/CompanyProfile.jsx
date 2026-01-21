import React, { useState, useRef } from "react";
import {
  Upload,
  X,
  ChevronDown,
  Globe,
  Clock,
  Building2,
} from "lucide-react";

const CompanyProfile = () => {
  const [logo, setLogo] = useState(null);
  const [unSaved, setUnSaved] = useState(false);
  const fileInputRef = useRef(null);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogo(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className=" mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4 mt-2">
        <div>
          <h1 className="text-xl font-semibold">Company Profile</h1>
          <p className="text-gray-500 text-sm">
            Update your company details and security settings.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Left Side: Logo Upload */}
        <div className="bg-white py-2 px-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="flex items-center gap-2 text-lg font-medium text-[#1e293b] mb-1">
            {" "}
            <Building2 size={20} />
            Company Logo
          </h3>
          <p className="text-sm text-gray-400 mb-2 xl:mb-4">
            Upload your company logo to customize your chat widget and
            dashboard.
          </p>

          <div className="flex gap-4 items-center">
            {!logo ? (
              /* UI Before Upload */
              <div className="w-full max-w-[80px] xl:max-w-[100px] aspect-square bg-primary/10 rounded-2xl flex flex-col items-center justify-center transition-all group">
                <Building2 size={40} className="text-primary" />
              </div>
            ) : (
              /* UI After Upload (Image 2 style) */
              <div className="relative  aspect-square rounded-2xl overflow-hidden border border-gray-100 ">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="w-full max-w-[100px] h-full object-contain p-4"
                />
              </div>
            )}

            <input
              type="file"
              hidden
              ref={fileInputRef}
              onChange={handleLogoUpload}
              accept="image/*"
            />
            <div className="space-y-2">
              <button
                onClick={() => fileInputRef.current.click()}
                className="w-fit mt-4 py-1 px-4 border border-gray-200 rounded-lg text-sm  flex items-center justify-center gap-2"
              >
                <Upload size={16} />
                {logo ? "Change Logo" : "Upload Logo"}
              </button>
              {!logo ? (
                <p className="text-sm text-gray-400 ">
                  Recommended: 200x200px, PNG or JPG
                </p>
              ) : (
                <button
                  onClick={removeLogo}
                  className="w-full px-4 py-1 text-sm border border-red-200 rounded-lg font-medium text-red-500"
                >
                  Remove Logo
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Information Form */}
        <div className="bg-white py-4 px-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-medium text-[#1e293b] mb-6 flex items-center gap-2">
            Company Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">

            {/* Company Name */}
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Company Name</label>
              <input
                type="text"
                placeholder="Acme Corporation"
                className="w-full px-4 py-2.5  border border-gray-200 rounded-xl  outline-none transition-all text-sm"
              />
            </div>

            {/* Website */}
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Website URL</label>
              <div className="relative">
                <Globe
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="url"
                  placeholder="https://acme.com"
                  className="w-full pl-10 pr-4 py-2.5  border border-gray-200 rounded-xl  outline-none transition-all text-sm"
                />
              </div>
            </div>

            

            {/* Contact Email */}
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Contact Number</label>
              <input
                type="number"
                placeholder="+1 (22) 333 4444"
                className="w-full px-4 py-2.5  border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6B69B2]/20 focus:border-[#6B69B2] outline-none transition-all text-sm"
              />
            </div>
            {/* Address */}
            <div className="space-y-2 ">
              <label className="text-sm text-gray-700">Address</label>
              <textarea
                rows="1"
                placeholder="123 Business St, Suite 100, San Francisco, CA"
                className="w-full px-4 py-2.5  border border-gray-200 rounded-xl  outline-none transition-all text-sm resize-none"
              ></textarea>
            </div>
            {/* Contact Email */}
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Contact Email</label>
              <input
                type="email"
                placeholder="contact@acme.com"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl outline-none transition-all text-sm"
              />
            </div>

            {/* Timezone */}
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Timezone</label>
              <div className="relative">
                <Clock
                  className="absolute left-3 top-1/2 -translate-y-1/2 "
                  size={18}
                />
                <select className="w-full appearance-none pl-10 pr-10 py-2.5  border border-gray-100 rounded-xl  outline-none text-sm">
                  <option>UTC-8 (Pacific Time)</option>
                  <option>UTC+0 (GMT)</option>
                  <option>UTC+5:30 (IST)</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Language</label>
              <div className="relative">
                <select className="w-full appearance-none px-4 py-2.5  border border-gray-100 rounded-xl  outline-none text-sm">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                  <option>UTC+5:30 (IST)</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2 lg:col-span-2 xl:col-span-3">

              <label className="text-sm text-gray-700">
                Company Description
              </label>
              <textarea
                rows="3"
                placeholder="Description"
                className="w-full px-4 py-2.5  border border-gray-200 rounded-xl  outline-none transition-all text-sm resize-none"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors" onClick={() => setUnSaved(true)}>
              Discard
            </button>
            <button className="px-6 py-2 bg-[#6B69B2] text-white rounded-lg text-sm font-semibold shadow-lg shadow-indigo-100 hover:bg-[#5957a1] transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      {unSaved && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
    <div className="bg-white w-full max-w-xs md:max-w-sm rounded-xl p-4 shadow-xl">
        <div className="flex justify-end pb-4">
        <button className="" onClick={() => setUnSaved(false)}><X size={18}/></button>
        </div>
     <p className="text-center"> You have unsaved changes. Are you sure you want to leave? </p>
    </div>
  </div>
)}

    </div>
  );
};

export default CompanyProfile;
