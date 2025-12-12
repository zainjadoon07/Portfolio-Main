
"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import SuccessModal from "@/components/SuccessModal";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const titleRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: "" }));
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation Logic
    let newErrors = { name: "", email: "", message: "" };
    let hasError = false;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      hasError = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      hasError = true;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      hasError = true;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      setIsSubmitting(true);

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formRef.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setShowModal(true);
            setIsSubmitting(false);
          },
          (error) => {
            console.error('FAILED...', error.text);
            alert("Failed to send message. Please try again.");
            setIsSubmitting(false);
          },
        );
    }
  };

  useEffect(() => {
    // Animate Title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate Info items
    gsap.fromTo(
      infoRef.current.children,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 75%",
        },
      }
    );

    // Animate Form inputs
    gsap.fromTo(
      formRef.current.children,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <div className="w-full bg-white text-neutral-900 py-24 px-6 md:px-12 lg:px-20 font-inter overflow-hidden relative font-inter">
      <SuccessModal isOpen={showModal} onClose={handleCloseModal} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="mb-16 md:mb-24">
          <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4">( Contact )</h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight text-neutral-900 ">
            Let's Start a <br className="hidden md:block" /> Conversation.
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Contact Info */}
          <div ref={infoRef} className="flex-1 flex flex-col gap-10">
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
              Interested in working together? I'm always open to discussing projects or partnership opportunities.
            </p>

            <div className="space-y-8 mt-4">
              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-full bg-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-1">Email</h3>
                  <a href="mailto:zainulabdin.atd@gmail.com" className="text-xl font-semibold hover:underline">
                    zainulabdin.atd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 rounded-full bg-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-1">Location</h3>
                  <p className="text-xl font-semibold">
                    Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex-1 flex flex-col gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className={`text-sm font-bold uppercase tracking-wider ${errors.name ? 'text-red-500' : 'text-neutral-500'}`}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full bg-transparent border-b py-4 text-xl focus:outline-none transition-colors placeholder-neutral-300 ${errors.name
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-neutral-300 focus:border-neutral-900'
                  }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className={`text-sm font-bold uppercase tracking-wider ${errors.email ? 'text-red-500' : 'text-neutral-500'}`}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full bg-transparent border-b py-4 text-xl focus:outline-none transition-colors placeholder-neutral-300 ${errors.email
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-neutral-300 focus:border-neutral-900'
                  }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className={`text-sm font-bold uppercase tracking-wider ${errors.message ? 'text-red-500' : 'text-neutral-500'}`}>Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello, I'd like to talk about..."
                className={`w-full bg-transparent border-b py-4 text-xl focus:outline-none transition-colors placeholder-neutral-300 resize-none ${errors.message
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-neutral-300 focus:border-neutral-900'
                  }`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="self-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 px-10 py-5 bg-neutral-900 text-white rounded-full text-lg font-bold tracking-wide hover:bg-neutral-800 transition-all duration-700 hover:scale-102 flex items-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-700" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
