import React from "react";
import { images } from "../assets"; // assuming dashboard image is here
import { FooterIcon } from "../assets";


const socialLinks = [
  { name: "LinkedIn", icon: FooterIcon.FooterLinkedin, url: "#" },
  { name: "Instagram", icon: FooterIcon.FooterInsta, url: "#" },
  { name: "Twitter", icon: FooterIcon.FooterTwitter, url: "#" },    
  { name: "Facebook", icon: FooterIcon.FooterFacebook, url: "#" }
];
export default function WebsiteFooter() {
  return (
    <section className="relative pt-10 md:pt-24 overflow-hidden bg-gradient-to-t from-white via-herogradient/20 to-herogradient ">
      {/* PAGE BACKGROUND GRADIENT */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-herogradient/10 to-herogradient" /> */}

      <div className="relative px-4 lg:px-0 max-w-4xl xl:max-w-6xl mx-auto ">
        {/* MAIN CARD */}
        <div
          className="
            relative rounded-3xl overflow-hidden
            border border-neutral-200
            bg-white
            shadow-sm
            flex flex-col sm:flex-row items-start
          "
        >
          {/* CARD GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-br from-herogradient/10 via-herogradient/60 to-herogradient/90 pointer-events-none" />

          {/* LEFT CONTENT */}
          <div className="relative flex-1 px-4 sm:px-6  md:px-10 py-6 sm:py-8 md:py-12 xl:py-16">
            {/* TAG */}
            <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2 md:mb-4">
              <span className="inline-flex w-2 h-2 rounded-full bg-primary" />
              AI Optimized
            </div>

            {/* TITLE */}
            <h2 className="text-xl md:text-2xl xl:text-4xl font-bold text-slate-900 leading-tight mb-2 md:mb-4">
              Discover Top Tools & <br />
              Resources Inside Techween
            </h2>

            {/* SUBTITLE */}
            <p className="text-neutral-600 md:text-lg mb-4 md:mb-8 max-w-md">
              Start managing smarter conversations today.
            </p>

            {/* CTA */}
            <button
              className="
                inline-flex items-center justify-center
                px-4 py-1 sm:py-2
                xl:px-6 xl:py-3 rounded-md
                bg-[#6B69B2]
                text-white font-semibold
                shadow-sm
                hover:bg-[#5b59a5]
                transition
              "
            >
              Get started now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex-1 ">
            <div className="absolute top-10 right-[-10px]  rounded-2xl overflow-hidden">
              <img
                src={images.HomeTools}
                alt="Techween Dashboard"
                className="w-full h-[250px] md:h-[350px] object-fit"
              />
            </div>
          </div>
        </div>
      </div>
        <div className="pb-2 px-4 mt-4 sm:mt-8 md:mt-10 bg-gradient-to-b from-herogradient/10 via-herogradient/10 to-herogradient">
        <div className="w-full max-w-4xl xl:max-w-6xl mx-auto">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 xl:gap-48 text-neutral-600 px-6">
          {/* EXPLORE LINKS */}
          <div className="flex flex-col justify-start items-start">
            <h4 className="font-semibold text-lg text-neutral-900 mb-4">Explores</h4>
            <ul>
              <li><a href="/home" className="hover:text-[#6B69B2]">Home</a></li>
              <li><a href="/pricing" className="hover:text-[#6B69B2]">Pricing</a></li>
            </ul>
          </div>

          {/* COMPANY LINKS */}
          <div className="flex flex-col justify-start items-start">
            <h4 className="font-semibold text-lg text-neutral-900 mb-4">Company</h4>
            <ul>
              <li><a href="/about-us" className="hover:text-[#6B69B2]">About Us</a></li>
              <li><a href="/contact-us" className="hover:text-[#6B69B2]">Contact Us</a></li>
            </ul>
          </div>

          {/* SUPPORT LINKS */}
          <div className="flex flex-col justify-start items-start">
            <h4 className="font-semibold text-lg text-neutral-900 mb-4">Support</h4>
            <ul>
              <li><a href="/help-center" className="hover:text-[#6B69B2]">Help Center</a></li>
              <li><a href="/installation-guide" className="hover:text-[#6B69B2]">Installation Guide</a></li>
              <li><a href="/subscription" className="hover:text-[#6B69B2]">Subscription</a></li>
            </ul>
          </div>

          {/* POLICIES LINKS */}
          <div className="flex flex-col justify-start items-start">
            <h4 className="font-semibold text-lg text-neutral-900 mb-4">Policies</h4>
            <ul>
              <li><a href="/pricing-policy" className="hover:text-[#6B69B2]">Legal Privacy Policy</a></li>
              <li><a href="/terms-of-services" className="hover:text-[#6B69B2]">Terms of Service</a></li>
              <li><a href="cookie-policy" className="hover:text-[#6B69B2]">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="w-full max-w-5xl mx-auto py-4 px-6 mt-10 md:mt-20 flex flex-col md:flex-row items-center sm:justify-between border border-neutral-100 rounded-3xl bg-gradient-to-r from-white  to-herogradient ">
            <div className="w-36 ">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-full object-contain"
          />
        </div>
          <div className="w-full md:w-fit flex flex-col items-start justify-center gap-2">
            <div className="flex flex-col items-start">
              <span className="text-primary  font-semibold mr-4">
                Newsletter
              </span>
              <span className="text-neutral-600 text-xs">
                Subscribe for the latest deals, trends, and seller tips.
              </span>
            </div>
            <div className="w-full flex gap-3">
              <input
                type="email"
                placeholder="Write your email"
                className="px-4 py-1 rounded-md border text-sm border-neutral-200 text-neutral-900 w-full md:w-[300px] focus:outline-none focus:ring-2 focus:ring-[#6B69B2]"
              />
              <button className="bg-[#6B69B2] text-white px-6 py-1 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER BRANDING */}
        <div className="text-center text-neutral-600 mt-4 md:mt-12 flex flex-col-reverse md:flex-row justify-between items-center border-t-2 border-white pt-4 pb-10 md:pb-0 md:pt-0 md:py-4 gap-2 md:gap-0">
          <div className="flex justify-center gap-4 ">
      {socialLinks.map((link) => (
        <a key={link.name} href={link.url} className="hover:text-[#6B69B2]">
          <img
            src={link.icon}
            alt={link.name}
            className="w-4 h-4" // adjust the size as needed
          />
        </a>
      ))}
    </div>
          <p>Techween 2025. All Rights Reserved.</p>
        </div>
        </div>
      </div>

    </section>
  );
}
