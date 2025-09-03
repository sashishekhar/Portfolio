"use client"
import React from 'react'
import { Linkedin01Icon } from "hugeicons-react";
import { Github01Icon } from "hugeicons-react";
import { NewTwitterIcon } from 'hugeicons-react';
import Link from 'next/link';
import {motion} from 'framer-motion'

const MotionLinkedin = motion(Linkedin01Icon)
const MotionGithub = motion(Github01Icon)
const MotionTwitter = motion(NewTwitterIcon)

const Footer = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div
        className="w-full max-w-[800px] ml-3 opacity-20 h-[1.6px] z-10
            [background-image:repeating-linear-gradient(to_right,_black_0_6px,_transparent_4px_12px)]
            dark:[background-image:repeating-linear-gradient(to_right,_white_0_6px,_transparent_4px_12px)]
            [mask-image:linear-gradient(to_right,_transparent,_black_20%,_black_80%,_transparent)]
            mask-repeat-no-repeat mask-size-full"
      />
      <div className='flex flex-row justify-between my-2 mx-8'>
        <div className='text-[14px] font-mono text-neutral-800 dark:text-neutral-400'>
          Made by Sashi
        </div>
        <div className='flex flex-row gap-4'>
          <Link href="https://www.linkedin.com/in/shashi-shkr" target="_blank">
            <MotionLinkedin
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='w-5 h-5 focus:outline-none cursor-pointer text-neutral-800 dark:text-neutral-400'
            />
          </Link>
          <Link href="https://github.com/sashishekhar" target="_blank">
            <MotionGithub
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='w-5 h-5 focus:outline-none cursor-pointer text-neutral-800 dark:text-neutral-400'
            />
          </Link>
          <Link href="https://twitter.com/sashi_tw" target="_blank">
            <MotionTwitter
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='w-5 h-5 focus:outline-none cursor-pointer text-neutral-800 dark:text-neutral-400'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
