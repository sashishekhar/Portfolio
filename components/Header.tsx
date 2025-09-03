"use client";
import React from 'react'
import {ContainerTextFlip}  from './SalutationButton'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <div className='flex mt-10 relative flex-row justify-between  h-[180px]  rounded-[20px] p-2 sm:p-4'>
      <div className="w-[300px] sm:w-[570px] absolute opacity-20 h-[1.4px] top-[87px] sm:top-[61px] left-[-20px] z-10
      [background-image:repeating-linear-gradient(to_right,_black_0_6px,_transparent_4px_12px)]
      dark:[background-image:repeating-linear-gradient(to_right,_white_0_6px,_transparent_4px_12px)]
      [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_80%,_transparent)]
      mask-repeat-no-repeat mask-size-full"
      />
      <div className="h-[190px] z-20 w-[2px]  absolute opacity-20 left-0 sm:left-2
 top-2  [background-image:repeating-linear-gradient(to_bottom,_black_0_6px,_transparent_4px_12px)]
 dark:[background-image:repeating-linear-gradient(to_bottom,_white_0_6px,_transparent_4px_12px)]
  [mask-image:linear-gradient(to_bottom,_transparent,_black_30%,_black_80%,_transparent)]
  mask-repeat-no-repeat mask-size-full"
      />
      <div className='relative z-20'>
        <div className="absolute z-0 left-[410px] scale-85 opacity-30 bg-transparent -top-[35px]">
          <motion.svg
            className="hidden md:block dark:stroke-white   stroke-black"
            width="384"
            height="129"
            scale={0.8}
            viewBox="0 0 384 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
            className={"shadow-[3px_3px_0px_0px_rgba(161,161,161)] dark:shadow-[3px_3px_0px_0px_rgba(141,141,141)]"}
              initial={{ pathLength: 50, opacity: 0 }}
              animate={{ pathLength: [0, 1, 0], opacity: [0, .7, 0.5] }}
              transition={{
                duration: 8,
                
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              d="M0.5 58H147L140.5 69H87.5V125H158.5V3.5L167 13.5V74.5M167 74.5V86H219.5L212.5 74.5H167ZM167 125H219.5L232 74.5L249.5 125L264 74.5H383.5"
              stroke="neutral-400"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </motion.svg>


        </div>
        <div className="flex  flex-col gap-4 sm:gap-2 ">
          <div className="nameSalutation flex gap-1 mt-2 sm:mt-0 sm:gap-4 flex-col sm:flex-row items:start sm:items-center">
            <div className='text-[22px] sm:text-[30px]  text-shadow-xs text-shadow-neutral-400 text-neutral-800 dark:text-neutral-100 tracking-tighter   font-bold font-mono'>Sashi Sekhar Singh</div>
            <div className='z-10'><ContainerTextFlip  /></div>
          </div>


          <div className='subheading'>
            <div className='text-[14px] text-neutral-500  w-full max-w-[500px] font-mono tracking-tight'>
              They call me Sketch. What kind of name is that? Just a kid with a wrench in one hand and a wireframe in the other—designing what tomorrow runs on.
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Header
