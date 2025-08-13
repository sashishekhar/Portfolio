'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { easeIn, easeInOut, easeOut, motion } from 'framer-motion';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [focused, setFocused] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        'service_2zcisme',
        'template_tbkgz0k',
        form.current,
        'GKoBY2_bqwIi9WSGd'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error);
        }
      );
  };

  // subtle -> stronger shadow + slight lift when focused
  const cardVariants = {
    idle: {
      boxShadow: '0 2px 5px rgba(255,255,255,0.06)',
    
      scale: 1,
    },
    focused: {
      boxShadow: '0 3px 10px rgba(255,255,255,0.12)',
    
      scale: 1.002,
    },
    hover: {
      boxShadow: '0 3px 10px rgba(255,255,255,0.08)',
    
      scale: 1.001,
    },
  };

  return (
    <motion.div
      initial="idle"
      animate={focused ? 'focused' : 'idle'}
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.3, ease: easeIn }}
      className="w-[85%] mx-auto rounded-md p-10 bg-white dark:bg-neutral-900 border-t-1 border-neutral-300 dark:border-neutral-600/20 shadow-lg"
      aria-hidden={false}
    >
      {/* onFocus/onBlur on form use React's focus-in/out delegation:
          - onFocus fires when any child receives focus
          - onBlur fires when focus leaves the whole form
      */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-3"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Name */}
          <div className="flex-1 h-[45px] flex items-center border border-neutral-400/50 rounded-md">
            <input
              name="user_name"
              placeholder="Name"
              required
              className="w-full p-1 bg-transparent font-mono text-neutral-900 dark:text-neutral-300 m-1 outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
            />
          </div>

          {/* Email */}
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

        {/* Message */}
        <div className="border border-neutral-400/50 rounded-md">
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full min-h-[120px] p-2 bg-transparent font-mono text-neutral-900 dark:text-neutral-300 m-1 outline-none resize-y placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            type="submit"
            className="w-full h-[45px] p-1 bg-neutral-200/50 dark:bg-neutral-700/30 font-mono text-neutral-900 dark:text-neutral-300 rounded-md button-inset-shadow transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[0px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/50 dark:focus-visible:ring-neutral-600/50"
          >
            Send
          </button>
        </div>
      </form>
    </motion.div>
  );
};
