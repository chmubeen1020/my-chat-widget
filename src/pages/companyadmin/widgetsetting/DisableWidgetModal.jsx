import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DisableWidgetModal = ({ isOpen, onClose, onConfirm }) => {
  const modalRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Handle click outside
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center  bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            ref={modalRef}
            className="bg-white w-full max-w-[500px] rounded-lg shadow-2xl overflow-hidden relative"
          >
            {/* Close Icon (Optional, but good UX) */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="px-6 py-4">
              {/* Header */}
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Disable Widget?
              </h2>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Are you sure? This will immediately hide the chat widget from your website.
              </p>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2 rounded-lg border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-all active:scale-95"
                >
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className="px-6 py-2 rounded-lg bg-[#C40006] text-white font-semibold text-sm hover:bg-[#A80005] shadow-lg shadow-red-200 transition-all active:scale-95"
                >
                  Disable Widget
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DisableWidgetModal;