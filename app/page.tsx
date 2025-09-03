"use client";

import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Blogs from '@/components/Blogs';
import Keystrokes from '@/components/Keystrokes';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import React from 'react';
import { motion } from 'framer-motion';
import Title from '@/components/Title';

// Variants for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Page = () => {
  return (
    <div className="relative min-h-screen w-full bg-transparent dark:bg-black overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert dark:opacity-30 opacity-50 bg-repeat bg-center z--10"></div>

      {/* Single column layout */}
      <div className="main w-full flex justify-center">
        <motion.div
          className="middle w-full max-w-[820px] mx-auto relative rounded-[0px] 
          bg-white dark:bg-neutral-900
          shadow-[2px_0px_5px_rgba(0,0,0,0.05),-2px_0px_5px_rgba(0,0,0,0.05)]
          dark:shadow-[2px_0px_5px_rgba(255,255,255,0.08),-2px_0px_5px_rgba(255,255,255,0.08)]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* LEFT STRIP */}
          {/* LEFT STRIP */}
          <div className="absolute top-0 -left-8 h-full w-[20px] opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                <pattern id="herringbone" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(45)">
                  <rect width="6" height="12" fill="currentColor" className="text-neutral-200 dark:text-neutral-700" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#herringbone)" />
            </svg>

          </div>

          {/* RIGHT STRIP (mirrored waves) */}
          <div className="absolute top-0 -right-8 h-full w-[20px] opacity-60 transform scale-x-[-1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                <pattern id="herringbone" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(45)">
                  <rect width="6" height="12" fill="currentColor" className="text-neutral-200 dark:text-neutral-700" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#herringbone)" />
            </svg>

          </div>


          {/* Content */}
          <motion.div style={{ zIndex: 100, width: '100%' }} variants={childVariants}>
            <Navbar />
          </motion.div>

          <motion.div className="mx-4 relative mb-0 max-w-full" variants={childVariants}>
            <Header />
          </motion.div>

          <motion.div className="ml-4 mt-20" variants={childVariants}>
            <Title
              defaultText="projects !!"
              hoverText="that converts to products !!"
              className="text-[16px] sm:text-[22px] text-neutral-700 font-medium dark:text-neutral-200 font-mono border-0 sm:ml-2 ml-1 mb-0 w-fit px-2"
            />
          </motion.div>

          <motion.div className="projects mt-2 sm:mt-5 w-full flex items-center justify-center" variants={childVariants}>
            <Projects />
          </motion.div>

          <motion.div className="blogs h-[400px] mt-10 mb-20 w-full flex items-center justify-center" variants={childVariants}>
            <Blogs />
          </motion.div>

          <motion.div className="keystrokes" variants={childVariants}>
            <Keystrokes />
          </motion.div>

          <motion.div className="testimonials" variants={childVariants}>
            <Testimonials />
          </motion.div>

          <motion.div className="contact mb-10" variants={childVariants}>
            <Contact />
          </motion.div>

          <motion.div className="footer" variants={childVariants}>
            <Footer />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
