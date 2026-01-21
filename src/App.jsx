import { Outlet } from "react-router-dom";
import Navbar from "./GlobalComponents/Navbar";
import ChatIcon from "./GlobalComponents/ChatIcon";
import  WebsiteFooter from "./GlobalComponents/WebsiteFooter";
import ScrollToTop from "./GlobalComponents/ScrollTop";

export default function App() {
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
