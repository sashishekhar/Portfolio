"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ContactMeHero from './Contactmesvg'

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
        <div className="flex flex-col gap-5 w-full">
          <div className="text-[16px] font-mono text-neutral-800 dark:text-neutral-200 ml-5 bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">
            say hello !!
          </div>
          <div className='text-[14px] font-mono ml-6 max-w-[500px] text-neutral-800 dark:text-neutral-400'>
            I'm currently looking for new opportunities. Whether you have a question or want to say hi, hit that button.
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
              whileHover={isValidEmail(email) ? { scale: 1.05, boxShadow: "0px 4px 10px rgba(0,0,0,0.15)" } : {}}
              whileTap={isValidEmail(email) ? { scale: 0.92 } : {}}
              transition={{ duration: 0.12, ease: "easeInOut" }}
              className={`w-1/4 p-1 m-1 rounded-md border font-mono cursor-pointer
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
