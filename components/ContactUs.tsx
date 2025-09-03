"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [focused, setFocused] = useState(false);
  const { theme } = useTheme();

  // ✅ Pull sensitive keys from .env
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("❌ Missing EmailJS environment variables");
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        console.log("✅ SUCCESS!");
        form.current?.reset();
      },
      (error) => {
        console.error("❌ FAILED...", error);
      }
    );
  };

  // Different shadows for light vs dark mode
  const lightShadows = {
    idle: { boxShadow: "0 1px 10px rgba(0,0,0,0.2)", scale: 1 },
    focused: { boxShadow: "0 4px 10px rgba(0,0,0,0.15)", scale: 1.002 },
    hover: { boxShadow: "0 3px 6px rgba(0,0,0,0.15)", scale: 1.001 },
  };

  const darkShadows = {
    idle: { boxShadow: "0 2px 5px rgba(255,255,255,0.06)", scale: 1 },
    focused: { boxShadow: "0 3px 10px rgba(255,255,255,0.12)", scale: 1.002 },
    hover: { boxShadow: "0 3px 10px rgba(255,255,255,0.12)", scale: 1.001 },
  };

  const cardVariants = theme === "light" ? lightShadows : darkShadows;

  return (
    <motion.div
      initial="idle"
      animate={focused ? "focused" : "idle"}
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.25 }}
      className="w-[85%] mx-auto rounded-md p-10 bg-white dark:bg-neutral-900 border border-neutral-300/70 dark:border-neutral-600/20"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-3"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 h-[45px] flex items-center border border-neutral-400/50 rounded-md">
            <input
              name="user_name"
              placeholder="Name"
              required
              className="w-full p-1 bg-transparent font-mono text-neutral-900 dark:text-neutral-300 m-1 outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
            />
          </div>

          <div className="flex-1 h-[45px] flex items-center border border-neutral-400/50 rounded-md">
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              required
              className="w-full p-1 bg-transparent font-mono text-neutral-900 dark:text-neutral-300 m-1 outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
            />
          </div>
        </div>

        <div className="border border-neutral-400/50 rounded-md">
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full min-h-[120px] p-2 bg-transparent font-mono text-neutral-900 dark:text-neutral-300 m-1 outline-none resize-y placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="w-full h-[45px] p-1 btn-inset bg-neutral-200/70 dark:bg-neutral-700/30 font-mono text-neutral-900 dark:text-neutral-300 rounded-md transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[0px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/40 dark:focus-visible:ring-neutral-600/50"
          >
            Send
          </button>
        </div>
      </form>
    </motion.div>
  );
};
