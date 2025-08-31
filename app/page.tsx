import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Blogs from '@/components/Blogs';
import Keystrokes from '@/components/Keystrokes';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import React from 'react';

const page = () => {
  return (
    <div className="relative min-h-screen w-full bg-transparent dark:bg-black overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert dark:opacity-30 opacity-50  bg-repeat bg-center z--10"></div>

      {/* Single column layout */}
      <div className="main w-full flex justify-center">
        {/* MIDDLE COLUMN (main content) */}
        <div className="middle w-full max-w-[820px] mx-auto relative rounded-[0px] shadow-[2px_0px_5px_rgba(0,0,0,0.2),-2px_0px_5px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] dark:border-l dark:border-r dark:border-neutral-600 border-neutral-300 bg-white dark:bg-neutral-900">

          <div style={{ zIndex: 100, width: '100%' }}>
            <Navbar />
          </div>

          <div className="mx-4 relative mb-0 max-w-full">
            <Header />
          </div>
          <div className="text-sm mt-10 sm:text-base ml-10 font-mono text-neutral-800 dark:text-neutral-200 bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">
                  Projects that convert to products
                </div>
          <div className="projects mt-2 sm:mt-5  w-full flex items-center justify-center">
            <Projects />
          </div>

          <div className="blogs h-[400px] mt-10 mb-20 w-full flex items-center justify-center">
            <Blogs />
          </div>

          <div className="keystrokes">
            <Keystrokes />
          </div>

          <div className="testimonials">
            <Testimonials />
          </div>

          <div className="contact">
            <Contact />
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
