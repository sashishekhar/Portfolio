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
      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert opacity-50 dark:opacity-80 bg-repeat bg-center -z-10"></div>

      {/* Grid layout */}
      <div className="main grid grid-cols-[2.25fr_5.5fr_2.25fr] w-full">

        {/* LEFT COLUMN with spacer + fixed card */}
        <div className="relative">
          {/* Spacer keeps grid width intact */}
          <div className="w-[280px] h-[242px] ml-[50px]" />
          <div className="fixed top-4 left-[50px] z-50">
            <div className="w-[280px] h-[242px] shadow-[3px_3px_0px_0px_rgba(161,161,161)] dark:shadow-[3px_3px_0px_0px_rgba(141,141,141,0.6)] rounded-[20px] border border-neutral-600 bg-white dark:bg-neutral-900">
              <div className="m-4">
                <div className="text-[20px] font-semibold font-mono text-neutral-900 dark:text-neutral-100">Hi there! 👋</div>
                <div className="w-[248px] h-[180px] text-[14px] text-neutral-500 dark:text-neutral-300 p-4 font-mono bg-neutral-300 dark:bg-neutral-800">
                  Feel free to explore,<br /> <span className="bg-neutral-600 dark:bg-neutral-900 text-neutral-100 px-1">hover</span> around, and reach out if something catches your eye.<br /><br />
                  Cheers,<br /> Sashi Sekhar Singh
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN (main content) */}
        <div className="middle mx-auto relative rounded-[0px] shadow-[2px_0px_5px_rgba(0,0,0,0.2),-2px_0px_5px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] dark:border-l dark:border-r dark:border-neutral-600 border-neutral-300 bg-white dark:bg-neutral-900">

          <div style={{ zIndex: 100, width: '100%' }}>
            <Navbar />
          </div>

          <div className="mx-4 relative mb-0 max-w-full">
            <Header />
          </div>

          <div className="projects mt-20 max-w-full flex items-center justify-center">
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

        {/* RIGHT COLUMN with spacer + fixed card */}
        <div className="relative">
          {/* Spacer keeps grid width intact */}
          <div className="w-[280px] h-[400px] ml-[15px]" />
          <div className="fixed top-4 ml-4 z-50">
            <div className="w-[280px] h-[400px] flex flex-col shadow-[3px_3px_0px_0px_rgba(161,161,161)] dark:shadow-[3px_3px_0px_0px_rgba(141,141,141,0.6)] rounded-[20px] border border-neutral-300 dark:bg-neutral-900 dark:border-neutral-600 bg-white">
              <div className="m-4">
                <div className="text-[20px] font-semibold font-mono text-neutral-900 dark:text-neutral-100">Update</div>
                <div className="w-[248px] h-[115px] text-[14px] text-neutral-500 dark:text-neutral-300 p-4 font-mono bg-neutral-300 dark:bg-neutral-800">
                  Building a not so common jobs platform with a lot of special features. Updating Soon...
                </div>
              </div>
              <div className="mx-4">
                <div className="text-[20px] font-semibold font-mono text-neutral-900 dark:text-neutral-100">Latest blog</div>
                <div className="w-[248px] relative h-[178px] text-[14px] text-neutral-500 dark:text-neutral-300 p-4 font-mono bg-neutral-300 dark:bg-neutral-800">
                  <svg width="15" height="15" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="live-button absolute right-31 top-[19px]">
                    <circle cx="50" cy="50" r="20" fill="red">
                      <animate attributeName="r" from="20" to="40" dur="1s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="1" to="0" dur="1s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                  <h1 className="font-semibold underline text-neutral-500 dark:text-neutral-300">HLD vs LLD</h1>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Discover how each design phase contributes to the overall software development process.
                  </p>
                  <button className="bg-neutral-600 dark:bg-neutral-900 text-neutral-100 px-2 py-1 absolute bottom-4">Read</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;
