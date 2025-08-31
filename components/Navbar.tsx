"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Darkmode from "./Darkmode";
import Link from "next/dist/client/link";
import { Menu } from "lucide-react";

const NAV_HEIGHT = 60;

const Navbar = () => {
  const links = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* layout jumpfix */}
      <div aria-hidden className={`h-[${NAV_HEIGHT}px]`} />

      <div className="  flex  justify-between z-300 pointer-events-auto">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="
    fixed top-3 left-1/2 -translate-x-1/2
    w-full max-w-[800px]
 h-[60px] px-3 rounded-full
    flex items-center justify-between

    /* Blur fix */
    bg-black/10 dark:bg-white/10 backdrop-blur-lg

    /* Ensure on top of everything */
    z-[9999] shadow-md

    border-b border-neutral-500/40 dark:border-neutral-600
  "
          style={{
            willChange: "transform, background-color, box-shadow",
          }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                className="rounded-full border-2 border-neutral-400 dark:border-neutral-300"
                src="/profile.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </Link>
          </div>

          {/* Nav links */}
          <div className=" hidden sm:flex flex-row  items-center">
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
                    className="absolute inset-0 -inset-x-1 -inset-y-1 rounded-full bg-neutral-500 dark:bg-neutral-600 z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <a
                  href={link.href}
                  className="relative z-10 p-2 font-mono text-neutral-800 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
                >
                  {link.name}
                </a>
              </div>
            ))}

            
          </div>
          <div className="flex flex-row">
            <button onClick={() => setOpen(!open)} className="sm:hidden dark:text-neutral-200 text-neutral-800 mr-2">
            <Menu />
          </button>
          <Darkmode />
          </div>
          

        </motion.nav>
        {
          open && (
            <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-20 right-3 sm:hidden  w-full max-w-[130px] rounded-md flex flex-col items-start
     justify-between
    font-mono
    border-b border-neutral-500/40 dark:border-neutral-600
    /* Blur fix */
    bg-black/10 dark:bg-white/10 backdrop-blur-lg shadow-md px-4 py-2 z-150">
              <ul>
                {links.map((link) => (
                  <li className="dark:text-neutral-200 text-neutral-800" key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
              
            </motion.div>
          )
        }
      </div>
    </>
  );
};

export default Navbar;
