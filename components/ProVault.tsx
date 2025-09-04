"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import VaultReadMePage from "./VaultContent"

// ✅ Responsive positions
const features = {
  Home: {
    desktop: { x: 30, y: 220 },
    mobile: { x: -150, y: 200 },
  },
  SignIn: {
    desktop: { x: -330, y: 280 },
    mobile: { x: -550, y: 350 },
  },
  Dashboard: {
    desktop: { x: -750, y: 300 },
    mobile: { x: -900, y: 250 },
  },
  MonthlyBudget: {
    desktop: { x: 30, y: 120 },
    mobile: { x: -150, y: 320 },
  },
  MultiAccount: {
    desktop: { x: 30, y: 0 },
    mobile: { x: -150, y: -50 },
  },
  AccountAnalytics: {
    desktop: { x: -810, y: -10 },
    mobile: { x: -920, y: 50 },
  },
  AIReceiptScan: {
    desktop: { x: -390, y: -30 },
    mobile: { x: -590, y: 50 },
  },
  TransactionChart: {
    desktop: { x: 520, y: 0 },
    mobile: { x: 300, y: 20 },
  },
  TransactionList: {
    desktop: { x: 720, y: 100 },
    mobile: { x: 400, y: 120 },
  },
  UpdateTransaction: {
    desktop: { x: 400, y: 120 },
    mobile: { x: 150, y: 100 },
  },
  FilterSearch: {
    desktop: { x: 30, y: 150 },
    mobile: { x: -100, y: 120 },
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

const ProVault = () => {
  const [active, setActive] = useState<keyof typeof features>("Home")
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
            {/* 🖼️ Home */}
            <motion.img
              animate={
                active === "Home"
                  ? { scale: 1.1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : { scale: 1.1, filter: "blur(2px) brightness(1) opacity(.5)" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[400px] top-10 left-79 rounded-xl object-cover"
              src="/projectspics/vault/Home.png"
              alt="Dashboard"
            />
            <motion.img
              animate={
                active === "SignIn"
                  ? { scale: 0.9, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 0.9,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute h-[400px] -top-31 left-182 object-cover rounded-xl"
              src="/projectspics/vault/SignIn.png"
              alt="SignIn"
            />
            <motion.img
              animate={
                active === "Dashboard"
                  ? { scale: 1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[500px] top-0 left-266 rounded-xl"
              src="/projectspics/vault/Dashboard.png"
              alt="Teams"
            />
            <motion.img
              animate={
                active === "MonthlyBudget"
                  ? { scale: 1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute top-81 w-[480px] left-74 rounded-xl"
              src="/projectspics/vault/MonthlyBudget.png"
              alt="Other"
            />
            <motion.img
              animate={
                active === "MultiAccount"
                  ? { scale: 1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[480px] top-104 left-74 rounded-xl"
              src="/projectspics/vault/MultiAccount.png"
              alt="Other"
            />
            <motion.img
              animate={
                active === "AccountAnalytics"
                  ? { scale: 1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[430px] top-66 left-289 rounded-xl"
              src="/projectspics/vault/AccountAnalytics.png"
              alt="Other"
            />
            <motion.img
              animate={
                active === "AIReceiptScan"
                  ? { scale: 1.1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1.1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[330px] top-70 left-200 rounded-xl"
              src="/projectspics/vault/AI-ReciptScan.png"
              alt="Other"
            />
            <motion.img
              animate={
                active === "TransactionChart"
                  ? { scale: 1.1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1.1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[440px] top-91 -left-43 rounded-xl"
              src="/projectspics/vault/TransactionChart.png"
              alt="Other"
            />
            <motion.img
              animate={
                active === "TransactionList"
                  ? { scale: 1.1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1.1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[440px] top-45 -left-93 rounded-xl"
              src="/projectspics/vault/TransactionList.png"
              alt="Other"
            />
            <motion.img
              animate={
                active === "UpdateTransaction"
                  ? { scale: 1.1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1.1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-[176px] top-34 left-26 rounded-xl"
              src="/projectspics/vault/UpdateTransaction.png"
              alt="Other"
            />
            <motion.img
              animate={
                active === "FilterSearch"
                  ? { scale: 1.1, boxShadow: "0 0 12px rgba(0,0,0,0.15)" }
                  : {
                      scale: 1.1,
                      filter: "blur(2px) brightness(1) opacity(.5)",
                      boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute top-66 w-[440px] left-79 rounded-xl"
              src="/projectspics/vault/FilterSearch.png"
              alt="Other"
            />
          </div>
        </motion.div>

        {/* Title + Features */}
        <div className="title relative mt-10 mb-10 z-50 ">
          <h1 className="text-2xl sm:text-4xl text-gray-900 dark:text-white font-mono font-medium ml-5 sm:ml-10">
            Vault
          </h1>
          <p className="text-sm sm:text-md text-gray-600 dark:text-neutral-300 leading-5 font-mono font-light ml-5 sm:ml-10 mt-1 w-2/5">
            Personal Finance Manager
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
                  className={`px-4 cursor-pointer font-mono rounded-lg transition-transform ${
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

      <div className="content relative mt-70 z-100 w-full">
        <VaultReadMePage />
      </div>
    </div>
  )
}

export default ProVault
