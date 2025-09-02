'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTheme } from "next-themes";
import { TechStackCarousel } from "./TechStackCarousel"; // ✅ direct import

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

  const techStack = [
    { name: 'JavaScript', icon: <img src="/icons/js.png" alt="JavaScript" className="h-12 w-12" /> },
    { name: 'TypeScript', icon: <img src="/icons/typescript.png" alt="TypeScript" className="h-12 w-12" /> },
    { name: 'Vector', icon: <img src="/icons/Vector.png" alt="Vector" className="h-12 w-12" /> },
    { name: 'Motion', icon: <img src="/icons/motion.png" alt="Motion" className="h-12 w-12" /> },
    { name: 'Bootstrap 5', icon: <img src="/icons/bootstrap5.png" alt="Bootstrap" className="h-12 w-12" /> },
    { name: 'Figma', icon: <img src="/icons/figma.png" alt="Figma" className="h-12 w-12" /> },
    { name: 'Frame', icon: <img src="/icons/Frame.png" alt="Frame" className="h-12 w-12" /> },
    { name: 'Framer', icon: <img src="/icons/framer.png" alt="Framer" className="h-12 w-12" /> },
    { name: 'Git', icon: <img src="/icons/git.png" alt="Git" className="h-12 w-12" /> },
    { name: 'npm', icon: <img src="/icons/npm.png" alt="npm" className="h-12 w-12" /> },
    { name: 'GitHub', icon: <img src="/icons/github.png" alt="GitHub" className="h-12 w-12" /> },
    { name: 'MongoDB', icon: <img src="/icons/mongoDB.png" alt="MongoDB" className="h-12 w-12" /> },
    { name: 'Next.js', icon: <img src="/icons/nextjs2.png" alt="Next.js" className="h-12 w-12" /> },
    { name: 'Node.js', icon: <img src="/icons/nodejs.png" alt="Node.js" className="h-12 w-12" /> },
    { name: 'PostgreSQL', icon: <img src="/icons/postgresql.png" alt="PostgreSQL" className="h-12 w-12" /> },
    { name: 'React', icon: <img src="/icons/react.png" alt="React" className="h-12 w-12" /> },
    { name: 'Supabase', icon: <img src="/icons/supabase.png" alt="Supabase" className="h-12 w-12" /> },
    { name: 'Vercel', icon: <img src="/icons/Vercel.png" alt="Vercel" className="h-12 w-12" /> },
  ];

  // ✅ MOBILE COMPONENT
  const MobileTechItem = ({ tech, index }: { tech: any; index: number }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(itemRef, {
      threshold: 0.5,
      margin: "-50% 0px -50% 0px",
    });

    return (
      <motion.div
        ref={itemRef}
        key={tech.name}
        layoutId={`domino-mobile-${index}`}
        className={`relative flex justify-center items-center overflow-hidden rounded-full ${isInView ? "keystroke-inset-shadow" : ""
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
                <img
                  src={tech.icon.props.src}
                  alt={tech.name}
                  className="h-12 absolute z-0 inset-0 blur-md opacity-50"
                />
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
        <div className="text-[16px] font-mono text-neutral-800 dark:text-neutral-200 ml-5 mb-5 bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">
          my keystrokes
        </div>

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
    <div
      className="px-4 w-full flex flex-col mb-30 mt-10 justify-center"
      
    >
      <div className="text-[16px] font-mono text-neutral-800 dark:text-neutral-200 mt-10 ml-5 mb-10 bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">
        my keystrokes
      </div>
      <div className='flex justify-center'>
        <TechStackCarousel
          items={techStack}
          dotSize={10}
          activeSize={112}
          gap={24}
          className="rounded-xl border-t-1 border-neutral-400 dark:border-neutral-400 bg-neutral-300  dark:bg-neutral-800"
        />
      </div>
    </div>
  );
};

export default DominoKeys;
