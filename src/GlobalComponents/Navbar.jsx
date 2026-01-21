import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
   const [scrolling, setScrolling] = useState(false);
     const { pathname } = useLocation();
  const isHome = pathname === "/";
const navigate = useNavigate();

const GoToHome =() => {
  navigate ('/auth/login')
}

  // Track scroll position and update state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);  // If scrolled more than 50px, enable blur
      } else {
        setScrolling(false); // If scrolled back to the top, remove blur
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${
          scrolling ? 'bg-transparent backdrop-blur-lg' : 'bg-transparent'
        }`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-20 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="w-full max-w-[80px] lg:max-w-[100px] 2xl:max-w-[140px] flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className=" h-full object-contain"
          />
        </div>

        {/* NAV LINKS */}
        <div className="hidden sm:flex justify-center items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium tracking-tight transition-colors
                 ${
                   isActive
                     ? "text-primary"
                     : "text-neutral-500 hover:text-primary"
                 }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-2.5">
          <button className="px-3 py-1.5 rounded-[5px]
                             text-sm xl:text-base
                             text-neutral-500 font-semibold
                             hover:bg-neutral-100 transition"
                             onClick={GoToHome}>
            Login
          </button>

          <button
      className={`px-2 py-2 text-sm xl:text-base xl:px-4 2xl:py-3 rounded-md font-semibold transition
        ${
          isHome
            ? "text-primary bg-primary/10 hover:bg-primary/20"
            : "bg-primary text-white hover:bg-primary/90"
        }
      `}
    >
      Get started now
    </button>
        </div>

      </div>
      <div className="flex sm:hidden justify-center items-center gap-8 bg-white py-2 px-4 w-fit mx-auto rounded-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium tracking-tight transition-colors 
                 ${
                   isActive
                     ? "text-white bg-primary rounded-md px-2"
                     : "text-primary"
                 }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
    </nav>
  );
}
