import React from "react";
import Link from "next/link";
import {motion } from "framer-motion";
import { TechStackShowcase } from "./ProjectTechStack";

const techItems = [
  { label: "Next.js", sublabel: "App Router" },
  { label: "JavaScript", sublabel: "Language" },
  { label: "Tailwind CSS", sublabel: "Utilities" },
  { label: "Vercel", sublabel: "Deploy" },
  { label: "Supabase", sublabel: "PostgreSQL" },
  { label: "Resend", sublabel: "Email" },
  { label: "Clerk", sublabel: "Auth" },
  { label: "Arcjet", sublabel: "Security" },
  { label: "GeminiAPI", sublabel: "AI Scanning" },
  { label: "Prisma", sublabel: "ORM" },
]

export default function VaultReadMePage() {
  return (
    <div className="font-mono" style={{ maxWidth: "800px",  margin: "0 auto", padding: "20px" }}>
      
      

      <h2 className="text-2xl underline">Overview</h2>
      
      <p className="mt-1 text-neutral-400">
        Vault is a modern, full-featured personal finance management platform designed to help users effectively track their transactions, manage their budgets, and gain intelligent insights into their financial habits. The platform blends traditional financial tools with cutting-edge AI and interactive UI features to create a seamless and smart money-management experience.
      </p>

    

      <h2 className="text-2xl  mt-5 underline">Core Functionality</h2>

      <h3 className="text-xl text-neutral-200 mt-2">Transaction Management</h3>
      <ul className="list-disc list-inside pl-2 text-neutral-400">
        <li>Users can add, edit, delete, and view transactions.</li>
        <li>Select individual or all transactions at once for bulk operations.</li>
        <li>Each selection action logs the transaction ID for tracking.</li>
      </ul>

      <h3 className="text-xl text-neutral-200 mt-2">Advanced Filtering Options</h3>
      <p>Transactions can be filtered dynamically based on:</p>
      <ul className="list-disc list-inside pl-2 text-neutral-400">
        <li>Search keywords</li>
        <li>Transaction type (income/expense)</li>
        <li>Recurrence (recurring/non-recurring)</li>
      </ul>

      <h3 className="text-xl text-neutral-200 mt-2">Budget Tracking</h3>
      <p className="list-disc list-inside pl-2 text-neutral-400">
        Users can set monthly budgets and receive alerts when nearing or
        exceeding these limits, helping maintain financial discipline.
      </p>

      <h3 className="text-xl text-neutral-200 mt-2">AI-Powered Receipt Scanning</h3>
      <p className="list-disc list-inside pl-2 text-neutral-400">
        Integrated with the Google Gemini API, allowing users to upload
        physical receipts. The AI automatically extracts and fills transaction
        details, reducing manual entry and improving accuracy.
      </p>

      <h3 className="text-xl text-neutral-200 mt-2">Monthly Financial Reports & Insights</h3>
      <p className="list-disc list-inside pl-2 text-neutral-400">
        The platform generates visual and textual reports summarizing monthly
        financial activity, including spending insights and suggestions powered
        by AI.
      </p>

      <h3 className="text-xl text-neutral-200 mt-2">Data Visualization</h3>
      <p className="list-disc list-inside pl-2 text-neutral-400">
        Users can understand their spending patterns through visually rich
        graphs and charts, identifying overspending categories to make informed
        financial decisions.
      </p>

      <h3 className="text-xl text-neutral-200 mt-2">Responsive and Intuitive UI</h3>
      <p className="list-disc list-inside pl-2 text-neutral-400">
        Built with responsive design in mind, the interface works smoothly
        across mobile and desktop devices, offering a clean and user-friendly
        experience.
      </p>

      <h3 className="text-xl text-neutral-200 mt-2">Security and Performance</h3>
      <ul className="list-disc list-inside pl-2 text-neutral-400">
        <li>
          Integrates ArcJet for rate limiting, bot protection, and API abuse
          prevention.
        </li>
        <li>Uses Clerk for secure user authentication.</li>
      </ul>

<h2 className="text-2xl  mt-5 underline">Tech Stack Used</h2>
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
            className="px-3 py-1 rounded-[4px] bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white font-semibold hover:bg-white/30 transition-all inline-block"
            href="https://vault-gamma-cyan.vercel.app/"
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
            className="px-3 py-1 rounded-[4px] bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white font-semibold hover:bg-white/30 transition-all inline-block"
            href="https://github.com/sashishekhar/Vault--AI-Finance-App"
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
