"use client";

import { ContactUs } from '@/components/ContactUs';
import Navbar from '@/components/Navbar';
import ContactMeHero from '@/components/Contactmesvg';
import Footer from '@/components/Footer';
import { motion } from "framer-motion";
import Title from '@/components/Title';
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
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

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-transparent dark:bg-black overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert dark:opacity-30 opacity-50 bg-repeat bg-center z--10"></div>

      {/* Single column layout */}
      <div className="main w-full flex justify-center">
        {/* MIDDLE COLUMN (main content) */}
        <motion.div
          className="middle w-full h-full sm:h-screen max-w-[820px] mx-auto relative rounded-[0px] shadow-[2px_0px_5px_rgba(0,0,0,0.2),-2px_0px_5px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] dark:border-l dark:border-r dark:border-neutral-600 border-neutral-300 bg-white dark:bg-neutral-900"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >

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
          {/* Navbar */}
          <motion.div style={{ zIndex: 100, width: "100%" }} variants={childVariants}>
            <Navbar />
          </motion.div>

          {/* Hero + Intro text */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 items-center mt-10 ml-1 mr-0 sm:ml-10 mb-6"
            variants={childVariants}
          >
            <div>
              <ContactMeHero />
            </div>

            <div className="flex flex-col gap-5 mb-5 w-full">
              <Title
                defaultText="say hello !!"
                hoverText="i am an interesting person !!"
                className="text-[16px] sm:text-[22px]  text-neutral-700 font-medium dark:text-neutral-200 font-mono border-0 sm:ml-2 ml-2 mb-0 sm:mb-0 w-fit px-2 "
              />
              <div
                className="text-[14px] font-mono ml-4 sm:ml-6 max-w-[500px] 
                           text-neutral-700 dark:text-neutral-400"
              >
                I&apos;m currently looking for new opportunities. Whether you have a
                question or want to say hi, hit that button.
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="-mt-4" variants={childVariants}>
            <ContactUs />
          </motion.div>

          {/* Footer */}
          <motion.div className="mt-32 footer" variants={childVariants}>
            <Footer />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
