"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      image: "/projects/canvas.png",
      alt: "Canvas",
      title: "canvas",
      description:
        "Powerful collaborative platform where users can create and manage documents alongside a whiteboard.",
      link: "https://canvas-eta-five.vercel.app/",
    },
    {
      image: "/projects/vault.png",
      alt: "finance",
      title: "vault",
      description:
        "Modern, full-featured personal finance management platform.",
      link: "https://vault-gamma-cyan.vercel.app/",
    },
    {
      image: "/projects/network.png",
      alt: "social media",
      title: "Network",
      description: "Full-stack social media application built with Next.js.",
      link: "https://network-social-media.vercel.app/",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === projects.length - 1;

  const reduce = useReducedMotion();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && !isFirst) {
        setCurrentIndex((s) => s - 1);
      } else if (e.key === "ArrowRight" && !isLast) {
        setCurrentIndex((s) => s + 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isFirst, isLast]);

  const imgSpring = reduce
    ? { duration: 0 }
    : { type: "spring", stiffness: 120, damping: 18 };

  const textTween = reduce
    ? { duration: 0 }
    : { duration: 0.46, ease: [0.22, 1, 0.36, 1] };

  const containerVariant = {
    initial: { opacity: 0, scale: 0.995 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: reduce ? 0 : 0.42 },
    },
    exit: {
      opacity: 0,
      scale: 0.995,
      transition: { duration: reduce ? 0 : 0.32 },
    },
  };

  const imageVariants = {
    initial: {
      x: 72,
      rotate: 4,
      scale: 0.96,
      opacity: 0,
      filter: "blur(6px)",
    },
    animate: {
      x: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: imgSpring,
    },
    exit: {
      x: -72,
      rotate: -4,
      scale: 0.96,
      opacity: 0,
      filter: "blur(6px)",
      transition: { duration: reduce ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const textVariants = {
    initial: { x: -36, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { ...textTween, delay: reduce ? 0 : 0.06 },
    },
    exit: {
      x: 28,
      opacity: 0,
      transition: { duration: reduce ? 0 : 0.28 },
    },
  };

  const accent = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: 1,
      transition: { duration: reduce ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { scaleX: 0, transition: { duration: reduce ? 0 : 0.2 } },
  };

  return (
    <div className="flex flex-col mb-20 px-4 sm:px-6 lg:px-0">
      

      <motion.div className="flex flex-col gap-6 w-full max-w-[700px] p-5 items-center relative">
        <div className="relative w-full aspect-[16/9] sm:h-[400px]">
          {/* LEFT ARROW */}
          <motion.button
            initial={{ opacity: isFirst ? 0 : 1 }}
            animate={{ opacity: isFirst ? 0 : 1 }}
            transition={{ duration: 0.28 }}
            onClick={() => {
              if (!isFirst) setCurrentIndex((s) => s - 1);
            }}
            aria-label="Previous Project"
            style={{ pointerEvents: isFirst ? "none" : "auto" }}
            className="absolute -left-12 sm:-left-10 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
          >
            <ChevronLeft
              className={`w-7 h-7 sm:w-8 sm:h-8 ${
                isFirst
                  ? "text-neutral-400"
                  : "text-neutral-800 dark:text-neutral-200"
              }`}
            />
          </motion.button>

          {/* CARD */}
          <motion.div
            initial={{
              boxShadow: "0 8px 30px rgb(0,0,0,0.2)",
            }}
            whileHover={{
              boxShadow: "0 8px 30px rgb(0,0,0,0.3)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-white/80 dark:bg-neutral-900 rounded-3xl sm:rounded-[40px] border border-neutral-200 dark:border-neutral-600/70 shadow-lg backdrop-blur-lg relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={containerVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full h-full relative p-4"
              >
                {/* Blurred circle */}
                <svg
                  className="absolute top-[20%] left-[50%] sm:left-[60%] blur-[80px] sm:blur-[100px] opacity-30 dark:opacity-60 z-0 text-black dark:text-white pointer-events-none"
                  width="300"
                  height="300"
                  aria-hidden
                >
                  <circle cx="100" cy="100" r="120" fill="currentColor" />
                </svg>

                {/* Project image */}
                <motion.img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].alt}
                  className="w-[70%] sm:w-[60%] lg:w-[55%] max-h-[250px] sm:max-h-[280px] object-cover absolute right-4 sm:right-12 bottom-8 sm:top-[72px] rounded-xl shadow-lg z-0"
                  variants={imageVariants}
                />

                {/* Gloss effect */}
                <motion.div
                  key={"gloss-" + currentIndex}
                  initial={{ x: "-120%", opacity: 0 }}
                  animate={{ x: "120%", opacity: 0.14 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: reduce ? 0 : 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute right-6 sm:right-12 top-[20%] sm:top-[84px] w-[60%] sm:w-[420px] h-[40%] sm:h-[220px] rounded-xl pointer-events-none"
                  style={{
                    transform: "skewX(-10deg)",
                    mixBlendMode: "screen",
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.42) 50%, rgba(255,255,255,0) 100%)",
                    filter: "blur(12px)",
                  }}
                />

                {/* Text content */}
                <motion.div
                  className="relative w-full h-full flex flex-col justify-between z-10"
                  variants={textVariants}
                >
                  <div className="flex flex-row justify-between items-center px-2 sm:px-4 sm:pt-2">
                    <h3 className="font-mono font-semibold text-lg sm:text-2xl text-neutral-800 dark:text-white">
                      {projects[currentIndex].title}
                    </h3>
                    <Link
                      href={projects[currentIndex].link}
                      target="_blank"
                      className="p-1.5 sm:p-2 rounded-full hover:bg-neutral-200/40 dark:hover:bg-neutral-700/40 transition"
                    >
                      <ArrowUpRight />
                    </Link>
                  </div>

                  <div className="px-2 sm:px-4 pb-4 sm:pb-6">
                    <motion.div
                      className="h-0.5 w-[50px] sm:w-[66px] bg-cyan-600 origin-left rounded-sm mb-2 sm:mb-3"
                      variants={accent}
                    />
                    <a
                      href={`/projects`}
                      target="_blank"
                      className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-800 dark:hover:text-cyan-100 font-mono text-xs sm:text-sm"
                    >
                      read more
                    </a>
                    <p className="text-[10px] sm:text-[11px] md:text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-[70%] sm:max-w-[230px] font-mono">
                      {projects[currentIndex].description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* RIGHT ARROW */}
          <motion.button
            initial={{ opacity: isLast ? 0 : 1 }}
            animate={{ opacity: isLast ? 0 : 1 }}
            transition={{ duration: 0.28 }}
            onClick={() => {
              if (!isLast) setCurrentIndex((s) => s + 1);
            }}
            aria-label="Next Project"
            style={{ pointerEvents: isLast ? "none" : "auto" }}
            className="absolute -right-8 sm:-right-10 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
          >
            <ChevronRight
              className={`w-7 h-7 sm:w-8 sm:h-8 ${
                isLast
                  ? "text-neutral-400"
                  : "text-neutral-800 dark:text-neutral-200"
              }`}
            />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
