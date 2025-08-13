"use client"

import React from "react";
import { motion } from "framer-motion";

export default function ContactMeLetter() {
  const strokeColor = "#d0d0d0"; // soft gray monochrome

  return (
    <div className="flex  w-full mr-10 ">
      <motion.svg
        width="180"
        height="180"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 0, y: 0 }}
        animate={{ rotate: [-2, 2, -2], y: [0, -3, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        {/* Envelope Body */}
        <rect
          x="40"
          y="70"
          width="120"
          height="80"
          fill="none"
          opacity={0.6}
          stroke={strokeColor}
          strokeWidth="2"
          rx="4"
          ry="4"
        />
        {/* Envelope Flap */}
        <path
          d="M40 70 L100 110 L160 70"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          opacity={0.5}
        />
      </motion.svg>
    </div>
  );
}
