import { Outlet } from "react-router-dom";
import Navbar from "../GlobalComponents/Navbar";
import ScrollToTop from "../GlobalComponents/ScrollTop";
import ChatIcon from "../GlobalComponents/ChatIcon";
import WebsiteFooter from "../GlobalComponents/WebsiteFooter";

export default function MainLayout() {
  return (
    <div className="bg-gradient">
      <Navbar />
      <ScrollToTop/>
      {/* Padding top must be at least navbar height */}
      <main className=" mx-auto ">
        <Outlet />
      </main>
      <ChatIcon />
      <WebsiteFooter/>
    </div>
  );
}
