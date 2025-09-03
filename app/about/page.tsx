"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PhotoCardStack } from '@/components/PhotoCardStack';
import Timeline from '@/components/Timeline';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: "2024-Present",
    title: "Freelance Full-Stack Developer",
    company: "Remote",
    description:
      "Collaborated with clients to deliver modern websites, landing pages, and internal tools. Boosted engagement for a travel brand through performance-focused redesign. Built responsive, SEO-optimized UIs and integrated scalable backends with PostgreSQL, MongoDB, and Supabase.",
    skills: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Supabase", "MongoDB"],
    type: "work" as const,
  },
  {
    year: "2024",
    title: "Canvas | Documentation & Whiteboard Platform",
    description:
      "Created a collaborative platform combining real-time document editing and whiteboarding. Implemented live sync with Convex DB and social/email authentication with Kinde Auth.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Convex", "Kinde Auth", "Vercel"],
    type: "project" as const,
  },
  {
    year: "2024",
    title: "Vault | AI Finance Platform",
    description:
      "Developed a smart finance platform with budgeting, alerts, and receipt scanning. Integrated Gemini API for AI-powered data entry, ArcJet for runtime protection, and Inngest for task scheduling.",
    skills: ["Next.js", "Prisma", "Supabase", "Clerk", "Gemini API", "ArcJet", "Inngest", "Vercel"],
    type: "project" as const,
  },
  {
    year: "2024",
    title: "Network | Social Media Platform",
    description:
      "Built a full-stack social media app with posts, likes, comments, and user profiles. Integrated Clerk for authentication, Uploadthing for image uploads, and designed a responsive dark mode UI.",
    skills: ["Next.js", "React", "Tailwind CSS", "ShadCN UI", "Prisma", "NeonDB", "Clerk", "Uploadthing", "Vercel"],
    type: "project" as const,
  },
  {
    year: "2022",
    title: "B.Tech in Electrical Engineering",
    company: "Birsa Institute of Technology, SINDRI",
    description:
      "Pursuing undergraduate studies with a specialization in Electrical Engineering. Completed coursework in System Design, Operating Systems, DBMS, and Computer Networks while building strong foundations in software engineering.",
    skills: ["System Design", "Operating Systems", "Computer Networks", "DBMS", "OOP"],
    type: "education" as const,
  },
  {
    year: "2024",
    title: "Smart India Hackathon 2024 (Shortlisted)",
    description:
      "Qualified in the internal college round of SIH 2024 for innovative problem-solving in software solutions.",
    skills: ["Problem Solving", "Teamwork", "Hackathon Experience"],
    type: "achievement" as const,
  },
  {
    year: "2020–Present",
    title: "DSA Problem Solving",
    description:
      "Solved 700+ Data Structures & Algorithms problems on LeetCode and GeeksforGeeks, strengthening problem-solving and coding proficiency.",
    skills: ["DSA", "Algorithms", "Problem Solving"],
    type: "achievement" as const,
  }

];

// animation variants
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

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full bg-transparent dark:bg-black overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert dark:opacity-30 opacity-50 bg-repeat bg-center z--10"></div>

      {/* Single column layout */}
      <div className="main w-full flex justify-center">
        {/* MIDDLE COLUMN (main content) */}
        <motion.div
          className="middle w-full max-w-[820px] mx-auto relative rounded-[0px] shadow-[2px_0px_5px_rgba(0,0,0,0.2),-2px_0px_5px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] dark:border-l dark:border-r dark:border-neutral-600 border-neutral-300 bg-white dark:bg-neutral-900"
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

          <motion.div style={{ zIndex: 100, width: '100%' }} variants={childVariants}>
            <Navbar />
          </motion.div>

          <motion.div className="photostack" variants={childVariants}>
            <PhotoCardStack />
          </motion.div>

          <motion.div
            className="bio p-5 m-5 about-bio-inset-shadow text-md md:text-lg leading-7 text-neutral-700 dark:text-neutral-300 font-mono"
            variants={childVariants}
          >
            I’m a full-stack developer with 2+ years of experience making apps look pretty on the outside and work like a charm on the inside. Think React, Next.js, Node — basically the Avengers of my toolkit.
            <br /><br />
            I’ve built everything from “tiny idea in a Google Doc” to “client-ready product” and I’m slightly obsessed with clean UIs (yes, I judge fonts in the wild). When I’m not debugging code at ungodly hours, I’m probably daydreaming about how to make buttons feel just a little clickier.
            <br /><br />
            In short: I build apps that don’t just function — they vibe. ✨
          </motion.div>

          <motion.div className="w-full flex mt-20 justify-center font-mono" variants={childVariants}>
            <h2 className="text-lg font-semibold tracking-wide text-neutral-700 dark:text-neutral-200">
              a timeline to past
            </h2>
          </motion.div>

          <motion.div className="timeline" variants={childVariants}>
            <Timeline items={timelineData} />
          </motion.div>

          <motion.div className="mt-10" variants={childVariants}>
            <Footer />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
