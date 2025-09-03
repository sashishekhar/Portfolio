"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedDoc } from '@/components/AnimatedDoc';
import BlogCard from '@/components/BlogCard';
import Title from '@/components/Title';

type BlogMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
  icon: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ContactPage() {
  const [blogs, setBlogs] = useState<BlogMeta[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data: BlogMeta[] = await res.json();

        const sorted = data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setBlogs(sorted);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-transparent dark:bg-black overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert dark:opacity-30 opacity-50 bg-repeat bg-center z--10"></div>

      {/* Single column layout */}
      <div className="main w-full flex justify-center">
        <motion.div
          className="middle w-full min-h-screen max-w-[820px] mx-auto relative rounded-[0px] shadow-[2px_0px_5px_rgba(0,0,0,0.2),-2px_0px_5px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] dark:border-l dark:border-r dark:border-neutral-600 border-neutral-300 bg-white dark:bg-neutral-900"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >

          <div className="absolute top-0 -left-8 h-full w-[20px] opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                <pattern id="herringbone" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(45)">
                  <rect width="6" height="12" fill="currentColor" className="text-neutral-200 dark:text-neutral-700" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#herringbone)" />
            </svg>

          </div>

          {/* RIGHT STRIP (mirrored waves) */}
          <div className="absolute top-0 -right-8 h-full w-[20px] opacity-60 transform scale-x-[-1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                <pattern id="herringbone" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(45)">
                  <rect width="6" height="12" fill="currentColor" className="text-neutral-200 dark:text-neutral-700" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#herringbone)" />
            </svg>

          </div>
          {/* Navbar */}
          <motion.div style={{ zIndex: 100, width: "100%" }} variants={childVariants}>
            <Navbar />
          </motion.div>

          {/* Header Section */}
          <motion.div
            className="flex flex-row items-center mt-10 justify-around mb-6"
            variants={childVariants}
          >
            <div className="flex flex-col gap-5">
              <Title
                defaultText="blogs !!"
                hoverText="notes/findings/topics !!"
                className="text-[16px] sm:text-[22px]  text-neutral-700 font-medium dark:text-neutral-200 font-mono border-0 sm:ml-2 ml-4 mb-0 sm:mb-0 w-fit px-2 "
              />
              <div className="text-[14px] font-mono ml-6 max-w-[500px] text-neutral-700 dark:text-neutral-400">
                Random write-ups on web development, coding hiccups, and those tiny wins that make building stuff fun.
              </div>
            </div>
            <div className="mt-2">
              <AnimatedDoc />
            </div>
          </motion.div>

          {/* Blog Cards */}
          <motion.div
            className="blogcards w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
            variants={containerVariants} // another stagger for blog cards
          >
            {blogs.map((post, index) => (
              <motion.div key={index} variants={childVariants}>
                <BlogCard
                  date={post.date}
                  title={post.title}
                  desc={post.description}
                  link={`/blogs/${post.slug}`}
                  icon={post.icon.startsWith('/') ? post.icon : `/${post.icon}`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div className="mt-20" variants={childVariants}>
            <Footer />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}