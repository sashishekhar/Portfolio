import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TechStackShowcase } from "./ProjectTechStack";

const techItems = [
  { label: "Next.js", sublabel: "App Router" },
  { label: "TypeScript", sublabel: "Language" },
  { label: "Tailwind CSS", sublabel: "Utilities" },
  { label: "Convex", sublabel: "Real-Time Updates" },
  { label: "Kinde", sublabel: "Auth" },
  { label: "Prisma", sublabel: "ORM" },
  { label: "Vercel", sublabel: "Deploy" },
  { label: "React", sublabel: "Framework" },
];

export default function CanvasReadmePage() {
  return (
    <div
      className="font-mono"
      style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
    >
      <h2 className="text-2xl underline text-gray-900 dark:text-white">
        Overview
      </h2>

      <p className="mt-1 text-gray-600 dark:text-neutral-400 leading-relaxed">
        The Canvas application is designed to be a powerful collaborative
        platform where users can create and manage documents alongside a
        whiteboard for drawing diagrams. Built from scratch using the Next.js
        framework, this application leverages modern web technologies to enhance
        productivity and facilitate teamwork.
      </p>

      <h2 className="text-2xl mt-5 underline text-gray-900 dark:text-white">
        Features
      </h2>
      <ul className="list-disc mt-1 text-gray-600 dark:text-neutral-400 list-inside pl-2 space-y-1">
        <li>
          User Authentication: Users can log in via social accounts (Google,
          Facebook) or email.
        </li>
        <li>Team Management: Create and manage teams for collaborative work.</li>
        <li>Document Creation: Users can create, update, and save documents.</li>
        <li>
          Whiteboard Canvas: A dedicated drawing space for visual collaboration.
        </li>
        <li>Real-Time Updates: Leveraging Convex for real-time data handling.</li>
        <li>
          Responsive Design: Fully responsive user interface optimized for
          desktop and mobile use.
        </li>
      </ul>

      <h2 className="text-2xl mt-5 underline text-gray-900 dark:text-white">
        Tech Stack Used
      </h2>
      <div className="mt-2">
        <TechStackShowcase
          items={techItems}
          intervalMs={2600}
          staggerMs={120}
          transitionMs={500}
          ariaLabel="Project technology showcase"
        />
      </div>

      <h2 className="text-2xl mt-5 underline text-gray-900 dark:text-white">
        Links
      </h2>
      <div className="buttons text-md mt-1 font-mono flex flex-row gap-2">
        <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.95, y: 0 }}>
          <Link
            className="px-3 py-1 rounded-[4px] bg-gray-200/70 dark:bg-white/20 backdrop-blur-md border border-gray-300 dark:border-white/30 shadow-sm dark:shadow-lg text-gray-900 dark:text-white font-semibold hover:bg-gray-300/70 dark:hover:bg-white/30 transition-all inline-block"
            href="https://canvas-eta-five.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.95, y: 0 }}>
          <Link
            className="px-3 py-1 rounded-[4px] bg-gray-200/70 dark:bg-white/20 backdrop-blur-md border border-gray-300 dark:border-white/30 shadow-sm dark:shadow-lg text-gray-900 dark:text-white font-semibold hover:bg-gray-300/70 dark:hover:bg-white/30 transition-all inline-block"
            href="https://github.com/sashishekhar/Canvas"
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
