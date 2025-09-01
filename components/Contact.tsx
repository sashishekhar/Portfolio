"use client"

import React, { useState } from 'react'
import ContactMeHero from './Contactmesvg'

const Contact = () => {
  const [email, setEmail] = useState("")

  const handleSend = () => {
    if (!email) return
    window.location.href = `mailto:youraddress@example.com?subject=Hello&body=Hi, I’m reaching out from: ${email}`
    setEmail("");
  }

  return (
    <div className='w-full h-[400px] sm:h-[300px] p-3'>
      <div className="flex flex-col sm:flex-row ">
        <div className=''>
          <ContactMeHero />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="text-[16px] font-mono text-neutral-800 dark:text-neutral-200 ml-5  bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">
            say hello !!
          </div>
          <div className='text-[14px] font-mono ml-6 max-w-[500px] text-neutral-8300 dark:text-neutral-400'>
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
            <button 
              onClick={handleSend}
              className='w-1/4 p-1 bg-neutral-200/50 dark:bg-neutral-700/30 font-mono text-neutral-900 dark:text-neutral-400 m-1 rounded-md border-1 dark:border-neutral-700 border-neutral-400 button-inset-shadow cursor-pointer'
            >
              Send
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
