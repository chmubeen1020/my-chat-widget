import React from "react";
import {
  ArrowUpRight,
  UserPlus,
  MessageSquare,
  Info,
  TrendingUp,
  TrendingDown,
  Smile,
  Bot,
  Clock,
  Users,
  Timer,
  CalendarDays,
  ChevronDown,
  Upload,
  Palette,
  BookOpen,
  CircleCheck,
  Globe,
  Calendar,
  FileText,
  AlertTriangle,
  Target,
  Activity,
  Eye,
  Star,
} from "lucide-react"; // Lucide icons
import GraphicalRepresentation from "./GraphicalRepresentation";

const CompanyDashboard = () => {
  // Dummy Data
  const performanceData = [
    {
      title: "Total Conversation",
      value: "1,847",
      totalvalue: "2,000",
      progress: 92,
      change: "+15.2%",
      progressBarColor: "bg-[#59AEB8]",
      icon: <MessageSquare size={18} className="text-primary" />,
      tooltipHeading: "Conversation",
      tooltipDesc:
        "Total number of customer conversations handled during the selected period.",
    },
    {
      title: "Customer Satisfaction",
      value: "4.7",
      totalvalue: "5.0",
      progress: 98,
      change: "+3.2%",
      progressBarColor: "bg-[#59AEB8]",
      icon: <Smile size={18} className="text-[#00A63E]" />,
      tooltipHeading: "Customer Satisfaction",
      tooltipDesc:
        "Average rating from post-chat surveys collected from users.",
    },
    {
      title: "AI Success Rate",
      value: "65%",
      totalvalue: "70%",
      progress: 93,
      change: "+7.7%",
      progressBarColor: "bg-[#59AEB8]",
      icon: <Bot size={18} className="text-primary" />,
      tooltipHeading: "AI Success Rate",
      tooltipDesc:
        "Percentage of chats successfully handled by AI without agent intervention.",
    },
    {
      title: "Response Time",
      value: "2.3 min ",
      totalvalue: "2.0 min",
      progress: 85,
      change: "-8.3%",
      progressBarColor: "bg-[#F5490099]/60",
      icon: <Clock size={18} className="text-[#F54900]" />,
      tooltipHeading: "Response Time",
      tooltipDesc:
        "Average time taken by agents or AI to respond to a customer message.",
    },

    {
      title: "Active Agent",
      value: "12",
      totalvalue: "15",
      progress: 80,
      change: "+16.7%",
      progressBarColor: "bg-[#59AEB8]",
      icon: <Users size={18} className="text-[#00C950]" />,
      tooltipHeading: "Agent",
      tooltipDesc:
        "Number of active agents responding to customer chats during this period.",
    },
    {
      title: "Queue Status",
      value: "3",
      totalvalue: null,
      progress: 85,
      change: "Live",
      progressBarColor: "bg-[#6B69B2]",
      icon: <Timer size={18} className="text-[#C89F00]" />,
      tooltipHeading: "Queue Status",
      tooltipDesc:
        "Number of ongoing live chats currently waiting in the support queue.",
    },
  ];

  return (
    <div className="space-y-4 pb-20 md:pb-0">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Performance Overview</h2>
          <p className="text-sm text-[#4A5565]">
            Key metrics and targets for your chat system
          </p>
        </div>
        <div className="ml-auto md:ml-0 w-fit flex items-center  gap-4 bg-primary/10 px-4 py-1 rounded-lg text-primary font-normal">
          <CalendarDays size={20} />
          Time Period
          <button className="flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-1">
            Last 7 Days <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-4">
        {performanceData.map((data, index) => (
          <div
            key={index}
            className="bg-primary/10 px-4 py-1 rounded-2xl shadow-md flex flex-col border-l-[6px] border-primary text-sm lg:text-base "
          >
            <div className="flex justify-end font-medium gap-1 items-center">
              <p className="  text-gray-800">{data.value}</p>
              {data.totalvalue !== null ? (
                <p className=" text-gray-400">/ {data.totalvalue}</p>
              ) : null}
            </div>
            <div className="flex items-center justify-start gap-2 ">
              <div className="bg-white/80 h-6 w-6 lg:h-8 lg:w-8 flex justify-center items-center rounded-md p-1 ">
                {data.icon}
              </div>{" "}
              <h3 className="lg:text-lg font-semibold text-gray-700">
                {data.title}
              </h3>{" "}
              <div className="relative group">
                <Info size={16} className="text-primary" />
                <div className="hidden group-hover:block">
                  <Tooltip
                    heading={data.tooltipHeading}
                    description={data.tooltipDesc}
                  />
                </div>
              </div>
            </div>
            <div className="text-right ">
              <span
                className={`text-sm flex items-center justify-end gap-1 ${
                  data.change === "Live"
                    ? "text-gray-600"
                    : data.change.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {/* Check if the change is "Live" */}
                {data.change === "Live" ? (
                  <span>{data.change}</span>
                ) : (
                  <>
                    {data.change.startsWith("+") ? (
                      <TrendingUp size={14} />
                    ) : (
                      <TrendingDown size={14} />
                    )}
                    {data.change}
                  </>
                )}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm">Progress</p>
                <p className="font-medium">{data.progress}%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${data.progressBarColor}`}
                  style={{ width: `${data.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-6">
        <div className="w-full border border-gray-200 px-2 xl:px-4 py-2 rounded-xl flex justify-between items-center text-sm xl:text-base">
          <div className="w-full flex justify-start items-center gap-4">
            <span className="h-6 w-6 lg:h-8 lg:w-8 p-1 flex justify-center items-center rounded-md bg-primary text-white">
              <UserPlus size={18} />
            </span>
            <div className="text-left">
              <p>Invite Agent</p>
              <p className="text-sm md:text-xs xl:text-base text-[#717182]">
                Add a new team member
              </p>
            </div>
          </div>
          <div>
            <ArrowUpRight size={18} />
          </div>
        </div>
        <div className="w-full border border-gray-200 px-2 xl:px-4 py-2 rounded-xl flex justify-between items-center text-sm xl:text-base">
          <div className="w-full flex justify-start items-center gap-4">
            <span className="h-6 w-6 lg:h-8 lg:w-8 p-1 flex justify-center items-center rounded-lg bg-[#F0FDF4] text-[#00A63E]">
              <Upload size={20} />
            </span>
            <div className="text-left">
              <p>Upload AI Data</p>
              <p className="text-sm md:text-xs  xl:text-base text-[#717182]">
                Improve AI responces
              </p>
            </div>
          </div>
          <div>
            <ArrowUpRight size={18} />
          </div>
        </div>
        <div className="w-full border border-gray-200 px-2 xl:px-4 py-2 rounded-xl flex justify-between items-center text-sm xl:text-base">
          <div className="w-full flex justify-start items-center gap-4">
            <span className="h-6 w-6 lg:h-8 lg:w-8 p-1 flex justify-center items-center rounded-lg bg-[#FAF5FF] text-primary">
              <Palette size={20} />
            </span>
            <div className="text-left">
              <p className="text-black">Customize Widget</p>
              <p className="text-sm md:text-xs xl:text-base text-[#717182]">
                Update chat appearance
              </p>
            </div>
          </div>
          <div>
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
      <GraphicalRepresentation />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="border border-gray-200 rounded-xl p-2">
          <h2 className="flex items-center gap-2">
            <BookOpen size={16} className="text-primary" />
            Knowledge Base Health
          </h2>
          <p className="text-[#717182] text-sm">
            AI training resources and content status
          </p>
          <div className="w-full flex items-start gap-4 py-2">
            <div className="w-1/2 border border-[#B9F8CF] bg-[#F0FDF4] px-4 py-2 rounded-xl space-y-1 text-[#008236]">
              <h2 className="flex items-center gap-2 text-sm text-black">
                <CircleCheck size={16} className="text-[#008236] shrink-0" />
                <span className="truncate max-w-[160px]">
                  Knowledge Base Health
                </span>
              </h2>
              <p className=" text-2xl font-medium">12</p>
              <p className="text-sm">Active sources</p>
            </div>

            <div className="w-1/2 border border-[#BEDBFF] bg-[#EFF6FF] px-4 py-2 rounded-xl space-y-1 text-[#6B69B2]">
              <h2 className="flex items-center gap-2 text-sm">
                <Globe size={16} />
                <span className="truncate max-w-[160px]">Web URLs</span>
              </h2>
              <p className=" text-2xl font-medium">5</p>
              <p className="text-sm">Crawled sites</p>
            </div>
          </div>
          <div className="bg-[#F9FAFB] rounded-lg px-4 py-2 space-y-1 text-sm">
            <div className="flex justify-between items-center">
              <p>Last Updated</p>
              <div className="border border-gray-200 rounded-lg px-2 py-1 flex items-center gap-1 text-xs xl:text-sm">
                <Calendar size={16} />
                <p>OCT 1, 2024</p>
              </div>
            </div>
            <p className="text-[#4A5565]">
              Knowledge base health is up to date and optimized
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-[#008236] w-2 h-2 rounded-full" />
              <p className="text-[#008236]">All sources synchronized</p>
            </div>
          </div>
          <div className="w-full flex items-center gap-2 pt-2 ">
            <button className="w-1/2 rounded-md flex border border-gray-200 px-2 py-1 text-sm items-center justify-center gap-2">
              <FileText size={14} />
              Manage Sources
            </button>
            <button className="w-1/2 rounded-md flex bg-primary text-white px-2 py-1 text-sm items-center justify-center gap-2">
              <Upload size={14} />
              Add Content
            </button>
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <h2 className="flex items-center gap-2">
            <Bot size={16} className="text-primary" />
            AI Performance Insights
          </h2>
          <p className="text-[#717182] text-sm truncate ">
            Training opportunities and optimization suggestions
          </p>
          <div className="w-full flex items-start gap-4 py-2">
            <div className="w-1/2 border border-[#FFF085] bg-[#FEFCE8] px-4 py-2 rounded-xl space-y-1 text-[#A65F00]">
              <h2 className="flex items-center gap-2 text-sm text-[#733E0A]">
                <AlertTriangle size={16} className="text-[#D08700]" />
                <span className="truncate max-w-[160px]">Escalated</span>
              </h2>
              <p className=" text-2xl font-medium text-black">24</p>
              <p className="truncate max-w-[160px] text-sm">Need human help</p>
            </div>

            <div className="w-1/2 border bg-[#FEF2F2] border-[#FFC9C9] px-4 py-2 rounded-xl space-y-1 text-[#C10007]">
              <h2 className="flex items-center gap-2 text-sm">
                <Target size={16} />
                <span className="truncate max-w-[160px] text-black">
                  Low Confidence
                </span>
              </h2>
              <p className=" text-2xl font-medium text-black">8</p>
              <p className="text-sm">Crawled sites</p>
            </div>
          </div>
          <div className="bg-[#EFF6FF] rounded-lg px-4 py-2 space-y-1 text-sm text-primary">
            <div className="flex justify-start gap-1 items-center">
              <div className="border border-gray-200 rounded-lg p-1 flex items-center gap-1 text-sm">
                <Target size={16} />
              </div>
              <p className="text-primary">Training oportunity</p>
            </div>
            <p>31 conversations identified for AI improvement training</p>
            <div className="flex items-center gap-2">
              <div className="bg-primary w-2 h-2 rounded-full" />
              <p>Ready for review</p>
            </div>
          </div>
          <div className="w-full pt-2">
            <button className="w-full rounded-md flex bg-primary text-white px-2 py-1 text-sm items-center justify-center gap-2">
              <Target size={14} />
              Review Training Conversations
            </button>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="flex items-center gap-2">
                <Activity size={16} className="text-primary" />
                Recent Activity
              </h2>
              <p className="text-[#717182] text-sm">Latest system updates</p>
            </div>
            <div className="border border-gray-200 px-2 py-1 rounded-md text-black text-xs xl:text-sm flex gap-2 items-center">
              <Eye size={16} /> View All
            </div>
          </div>
          <div className="w-full pt-4 space-y-3">
            <div className="flex justify-start items-start gap-2 px-2 rounded-xl py-2 bg-gradient-to-r from-herogradient/30 to-herogradient/60">
              <div className="p-2 rounded-md bg-[#FFE2E2] text-[#E7000B]">
                <AlertTriangle size={14} />
              </div>
              <div className="space-y-1 text-sm xl:text-base">
                <h2>High-priority chat escalated to sarah Johnson</h2>
                <p className="text-[#717182]">2m ago</p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-2 px-2 rounded-xl py-2 bg-gradient-to-r from-herogradient/30 to-herogradient/60">
              <div className="p-2 rounded-md bg-[#FFE2E2] text-[#E7000B]">
                <AlertTriangle size={14} />
              </div>
              <div className="space-y-1 text-sm xl:text-base">
                <h2>High-priority chat escalated to sarah Johnson</h2>
                <p className="text-[#717182]">2m ago</p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-2 px-2 rounded-xl py-2 bg-gradient-to-r from-herogradient/30 to-herogradient/60">
              <div className="p-2 rounded-md bg-[#FFE2E2] text-[#E7000B]">
                <AlertTriangle size={14} />
              </div>
              <div className="space-y-1 text-sm xl:text-base">
                <h2>High-priority chat escalated to sarah Johnson</h2>
                <p className="text-[#717182]">2m ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="flex items-center gap-2">
                <Users size={16} className="text-primary" />
                Top Agents
              </h2>
              <p className="text-[#717182] text-sm">
                Best performers this week
              </p>
            </div>
            <div className="border border-gray-200 px-2 py-1 rounded-md text-black text-xs xl:text-sm flex gap-2 items-center">
              <Eye size={16} /> View All
            </div>
          </div>
          <div className="w-full pt-4 space-y-3">
            <div className="flex justify-between items-center gap-2 px-2 rounded-xl py-2 bg-gradient-to-r from-herogradient/30 to-herogradient/60">
              <div className="w-full flex justify-start items-center gap-2 px-2">
                <div className="w-8 h-8 rounded-full bg-primary " />
                <div className="space-y-1 text-sm xl:text-base">
                  <h2>Sarah Johnson</h2>
                  <p className="text-[#717182]">25 chats</p>
                </div>
              </div>
              <div className=" space-y-1 flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <Star
                    size={14}
                    className=" fill-yellow-500 text-yellow-500"
                  />
                  <p>4.8</p>
                </div>
                <p className="text-[#717182] text-sm">Top</p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2 px-2 rounded-xl py-2 bg-gradient-to-r from-herogradient/30 to-herogradient/60">
              <div className="w-full flex justify-start items-center gap-2 px-2">
                <div className="w-8 h-8 rounded-full bg-primary " />
                <div className="space-y-1 text-sm xl:text-base">
                  <h2>Sarah Johnson</h2>
                  <p className="text-[#717182]">25 chats</p>
                </div>
              </div>
              <div className=" space-y-1 flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <Star
                    size={14}
                    className=" fill-yellow-500 text-yellow-500"
                  />
                  <p>4.8</p>
                </div>
                <p className="text-[#717182] text-sm">Top</p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2 px-2 rounded-xl py-2 bg-gradient-to-r from-herogradient/30 to-herogradient/60">
              <div className="w-full flex justify-start items-center gap-2 px-2">
                <div className="w-8 h-8 rounded-full bg-primary " />
                <div className="space-y-1 text-sm xl:text-base">
                  <h2>Sarah Johnson</h2>
                  <p className="text-[#717182]">25 chats</p>
                </div>
              </div>
              <div className=" space-y-1 flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <Star
                    size={14}
                    className=" fill-yellow-500 text-yellow-500"
                  />
                  <p>4.8</p>
                </div>
                <p className="text-[#717182] text-sm">Top</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;

const Tooltip = ({ heading, description }) => {
  return (
    <div className="absolute left-[-30px] md:left-[-200px] top-2 mt-3 z-50 md:w-[300px] xl:w-[360px]">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 px-4 py-2">
        <div className="flex items-center gap-4">
          <div>
            <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs font-bold">
              i
            </div>
          </div>
          <div>
            <h4 className=" font-semibold text-gray-900">{heading}</h4>
            <p className="text-gray-600 leading-relaxed text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
