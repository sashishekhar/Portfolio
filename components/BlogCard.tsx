"use client";
import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  date: string;
  title: string;
  desc: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ date, title, desc, link }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "3px 7px 5px rgba(255,255,255,0.03)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="w-full relative overflow-hidden max-w-md h-[300px] 
                 rounded-2xl 
                 bg-white/20 dark:bg-neutral-800/20 
                 backdrop-blur-md 
                 border border-white/30 dark:border-neutral-700/30
                 ring-1 ring-white/40 dark:ring-neutral-700/40
                 shadow-lg 
                 p-3 flex flex-col gap-3 cursor-pointer"
    >
      {/* subtle glossy highlight */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>

      {/* Date */}
      <span className="text-sm absolute bottom-36 font-mono text-neutral-700 dark:text-neutral-300">
        {date}
      </span>

      {/* Title */}
      <h2 className="text-[13px] absolute bottom-28 font-semibold font-mono text-neutral-900 dark:text-neutral-200">
        {title}
      </h2>

      {/* Description */}
      <p
        className="text-[12px] absolute bottom-14 w-[200px] font-mono text-neutral-700 dark:text-neutral-400
                   overflow-hidden text-ellipsis
                   [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]"
      >
        {desc}
      </p>

      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 absolute bottom-4 inline-block w-fit font-mono text-sm font-medium 
                   text-blue-600 hover:text-blue-800 
                   dark:text-blue-400 dark:hover:text-blue-300 
                   transition-colors"
      >
        Read more →
      </a>
    </motion.div>
  );
};

export default Card;
