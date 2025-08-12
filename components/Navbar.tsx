"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Darkmode from "./Darkmode";

const NAV_HEIGHT = 60;

const Navbar = () => {
  const links = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      {/* Spacer so layout doesn’t jump */}
      <div aria-hidden className={`h-[${NAV_HEIGHT}px]`} />

      <div className="w-full flex justify-center z-300 pointer-events-auto">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="
    fixed top-3 left-1/2 -translate-x-1/2
    w-[800px] h-[60px] px-3 rounded-full
    flex items-center justify-between

    /* Blur fix */
    bg-black/30 dark:bg-white/10 backdrop-blur-lg

    /* Ensure on top of everything */
    z-[9999] shadow-md

    border-b border-neutral-300 dark:border-neutral-600
  "
          style={{
            willChange: "transform, background-color, box-shadow",
          }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Image
              className="rounded-full border-2 border-neutral-600 dark:border-neutral-300"
              src="/profile.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </div>

          {/* Nav links */}
          <div className="flex flex-row items-center">
            {links.map((link) => (
              <div
                key={link.name}
                onMouseEnter={() => setHovered(link.name)}
                onMouseLeave={() => setHovered(null)}
                className="relative"
              >
                {hovered === link.name && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 -inset-x-1 -inset-y-1 rounded-full bg-neutral-800 dark:bg-neutral-600 z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <a
                  href={link.href}
                  className="relative z-10 p-2 font-mono text-neutral-800 dark:text-neutral-400 hover:text-neutral-100 dark:hover:text-neutral-100 transition"
                >
                  {link.name}
                </a>
              </div>
            ))}

            <div className="pl-3">
              <Darkmode />
            </div>
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default Navbar;
