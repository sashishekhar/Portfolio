"use client"

import { motion, AnimatePresence } from "framer-motion"
import { filter } from "motion/react-client"
import { useState } from "react"

export function AnimatedDoc() {
  const [isHovered, setIsHovered] = useState(false)

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
    hover: {
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  const lineVariants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: (i: number) => ({
      width: i % 4 === 0 ? "60px" : i % 4 === 1 ? "50px" : i % 4 === 2 ? "55px" : "45px",
      opacity: [0, 1, 1, 0.3],
      transition: {
        delay: i * 0.2,
        duration: 1.5,
        ease: "easeOut",
        opacity: {
          times: [0, 0.1, 0.8, 1],
          duration: 2,
        },
      },
    }),
  }

  return (
    <div className="flex items-center bg-transparent justify-center ">
      <motion.div
        variants={floatingVariants}
        animate={isHovered ? "hover" : "animate"}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="cursor-pointer "
      >
        <svg
          width="160"
          height="200"
          viewBox="0 0 160 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          {/* Document shadow */}

          <defs>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              {/* Default (light mode) shadow */}
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="8"
                floodColor="rgba(0,0,0,0.15)"
              />
            </filter>

            <filter id="softShadowDark" x="-50%" y="-50%" width="200%" height="200%">
              {/* Dark mode shadow */}
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="8"
                floodColor="rgba(255,255,255,0.25)"
              />
            </filter>
          </defs>

          {/* Apply correct filter depending on theme */}
          <motion.rect
            x="20"
            y="20"
            width="100"
            height="140"
            rx="6"
            fill="white"
            stroke="#e2e8f0"
            strokeWidth="2"
            className="fill-white dark:fill-neutral-100 stroke-neutral-200 dark:stroke-neutral-600"
            filter="url(#softShadow)" // default for light
          />

          <motion.rect
            x="20"
            y="20"
            width="100"
            height="140"
            rx="6"
            stroke="#e2e8f0"
            strokeWidth="2"
            className="fill-white dark:fill-neutral-800 stroke-neutral-200 dark:stroke-neutral-600 
             dark:[filter:url(#softShadowDark)] [filter:url(#softShadow)]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />


          <rect
            x="20"
            y="20"
            width="100"
            height="25"
            rx="6"
            className="fill-neutral-50 dark:fill-neutral-700  stroke-neutral-200 dark:stroke-neutral-600"
            strokeWidth="1"
          />

          <motion.path
            d="M105 20 L105 35 L120 35 Z"
            className="fill-neutral-100 dark:fill-neutral-600  stroke-neutral-300 dark:stroke-neutal-500"
            strokeWidth="1"
            whileHover={{ fill: "fill-neutral-200 dark:fill-neutral-500", stroke: "stroke-neutral-300 dark:stroke-neutral-500" }}
            transition={{ duration: 0.2 }}
          />

          {/* Corner fold crease */}
          <path d="M105 35 L120 35" className="stroke-neutral-300 dark:stroke-neutral-500" strokeWidth="1" />

          <rect x="25" y="25" width="60" height="3" rx="1.5" className="fill-neutral-600 dark:fill-neutral-300" />
          <rect x="25" y="32" width="40" height="2" rx="1" className="fill-neutral-400 dark:fill-neutral-500" />

          <AnimatePresence>
            {isHovered && (
              <>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <motion.rect
                    key={`line-${i}`}
                    x="25"
                    y={55 + i * 9}
                    height="2"
                    rx="1"
                    className="fill-neutral-500 dark:fill-neutral-500"
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    custom={i}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </svg>
      </motion.div>
    </div>
  )
}
