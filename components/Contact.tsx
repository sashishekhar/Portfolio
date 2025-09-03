"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ContactMeHero from './Contactmesvg'
import Title from './Title'

const Contact = () => {
  const [email, setEmail] = useState("")
  const myEmail = process.env.NEXT_PUBLIC_MYEMAIL || "" // ✅ pulled from env

  // ✅ Email validation function
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSend = () => {
    if (!isValidEmail(email) || !myEmail) return
    window.location.href = `mailto:${myEmail}?subject=Hello&body=Hi, I’m reaching out from: ${email}`
    setEmail("")
  }

  

  return (
    <div className='w-full h-[400px] sm:h-[300px] p-3'>
      <div className="flex flex-col sm:flex-row ">
        <div>
          <ContactMeHero />
        </div>
        <div className="flex flex-col font-mono gap-5 w-full">
          <Title
          defaultText="say hello !!"
          hoverText="come'on man send a high"
          className="text-[16px] sm:text-[22px]  text-neutral-700 font-medium dark:text-neutral-200 border-0 sm:ml-2 ml-4  w-fit px-2 "
        />
          <div className='text-[14px] font-mono ml-6 max-w-[500px] text-neutral-800 dark:text-neutral-400'>
            I&apos;m currently looking for new opportunities. Whether you have a question or want to say hi, hit that button.
          </div>
          <div className='flex flex-row max-w-[400px] ml-5 h-[45px] border border-neutral-400/50 rounded-md'>
            <input
              type="text"
              placeholder='your mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-3/4 p-1 focus:outline-none bg-transparent font-mono text-neutral-900 dark:text-neutral-400 m-1'
            />
            <motion.button
              onClick={handleSend}
              disabled={!isValidEmail(email)}
              whileHover={isValidEmail(email) ? { scale: 1.05, boxShadow: "btn-inset" } : {}}
              whileTap={isValidEmail(email) ? { scale: 0.92 } : {}}
              transition={{ duration: 0.12, ease: "easeInOut" }}
              className={`w-1/4 p-1 m-1 btn-inset  rounded-md border font-mono cursor-pointer
                ${isValidEmail(email)
                  ? "bg-neutral-200/50 dark:bg-neutral-700/30 text-neutral-900 dark:text-neutral-400 border-neutral-400 dark:border-neutral-700"
                  : "bg-neutral-200/30 dark:bg-neutral-800/30 text-neutral-500 dark:text-neutral-600 border-neutral-300 dark:border-neutral-800 cursor-not-allowed"}`}
            >
              Send
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
