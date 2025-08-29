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
      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert opacity-50 dark:opacity-80 bg-repeat bg-center -z-10"></div>

      {/* Grid layout */}
      <div className="main grid grid-cols-[2.25fr_5.5fr_2.25fr] w-full ">

        {/* LEFT COLUMN with spacer + fixed card */}
        <div className="relative">
          {/* Spacer keeps grid width intact */}
          <div className="w-[280px] h-[242px] ml-[50px]" />

        </div>

        {/* MIDDLE COLUMN (main content) */}
        <div className="middle ml-2 relative rounded-[0px] dark:shadow-xl shadow-neutral-500/50 dark:border-l dark:border-r dark:border-neutral-600 border-neutral-300 bg-white dark:bg-neutral-900">

          <div style={{ zIndex: 100, width: '100%' }}>
            <Navbar />
          </div>

          <div className='w-full '>
            <div className="buttons z-200 text-neutral-400 font-medium py-3 backdrop-blur-md bg-white/10 border-b border-neutral-500 fixed top-25 rounded-md left-1/2 -translate-x-1/2 flex flex-row items-center justify-center font-mono px-4">
              {projects.map((project) => {
                const isActive = activeProject.id === project.id;
                const isHovered = hoveredProject?.id === project.id;

                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className={`relative px-3 py-1 transition-colors ${isActive ? "text-white" : "hover:text-neutral-200"
                      }`}
                  >
                    {project.name}

                    {/* Active underline */}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 mx-1 -bottom-0 h-[2px] bg-white rounded"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Hover underline (when not active) */}
                    {!isActive && isHovered && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 mx-1 -bottom-0 h-[2px] bg-neutral-300 rounded"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="projects mt-30 z-50 overflow-x-clip min-h-screen">
              {activeProject.component}
            </div>
          </div>



          <div className="mt-20">
            <Footer />
          </div>



        </div>

        {/* RIGHT COLUMN with spacer + fixed card */}
        <div className="relative">
          {/* Spacer keeps grid width intact */}
          <div className="w-[280px] h-[400px] ml-[15px]" />

        </div>

      </div>
    </div>
  )
};
