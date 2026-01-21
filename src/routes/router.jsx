import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

/* Public pages */
import HomePage from "@/pages/home/Home";
import About from "@/pages/about/About";
import Pricing from "@/pages/pricing/Pricing";
import ContactUs from "@/pages/contactus/ContactUs";
import InstallationGuide from "@/pages/installationguide/InstallationGuide";
import PricingPolicy from "@/pages/pricingpolicy/PricingPolicy";
import TermsCondition from "@/pages/termsandcondition/TermsAndCondition";
import { NotFoundPage } from "@/GlobalComponents/NotFoundPage";

/* Auth */
import Signup from "@/pages/auth/SignUp";
import Login from "@/pages/auth/Login";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import VerificationCode from "@/pages/auth/VerificationCode";
import ResetPassword from "@/pages/auth/ResetPassword";
import StripeCheckout from "@/pages/auth/StripeCheckout";
import PaymentSucsessfull from "@/pages/auth/PaymentSuccessfull";

/* Layouts */
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import CompanyLayout from "@/pages/companyadmin/layout/CompanyLayout";
import AgentLayout from "@/pages/companyagent/layout/AgentLayout";
import SuperAdminLayout from "@/pages/superadmin/layout/SuperAdminLayout";

/* Company Admin */
import CompanyDashboard from "@/pages/companyadmin/dashboard/CompanyDashboard";
import CompanyProfile from "@/pages/companyadmin/companyprofile/CompanyProfile";
import CompanyAgent from "@/pages/companyadmin/companyagent/CompanyAgent";
import AgentActivity from "@/pages/companyadmin/companyagent/AgentActivity";
import AiTrainings from "@/pages/companyadmin/aitraining/AiTraining";
import ChatMonitoring from "@/pages/companyadmin/chatmonitoring/ChatMonitoring";
import WidgetSettings from "@/pages/companyadmin/widgetsetting/WidgetSetting";
import BillingMain from "@/pages/companyadmin/billing/BillingMain";
import Reports from "@/pages/companyadmin/reports/Reports";
import NotificationPage from "@/pages/companyadmin/notifications/Notifications";
import SecurityPage from "@/pages/companyadmin/security/SecurityPage";

/* Company Agent */
import AgentDashboard from "@/pages/companyagent/agentdashboard/AgentDashboard";
import LiveChatComponent from "@/pages/companyagent/agentchat/AgentChatMonitoring";
import ProfileAndSetting from "@/pages/companyagent/profile-setting/ProfileAndSetting";
import ActivityFeed from "@/pages/companyagent/notification/Notification";
import ChatDashboard from "@/pages/companyagent/agentchathistory/AgentChatHistory";

/* Super Admin */
import SuperAdminDashboard from "@/pages/superadmin/superdashboard/SuperAdminDashboard";
import TenantManagement from "@/pages/superadmin/managetenants/ManageTenants";
import BillingSubscriptions from "@/pages/superadmin/billing-plans/BillingPlans";
import PromoCodesMain from "@/pages/superadmin/promo-codes/PromoCodesMain";
import PaltformReports from "@/pages/superadmin/platformreport/PaltformReports";
import PlatformSettings from "@/pages/superadmin/platform-settings/PlatformSettings";
import RolesAndPermissions from "@/pages/superadmin/roles-permission/RolesAndPermissions";
import GlobalNotification from "@/pages/superadmin/global-notification/GlobalNotification";
import CreateNewNotification from "@/pages/superadmin/global-notification/CreateNewNotification";
import SuperAdminProfile from "@/pages/superadmin/profile-setup/SuperAdminProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "installation-guide", element: <InstallationGuide /> },
      { path: "pricing-policy", element: <PricingPolicy /> },
      { path: "terms-of-services", element: <TermsCondition /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "verification-code", element: <VerificationCode /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "stripe-checkout", element: <StripeCheckout /> },
      { path: "payment-success", element: <PaymentSucsessfull /> },
    ],
  },

  {
    path: "/company-admin",
    element: <CompanyLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <CompanyDashboard /> },
      { path: "profile", element: <CompanyProfile /> },
      { path: "agent", element: <CompanyAgent /> },
      { path: "agent/agent-activity", element: <AgentActivity /> },
      { path: "ai-training", element: <AiTrainings /> },
      { path: "chat-monitoring", element: <ChatMonitoring /> },
      { path: "widget-settings", element: <WidgetSettings /> },
      { path: "billing", element: <BillingMain /> },
      { path: "reports", element: <Reports /> },
      { path: "notification", element: <NotificationPage /> },
      { path: "security", element: <SecurityPage /> },
    ],
  },

  {
    path: "/company-agent",
    element: <AgentLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <AgentDashboard /> },
      { path: "chat-monitoring", element: <LiveChatComponent /> },
      { path: "profile-setting", element: <ProfileAndSetting /> },
      { path: "notification", element: <ActivityFeed /> },
      { path: "chat-history", element: <ChatDashboard /> },
    ],
  },

  {
    path: "/super-admin",
    element: <SuperAdminLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <SuperAdminDashboard /> },
      { path: "tenant-management", element: <TenantManagement /> },
      { path: "billings", element: <BillingSubscriptions /> },
      { path: "promo-codes", element: <PromoCodesMain /> },
      { path: "platform-reports", element: <PaltformReports /> },
      { path: "platform-settings", element: <PlatformSettings /> },
      { path: "roles-permission", element: <RolesAndPermissions /> },
      { path: "notification", element: <GlobalNotification /> },
      { path: "notification/new", element: <CreateNewNotification /> },
      { path: "profile", element: <SuperAdminProfile /> },
    ],
  },
]);
