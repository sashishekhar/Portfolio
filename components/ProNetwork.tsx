"use client"

import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import NetworkReadMePage from './NetworkContent'

const features = {
  Home: { x: 30, y: 220 },   // initial position
  DarkLightMode: { x: 30, y: 160 }, // move bg so this image is centered
  SignIn: { x: -360, y: 300 },
  LikeComment: { x: 50, y: -250 },
  Notifications: { x: -350, y: -210 },
  Profile: { x: -350, y: -20 },
  TextImagePost: { x: 700, y: -50 },
  Responsiveness: { x: 400, y: 150 },
};

const ProNetwork = () => {
  const [active, setActive] = useState<keyof typeof features>("Home");
  return (
    <div>
      <div className="header relative">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ x: features[active].x, y: features[active].y }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <div className="relative w-[1200px] h-[800px] ">
            <motion.img
              animate={
                active === "Home" || active === "DarkLightMode"
                  ? { scale: 1.1, boxShadow: "0 0 10px rgba(255,255,255,0.1)" }
                  : { scale: 1.1, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 10px rgba(255,255,255,0.1)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className='absolute w-[400px] top-10 left-76 rounded-xl object-cover'
              src="/projectspics/network/Home.png"
              alt="Dashboard" />
            <motion.img
              animate={
                active === "SignIn"
                  ? { scale: .9, boxShadow: "0 0 10px rgba(255,255,255,0.2)" }
                  : { scale: .9, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 10px rgba(255,255,255,0.1)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className='absolute  h-[400px] -top-24 left-180 object-cover rounded-xl' src="/projectspics/network/Signin.png" alt="Signin" />
            <motion.img
              animate={
                active === "DarkLightMode"
                  ? { scale: 1, boxShadow: "0 0 10px rgba(255,255,255,0.2)" }
                  : { scale: 1, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 10px rgba(255,255,255,0.1)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className='absolute w-[400px] top-73.5 left-71 rounded-xl' src="/projectspics/network/LightMode.png" alt="Teams" />
            <motion.img
              animate={
                active === "LikeComment"
                  ? { scale: 1, boxShadow: "0 0 10px rgba(255,255,255,0.2)" }
                  : { scale: 1, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 10px rgba(255,255,255,0.1)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}



              className='absolute  top-135 w-[380px]  left-77 rounded-xl' src="/projectspics/network/LikeComment.png" alt="Other" />
            <motion.img
              animate={
                active === "TextImagePost"
                  ? { scale: 1, boxShadow: "0 0 10px rgba(255,255,255,0.2)" }
                  : { scale: 1, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 10px rgba(255,255,255,0.1)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className='absolute w-[300px] top-72 -left-75 rounded-xl' src="/projectspics/network/TextImagePost.png" alt="Other" />
            <motion.img
              animate={
                active === "Notifications"
                  ? { scale: 1, boxShadow: "0 0 10px rgba(255,255,255,0.2)" }
                  : { scale: 1, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 10px rgba(255,255,255,0.1)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className='absolute w-[430px] top-135 left-174   rounded-xl' src="/projectspics/network/NotificationPage.png" alt="Other" />
            <motion.img
              animate={
                active === "Profile"
                  ? { scale: 1.1, boxShadow: "0 0 10px rgba(255,255,255,0.2)" }
                  : { scale: 1.1, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 10px rgba(255,255,255,0.1)" }
              }

              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className='absolute w-[370px]  top-76  left-179  rounded-xl' src="/projectspics/network/ProfilePage.png" alt="Other" />
            <motion.img
              animate={
                active === "Responsiveness"
                  ? { scale: 1.1, boxShadow: "0 0 10px rgba(255,255,255,0.2)" }
                  : { scale: 1.1, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 10px rgba(255,255,255,0.1)" }
              }

              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className='absolute w-[240px] top-30.5 left-5  rounded-xl' src="/projectspics/network/Responsive.png" alt="Other" />

          </div>
        </motion.div>
        <div className="title relative mt-10 mb-10 z-50 ">
          <h1 className='text-4xl text-white font-mono font-medium ml-10 '>Network</h1>
          <p className='text-md text-neutral-300 leading-5 font-mono font-light ml-10 mt-1 w-1/5'>Social Media Application</p>

          <div className="features bg-neutral-700/80 backdrop-blur-md rounded-xl border-1 border-neutral-600 w-fit px-5 py-5 mt-5 ml-10">
            <h1 className='text-xl  text-neutral-100 font-mono font-medium '>Features</h1>
            <div className="flex flex-col items-start mt-3 gap-2">
              {Object.keys(features).map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f as keyof typeof features)}
                  className={`px-4 cursor-pointer font-mono rounded-lg transition-colors ${active === f ? "text-cyan-400 scale-110" : "text-cyan-200/50"
                    }`}
                >
                  {f} -{'>'}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="content relative mt-70 z-100 w-full">
        <NetworkReadMePage />

      </div>
    </div>
  )
}

export default ProNetwork
