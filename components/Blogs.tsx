"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowTurnDownIcon } from "hugeicons-react";
import { ArrowDown } from "lucide-react";

type BlogMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
  icon?: string;
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogMeta[]>([]);

  useEffect(() => {
  async function fetchBlogs() {
    try {
      const res = await fetch("/api/blogs");
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data: BlogMeta[] = await res.json();

      // sort blogs by date (newest first) and take top 3
      const sorted = data
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

      setBlogs(sorted);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  }
  fetchBlogs();
}, []);


  return (
    <div className="w-full relative h-screen flex flex-col justify-center px-9">
      {/* Left line */}
      <div
        className="h-[660px] z-20 w-[2px] absolute opacity-20 left-5
        top-40 [background-image:repeating-linear-gradient(to_bottom,_black_0_6px,_transparent_4px_12px)]
        dark:[background-image:repeating-linear-gradient(to_bottom,_white_0_6px,_transparent_4px_12px)]
        [mask-image:linear-gradient(to_bottom,_transparent,_black_30%,_black_80%,_transparent)]
        mask-repeat-no-repeat mask-size-full"
      />
      {/* Right line */}
      <div
        className="h-[660px] z-20 w-[2px] absolute opacity-20 right-5
        top-40 [background-image:repeating-linear-gradient(to_bottom,_black_0_6px,_transparent_4px_12px)]
        dark:[background-image:repeating-linear-gradient(to_bottom,_white_0_6px,_transparent_4px_12px)]
        [mask-image:linear-gradient(to_bottom,_transparent,_black_30%,_black_80%,_transparent)]
        mask-repeat-no-repeat mask-size-full"
      />

      <div className="text-sm sm:text-base mb-5 font-mono text-neutral-800 dark:text-neutral-200 bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">
        blogs because i don&apos;t write
      </div>

      <div className="flex flex-col w-full gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="flex flex-col w-full gap-1 justify-center px-2"
          >
            <div className="flex flex-row justify-between items-center gap-10">
              <div className="text-[16px] w-4/5 sm:text-[20px] font-medium font-mono text-neutral-800 dark:text-neutral-300">
                {blog.title}
              </div>
              <div className="text-[8px] w-1/5 flex items-center justify-end sm:text-[12px]  font-mono text-neutral-800 dark:text-neutral-300">
                {blog.date}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className=" w-4/5 h-[60px] text-[10px] sm:text-[13px] text-neutral-500 dark:text-neutral-500 font-mono overflow-hidden text-ellipsis
                   [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                {blog.description}
              </div>
              <div className="w-1/5 flex items-baseline justify-end">
                <motion.button
                  initial={{
                    boxShadow: "0 1px 10px rgba(85,221,255,0.4)",
                  }}
                  whileHover={{
                    boxShadow: "0 1px 10px rgba(85,221,255,0.4)",
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="text-[12px] font-mono text-cyan-600 dark:text-cyan-300 cursor-pointer border border-cyan-300 rounded-sm px-2"
                >
                  Read
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <motion.div 
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className="w-full flex justify-center mt-5">

        <Link
          href="/blogs"
          className="text-[12px] font-mono  text-neutral-600 dark:text-neutral-300 cursor-pointer  rounded-sm px-2"
        >
          <ArrowDown className="inline h-6 w-6 shadow-2xl mr-1" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Blogs;
