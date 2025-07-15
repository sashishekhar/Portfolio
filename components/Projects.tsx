"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { div } from "motion/react-client";

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrolling, setScrolling] = useState(false);

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

    const handleNext = () => {
        if (currentIndex < projects.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleScroll = (e: React.WheelEvent) => {
        const atTop = currentIndex === 0 && e.deltaY < 0;
        const atBottom = currentIndex === projects.length - 1 && e.deltaY > 0;

        // Allow outer scroll if at top or bottom
        if (atTop || atBottom) return;

        // Otherwise prevent outer scroll
        e.preventDefault();

        if (scrolling) return;
        setScrolling(true);

        if (e.deltaY > 0) handleNext();
        else handlePrev();

        setTimeout(() => setScrolling(false), 600); // Match animation
    };


    const arrowVariants = {
        initialTop: { x: 0, y: 0, opacity: 1 },
        hoverTop: { x: 40, y: -40, opacity: 0 },
        initialBottom: { x: -40, y: 40, opacity: 0 },
        hoverBottom: { x: 0, y: 0, opacity: 1 },
    };

    return (
        <>
        <div className="flex flex-col gap-6 w-full">
        <div className="text-xl font-mono text-neutral-900 dark:text-neutral-100  ml-8 mb-5 bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">Projects that converts to products</div>
        <div
            className=" flex justify-center w-full h-[505px]  bg-white/80 dark:bg-neutral-900  group cursor-pointer"
            onWheelCapture={handleScroll}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative overflow-hidden w-[720px] h-[375px]
    bg-white/60 dark:bg-neutral-900/30 backdrop-blur-lg border border-neutral-200 dark:border-neutral-600/70
    rounded-[40px] dark:shadow-[2px_2px_10px_0px_rgba(255,255,255,0.05),-2px_-2px_10px_0px_rgba(255,255,255,0.05)] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.05),-2px_-2px_10px_0px_rgba(0,0,0,0.05)] p-4"
                >
                    {/* Blurred circle background */}
                    <svg
                        className="absolute top-[70px] left-[300px] blur-[100px] opacity-20 dark:opacity-60 z-0 text-black dark:text-white"
                        width="400"
                        height="400"
                    >
                        <circle cx="100" cy="100" r="120" fill="currentColor" />
                    </svg>

                    {/* Project Image */}
                    <img
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].alt}
                        className="w-[550px] absolute left-[260px] top-[72px] object-cover rounded-xl 
              shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
                    />

                    {/* Content Layer */}
                    <div className="relative w-full h-full flex flex-col justify-between z-10">
                        {/* Top Row: Title and Arrow */}
                        <div className="flex flex-row justify-between items-center px-4 pt-2">
                            <h3 className="font-mono font-semibold text-[24px] text-neutral-800 dark:text-white">
                                {projects[currentIndex].title}
                            </h3>

                            <motion.div
                                className="relative w-[40px] h-[40px] overflow-hidden rounded-full"
                                initial="initial"
                                whileHover="hover"
                            >
                                <Link
                                    href={projects[currentIndex].link}
                                    className="w-full h-full block"
                                    target="_blank"
                                >
                                    <motion.div
                                        variants={{
                                            initial: arrowVariants.initialTop,
                                            hover: arrowVariants.hoverTop,
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <ArrowUpRight />
                                    </motion.div>

                                    <motion.div
                                        variants={{
                                            initial: arrowVariants.initialBottom,
                                            hover: arrowVariants.hoverBottom,
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <ArrowUpRight />
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Bottom Left Description */}
                        <div className="px-4 pb-6">
                            <a
                                href={projects[currentIndex].link}
                                target="_blank"
                                className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-800 dark:hover:text-cyan-100 font-mono text-sm"
                            >
                                read more
                            </a>
                            <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-2 max-w-[240px] font-mono">
                                {projects[currentIndex].description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
        </div>
        </>
    );
};

export default Projects;
