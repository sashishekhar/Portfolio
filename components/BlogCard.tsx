"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // ✅ use Next.js Image instead

interface CardProps {
  date: string;
  title: string;
  desc: string;
  link: string;
  icon: string; // pass the icon file path (e.g. "/icons/wasm.svg")
}

const Card: React.FC<CardProps> = ({ date, title, desc, link, icon }) => {
  // check if it's the wasm logo
  const isWasm = icon.toLowerCase().includes("wasm");

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-full relative overflow-hidden max-w-md h-[300px] 
                   rounded-2xl 
                   bg-white/50 dark:bg-neutral-800/20 
                   backdrop-blur-md 
                   border border-neutral-200/60 dark:border-neutral-700/30
                   ring-1 ring-neutral-300/40 dark:ring-neutral-700/40
                   shadow-md dark:shadow-lg 
                   p-3 flex flex-col gap-3 cursor-pointer"
      >
        {/* subtle glossy highlight */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 dark:from-white/10 to-transparent pointer-events-none"></div>

        {/* Icon with conditional invert for wasm */}
        <div className="absolute z-10 left-5 top-9 blur-3xl">
          <Image
            src={icon}
            alt={`${title} icon blurred`}
            width={48}
            height={48}
            className={`w-12 h-12 ${isWasm ? "invert dark:invert-0" : ""}`}
          />
        </div>
        <div className="absolute z-20 left-5 top-9">
          <Image
            src={icon}
            alt={`${title} icon`}
            width={48}
            height={48}
            className={`w-12 h-12 ${isWasm ? "invert dark:invert-0" : ""}`}
          />
        </div>

        {/* Date */}
        <span className="text-sm absolute bottom-42 font-mono text-neutral-600 dark:text-neutral-400">
          {date}
        </span>

        {/* Title */}
        <h2 className="text-[13px] absolute top-35 font-semibold font-mono text-neutral-800 dark:text-neutral-200">
          {title}
        </h2>

        {/* Description */}
        <p
          className="text-[12px] absolute bottom-14 w-[200px] font-mono text-neutral-600 dark:text-neutral-400
                     overflow-hidden text-ellipsis
                     [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]"
        >
          {desc}
        </p>

        {/* Read more */}
        <span
          className="mt-4 absolute bottom-4 inline-block w-fit font-mono text-sm font-medium 
                     text-blue-600 hover:text-blue-700 
                     dark:text-blue-400 dark:hover:text-blue-300 
                     transition-colors"
        >
          Read more →
        </span>
      </motion.div>
    </Link>
  );
};

export default Card;
