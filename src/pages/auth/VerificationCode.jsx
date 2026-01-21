import React, { useRef, useState } from "react";
import { ChevronLeft, Star } from "lucide-react";
import { images } from "../../assets"; // expects images.AuthDashboard (right image). If different, replace.
import { Link, useNavigate } from "react-router-dom";

export default function VerificationCode({ length = 6, onComplete }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    // If all filled
    if (newOtp.every((digit) => digit !== "")) {
      onComplete?.(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const ResetPassword = () => {
    navigate("/auth/reset-password");
  };
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
                <Link
                  to={"/auth/forgot-password"}
                  className="flex items-center gap-4 text-lg"
                >
                  {" "}
                  <ChevronLeft size={18} /> Back
                </Link>
              </div>

              <h2 className="text-2xl font-semibold text-neutral-900 mt-2">
                Enter your code
              </h2>
              <p className="mt-1 text-sm text-neutral-400 ">
                We shared a code to your registered email address
                robertallen@example.com
              </p>

              <div className="mt-6 space-y-6">
                {/* Email */}
                <div className="flex gap-3">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => (inputsRef.current[i] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e.target.value, i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      className="
            w-10 h-10
            text-center text-lg font-semibold
            rounded-lg
            border border-primary/40
            bg-white
            shadow-sm
            outline-none
            focus:border-primary
            focus:ring-2 focus:ring-primary/20
          "
                    />
                  ))}
                </div>

                {/* Send code */}
                <button
                  type="button"
                  className="mt-2 h-10 w-full rounded-lg bg-primary text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
                  onClick={ResetPassword}
                >
                  Verfify
                </button>
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

