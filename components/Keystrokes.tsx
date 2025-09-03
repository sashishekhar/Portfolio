'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTheme } from "next-themes";
import { TechStackCarousel } from "./TechStackCarousel"; // ✅ direct import
import Title from './Title';
import Image from "next/image";

type TechItem = {
  name: string;
  icon: React.ReactNode;
};

const DominoKeys = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // ✅ Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const techStack: TechItem[] = [
    { name: 'JavaScript', icon: <Image src="/icons/js.png" alt="JavaScript" width={48} height={48} /> },
    { name: 'TypeScript', icon: <Image src="/icons/typescript.png" alt="TypeScript" width={48} height={48} /> },
    { name: 'Vector', icon: <Image src="/icons/Vector.png" alt="Vector" width={48} height={48} /> },
    { name: 'Motion', icon: <Image src="/icons/motion.png" alt="Motion" width={48} height={48} /> },
    { name: 'Bootstrap 5', icon: <Image src="/icons/bootstrap5.png" alt="Bootstrap" width={48} height={48} /> },
    { name: 'Figma', icon: <Image src="/icons/figma.png" alt="Figma" width={48} height={48} /> },
    { name: 'Frame', icon: <Image src="/icons/Frame.png" alt="Frame" width={48} height={48} /> },
    { name: 'Framer', icon: <Image src="/icons/framer.png" alt="Framer" width={48} height={48} /> },
    { name: 'Git', icon: <Image src="/icons/git.png" alt="Git" width={48} height={48} /> },
    { name: 'npm', icon: <Image src="/icons/npm.png" alt="npm" width={48} height={48} /> },
    { name: 'GitHub', icon: <Image src="/icons/github.png" alt="GitHub" width={48} height={48} /> },
    { name: 'MongoDB', icon: <Image src="/icons/mongoDB.png" alt="MongoDB" width={48} height={48} /> },
    { name: 'Next.js', icon: <Image src="/icons/nextjs2.png" alt="Next.js" width={48} height={48} /> },
    { name: 'Node.js', icon: <Image src="/icons/nodejs.png" alt="Node.js" width={48} height={48} /> },
    { name: 'PostgreSQL', icon: <Image src="/icons/postgresql.png" alt="PostgreSQL" width={48} height={48} /> },
    { name: 'React', icon: <Image src="/icons/react.png" alt="React" width={48} height={48} /> },
    { name: 'Supabase', icon: <Image src="/icons/supabase.png" alt="Supabase" width={48} height={48} /> },
    { name: 'Vercel', icon: <Image src="/icons/Vercel.png" alt="Vercel" width={48} height={48} /> },
  ];

  // ✅ MOBILE COMPONENT
  const MobileTechItem = ({ tech, index }: { tech: TechItem; index: number }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(itemRef, {
      margin: "-50% 0px -50% 0px",
    });

    return (
      <motion.div
        ref={itemRef}
        key={tech.name}
        layoutId={`domino-mobile-${index}`}
        className={`relative flex justify-center items-center overflow-hidden rounded-full ${
          isInView ? "keystroke-inset-shadow" : ""
        } cursor-pointer dark:bg-neutral-800 bg-neutral-300 p-[2px]`}
        initial={{ width: "1rem", height: "2rem" }}
        animate={{
          width: isInView ? "7rem" : "1rem",
          height: isInView ? "6rem" : "2rem",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.8,
        }}
      >
        {isInView && (
          <motion.div
            className="absolute inset-[-1000%]"
            style={{
              backgroundImage:
                "conic-gradient(from 180deg at 50% 50%, #a855f7 0%, #3b82f6 10%, transparent 25%)",
              filter: "blur(10px)",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        )}

        <div className="relative z-100 flex h-full w-full items-center justify-center rounded-full dark:bg-neutral-800 bg-neutral-200">
          <AnimatePresence>
            {isInView && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col relative items-center text-center"
              >
                {/* Blurred background image */}
                <div className="absolute z-0 inset-0 blur-md opacity-50">
                  {tech.icon}
                </div>
                {tech.icon}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  if (isSmallScreen) {
    // ✅ MOBILE LAYOUT
    return (
      <div
        ref={containerRef}
        className="flex flex-col gap-1 px-4 w-full overflow-x-auto relative no-scrollbar h-auto"
      >
        <Title
          defaultText="keystrokes !!"
          hoverText="the steps of a great site !!"
          className="text-[16px] sm:text-[22px] text-neutral-900 font-mono border-0 sm:ml-2 ml-1 mb-8 w-fit px-2"
        />

        <motion.div
          initial={{
            boxShadow:
              currentTheme === "dark"
                ? "0 8px 30px rgb(255,255,255,0.1)"
                : "0 8px 30px rgb(0,0,0,0.1)",
          }}
          whileHover={{
            boxShadow:
              currentTheme === "dark"
                ? "0 8px 30px rgb(255,255,255,0.2)"
                : "0 8px 30px rgb(0,0,0,0.2)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute z-0 border-1 mx-auto border-neutral-300 dark:border-neutral-600 bg-transparent rounded-md inset-x-4 top-16 bottom-8 w-[300px] h-auto"
        />

        <div className="flex flex-col items-center justify-center gap-1 relative z-10 pt-10 pb-10 h-[800px]">
          {techStack.map((tech, index) => (
            <MobileTechItem key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    );
  }

  // ✅ DESKTOP LAYOUT -> TechStackCarousel
  return (
    <div className="px-4 w-full flex flex-col mb-30 mt-10 justify-center">
      <Title
        defaultText="keystrokes !!"
        hoverText="the steps of a great site !!"
        className="text-[16px] sm:text-[22px] text-neutral-700 font-medium dark:text-neutral-200 font-mono border-0 sm:ml-2 ml-1 mb-8 w-fit px-2"
      />
      <div className="flex justify-center">
        <TechStackCarousel
          items={techStack}
          dotSize={10}
          activeSize={112}
          gap={24}
          className="rounded-xl border-t-1 border-neutral-400 dark:border-neutral-400 bg-neutral-300 dark:bg-neutral-800"
        />
      </div>
    </div>
  );
};

export default DominoKeys;
