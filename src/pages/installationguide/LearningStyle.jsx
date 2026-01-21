import React, { useState } from "react";
import { LearningStyleText } from "../../assets";
import {
  ArrowLeft,
  ArrowRight,
  BookText,
  CircleCheck,
  CirclePlay,
  Clock,
  Image,
  Sparkles,
} from "lucide-react";
import { images } from "../../assets";

// learningData.js
export const tabs = [
  { id: "text", label: "Text Guide", icon: <BookText size={14} /> },
  { id: "video", label: "Video Tutorial", icon: <CirclePlay size={14} /> },
  { id: "photo", label: "Photo Guide", icon: <Image size={14} /> },
];

export const textSteps = [
  {
    id: 1,
    icon: LearningStyleText.LearningStyleTextIcon1,
    title: "Download The Installer",
    description:
      'Visit the Techween website and click on the "Download for Windows" button. The installer file will be saved to your Downloads folder.',
  },
  {
    id: 2,
    icon: LearningStyleText.LearningStyleTextIcon2,
    title: "Run The Installer",
    description:
      "Locate the downloaded file and double-click TechweenSetup.exe to start the installation.",
  },
  {
    id: 3,
    icon: LearningStyleText.LearningStyleTextIcon3,
    title: "Accept Permissions",
    description:
      'When prompted by Windows UAC, click "Yes" to allow installation.',
  },
  {
    id: 4,
    icon: LearningStyleText.LearningStyleTextIcon4,
    title: "Choose Installation Location",
    description:
      "Select where Techween should be installed. Default location is recommended.",
  },
  {
    id: 5,
    icon: LearningStyleText.LearningStyleTextIcon5,
    title: "Complete Installation",
    description:
      'Click "Install" and wait for the process to finish, then launch Techween.',
  },
];

export const videoInfo = {
  title: "Complete Video Walkthrough",
  description:
    "Watch our detailed video tutorial covering every step of the Windows installation process. Follow along at your own pace.",
  duration: "78 min",
  features: [
    {
      title: "Clear Instructions",
      sub: "Easy to follow",
      bgColor: "bg-[#EFF6FF]",
      textColor: "text-primary",
      icon: CirclePlay,
    },
    {
      title: "Every Step",
      sub: "Nothing skipped",
      bgColor: "bg-[#F0FDF4]",
      textColor: "text-green-400",
      icon: CircleCheck,
    },
    {
      title: "Pro Tips",
      sub: "Expert advice",
      bgColor: "bg-[#FAF5FF]",
      textColor: "text-primary",
      icon: Sparkles,
    },
  ],
};

export const photoSteps = [
  {
    id: 1,
    title: "Download the Installer",
    description: "Navigate to techween.com and click the Download button.",
    image: images.AiDashboardFull,
  },
  {
    id: 2,
    title: "Run Installer",
    description: "Open the downloaded installer to begin setup.",
    image: images.HeroDashboard,
  },
  {
    id: 3,
    title: "Finish Setup",
    description: "Complete installation and launch Techween.",
    image: images.AiDashboardFull,
  },
];

