import React from "react";
import {
    ChevronLeft,
  Star,
} from "lucide-react";
import { images } from "../../assets"; // expects images.AuthDashboard (right image). If different, replace.
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
const navigate = useNavigate();

const Verification = () => {
    navigate('/auth/verification-code');
}
  return (
    <section className="relative min-h-screen lg:h-[100vh] overflow-hidden">
      {/* Soft blobs (subtle) */}
      {/* <div className="pointer-events-none absolute right-[-180px] top-[120px] h-[520px] w-[520px] rounded-full bg-indigo-200/35 blur-[100px]" /> */}

      <div className="relative flex h-full justify-between">
        <div className="pointer-events-none absolute right-40 top-[-30px] h-[520px] w-[1200px] rounded-full bg-[#DBF2FF]/30 blur-[80px] z-10" />
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 ">
          {/* LEFT: Sign up card */}
          <div className="relative flex items-center justify-center ">
            <div className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white/10 p-8 ">
              {/* Logo */}
              <div className="mb-6">
                <Link to={'/auth/login'} className="flex items-center gap-4 text-lg"> <ChevronLeft size={18} /> Back</Link>
              </div>

              <h2 className="text-2xl font-semibold text-neutral-900 mt-2">Forgot Password</h2>
              <p className="mt-1 text-sm text-neutral-400">
                Enter your registered email address. We will send you a code to reset your password.
              </p>

              <form className="mt-6 space-y-6">
                {/* Email */}
                <Field label="Email Address" placeholder="john@example.com" />

                {/* Send code */}
                <button
                  type="button"
                  className="mt-2 h-10 w-full rounded-lg bg-primary text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
                  onClick={Verification}
                >
                  Send Code
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: Feature text + dashboard */}
          <div
            className="
    relative h-full w-full
    bg-cover bg-center bg-no-repeat
    overflow-hidden flex flex-col items-end
  "
            style={{ backgroundImage: `url(${images.BgRightAuth})` }}
          >
            {/* TEXT CONTENT */}
            <div
              className="
      relative z-20
      w-full max-w-lg lg:max-w-xl 2xl:max-w-3xl
      text-left pt-20
    "
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white px-3 py-1 text-xs text-neutral-700 backdrop-blur-md">
                <span className="flex gap-1 items-center rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-white shadow-white shadow-md">
                  <Star size={12} /> NEWS
                </span>
                <span className="font-medium">
                  Introducing our new AI Features
                </span>
              </div>

              {/* Heading */}
              <h1
                className="
        mt-4
        text-2xl sm:text-3xl lg:text-4xl
        font-bold leading-tight
        text-neutral-900
      "
              >
                Effortless conversations that start
                <br />
                smart — and stay human.
              </h1>

              {/* Description */}
              <p
                className="
        mt-4
        max-w-md lg:max-w-xl font-medium lg:text-base
        leading-4
        text-[#0F0E0ECC]
      "
              >
                Techween’s hybrid chat system instantly answers, learns, and
                hands off to your team when needed — creating a perfect blend of
                automation and empathy.
              </p>
            </div>

            {/* DASHBOARD IMAGE */}
            <div
              className="
      relative
      w-full max-w-lg lg:max-w-xl 2xl:max-w-3xl
      mt-8
    "
            >
              <div className="overflow-hidden w-full flex justify-center">
                <img
                  src={
                    images.AuthDashboard ||
                    images.HomeTools ||
                    images.HeroDashboard
                  }
                  alt="Dashboard preview"
                  className="
    object-contain
    image-crisp h-[680px]
        "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small helper component ---------- */
function Field({ label, placeholder, icon }) {
  return (
    <div>
      <label className="mb-1 block text-[14px] font-medium text-neutral-700">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="h-10 w-full rounded-md border border-neutral-200 bg-white px-4 text-sm text-neutral-800 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
        />
      </div>
    </div>
  );
}
