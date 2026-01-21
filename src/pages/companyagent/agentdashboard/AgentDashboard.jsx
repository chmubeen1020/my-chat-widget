import React from "react";
import {
  ArrowUpRight,
  MessageSquare,
  Info,
  TrendingUp,
  Users,
  Timer,
  Star,
} from "lucide-react"; // Lucide icons
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const AgentDashboard = () => {
  const performanceData = [
    {
      title: "Total Conversation",
      Color: "text-primary",
      desc: "Currently handling conversations",
      number: 4,
      icon: <MessageSquare size={18} className="text-primary" />,
      tooltipHeading: "Conversation",
      tooltipDesc:
        "Total number of customer conversations handled during the selected period.",
    },
    {
      title: "Customer Satisfaction",
      Color: "text-amber-400",
      number: 8,
      desc: "Awaiting agent assignment",
      icon: <Info size={18} className="text-amber-400" />,
      tooltipHeading: "Customer Satisfaction",
      tooltipDesc:
        "Average rating from post-chat surveys collected from users.",
    },
    {
      title: "AI Success Rate",
      Color: "text-red-400",
      number: 24,
      desc: "Chats handled • 2.3 min avg response",
      icon: <TrendingUp size={18} className="text-[#00A63E]" />,
      tooltipHeading: "AI Success Rate",
      tooltipDesc:
        "Percentage of chats successfully handled by AI without agent intervention.",
    },
    {
      title: "Response Time",
      Color: "text-blue-500",
      number: "4.5/5.0",
      desc: "Based on customer feedback",
      icon: <Star size={18} className="text-primary" />,
      tooltipHeading: "Response Time",
      tooltipDesc:
        "Average time taken by agents or AI to respond to a customer message.",
    },
  ];
  const pieData = [
    { name: "AI Handled", value: 65, color: "#6D6EAF" },
    { name: "Agent Handled", value: 35, color: "#5FB0B7" },
  ];

  return (
    <div className="space-y-4 pb-4 md:pb-0">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Agent Dashboard</h2>
          <p className="text-sm text-[#4A5565]">
            Monitor your chat performance and manage customer interactions
          </p>
        </div>
        <div className=""></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-4">
        {performanceData.map((data, index) => (
          <div
            key={index}
            className="bg-primary/10 p-6  rounded-2xl shadow-md flex flex-col border-l-[6px] border-primary text-sm lg:text-base "
          >
            <div className="flex justify-between">
              <div className="flex items-center justify-start gap-2 ">
                <h3 className="lg:text-lg font-semibold text-gray-700 max-w-[180px] truncate">
                  {data.title}
                </h3>{" "}
                <div className="relative group">
                  <Info size={16} className="text-primary" />
                  <div className="hidden group-hover:block">
                    <CustomTooltip
                      heading={data.tooltipHeading}
                      description={data.tooltipDesc}
                    />
                  </div>
                </div>
              </div>
              <div className=" h-6 w-6 lg:h-8 lg:w-8 flex justify-center items-center rounded-md p-1 ">
                {data.icon}
              </div>
            </div>
            <div className="space-y-2">
              <p className={`text-2xl font-medium ${data.Color}`}>
                {data.number}
              </p>
              <p className="textgray-400 text-sm">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 xl:gap-4">
        <div className="w-full border border-gray-200 px-2 xl:px-4 py-2 rounded-xl flex justify-between items-center text-sm xl:text-base">
          <div className="w-full flex justify-start items-center gap-4">
            <span className="h-6 w-6 lg:h-8 lg:w-8 p-1 flex justify-center items-center rounded-md bg-primary text-white">
              <MessageSquare size={18} />
            </span>
            <div className="text-left">
              <p>Start New Chat</p>
              <p className="text-sm md:text-xs xl:text-base text-[#717182]">
                Invite and manage team members
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
              <Users size={20} />
            </span>
            <div className="text-left">
              <p>View Queue</p>
              <p className="text-sm md:text-xs  xl:text-base text-[#717182]">
                Monitor and manage active chats
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
              <Timer size={20} />
            </span>
            <div className="text-left">
              <p className="text-black">Break Time</p>
              <p className="text-sm md:text-xs xl:text-base text-[#717182]">
                Set and track break schedules
              </p>
            </div>
          </div>
          <div>
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 xl:gap-4">
        <div className="w-full bg-white px-6 py-2 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-gray-800 font-semibold text-lg">
            Response Types
          </h3>
          <p className="text-gray-400 text-sm mb-4">AI vs Agent handling</p>

          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 space-y-2">
            {pieData.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center text-sm"
              >
                <div className="flex items-center gap-2 text-gray-600">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  {item.name}
                </div>
                <span className="font-semibold text-gray-700">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-medium">Active Chats</h2>
              <p className="text-[#717182] text-sm">
                Currently ongoing conversations
              </p>
            </div>
            <div className="px-3 py-1 rounded-md text-white bg-[#59AEB8] text-xs xl:text-sm ">
              View All
            </div>
          </div>
          <div className="w-full pt-4 space-y-2">
            <div className="flex justify-between items-start gap-2 px-2 rounded-xl py-1 border border-gray-200">
              <div className="w-full flex justify-start items-center gap-2 px-1 md:px-2">
                <div className="w-10 h-10 rounded-full bg-primary flex justify-center items-center text-white">
                  SA
                </div>
                <div className="space-y-1 text-sm xl:text-base">
                  <h2>Sarah Johnson</h2>
                  <p className="text-[#717182] text-sm xl:max-w-[150px]  truncate">
                    Can you help me understand the enter
                  </p>
                  <p className="text-[#717182] text-sm flex items-center gap-1">
                    /pricing <span className="px-1">•</span> <span>5 min</span>
                  </p>
                </div>
              </div>
              
              <div className="hidden sm:flex items-center gap-1">
                <p className="px-2 text-xs py-0.5 bg-[#DCFCE7] text-[#016630] rounded-md">
                  Active
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-medium">Pending Requests</h2>
              <p className="text-[#717182] text-sm">
                Visitors waiting for assistance
              </p>
            </div>
            <div className="px-3 py-1 rounded-md text-white bg-[#59AEB8] text-xs xl:text-sm ">
              Accept Next
            </div>
          </div>
          <div className="w-full pt-4 space-y-2">
            <div className="flex justify-between items-center gap-2 px-2 rounded-xl py-1 border border-gray-200">
              <div className="w-full flex justify-start items-center gap-2 px-2">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex justify-center items-center text-white">
                  SA
                </div>
                <div className="space-y-1 text-sm xl:text-base">
                  <h2>David Miller</h2>
                  <p className="text-[#717182] text-sm truncate">
                    Product Demo request
                  </p>
                  <p className="text-[#717182] text-sm flex items-center gap-1">
                    /demo <span className="px-1">•</span>{" "}
                    <span className="text-amber-500">waiting 2 min</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p className="px-2 text-xs py-0.5 border border-gray-200 rounded-md">Accept</p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2 px-2 rounded-xl py-1 border border-gray-200">
              <div className="w-full flex justify-start items-center gap-2 px-2">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex justify-center items-center text-white">
                  SA
                </div>
                <div className="space-y-1 text-sm xl:text-base">
                  <h2>David Miller</h2>
                  <p className="text-[#717182] text-sm truncate">
                    Product Demo request
                  </p>
                  <p className="text-[#717182] text-sm flex items-center gap-1">
                    /demo <span className="px-1">•</span>{" "}
                    <span className="text-amber-500">waiting 2 min</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <p className="px-2 text-xs py-0.5 border border-gray-200 rounded-md">Accept</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-200 rounded-xl p-4">
        <h3 className="text-gray-800 font-semibold text-lg">Latest Visitor Feedback</h3>
        <p className="text-gray-400 text-sm mb-4">Recent feedback from customers you've assisted</p>
        <div className="w-full pt-4 space-y-2">
          <div className="flex justify-between items-center gap-2 px-1 md:px-2 rounded-xl py-1 border border-gray-200">
              <div className="w-3/4 md:w-1/2 flex justify-start items-center gap-2 px-2">
                <div className="w-10 h-10 rounded-full bg-[#59AEB8] flex justify-center items-center text-white">
                  SA
                </div>
                <div className="space-y-1 text-sm xl:text-base">
                  <div className="flex items-center gap-4">
                  <h2>David Miller</h2> 
                  <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={ "fill-yellow-400 text-yellow-400"}
                          />
                        ))}
                      </div>
                      </div>
                  <p className="text-[#717182] text-sm truncate">
                    Product Demo request
                  </p>
                </div>
              </div>
              <div className="w-1/4 md:w-1/2 flex items-center justify-end gap-1">
                <p className="text-sm text-gray-500 ">1 hour ago</p>
              </div>
          </div>
          <div className="flex justify-between items-center gap-2 px-1 md:px-2 rounded-xl py-1 border border-gray-200">
              <div className="w-3/4 md:w-1/2 flex justify-start items-center gap-2 px-2">
                <div className="w-10 h-10 rounded-full bg-[#59AEB8] flex justify-center items-center text-white">
                  SA
                </div>
                <div className="space-y-1 text-sm xl:text-base">
                  <div className="flex items-center gap-4">
                  <h2>David Miller</h2> 
                  <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={ "fill-yellow-400 text-yellow-400"}
                          />
                        ))}
                      </div>
                      </div>
                  <p className="text-[#717182] text-sm truncate">
                    Product Demo request
                  </p>
                </div>
              </div>
              <div className="w-1/4 md:w-1/2 flex items-center justify-end gap-1">
                <p className="text-sm text-gray-500 ">1 hour ago</p>
              </div>
          </div>
          <div className="flex justify-between items-center gap-2 px-1 md:px-2 rounded-xl py-1 border border-gray-200">
              <div className="w-3/4 md:w-1/2 flex justify-start items-center gap-2 px-2">
                <div className="w-10 h-10 rounded-full bg-[#59AEB8] flex justify-center items-center text-white">
                  SA
                </div>
                <div className="space-y-1 text-sm xl:text-base">
                  <div className="flex items-center gap-4">
                  <h2>David Miller</h2> 
                  <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={ "fill-yellow-400 text-yellow-400"}
                          />
                        ))}
                      </div>
                      </div>
                  <p className="text-[#717182] text-sm truncate">
                    Product Demo request
                  </p>
                </div>
              </div>
              <div className="w-1/4 md:w-1/2 flex items-center justify-end gap-1">
                <p className="text-sm text-gray-500 ">1 hour ago</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;

const CustomTooltip = ({ heading, description }) => {
  return (
    <div className="absolute left-[-120px] md:left-[-200px] top-2 mt-3 z-50 w-[300px] 2xl:w-[360px]">
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
