import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Star,
} from "lucide-react";
import { images } from "../../assets"; // expects images.AuthDashboard (right image). If different, replace.
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
const navigate = useNavigate();

const GoToDashboard= () => {
    navigate('/company-admin');
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
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <img src={images.Logo} alt="" className="w-24" />
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-neutral-900">Sign in</h2>
              <p className="mt-1 text-sm text-neutral-400">
                Please login here
              </p>

              <form className="mt-6 space-y-4">
                {/* Email */}
                <Field label="Email Address" placeholder="john@example.com" />

                {/* Password */}
                <div>
                  <label className="mb-1 block text-[14px] font-medium text-neutral-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="password"
                      className="h-10 w-full rounded-md border border-neutral-200 bg-white px-4 text-sm text-neutral-800 outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPass((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                      aria-label={showPass ? "Hide password" : "Show password"}
                    >
                      {showPass ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <p className="text-sm">Remember me</p>
                    </div>
                    <div>
                        <Link to={'/auth/forgot-password'} className="text-sm font-medium">Forgot Password ?</Link>
                    </div>
                </div>
                {/* Send code */}
                <button
                  type="button"
                  className="mt-2 h-10 w-full rounded-lg bg-primary text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
                  onClick={GoToDashboard}
                >
                  Login
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 py-1">
                  <div className="h-px flex-1 bg-neutral-200" />
                  <span className="text-xs text-neutral-400">or</span>
                  <div className="h-px flex-1 bg-neutral-200" />
                </div>

                {/* Google */}
                <button
                  type="button"
                  className="h-10 w-full rounded-md border border-neutral-200 bg-white text-sm font-medium text-neutral-800 shadow-sm transition hover:bg-neutral-50"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>Sign in with Google</span>
                    <img src={images.Google} alt="" className="w-4 h-4" />
                  </span>
                </button>
              </form>
              <div className="flex items-center gap-2 justify-center pt-4">
                <p className="text-sm text-neutral-400">Need an account?</p>
                <Link to={'/auth/signup'} className="text-primary">
                Create one
                </Link>
              </div>
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
