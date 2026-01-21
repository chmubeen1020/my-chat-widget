import React from "react";

export default function SuccessModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          fixed z-50
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-full max-w-sm
          rounded-2xl
          bg-white
          backdrop-blur-xl
          border border-white/30
          shadow-xl
          px-8 py-10
          text-center
        "
      >
        <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
          Password Successfully Updated
        </h3>

        <p className="text-sm text-[#9D9D9D] mb-6">
          Your password has been updated successfully.
        </p>

        <button
          onClick={onClose}
          className="
            w-full py-2 rounded-lg
            bg-primary text-white
            font-semibold
            hover:bg-primary/90
            transition text-sm
          "
        >
          Back to Login
        </button>
      </div>
    </>
  );
}
