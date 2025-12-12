"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Check, X } from "lucide-react";

const SuccessModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Animate In
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        pointerEvents: "auto",
        ease: "power2.out",
      });
      gsap.fromTo(
        modalRef.current,
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
      );
    } else {
      // Animate Out
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        pointerEvents: "none",
        ease: "power2.in",
      });
      gsap.to(modalRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none"
    >
      <div
        ref={modalRef}
        className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 relative text-center"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} className="text-green-500" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 font-inter">Message Sent!</h3>
        <p className="text-neutral-400 mb-8 font-inter">
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 bg-white text-neutral-900 rounded-xl font-bold hover:bg-neutral-200 transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
