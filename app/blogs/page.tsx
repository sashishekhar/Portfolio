"use client";
import { useEffect, useState } from "react";

import Navbar from '@/components/Navbar';

import Footer from '@/components/Footer';
import { AnimatedDoc } from '@/components/AnimatedDoc';
import BlogCard from '@/components/BlogCard';

type BlogMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
  icon: string;
};

export default function ContactPage() {
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
      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert opacity-50 dark:opacity-80 bg-repeat bg-center -z-10"></div>

      {/* Grid layout */}
      <div className="main grid grid-cols-[2.25fr_5.5fr_2.25fr] w-full">

        {/* LEFT COLUMN */}
        <div className="relative">
          <div className="w-[280px] h-[242px] ml-[50px]" />
        </div>

        {/* MIDDLE COLUMN */}
        <div className="middle ml-2 relative rounded-[0px] dark:shadow-xl shadow-neutral-500/50 dark:border-l dark:border-r dark:border-neutral-600 border-neutral-300 bg-white dark:bg-neutral-900">
          <div style={{ zIndex: 100, width: '100%' }}>
            <Navbar />
          </div>
          <div className="flex flex-row  items-center mt-10 justify-around mb-6">
            <div className="flex flex-col gap-5 ">
              <div className="text-[16px] font-mono text-neutral-900 dark:text-neutral-200 ml-5 bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">
                dev notes & coffee !!
              </div>
              <div className="text-[14px] font-mono ml-6 max-w-[500px] text-neutral-900 dark:text-neutral-400">
                Random write-ups on web development, coding hiccups, and those tiny wins that make building stuff fun.
              </div>
            </div>
            <div className=' mt-2'>
              <AnimatedDoc/>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="blogcards w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {blogs.map((post, index) => (
              <BlogCard
                key={index}
                date={post.date}
                title={post.title}
                desc={post.description}
                link={`/blogs/${post.slug}`}
                icon={post.icon}
              />
            ))}
          </div>

          <div className="mt-20">
            <Footer />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative">
          <div className="w-[280px] h-[400px] ml-[15px]" />
        </div>
      </div>
    </div>
  )
};
