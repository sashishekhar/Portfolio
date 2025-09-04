"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import NetworkReadMePage from "./NetworkContent"

// ✅ Responsive positions (desktop vs mobile)
const features = {
  Home: {
    desktop: { x: 30, y: 220 },
    mobile: { x: -150, y: 200 },
  },
  DarkLightMode: {
    desktop: { x: 30, y: 160 },
    mobile: { x: -150, y: 80 },
  },
  SignIn: {
    desktop: { x: -360, y: 300 },
    mobile: { x: -550, y: 350 },
  },
  LikeComment: {
    desktop: { x: 50, y: -250 },
    mobile: { x: -130, y: -200 },
  },
  Notifications: {
    desktop: { x: -350, y: -210 },
    mobile: { x: -520, y: -100 },
  },
  Profile: {
    desktop: { x: -350, y: -20 },
    mobile: { x: -600, y: 140 },
  },
  TextImagePost: {
    desktop: { x: 700, y: -50 },
    mobile: { x: 480, y: -20 },
  },
  Responsiveness: {
    desktop: { x: 400, y: 150 },
    mobile: { x: 120, y: 80 },
  },
}

// ✅ Hook to detect if < sm screen
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoint])

  return isMobile
}

const ProNetwork = () => {
  const [active, setActive] = useState<keyof typeof features>("Home")
  const isMobile = useIsMobile()

  return (
    <div className="bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="header relative">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={isMobile ? features[active].mobile : features[active].desktop}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <div className="relative w-[1200px] h-[800px]">
            {/* 🖼️ Home */}
            <motion.img
              animate={
                active === "Home" || active === "DarkLightMode"
                  ? { scale: 1.1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1.1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 8px rgba(0,0,0,0.08)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[400px] top-10 left-76 rounded-xl object-cover"
              src="/projectspics/network/Home.png"
              alt="Dashboard"
            />
            {/* 🖼️ SignIn */}
            <motion.img
              animate={
                active === "SignIn"
                  ? { scale: 0.9, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 0.9,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 8px rgba(0,0,0,0.08)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute h-[400px] -top-24 left-180 object-cover rounded-xl"
              src="/projectspics/network/SignIn.png"
              alt="Signin"
            />
            {/* 🖼️ DarkLightMode */}
            <motion.img
              animate={
                active === "DarkLightMode"
                  ? { scale: 1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 8px rgba(0,0,0,0.08)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[400px] top-73.5 left-71 rounded-xl"
              src="/projectspics/network/LightMode.png"
              alt="Teams"
            />
            {/* 🖼️ LikeComment */}
            <motion.img
              animate={
                active === "LikeComment"
                  ? { scale: 1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 8px rgba(0,0,0,0.08)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute top-135 w-[380px] left-77 rounded-xl"
              src="/projectspics/network/LikeComment.png"
              alt="Other"
            />
            {/* 🖼️ TextImagePost */}
            <motion.img
              animate={
                active === "TextImagePost"
                  ? { scale: 1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 8px rgba(0,0,0,0.08)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[300px] top-72 -left-75 rounded-xl"
              src="/projectspics/network/TextImagePost.png"
              alt="Other"
            />
            {/* 🖼️ Notifications */}
            <motion.img
              animate={
                active === "Notifications"
                  ? { scale: 1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 8px rgba(0,0,0,0.08)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[430px] top-135 left-174 rounded-xl"
              src="/projectspics/network/NotificationPage.png"
              alt="Other"
            />
            {/* 🖼️ Profile */}
            <motion.img
              animate={
                active === "Profile"
                  ? { scale: 1.1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1.1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 8px rgba(0,0,0,0.08)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[370px] top-76 left-179 rounded-xl"
              src="/projectspics/network/ProfilePage.png"
              alt="Other"
            />
            {/* 🖼️ Responsiveness */}
            <motion.img
              animate={
                active === "Responsiveness"
                  ? { scale: 1.1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1.1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 8px rgba(0,0,0,0.08)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[240px] top-30.5 left-5 rounded-xl"
              src="/projectspics/network/Responsive.png"
              alt="Other"
            />
          </div>
        </motion.div>

        {/* Title + Features */}
        <div className="title relative mt-10 mb-10 z-50">
          <h1 className="text-2xl sm:text-4xl text-gray-900 dark:text-white font-mono font-medium ml-5 sm:ml-10">
            Network
          </h1>
          <p className="text-sm sm:text-md text-gray-600 dark:text-neutral-300 leading-5 font-mono font-light ml-5 sm:ml-10 mt-1 w-2/5">
            Social Media Application
          </p>

          <div className="features bg-gray-100/80 dark:bg-neutral-700/80 backdrop-blur-md rounded-xl border border-gray-300 dark:border-neutral-600 w-fit  px-2 sm:px-5 py-2 sm:py-5 mt-5 ml-5 sm:ml-10 shadow-sm">
            <h1 className="text-md sm:text-xl text-gray-800 dark:text-neutral-100 font-mono font-medium">
              Features
            </h1>
            <div className="flex text-[12px] sm:text-md flex-col items-start mt-3 gap-2">
              {Object.keys(features).map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f as keyof typeof features)}
                  className={`px-4 cursor-pointer font-mono rounded-lg transition-colors ${
                    active === f
                      ? "text-cyan-600 dark:text-cyan-400 scale-110"
                      : "text-cyan-700/50 dark:text-cyan-200/50"
                  }`}
                >
                  {f} -{">"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ReadMe Content */}
      <div className="content relative mt-70 z-100 w-full">
        <NetworkReadMePage />
      </div>
    </div>
  )
}

export default ProNetwork