function TextGuide() {
  return (
    <div className="space-y-4 text-left">
      {textSteps.map((step) => (
        <div
          key={step.id}
          className="w-full bg-[#e5e6ff34] border border-gray-100 rounded-xl p-5 flex gap-4"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ECECF0] text-primary font-semibold">
            <img src={step.icon} alt="" className="w-6 h-6" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className=" flex justify-between">
              <div>
                <h4 className="font-semibold mb-1">{step.title}</h4>
              </div>
              <div>
                <img
                  src={LearningStyleText.RightIcon}
                  alt=""
                  className="w-4 h-4"
                />
              </div>
            </div>
            <p className="text-sm text-neutral-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function VideoGuide() {
  return (
    <div className="bg-white rounded-3xl border shadow-md">
      <div className="relative mx-auto ">
        {/* MAIN CARD */}
        <div
          className="
                    relative rounded-3xl overflow-hidden
                    bg-white
                    shadow-sm
                    flex flex-col lg:flex-row items-start justify-between
                  pt-10 "
        >
          {/* CARD GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-br from-herogradient/10 via-herogradient/60 to-herogradient/90 pointer-events-none" />

          {/* LEFT CONTENT */}
          <div className="relative flex-1 px-10 pt-10 text-left">
            {/* TAG */}
            <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
              <span className="inline-flex w-2 h-2 rounded-full bg-primary" />
              AI Optimized
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-slate-900 leading-tight mb-2">
              Discover Top Tools & <br />
              Resources Inside Techween
            </h2>

            {/* SUBTITLE */}
            <p className="text-neutral-600 text-lg mb-6 max-w-md">
              Start managing smarter conversations today.
            </p>

            {/* CTA */}
            <button
              className="
                        inline-flex items-center justify-center
                        px-4 py-2 rounded-md
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
            <div className="w-full flex justify-end ml-4 rounded-2xl overflow-hidden">
              <img
                src={images.LearningDashboard}
                alt="Techween Dashboard"
                className="w-full  max-w-sm object-fit"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 text-left px-6 pt-6 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold">{videoInfo.title}</h3>
          <p className="text-[#717182] text-sm mt-1">{videoInfo.description}</p>
        </div>
        <div className="bg-[#030213] text-white px-2 h-6 rounded-lg flex gap-1 items-center">
          <Clock size={14} /> <p className="text-xs">78 min</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 px-6 py-4">
        {videoInfo.features.map((f, i) => (
          <div
            key={i}
            className={`rounded-xl py-4 flex justify-center gap-2 items-start ${f.bgColor}`}
          >
            {/* ICON */}
            <div className={`rounded-lg mt-1 ${f.textColor}`}>
              <f.icon className="w-5 h-5" />
            </div>

            {/* TEXT */}
            <div className="flex flex-col items-start justify-start">
              <div className=" font-semibold text-neutral-900">{f.title}</div>
              <div className="text-sm text-[#717182]">{f.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhotoGuide({ index, setIndex }) {
  const step = photoSteps[index];

  return (
    <div className="bg-white rounded-3xl border overflow-hidden shadow-md">
      {/* IMAGE */}
      <div className="relative h-[450px] bg-neutral-200 flex items-center justify-center">
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-full object-contain opacity-80"
        />
        <div className="absolute left-4 bottom-4 flex flex-col justify-start">
          <p className="w-fit inline-block text-xs px-2 py-1 rounded-lg border backdrop-blur-xl bg-black/10 shadow-sm text-white">
            Screenshoot 1 of 4{" "}
          </p>
          <p className="text-sm text-white">Download the Installer</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 text-left">
        <div className="flex gap-2 items-center">
          <div className="text-white w-8 h-8 text-center p-1 bg-primary rounded-md">
            {index + 1}
          </div>
          <div>
            <h4 className="font-semibold">{step.title}</h4>
            <p className="text-sm text-neutral-600">{step.description}</p>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex justify-between items-center mt-4 border-t border-b py-4">
          <button
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
            className="px-4 py-1 rounded-md border disabled:opacity-40"
          >
            Previous
          </button>

          <div className="flex items-center gap-2">
            {photoSteps.map((_, i) => (
              <span
                key={i}
                className={`transition-all duration-300 rounded-full
        ${i === index ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-neutral-300"}
      `}
              />
            ))}
          </div>

          <button
            disabled={index === photoSteps.length - 1}
            onClick={() => setIndex(index + 1)}
            className="px-4 py-1 rounded-md bg-primary text-white disabled:opacity-40"
          >
            Next
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 mt-4">
          <span
            className="flex items-center justify-center px-2 py-1 rounded-md
                       bg-[#ECECF0]"
          >
            <ArrowLeft className="w-3 h-3" />
          </span>

          <span className="text-neutral-400">and</span>

          <span
            className="flex items-center justify-center px-2 py-1 rounded-md
                       bg-[#ECECF0] "
          >
            <ArrowRight className="w-3 h-3" />
          </span>

          <span className="text-neutral-400">to navigate</span>
        </div>
      </div>
    </div>
  );
}

export default function LearningStyle() {
  const [activeTab, setActiveTab] = useState("text");
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* HEADER */}
        <h2 className="text-5xl font-semibold mb-4">
          Choose Your Learning Style
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-10">
          We provide multiple guide formats to match how you learn best. Select
          from detailed text instructions, video walkthrough, or visual photo
          guide.
        </p>

        {/* TABS */}
        <div className="inline-flex bg-neutral-100 rounded-xl p-1 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg flex gap-2 items-center text-sm font-medium transition-all
                ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow"
                    : "text-neutral-700 "
                }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="relative transition-all duration-500">
          {activeTab === "text" && <TextGuide />}
          {activeTab === "video" && <VideoGuide />}
          {activeTab === "photo" && (
            <PhotoGuide index={photoIndex} setIndex={setPhotoIndex} />
          )}
        </div>
      </div>
    </section>
  );
}
