import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TechStackShowcase } from "./ProjectTechStack";

const techItems = [
  { label: "Next.js", sublabel: "App Router" },
  { label: "TypeScript", sublabel: "Language" },
  { label: "Tailwind CSS", sublabel: "Utilities" },
  { label: "ShadCN UI", sublabel: "UI Components" },
  { label: "NeonDB", sublabel: "PostgreSQL" },
  { label: "Clerk", sublabel: "Auth" },
  { label: "Uploadthing", sublabel: "Image Upload" },
  { label: "Prisma", sublabel: "ORM" },
];

export default function NetworkReadMePage() {
  return (
    <div
      className="font-mono text-neutral-800 dark:text-neutral-200"
      style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
    >
      <h2 className="text-2xl underline">Overview</h2>

      <p className="mt-1 text-neutral-600 dark:text-neutral-400">
        Network is a full-stack social media application built with Next.js. It
        includes core features such as authentication, post creation with text
        and images, likes, comments, notifications, suggested users, profile
        updates, dark mode, and a responsive modern UI design.
      </p>

      <h2 className="text-2xl mt-5 underline">Features</h2>
      <ul className="list-disc mt-1 text-neutral-600 dark:text-neutral-400 list-inside pl-2">
        <li>User authentication (Email/Password and Google).</li>
        <li>Post creation with text and image uploads.</li>
        <li>Like and comment on posts.</li>
        <li>Notifications for likes, comments, and follows.</li>
        <li>Suggested users to follow.</li>
        <li>Profile management (update and delete).</li>
        <li>Dark mode support.</li>
        <li>Responsive design for mobile and desktop.</li>
      </ul>

      <h2 className="text-2xl mt-5 underline">Tech Stack Used</h2>
      <div className="mt-2">
        <TechStackShowcase
          items={techItems}
          intervalMs={2600}
          staggerMs={120}
          transitionMs={500}
          ariaLabel="Project technology showcase"
        />
      </div>

      <h2 className="text-2xl mt-5 underline">Links</h2>
      <div className="buttons text-md mt-1 font-mono flex flex-row gap-2">
        <motion.div
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95, y: 0 }}
        >
          <Link
            className="px-3 py-1 rounded-[4px] 
              bg-black/10 dark:bg-white/20 
              backdrop-blur-md 
              border border-black/20 dark:border-white/30 
              shadow-md dark:shadow-lg 
              text-black dark:text-white 
              font-semibold 
              hover:bg-black/20 dark:hover:bg-white/30 
              transition-all inline-block"
            href="https://network-social-media.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95, y: 0 }}
        >
          <Link
            className="px-3 py-1 rounded-[4px] 
              bg-black/10 dark:bg-white/20 
              backdrop-blur-md 
              border border-black/20 dark:border-white/30 
              shadow-md dark:shadow-lg 
              text-black dark:text-white 
              font-semibold 
              hover:bg-black/20 dark:hover:bg-white/30 
              transition-all inline-block"
            href="https://github.com/sashishekhar/Network_SocialMedia"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
