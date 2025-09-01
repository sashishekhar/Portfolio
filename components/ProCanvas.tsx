"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import CanvasReadmePage from "./CanvasContent"

// ✅ Responsive positions
const features = {
  Dashboard: {
    desktop: { x: 20, y: 220 },
    mobile: { x: -90, y: 300 },
  },
  SignIn: {
    desktop: { x: -300, y: 300 },
    mobile: { x: -500, y: 320 },
  },
  Teams: {
    desktop: { x: -100, y: -50 },
    mobile: { x: -300, y: 50 },
  },
  SplitView: {
    desktop: { x: -400, y: 50 },
    mobile: { x: -600, y: 100 },
  },
  Document: {
    desktop: { x: 250, y: 0 },
    mobile: { x: 100, y: 40 },
  },
  Whiteboard: {
    desktop: { x: -390, y: -170 },
    mobile: { x: -600, y: -80 },
  },
  FreeTierLimit: {
    desktop: { x: 400, y: 170 },
    mobile: { x: 200, y: 100 },
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

const ProCanvas = () => {
  const [active, setActive] = useState<keyof typeof features>("Dashboard")
  const isMobile = useIsMobile()

  return (
    <div>
      <div className="header relative">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={isMobile ? features[active].mobile : features[active].desktop}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <div className="relative w-[1200px] h-[800px] ">
            {/* 🖼️ Dashboard */}
            <motion.img
              animate={
                active === "Dashboard"
                  ? { scale: 1.1, boxShadow: "0 0 15px rgba(0,0,0,0.2)" }
                  : { scale: 1.1, filter: "blur(2px) brightness(1) opacity(.5)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[400px] top-10 left-76 rounded-xl object-cover"
              src="/projectspics/canvas/dashboard.png"
              alt="Dashboard"
            />
            <motion.img
              animate={
                active === "SignIn"
                  ? { scale: .9, boxShadow: "0 0 15px rgba(0,0,0,0.2)" }
                  : { scale: .9, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 8px rgba(0,0,0,0.05)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute  h-[300px] -top-16 left-180 object-cover rounded-xl"
              src="/projectspics/canvas/signin.png"
              alt="Signin"
            />
            <motion.img
              animate={
                active === "Teams"
                  ? { scale: 1, boxShadow: "0 0 15px rgba(0,0,0,0.2)" }
                  : { scale: 1, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 8px rgba(0,0,0,0.05)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[230px] top-78.5 left-123.5 rounded-xl"
              src="/projectspics/canvas/teams.png"
              alt="Teams"
            />
            <motion.img
              animate={
                active === "SplitView"
                  ? { scale: 1, boxShadow: "0 0 15px rgba(0,0,0,0.2)" }
                  : { scale: 1, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 8px rgba(0,0,0,0.05)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute top-57 w-[430px] left-183 rounded-xl"
              src="/projectspics/canvas/splitview.png"
              alt="Other"
            />
            <motion.img
              animate={
                active === "Document"
                  ? { scale: 1, boxShadow: "0 0 15px rgba(0,0,0,0.2)" }
                  : { scale: 1, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 8px rgba(0,0,0,0.05)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[430px] top-79 left-14 rounded-xl"
              src="/projectspics/canvas/document.png"
              alt="Other"
            />
            <motion.img
              animate={
                active === "Whiteboard"
                  ? { scale: 1, boxShadow: "0 0 15px rgba(0,0,0,0.2)" }
                  : { scale: 1, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 8px rgba(0,0,0,0.05)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[430px] top-113.5 left-183 rounded-xl"
              src="/projectspics/canvas/whiteboard.png"
              alt="Other"
            />
            <motion.img
              animate={
                active === "FreeTierLimit"
                  ? { scale: 1.1, boxShadow: "0 0 15px rgba(0,0,0,0.2)" }
                  : { scale: 1.1, filter: "blur(2px) brightness(1) opacity(.5)", boxShadow: "0 0 8px rgba(0,0,0,0.05)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[200px] top-41 left-16 rounded-xl"
              src="/projectspics/canvas/freetierlimit.png"
              alt="Other"
            />
          </div>
        </motion.div>

        {/* Title + Features */}
        <div className="title relative mt-10 mb-10 z-50">
          <h1 className="text-2xl sm:text-4xl text-gray-900 dark:text-white font-mono font-medium ml-5 sm:ml-10">
            Canvas
          </h1>
          <p className="text-sm sm:text-md text-gray-600 dark:text-neutral-300 leading-5 font-mono font-light ml-5 sm:ml-10 mt-1 w-2/5">
            Documentation and Whiteboard
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
                  className={`px-4 cursor-pointer font-mono rounded-lg transition-all ${
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

      {/* Content Section */}
      <div className="content mt-70 w-full">
        <CanvasReadmePage />
      </div>
    </div>
  )
}

export default ProCanvas
