import { Building, Mail, MapPin } from "lucide-react";
import React from "react";

const ContactDetails = () => {
  return (
    <div className=" border rounded-2xl shadow-md w-full p-6">
      <div className="flex gap-6 items-center">
        <div className="p-1 w-12 h-12 rounded-full bg-white/40 shadow-xl border border-neutral-100 text-center text-black flex justify-center items-center">
          <Mail size={22} />
        </div>
        <h2 className="text-3xl font-bold">Contact Us</h2>
      </div>
      <p className="mt-4 text-[#1F2937]">
        For questions about this Privacy Policy, please reach out to us!
      </p>
      <div className="grid grid-cols-3 justify-between gap-10 mt-10">
        <div className="bg-[#7CEEFD]/10 p-4 rounded-2xl">
          <div className="flex gap-6 items-center">
            <div className="p-1 w-10 h-10 rounded-full bg-white/40 border border-neutral-100 text-center text-black flex justify-center items-center">
              <Building size={18} />
            </div>
            <h2 className="text-lg font-medium">Company</h2>
          </div>
          <p className="mt-2 text-[#1F2937]">
            Techween Solutions Establishment
          </p>
        </div>
        <div className="bg-[#7CEEFD]/10 p-4 rounded-2xl">
          <div className="flex gap-6 items-center">
            <div className="p-1 w-10 h-10 rounded-full bg-white/40 border border-neutral-100 text-center text-black flex justify-center items-center">
              <Mail size={18} />
            </div>
            <h2 className="text-xl font-medium">Email</h2>
          </div>
          <p className="mt-2 text-[#1F2937]">
            info@techween.sa
          </p>
        </div>
        <div className="bg-[#7CEEFD]/10 p-4 rounded-2xl">
          <div className="flex gap-6 items-center">
            <div className="p-1 w-10 h-10 rounded-full bg-white/40 border border-neutral-100 text-center text-black flex justify-center items-center">
              <MapPin size={18} />
            </div>
            <h2 className="text-xl font-medium">Location</h2>
          </div>
          <p className="mt-2 text-[#1F2937]">
            Riyadh, Saudi Arabia
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
