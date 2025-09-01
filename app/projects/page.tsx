"use client"
import React from 'react';
import { motion } from "framer-motion";
import { useState } from 'react';
import { ContactUs } from '@/components/ContactUs';
import Navbar from '@/components/Navbar';
import ContactMeHero from '@/components/Contactmesvg'
import Footer from '@/components/Footer';
import ProCanvas from '@/components/ProCanvas';
import ProNetwork from '@/components/ProNetwork';
import ProVault from '@/components/ProVault';

const projects = [
  { id: 1, name: 'Canvas', component: <ProCanvas /> },
  { id: 2, name: 'Network', component: <ProNetwork /> },
  { id: 3, name: 'Vault', component: <ProVault /> },
];

export default function ContactPage() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [hoveredProject, setHoveredProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="relative min-h-screen w-full bg-transparent dark:bg-black overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert dark:opacity-30 opacity-50  bg-repeat bg-center z--10"></div>

      {/* Single column layout */}
      <div className="main w-full flex justify-center">
        {/* MIDDLE COLUMN (main content) */}
        <div className="middle w-full max-w-[820px] mx-auto relative rounded-[0px] shadow-[2px_0px_5px_rgba(0,0,0,0.2),-2px_0px_5px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] dark:border-l dark:border-r dark:border-neutral-600 border-neutral-300 bg-white dark:bg-neutral-900">

          <div style={{ zIndex: 100, width: '100%' }}>
            <Navbar />
          </div>

          {/* Project Switcher + Content */}
          <div className="w-full ">
            {/* Project Tabs */}
            <div className="buttons z-200 
              text-gray-700 dark:text-neutral-400 
              font-medium py-3 backdrop-blur-md 
              bg-white/60 dark:bg-neutral-900/60 
              border-b border-gray-200 dark:border-neutral-700 
              fixed top-25 rounded-md left-1/2 -translate-x-1/2 
              flex flex-row items-center justify-center font-mono px-4 shadow-sm">
              {projects.map((project) => {
                const isActive = activeProject.id === project.id;
                const isHovered = hoveredProject?.id === project.id;

                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className={`relative px-3 py-1 transition-colors 
                      ${isActive 
                        ? "text-gray-900 dark:text-white" 
                        : "hover:text-gray-600 dark:hover:text-neutral-300"}`}
                  >
                    {project.name}

                    {/* Active underline */}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 mx-1 -bottom-0 h-[2px] 
                          bg-gray-900 dark:bg-white rounded"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Hover underline */}
                    {!isActive && isHovered && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 mx-1 -bottom-0 h-[2px] 
                          bg-gray-400 dark:bg-neutral-400 rounded"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Project */}
            <div className="projects mt-30 z-50 overflow-x-clip min-h-screen">
              {activeProject.component}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
