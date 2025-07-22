import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Blogs from '@/components/Blogs';
import Keystrokes from '@/components/Keystrokes';
import Testimonials from '@/components/Testimonials';
import React from 'react';
import Projects from '@/components/Projects';

const page = () => {
  return (
    <div className="relative min-h-screen w-full bg-transparent dark:bg-black  overflow-hidden">
      {/* Dotted Line */}


      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert  opacity-50 dark:opacity-80 bg-repeat bg-center -z-10"></div>

      {/* Navbar */}
      <div style={{ zIndex: 100, width: '100%' }} className="absolute">
        <Navbar />
      </div>

      {/* Main Grid */}
      <div className="main grid pt-20 grid-cols-[2.25fr_5.5fr_2.25fr] w-full ">
        <div className="left">
          <div className="w-[280px] h-[242px] shadow-[3px_3px_0px_0px_rgba(161,161,161)] dark:shadow-[3px_3px_0px_0px_rgba(141,141,141,0.6)] rounded-[20px] border-1 border-neutral-600 ml-[50px] bg-white dark:bg-neutral-900">
            <div className='m-4'>
              <div className="text-[20px] font-semibold font-mono text-neutral-900 dark:text-neutral-100">Hi there! 👋</div>
              <div className="w-[248px] h-[180px] text-[14px] text-neutral-500 dark:text-neutral-300 p-4 font-mono bg-neutral-300 dark:bg-neutral-800">
                Feel free to explore,<br /> <span className='bg-neutral-600 dark:bg-neutral-900 text-neutral-100 px-1'>  hover</span> around, and reach out if something catches your eye.<br /><br />
                Cheers,<br /> Sashi Sekhar Singh
              </div>
            </div>

          </div>
        </div>
        {/* Centre and main grid*/}
        <div className="middle ml-2 relative rounded-[0px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] 
         

        dark:border-1 dark:border-neutral-600 border-neutral-300  border-1  bg-white dark:bg-neutral-900"
          // style={{
          //   boxShadow: "inset 2px 2px 5px 0px rgba(0,0,0,0.08),inset -2px -2px 5px 0px rgba(0,0,0,0.08)"
          // }}
        >
          <div className="m-4 relative mb-8  max-w-full ">
            {/* Header */}
            <Header />


          </div>
          <div className='projects h-[400px] mt-40 max-w-full flex items-center my-auto  justify-center'>
            <Projects />
          </div>
          <div className='blogs h-[400px] mt-10 mb-20 w-full flex items-center  justify-center'>
            <Blogs/>
          </div>

          <div className="keystrokes">
            <Keystrokes/>
          </div>

          <div className="testimonials">
            <Testimonials/>
          </div>
        </div>
        <div className="right">
          <div className="w-[280px] h-[400px] flex flex-col shadow-[3px_3px_0px_0px_rgba(161,161,161)] dark:shadow-[3px_3px_0px_0px_rgba(141,141,141,0.6)] rounded-[20px] ml-[15px] border-1 border-neutral-300 dark:bg-neutral-900 dark:border-neutral-600 bg-white">
            <div className='m-4'>
              <div className="text-[20px] font-semibold font-mono text-neutral-900 dark:text-neutral-100">Update</div>
              <div className="w-[248px] h-[115px] text-[14px] text-neutral-500 dark:text-neutral-300 p-4 font-mono bg-neutral-300 dark:bg-neutral-800">
                Building a not so common jobs platform a lot of special features.
                Updating Soon...
              </div>
            </div>
            <div className='mx-4'>
              <div className="text-[20px] font-semibold font-mono text-neutral-900 dark:text-neutral-100">Latest blog</div>
              <div className="w-[248px] relative h-[178px] text-[14px] text-neutral-500 dark:text-neutral-300 p-4 font-mono bg-neutral-300 dark:bg-neutral-800">
                <svg width="15" height="15" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="live-button absolute right-31 top-[19px]">
                  <circle cx="50" cy="50" r="20" fill="red">
                    <animate attributeName="r" from="20" to="40" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="1" to="0" dur="1s" repeatCount="indefinite" />
                  </circle>
                </svg>



                <h1 className='font-semibold underline text-neutral-500 dark:text-neutral-300 '>HLD vs LLD</h1>
                <p className='text-neutral-500 dark:text-neutral-300 '>

                  Discover how each design phase contributes to the overall software development process.

                </p>
                <button className='bg-neutral-600 dark:bg-neutral-900 text-neutral-100 dark:text-neutral-100 px-2 py-1 absolute bottom-4'>Read</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;



